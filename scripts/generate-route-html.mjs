/**
 * Post-build: prerender every route, then write the files search engines and
 * LLM crawlers read — sitemap.xml, llms.txt, llms-full.txt, a .md twin of each
 * page, JSON-LD per page — and ping IndexNow (Bing, Yandex, ...) on production.
 *
 * Data comes from the build-time CMS snapshot (scripts/fetch-cms.mjs), the same
 * data the app renders, so HTML, markdown and structured data never disagree.
 */
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, OG_IMAGE_URL, SITE_NAME, SITE_URL } from "../src/seo/site.ts";
import { FAQ_DESCRIPTION, FAQ_TITLE } from "../src/content/faq.ts";
import {
  aboutMarkdown,
  approachMarkdown,
  caseStudyMarkdown,
  faqMarkdown,
  feedPostMarkdown,
  homeMarkdown,
  llmsTxt,
  mdPath,
  url as canonicalFor,
  venturesMarkdown,
  worksMarkdown,
} from "./seo/markdown.mjs";
import { caseStudyJsonLd, faqJsonLd, feedPostJsonLd, homeJsonLd, sectionJsonLd } from "./seo/jsonld.mjs";

const DIST_DIR = "dist";
const SSR_ENTRY = "dist-ssr/entry-server.js";
const SNAPSHOT_FILE = "src/generated/cms-snapshot.json";
const PROJECT_ID = process.env.SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || "1r0eu2jx";
const DATASET = process.env.SANITY_DATASET || process.env.VITE_SANITY_DATASET || "production";
/** Public by design: IndexNow verifies ownership via /<key>.txt in public/. */
const INDEXNOW_KEY = "2c70370b3b89df60037d5d29ce20bb5f";

/** Static (non-CMS) routes. `index: false` keeps a route out of the sitemap. */
const staticRoutes = [
  {
    route: "/",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    changefreq: "weekly",
    priority: "1.0",
    home: true,
  },
  {
    route: "/works",
    title: "Selected works — B2B SaaS case studies — Max Burlak",
    description:
      "Selected product design projects from Default.com, Apollo.io, P2P.org, and earlier engagements — with measurable outcomes in conversion, velocity, and revenue.",
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    route: "/approach",
    title: "Approach — AI-native product design — Max Burlak",
    description:
      "How Max Burlak works: Multiplier and Loop models for AI-native design — from ambiguity to shipped impact in days, not weeks. Engagement models for founders and product teams.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    route: "/ventures",
    title: "Ventures — side projects & products — Max Burlak",
    description:
      "Side projects and products Max Burlak is building — The First, Pinnboards, Fliq, mndfrnd, Organicaaa, and why he builds outside client work.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    route: "/feed",
    title: "Feed — Max Burlak",
    description:
      "Notes on AI-native product design, process, and what’s changing in design work — from Max Burlak.",
    changefreq: "weekly",
    priority: "0.8",
  },
  {
    route: "/about",
    title: "About — Max Burlak",
    description:
      "Max Burlak — product builder and design engineer in Barcelona. 13+ years in B2B SaaS, 3× founding designer, ventures, consulting, and how he works.",
    changefreq: "monthly",
    priority: "0.8",
  },
  {
    route: "/faq",
    title: FAQ_TITLE,
    description: FAQ_DESCRIPTION,
    changefreq: "monthly",
    priority: "0.9",
  },
  {
    route: "/privacy",
    title: "Privacy policy — Max Burlak",
    description:
      "What data maxburlak.com collects, why, which services process it, and how to exercise your rights.",
    changefreq: "yearly",
    priority: "0.2",
  },
  {
    route: "/playground",
    title: "Playground — Max Burlak",
    description:
      "Experimental concepts and unreleased design explorations by Max Burlak. Not indexed for search.",
    index: false,
    noindex: true,
  },
];

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Sanity image reference -> CDN URL (image-<id>-<w>x<h>-<ext>). */
function sanityImageUrl(image) {
  const ref = image?.asset?._ref;
  const match = ref?.match(/^image-([a-f0-9]+)-(\d+x\d+)-(\w+)$/);
  return match ? `https://cdn.sanity.io/images/${PROJECT_ID}/${DATASET}/${match[1]}-${match[2]}.${match[3]}` : null;
}

async function loadSnapshot() {
  const snapshot = JSON.parse(await readFile(SNAPSHOT_FILE, "utf8"));
  const caseStudies = (snapshot.caseStudies ?? [])
    .filter((cs) => cs?.slug?.current && cs.showCaseStudyPage !== false)
    .map((cs) => ({ ...cs, slug: cs.slug.current }));
  const feedPosts = (snapshot.feedPosts ?? [])
    .filter((post) => post?.slug?.current && post.status === "published")
    .map((post) => ({ ...post, slug: post.slug.current }))
    .sort((a, b) => String(b.publishedAt ?? "").localeCompare(String(a.publishedAt ?? "")));
  return { caseStudies, feedPosts };
}

function firstFeedImage(post) {
  for (const block of post.content ?? []) {
    if (block._type === "feedImageBlock") return sanityImageUrl(block.image);
    if (block._type === "feedGalleryBlock") return sanityImageUrl(block.images?.[0]?.image);
  }
  return null;
}

function replaceTag(html, pattern, replacement, { required = true } = {}) {
  if (!pattern.test(html)) {
    if (required) throw new Error(`Could not find tag matching ${pattern}`);
    return html;
  }
  return html.replace(pattern, replacement);
}

function applyMeta(html, page) {
  const canonical = canonicalFor(page.route);
  const title = escapeHtml(page.rawTitle);
  const description = escapeHtml(page.rawDescription);
  const ogImage = page.ogImage ? escapeHtml(page.ogImage) : OG_IMAGE_URL;
  const robots = page.noindex
    ? "noindex, follow"
    : "index, follow, max-image-preview:large";

  let next = html;
  next = replaceTag(next, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  next = replaceTag(next, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
  next = replaceTag(next, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
  next = replaceTag(next, /<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${robots}" />`);
  next = replaceTag(next, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  next = replaceTag(next, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  next = replaceTag(next, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  next = replaceTag(next, /<meta property="og:image" content="[^"]*" \/>/, `<meta property="og:image" content="${ogImage}" />`);
  next = replaceTag(next, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  next = replaceTag(next, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);
  next = replaceTag(next, /<meta name="twitter:image" content="[^"]*" \/>/, `<meta name="twitter:image" content="${ogImage}" />`);

  if (page.type === "feed") {
    next = replaceTag(next, /<meta property="og:type" content="[^"]*" \/>/, `<meta property="og:type" content="article" />`, { required: false });
  }

  if (page.jsonLd) {
    next = replaceTag(
      next,
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n${page.jsonLd}\n      </script>`,
      { required: false },
    );
  }

  if (page.markdownPath) {
    next = next.replace(
      "</head>",
      `  <link rel="alternate" type="text/markdown" href="${SITE_URL}${page.markdownPath}" title="Markdown version" />\n    </head>`,
    );
  }

  if (page.markup) {
    next = replaceTag(
      next,
      /<div id="root"><\/div>/,
      `<div id="root" data-prerender-theme="light">${page.markup}</div>`,
    );
  }

  return next;
}

async function writeRouteHtml(template, page) {
  const html = applyMeta(template, page);
  if (page.route === "/") {
    await writeFile(path.join(DIST_DIR, "index.html"), html);
    return;
  }
  const routeDir = path.join(DIST_DIR, ...page.route.split("/").filter(Boolean));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
}

function buildSitemap(pages) {
  const urls = pages
    .filter((page) => page.index !== false)
    .map((page) => {
      const lastmod = page.updated ? new Date(page.updated).toISOString().slice(0, 10) : null;
      return [
        "  <url>",
        `    <loc>${canonicalFor(page.route)}</loc>`,
        lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
        page.changefreq ? `    <changefreq>${page.changefreq}</changefreq>` : null,
        page.priority ? `    <priority>${page.priority}</priority>` : null,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

async function pingIndexNow(urls) {
  if (process.env.VERCEL_ENV !== "production") return;
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: new URL(SITE_URL).host,
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
      signal: AbortSignal.timeout(8000),
    });
    console.log(`[seo] IndexNow: ${res.status} for ${urls.length} URL(s).`);
  } catch (error) {
    console.warn(`[seo] IndexNow ping failed (non-fatal): ${error.message}`);
  }
}

async function writeText(relativePath, content) {
  const file = path.join(DIST_DIR, ...relativePath.split("/").filter(Boolean));
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, content.endsWith("\n") ? content : `${content}\n`);
}

async function main() {
  const template = await readFile(path.join(DIST_DIR, "index.html"), "utf8");
  const { caseStudies, feedPosts } = await loadSnapshot();

  const staticMarkdown = {
    "/": () => homeMarkdown(caseStudies),
    "/works": () => worksMarkdown(caseStudies),
    "/faq": faqMarkdown,
    "/about": aboutMarkdown,
    "/approach": approachMarkdown,
    "/ventures": venturesMarkdown,
  };

  const pages = [];

  for (const item of staticRoutes) {
    const page = {
      route: item.route,
      rawTitle: item.title,
      rawDescription: item.description,
      changefreq: item.changefreq,
      priority: item.priority,
      index: item.index,
      noindex: item.noindex,
      crumb: item.title.split(" — ")[0],
    };
    if (item.home) page.jsonLd = homeJsonLd();
    else if (item.route === "/faq") page.jsonLd = faqJsonLd(page);
    else page.jsonLd = sectionJsonLd(page, { profile: item.route === "/about" });
    const markdown = staticMarkdown[item.route];
    if (markdown) {
      page.markdownPath = mdPath(item.route);
      page.markdown = markdown();
    }
    pages.push(page);
  }

  for (const cs of caseStudies) {
    const route = `/works/${cs.slug}`;
    const page = {
      route,
      rawTitle: `${cs.client}: ${cs.pageTitle || cs.headline || "Case study"} — ${SITE_NAME}`,
      rawDescription: cs.lede || cs.summary || DEFAULT_DESCRIPTION,
      ogImage: sanityImageUrl(cs.coverImage) || sanityImageUrl(cs.heroImage),
      updated: cs._updatedAt || null,
      changefreq: "monthly",
      priority: "0.8",
      markdownPath: mdPath(route),
      markdown: caseStudyMarkdown(cs),
    };
    page.jsonLd = caseStudyJsonLd(page, cs);
    pages.push(page);
  }

  for (const post of feedPosts) {
    const route = `/feed/${post.slug}`;
    const page = {
      route,
      type: "feed",
      rawTitle: `${post.seo?.title || post.title || "Feed post"} — ${SITE_NAME}`,
      rawDescription: post.seo?.description || "Notes, process, and updates from Max Burlak.",
      ogImage: sanityImageUrl(post.seo?.ogImage) || firstFeedImage(post),
      published: post.publishedAt || null,
      updated: post._updatedAt || post.publishedAt || null,
      changefreq: "monthly",
      priority: "0.7",
      markdownPath: mdPath(route),
      markdown: feedPostMarkdown(post),
    };
    page.jsonLd = feedPostJsonLd(page);
    pages.push(page);
  }

  // Real prerender: render each route with the SSR build of the app.
  const { render } = await import(pathToFileURL(path.resolve(SSR_ENTRY)).href);
  for (const page of pages) {
    page.markup = await render(page.route);
  }

  await Promise.all(pages.map((page) => writeRouteHtml(template, page)));

  // Markdown twins + llms.txt / llms-full.txt for LLM crawlers.
  const withMarkdown = pages.filter((page) => page.markdown);
  await Promise.all(withMarkdown.map((page) => writeText(page.markdownPath, page.markdown)));
  const updated = new Date().toISOString().slice(0, 10);
  await writeText("llms.txt", llmsTxt({ caseStudies, feedPosts, updated }));
  await writeText(
    "llms-full.txt",
    [
      `# ${SITE_NAME} — full site content`,
      `Generated ${updated} from ${SITE_URL}/. Index: ${SITE_URL}/llms.txt`,
      ...withMarkdown.map((page) => page.markdown),
    ].join("\n\n---\n\n"),
  );

  // Native 404 page (Vercel serves this with a 404 status for unmatched paths).
  const notFound = applyMeta(template, {
    route: "/404",
    rawTitle: `Page not found — ${SITE_NAME}`,
    rawDescription: "This page could not be found.",
    noindex: true,
    markup: await render("/404"),
  }).replace(/<link rel="canonical" href="[^"]*" \/>\s*/, "");
  await writeFile(path.join(DIST_DIR, "404.html"), notFound);

  await writeFile(path.join(DIST_DIR, "sitemap.xml"), buildSitemap(pages));

  const indexable = pages.filter((p) => p.index !== false);
  console.log(
    `[seo] Prerendered ${pages.length} route(s) (${indexable.length} in sitemap) + 404.html, ${withMarkdown.length} markdown pages, llms.txt, llms-full.txt. CMS: ${caseStudies.length} case studies, ${feedPosts.length} feed posts.`,
  );
  await rm("dist-ssr", { recursive: true, force: true });

  await pingIndexNow(indexable.map((p) => canonicalFor(p.route)));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
