import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "./site";

export type PageMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  robots: "index, follow" | "noindex, follow";
};

const PLACEHOLDER_DESCRIPTION =
  "This section is coming soon. Return to the homepage to explore Max Burlak’s product design work, approach, and contact details.";

function placeholderMeta(section: string): PageMeta {
  return {
    title: `${section} — ${SITE_NAME}`,
    description: PLACEHOLDER_DESCRIPTION,
    canonicalPath: "/",
    robots: "noindex, follow",
  };
}

export function getPageMeta(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, "") || "/";

  switch (path) {
    case "/":
      return {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        canonicalPath: "/",
        robots: "index, follow",
      };
    case "/works":
      return placeholderMeta("Selected works");
    case "/approach":
      return {
        title: `Approach — AI-native product design — ${SITE_NAME}`,
        description:
          "How Max Burlak works: Multiplier and Loop models for AI-native design — from ambiguity to shipped impact in days, not weeks. Engagement models for founders and product teams.",
        canonicalPath: "/approach",
        robots: "index, follow",
      };
    case "/ventures":
      return placeholderMeta("Ventures");
    case "/feed":
      return placeholderMeta("Feed");
    case "/about":
      return placeholderMeta("About");
    case "/playground":
      return {
        title: `Playground — ${SITE_NAME}`,
        description:
          "Experimental concepts and unreleased design explorations by Max Burlak. Not indexed for search.",
        canonicalPath: "/playground",
        robots: "noindex, follow",
      };
    default:
      return {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        canonicalPath: "/",
        robots: "noindex, follow",
      };
  }
}

export function canonicalUrl(path: string): string {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
