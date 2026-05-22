import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "./site";
import type { CaseStudy } from "../sanity/types";
import { getCaseStudyPageContent } from "../content/caseStudyContent";
import { ALL_WORKS_PROJECTS } from "../content/worksPage";
import { parseFeedPostSlug, parseWorksCaseStudySlug } from "../nav/routes";
import { findFeedPostBySlug, getFeedPostSlug } from "../sanity/feedUtils";
import type { FeedPost } from "../sanity/types";
import type { WorksProject } from "../content/worksPage";
import { getCaseStudyDocumentBySlug } from "../sanity/useWorksContent";

export type PageMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  robots: "index, follow" | "noindex, follow";
};

export type WorksMetaSource = {
  hero?: { label?: string; title?: string; subtitle?: string };
  allProjects?: WorksProject[];
  caseStudies?: CaseStudy[];
};

export type FeedMetaSource = {
  feedPosts?: FeedPost[];
};

function findProjectBySlug(projects: WorksProject[] | undefined, slug: string): WorksProject | undefined {
  return projects?.find((project) => project.caseStudySlug === slug);
}

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

export function getPageMeta(
  pathname: string,
  worksMeta?: WorksMetaSource,
  feedMeta?: FeedMetaSource,
): PageMeta {
  const path = pathname.replace(/\/+$/, "") || "/";
  const caseStudySlug = parseWorksCaseStudySlug(path);
  const feedPostSlug = parseFeedPostSlug(path);
  const projects = worksMeta?.allProjects ?? ALL_WORKS_PROJECTS;

  if (feedPostSlug) {
    const post = findFeedPostBySlug(feedMeta?.feedPosts ?? [], feedPostSlug);
    if (post) {
      const slug = getFeedPostSlug(post);
      return {
        title: `${post.seo?.title || post.title || "Feed post"} — ${SITE_NAME}`,
        description:
          post.seo?.description?.trim() ||
          "Notes, process, and updates from Max Burlak.",
        canonicalPath: slug ? `/feed/${slug}` : "/feed",
        robots: post.status === "published" ? "index, follow" : "noindex, follow",
      };
    }
  }

  if (caseStudySlug) {
    const project = findProjectBySlug(projects, caseStudySlug);
    if (project) {
      const cmsCaseStudy = getCaseStudyDocumentBySlug(worksMeta?.caseStudies ?? [], caseStudySlug);
      const caseStudy = getCaseStudyPageContent(project, cmsCaseStudy);
      return {
        title: `${caseStudy.pageTitle} — ${SITE_NAME}`,
        description: caseStudy.lede,
        canonicalPath: path,
        robots: "index, follow",
      };
    }
  }

  switch (path) {
    case "/":
      return {
        title: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        canonicalPath: "/",
        robots: "index, follow",
      };
    case "/works":
      return {
        title: `Selected works — B2B SaaS case studies — ${SITE_NAME}`,
        description:
          worksMeta?.hero?.subtitle?.trim() ||
          "Selected product design projects from Default.com, Apollo.io, P2P.org, and earlier engagements — with measurable outcomes in conversion, velocity, and revenue.",
        canonicalPath: "/works",
        robots: "index, follow",
      };
    case "/approach":
      return {
        title: `Approach — AI-native product design — ${SITE_NAME}`,
        description:
          "How Max Burlak works: Multiplier and Loop models for AI-native design — from ambiguity to shipped impact in days, not weeks. Engagement models for founders and product teams.",
        canonicalPath: "/approach",
        robots: "index, follow",
      };
    case "/ventures":
      return {
        title: `Ventures — side projects & products — ${SITE_NAME}`,
        description:
          "Side projects and products Max Burlak is building — The First, Pinnboards, Fliq, mndfrnd, Organicaaa, and why he builds outside client work.",
        canonicalPath: "/ventures",
        robots: "index, follow",
      };
    case "/feed":
      return {
        title: `Feed — ${SITE_NAME}`,
        description:
          "Notes on AI-native product design, process, and what’s changing in design work — from Max Burlak.",
        canonicalPath: "/feed",
        robots: "index, follow",
      };
    case "/about":
      return {
        title: `About — ${SITE_NAME}`,
        description:
          "Max Burlak — product design lead and builder in Barcelona. 14+ years in B2B SaaS, 3x founding designer, ventures, consulting, and how he works.",
        canonicalPath: "/about",
        robots: "index, follow",
      };
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
