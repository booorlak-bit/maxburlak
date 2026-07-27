import { useEffect } from "react";
import { usePostHog } from "@posthog/react";
import { getCaseStudyPageContent } from "../../content/caseStudyContent";
import { getOtherWorksProjects, getProjectByCaseStudySlug } from "../../content/worksPage";
import { getSiteTheme, SITE_FONT } from "../../components/site/siteTheme";
import { isCaseStudyPageVisible } from "../../sanity/mapCaseStudyContent";
import { useCms } from "../../sanity/CmsProvider";
import { resolveProjectBySlug, useWorksContent } from "../../sanity/useWorksContent";
import { CaseStudyBackLink, CaseStudyOtherProjects, CaseStudyPageContentView } from "./CaseStudyPageContent";

type ProjectCaseStudyPageProps = {
  isDark: boolean;
  slug: string;
};

export function ProjectCaseStudyPage({ isDark, slug }: ProjectCaseStudyPageProps) {
  const posthog = usePostHog();
  const t = getSiteTheme(isDark);
  const worksContent = useWorksContent();
  const { caseStudies } = useCms();
  const { project: cmsResolvedProject, caseStudy } = resolveProjectBySlug(worksContent, caseStudies, slug);
  const project = cmsResolvedProject ?? getProjectByCaseStudySlug(slug);

  useEffect(() => {
    if (!project) return;
    posthog?.capture("case_study_viewed", { project_slug: slug });
  }, [slug]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!project || (caseStudy && !isCaseStudyPageVisible(caseStudy))) {
    return (
      <div
        data-route="works-project"
        className={`w-full shrink-0 rounded-[20px] ${t.surface} ${t.transition} my-0 md:my-[24px]`}
      >
        <div className="mx-auto flex w-full max-w-[980px] flex-col px-4 py-20 md:px-8">
          <CaseStudyBackLink theme={t} />
          <p className={`${SITE_FONT} ${t.muted} ${t.body} mt-8`}>Project not found.</p>
        </div>
      </div>
    );
  }

  const content = getCaseStudyPageContent(project, caseStudy);
  const otherProjects = getOtherWorksProjects(worksContent.allProjects, slug);

  return (
    <div
      data-route="works-project"
      className={`w-full shrink-0 rounded-[20px] ${t.surface} ${t.transition} my-0 md:my-[24px]`}
    >
      <div className="mx-auto flex w-full max-w-[980px] flex-col gap-10 px-4 pb-20 pt-8 md:gap-16 md:px-8 md:pb-28 md:pt-12">
        <CaseStudyBackLink theme={t} />
        <CaseStudyPageContentView project={project} content={content} theme={t} isDark={isDark} />
        <CaseStudyOtherProjects
          projects={otherProjects}
          theme={t}
          isDark={isDark}
          title={worksContent.moreWorksTitle}
        />
      </div>
    </div>
  );
}
