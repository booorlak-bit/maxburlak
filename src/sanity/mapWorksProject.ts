import type { WorksProject, WorkScreenshot } from "../content/worksPage";
import { urlForSrc } from "./image";
import type { CaseStudy } from "./types";

const DEFAULT_SCREENSHOT_ASPECT = "4096 / 2592";

function isPublishedCaseStudy(caseStudy: CaseStudy): boolean {
  return caseStudy.status !== "draft";
}

export function mapCaseStudyToWorksProject(caseStudy: CaseStudy): WorksProject | null {
  const slug = caseStudy.slug?.current?.trim();
  if (!slug || !isPublishedCaseStudy(caseStudy)) return null;

  const company = caseStudy.client?.trim() || caseStudy.title?.trim() || slug;
  const showcaseTitle = caseStudy.headline?.trim() || caseStudy.title?.trim() || company;
  const showcaseSummary = caseStudy.summary?.trim() || "";
  const title = caseStudy.pageTitle?.trim() || showcaseTitle;
  const description =
    caseStudy.description?.trim() || caseStudy.tradeoffs?.trim() || showcaseSummary;

  const screenshotSrc = urlForSrc(caseStudy.coverImage ?? caseStudy.heroImage, 1800);
  const screenshot: WorkScreenshot | undefined = screenshotSrc
    ? {
        src: screenshotSrc,
        alt: `${company} product screenshot`,
        aspectRatio: DEFAULT_SCREENSHOT_ASPECT,
      }
    : undefined;

  const metrics =
    caseStudy.metrics
      ?.map((metric) => ({
        label: metric.label?.trim() ?? "",
        value: metric.value?.trim() ?? "",
      }))
      .filter((metric) => metric.label && metric.value) ?? [];

  return {
    id: slug,
    company,
    title,
    showcaseTitle,
    showcaseSummary,
    role: caseStudy.role?.trim() || "",
    years: caseStudy.years?.trim() || "",
    tags: caseStudy.tags?.filter(Boolean) ?? [],
    categories: caseStudy.engagementCategories?.filter(Boolean),
    description,
    metrics,
    caseStudySlug: slug,
    logoKey: caseStudy.logoKey,
    screenshot,
  };
}

export function mapCaseStudiesToWorksProjects(caseStudies: CaseStudy[] | undefined): WorksProject[] {
  if (!caseStudies?.length) return [];
  return caseStudies
    .map(mapCaseStudyToWorksProject)
    .filter((project): project is WorksProject => project !== null);
}
