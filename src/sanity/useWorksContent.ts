import { useMemo } from "react";
import {
  ALL_WORKS_PROJECTS,
  FEATURED_PROJECTS,
  MORE_PROJECTS,
  WORKS_HERO,
  WORKS_LOAD_MORE_BATCH,
  type WorksProject,
} from "../content/worksPage";
import { useCms } from "./CmsProvider";
import { mapCaseStudiesToWorksProjects, mapCaseStudyToWorksProject } from "./mapWorksProject";
import type { CaseStudy, WorksPageCms } from "./types";

export type WorksContent = {
  hero: {
    label: string;
    title: string;
    subtitle: string;
  };
  featuredProjects: WorksProject[];
  moreProjects: WorksProject[];
  loadMoreBatch: number;
  moreWorksTitle: string;
  allProjects: WorksProject[];
  fromCms: boolean;
};

function resolveWorksContent(worksPage: WorksPageCms | null): WorksContent {
  const featuredProjects = mapCaseStudiesToWorksProjects(worksPage?.featuredProjects);
  const moreProjects = mapCaseStudiesToWorksProjects(worksPage?.moreProjects);
  const hasCmsProjects = featuredProjects.length > 0 || moreProjects.length > 0;

  if (!worksPage) {
    return {
      hero: WORKS_HERO,
      featuredProjects: FEATURED_PROJECTS,
      moreProjects: MORE_PROJECTS,
      loadMoreBatch: WORKS_LOAD_MORE_BATCH,
      moreWorksTitle: "More works",
      allProjects: ALL_WORKS_PROJECTS,
      fromCms: false,
    };
  }

  const allProjects = hasCmsProjects ? [...featuredProjects, ...moreProjects] : ALL_WORKS_PROJECTS;

  return {
    hero: {
      label: worksPage.heroLabel?.trim() || WORKS_HERO.label,
      title: worksPage.heroTitle?.trim() || WORKS_HERO.title,
      subtitle: worksPage.heroSubtitle?.trim() || WORKS_HERO.subtitle,
    },
    featuredProjects: hasCmsProjects ? featuredProjects : FEATURED_PROJECTS,
    moreProjects: hasCmsProjects ? moreProjects : MORE_PROJECTS,
    loadMoreBatch: worksPage.loadMoreBatch ?? WORKS_LOAD_MORE_BATCH,
    moreWorksTitle: worksPage.moreWorksTitle?.trim() || "More works",
    allProjects,
    fromCms: hasCmsProjects,
  };
}

export function useWorksContent(): WorksContent {
  const { worksPage } = useCms();
  return useMemo(() => resolveWorksContent(worksPage), [worksPage]);
}

export function getProjectBySlugFromContent(content: WorksContent, slug: string): WorksProject | undefined {
  return content.allProjects.find((project) => project.caseStudySlug === slug);
}

export function getCaseStudyDocumentBySlug(caseStudies: CaseStudy[], slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug?.current?.trim() === slug);
}

export function resolveProjectBySlug(
  worksContent: WorksContent,
  caseStudies: CaseStudy[],
  slug: string,
): { project: WorksProject | undefined; caseStudy: CaseStudy | undefined } {
  const listedProject = getProjectBySlugFromContent(worksContent, slug);
  const caseStudy = getCaseStudyDocumentBySlug(caseStudies, slug);

  const cmsProject = caseStudy ? mapCaseStudyToWorksProject(caseStudy) : null;

  return {
    project: listedProject ?? cmsProject ?? undefined,
    caseStudy: caseStudy ?? undefined,
  };
}

export function resolveWorksContentFromCms(worksPage: WorksPageCms | null): WorksContent {
  return resolveWorksContent(worksPage);
}
