import { useState } from "react";
import type { WorksProject } from "../../content/worksPage";
import { SitePrimaryButton } from "../../components/site/SiteButtons";
import { getSiteTheme } from "../../components/site/siteTheme";
import { ProjectShowcase } from "./ProjectShowcase";

type LoadMoreProjectsProps = {
  isDark: boolean;
  projects: WorksProject[];
  loadMoreBatch: number;
};

export function LoadMoreProjects({ isDark, projects, loadMoreBatch }: LoadMoreProjectsProps) {
  const t = getSiteTheme(isDark);
  const [visibleCount, setVisibleCount] = useState(0);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  if (projects.length === 0) return null;

  return (
    <div className="flex w-full flex-col gap-16 md:gap-20 lg:gap-24">
      {visibleProjects.map((project) => (
        <ProjectShowcase key={project.id} project={project} theme={t} isDark={isDark} linkToProject />
      ))}

      {hasMore ? (
        <div className="flex justify-center pt-2">
          <SitePrimaryButton
            isDark={isDark}
            onClick={() => setVisibleCount((count) => Math.min(count + loadMoreBatch, projects.length))}
          >
            Load more
          </SitePrimaryButton>
        </div>
      ) : null}
    </div>
  );
}
