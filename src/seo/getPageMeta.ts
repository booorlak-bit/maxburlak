import {
  DEFAULT_DESCRIPTION,
  DEFAULT_TITLE,
  SITE_NAME,
  SITE_URL,
} from "./site";
import type { CaseStudy } from "../sanity/types";
import { getCaseStudyPageContent } from "../content/caseStudyContent";
import { ALL_WORKS_PROJECTS } from "../content/worksPage";
import { parseWorksCaseStudySlug } from "../nav/routes";
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

export function getPageMeta(pathname: string, worksMeta?: WorksMetaSource): PageMeta {
  const path = pathname.replace(/\/+$/, "") || "/";
  const caseStudySlug = parseWorksCaseStudySlug(path);
  const projects = worksMeta?.allProjects ?? ALL_WORKS_PROJECTS;

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
