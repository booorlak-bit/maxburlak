import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SITE_URL = "https://maxburlak.com";
const DIST_DIR = "dist";
const SITEMAP_PATH = "public/sitemap.xml";

const fallbackTitle = "Max Burlak - AI-Driven Product Designer for B2B SaaS Founders";
const fallbackDescription =
  "Founding product designer helping B2B SaaS founders ship faster: activation, conversion, design systems, and AI-native workflows.";

const routeMeta = {
  "/": {
    title: fallbackTitle,
    description: fallbackDescription,
  },
  "/works": {
    title: "Selected works - B2B SaaS case studies - Max Burlak",
    description:
      "Selected product design projects from Default.com, Apollo.io, P2P.org, and earlier engagements with measurable outcomes.",
  },
  "/works/default": {
    title: "Revenue operations platform for GTM teams - Max Burlak",
    description:
      "Default.com case study: design system foundations, enterprise workflows, and UX improvements for revenue teams.",
  },
  "/works/apollo": {
    title: "Design system unification - Max Burlak",
    description:
      "Apollo.io case study: unifying product design patterns and improving delivery velocity across B2B SaaS workflows.",
  },
  "/works/p2p": {
    title: "Crypto banking launch - Max Burlak",
    description:
      "P2P.org case study: product design for crypto banking, onboarding, and operational product workflows.",
  },
  "/works/kinescope": {
    title: "Video hosting platform redesign - Max Burlak",
    description:
      "Kinescope case study: product redesign work for video hosting, media workflows, and scalable user experience.",
  },
  "/works/round-2": {
    title: "Sneaker marketplace mobile app - Max Burlak",
    description:
      "Round 2 case study: mobile marketplace design for sneaker discovery, buying, and selling flows.",
  },
  "/works/mid-tv": {
    title: "Streaming and media product design - Max Burlak",
    description:
      "MID TV case study: product design for streaming, media discovery, and content platform experience.",
  },
  "/works/rentor": {
    title: "Rental product design - Max Burlak",
    description:
      "Rentor case study: product design for rental marketplace flows, trust, and conversion.",
  },
  "/approach": {
    title: "Approach - AI-native product design - Max Burlak",
    description:
      "How Max Burlak works with founders and product teams: fast product design, systems thinking, and AI-native workflows.",
  },
  "/ventures": {
    title: "Ventures - side projects and products - Max Burlak",
    description:
      "Side projects and products Max Burlak is building, including design tools, social products, and writing.",
  },
  "/about": {
    title: "About - Max Burlak",
    description:
      "Max Burlak is a product design lead and builder in Barcelona with 14+ years in B2B SaaS and founding designer roles.",
  },
  "/feed": {
    title: "Feed - Max Burlak",
    description:
      "Notes on AI-native product design, process, and what is changing in design work from Max Burlak.",
  },
  "/feed/design-process-you-learned-is-dead": {
    title: "Design process you learned is dead - Max Burlak",
    description:
      "A note on how AI-native work changes product design process, speed, decision-making, and delivery.",
  },
  "/feed/chilling-in-big-apple": {
    title: "Chilling in Big Apple - Max Burlak",
    description:
      "A personal feed note from Max Burlak about travel, cities, and product design life.",
  },
  "/feed/10-books-product-designer-2026": {
    title: "10 books for product designers in 2026 - Max Burlak",
    description:
      "A reading list for product designers working with AI, strategy, systems, and better product decisions.",
  },
};

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getSitemapRoutes(sitemapXml) {
  return [...sitemapXml.matchAll(/<loc>(https:\/\/maxburlak\.com[^<]*)<\/loc>/g)]
    .map(([, url]) => {
      const parsed = new URL(url);
      return parsed.pathname.replace(/\/+$/, "") || "/";
    })
    .filter((route, index, routes) => routes.indexOf(route) === index);
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Could not find tag matching ${pattern}`);
  }
  return html.replace(pattern, replacement);
}

function withRouteMeta(html, route) {
  const meta = routeMeta[route] ?? {
    title: `${route.split("/").filter(Boolean).join(" / ")} - Max Burlak`,
    description: fallbackDescription,
  };
  const canonical = route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);

  let next = html;
  next = replaceTag(next, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  next = replaceTag(next, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
  next = replaceTag(next, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
  next = replaceTag(next, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  next = replaceTag(next, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  next = replaceTag(next, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  next = replaceTag(next, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  next = replaceTag(next, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);
  return next;
}

async function main() {
  const [indexHtml, sitemapXml] = await Promise.all([
    readFile(path.join(DIST_DIR, "index.html"), "utf8"),
    readFile(SITEMAP_PATH, "utf8"),
  ]);

  const routes = getSitemapRoutes(sitemapXml);

  await Promise.all(
    routes.map(async (route) => {
      const html = withRouteMeta(indexHtml, route);
      if (route === "/") {
        await writeFile(path.join(DIST_DIR, "index.html"), html);
        return;
      }

      const routeDir = path.join(DIST_DIR, ...route.split("/").filter(Boolean));
      await mkdir(routeDir, { recursive: true });
      await writeFile(path.join(routeDir, "index.html"), html);
    }),
  );

  console.log(`Generated route HTML for ${routes.length} sitemap route(s).`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
