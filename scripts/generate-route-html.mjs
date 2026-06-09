import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://maxburlak.com";
const SITE_NAME = "Max Burlak";
const DIST_DIR = "dist";

const PROJECT_ID = process.env.VITE_SANITY_PROJECT_ID || "1r0eu2jx";
const DATASET = process.env.VITE_SANITY_DATASET || "production";
const API_VERSION = process.env.VITE_SANITY_API_VERSION || "2024-01-01";
const READ_TOKEN = process.env.VITE_SANITY_API_READ_TOKEN || "";

const DEFAULT_TITLE = "Max Burlak — AI-Driven Product Designer for B2B SaaS Founders";
const DEFAULT_DESCRIPTION =
  "Founding product designer (3×) helping B2B SaaS founders ship faster: activation, conversion, design systems, and AI-native workflows. 13+ years; Default, Apollo.io, and startups from 0 to $2.5M+ ARR.";
const OG_IMAGE_URL = `${SITE_URL}/og-image.jpg`;

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
      "Max Burlak — product design lead and builder in Barcelona. 14+ years in B2B SaaS, 3x founding designer, ventures, consulting, and how he works.",
    changefreq: "monthly",
    priority: "0.8",
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

/** Used only when CMS is unreachable so the build never produces an empty sitemap. */
const fallbackCaseStudies = [
  { slug: "default", title: "Revenue operations platform for GTM teams" },
  { slug: "apollo", title: "Design system unification" },
  { slug: "p2p", title: "Crypto banking launch" },
  { slug: "kinescope", title: "Video hosting platform redesign" },
  { slug: "round-2", title: "Sneaker marketplace mobile app" },
  { slug: "mid-tv", title: "Streaming and media product design" },
  { slug: "rentor", title: "Rental product design" },
];
const fallbackFeedPosts = [
  { slug: "design-process-you-learned-is-dead", title: "Design process you learned is dead" },
  { slug: "chilling-in-big-apple", title: "Chilling in Big Apple" },
  { slug: "10-books-product-designer-2026", title: "10 books for product designers in 2026" },
];

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

async function sanityFetch(query) {
  if (!READ_TOKEN) return null;
  const url = `https://${PROJECT_ID}.api.sanity.io/v${API_VERSION}/data/query/${DATASET}?perspective=published&query=${encodeURIComponent(
    query,
  )}`;
  try {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${READ_TOKEN}` } });
    if (!res.ok) throw new Error(`Sanity ${res.status}`);
    const json = await res.json();
    return json.result ?? null;
  } catch (error) {
    console.warn(`[seo] Sanity fetch failed, using fallback: ${error.message}`);
    return null;
  }
}

async function loadCaseStudies() {
  const result = await sanityFetch(
    `*[_type=="caseStudy" && status!="draft" && showCaseStudyPage!=false]{
      "slug": slug.current,
      "title": coalesce(pageTitle, title),
      "description": coalesce(lede, summary),
      "ogImage": coalesce(coverImage.asset->url, heroImage.asset->url),
      "updated": _updatedAt
    } | order(sortOrder asc)`,
  );
  const rows = (result ?? []).filter((row) => row?.slug);
  if (rows.length > 0) return rows;
  return fallbackCaseStudies;
}

async function loadFeedPosts() {
  const result = await sanityFetch(
    `*[_type=="feedPost" && status=="published"]{
      "slug": slug.current,
      "title": coalesce(seo.title, title),
      "description": coalesce(seo.description, ""),
      "ogImage": coalesce(seo.ogImage.asset->url, content[_type=="feedImageBlock"][0].image.asset->url, content[_type=="feedGalleryBlock"][0].images[0].image.asset->url),
      "updated": coalesce(publishedAt, _updatedAt)
    } | order(coalesce(publishedAt, _updatedAt) desc)`,
  );
  const rows = (result ?? []).filter((row) => row?.slug);
  if (rows.length > 0) return rows;
  return fallbackFeedPosts;
}

function canonicalFor(route) {
  return route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
}

function breadcrumbJsonLd(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function caseStudyJsonLd(page) {
  const url = canonicalFor(page.route);
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CreativeWork",
          "@id": `${url}#case-study`,
          name: page.rawTitle,
          headline: page.rawTitle,
          description: page.rawDescription,
          url,
          ...(page.ogImage ? { image: page.ogImage } : {}),
          author: { "@type": "Person", name: SITE_NAME, url: `${SITE_URL}/` },
          creator: { "@type": "Person", name: SITE_NAME, url: `${SITE_URL}/` },
          isPartOf: { "@id": `${SITE_URL}/#website` },
        },
        breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Works", url: `${SITE_URL}/works` },
          { name: page.rawTitle, url },
        ]),
      ],
    },
    null,
    2,
  );
}

function feedPostJsonLd(page) {
  const url = canonicalFor(page.route);
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "@id": `${url}#post`,
          headline: page.rawTitle,
          description: page.rawDescription,
          url,
          ...(page.ogImage ? { image: page.ogImage } : {}),
          ...(page.updated ? { datePublished: page.updated, dateModified: page.updated } : {}),
          author: { "@type": "Person", name: SITE_NAME, url: `${SITE_URL}/` },
          publisher: { "@id": `${SITE_URL}/#person` },
          isPartOf: { "@id": `${SITE_URL}/#website` },
          mainEntityOfPage: url,
        },
        breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Feed", url: `${SITE_URL}/feed` },
          { name: page.rawTitle, url },
        ]),
      ],
    },
    null,
    2,
  );
}

function sectionJsonLd(page) {
  const url = canonicalFor(page.route);
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: page.rawTitle,
          description: page.rawDescription,
          isPartOf: { "@id": `${SITE_URL}/#website` },
          about: { "@id": `${SITE_URL}/#person` },
        },
        breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: page.rawTitle.replace(` — ${SITE_NAME}`, ""), url },
        ]),
      ],
    },
    null,
    2,
  );
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

async function main() {
  const template = await readFile(path.join(DIST_DIR, "index.html"), "utf8");

  const [caseStudies, feedPosts] = await Promise.all([loadCaseStudies(), loadFeedPosts()]);

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
      home: item.home,
    };
    // Keep the rich home graph as-is; add WebPage+breadcrumb schema to other sections.
    if (!item.home) page.jsonLd = sectionJsonLd(page);
    pages.push(page);
  }

  for (const cs of caseStudies) {
    const page = {
      route: `/works/${cs.slug}`,
      type: "caseStudy",
      rawTitle: `${cs.title || "Case study"} — ${SITE_NAME}`,
      rawDescription: cs.description || DEFAULT_DESCRIPTION,
      ogImage: cs.ogImage || null,
      updated: cs.updated || null,
      changefreq: "monthly",
      priority: "0.8",
    };
    page.jsonLd = caseStudyJsonLd(page);
    pages.push(page);
  }

  for (const post of feedPosts) {
    const page = {
      route: `/feed/${post.slug}`,
      type: "feed",
      rawTitle: `${post.title || "Feed post"} — ${SITE_NAME}`,
      rawDescription: post.description || "Notes, process, and updates from Max Burlak.",
      ogImage: post.ogImage || null,
      updated: post.updated || null,
      changefreq: "monthly",
      priority: "0.7",
    };
    page.jsonLd = feedPostJsonLd(page);
    pages.push(page);
  }

  await Promise.all(pages.map((page) => writeRouteHtml(template, page)));

  // noindex SPA fallback shell for any non-prerendered / unknown path.
  const appShell = applyMeta(template, {
    route: "/app",
    rawTitle: DEFAULT_TITLE,
    rawDescription: DEFAULT_DESCRIPTION,
    noindex: true,
  }).replace(
    /<link rel="canonical" href="[^"]*" \/>\s*/,
    "",
  );
  await writeFile(path.join(DIST_DIR, "app.html"), appShell);

  // Native 404 page (Vercel serves this with a 404 status for unmatched paths).
  const notFound = applyMeta(template, {
    route: "/404",
    rawTitle: `Page not found — ${SITE_NAME}`,
    rawDescription: "This page could not be found.",
    noindex: true,
  }).replace(/<link rel="canonical" href="[^"]*" \/>\s*/, "");
  await writeFile(path.join(DIST_DIR, "404.html"), notFound);

  await writeFile(path.join(DIST_DIR, "sitemap.xml"), buildSitemap(pages));

  const indexable = pages.filter((p) => p.index !== false).length;
  console.log(
    `[seo] Generated ${pages.length} route(s) (${indexable} in sitemap), app.html, 404.html. CMS: ${caseStudies.length} case studies, ${feedPosts.length} feed posts.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
