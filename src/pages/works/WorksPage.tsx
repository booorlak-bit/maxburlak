import { useMemo, useState } from "react";
import { filterWorksProjects, type WorksProjectFilterId } from "../../content/worksPage";
import { getSiteTheme } from "../../components/site/siteTheme";
import { useWorksContent } from "../../sanity/useWorksContent";
import { PageSection, SectionHeader } from "../approach/helpers";
import { LoadMoreProjects } from "./LoadMoreProjects";
import { ProjectShowcase } from "./ProjectShowcase";
import { WorksProjectFilters } from "./WorksProjectFilters";

type WorksPageProps = {
  isDark: boolean;
};

export function WorksPage({ isDark }: WorksPageProps) {
  const t = getSiteTheme(isDark);
  const { hero, featuredProjects, moreProjects, loadMoreBatch } = useWorksContent();
  const [activeFilter, setActiveFilter] = useState<WorksProjectFilterId>("all");

  const filteredFeaturedProjects = useMemo(
    () => filterWorksProjects(featuredProjects, activeFilter),
    [activeFilter, featuredProjects],
  );
  const filteredMoreProjects = useMemo(
    () => filterWorksProjects(moreProjects, activeFilter),
    [activeFilter, moreProjects],
  );

  return (
    <div
      data-route="works"
      className={`w-full shrink-0 rounded-[20px] ${t.surface} ${t.transition} my-0 md:my-[24px]`}
    >
      <div className="mx-auto flex w-full max-w-[980px] flex-col gap-10 px-4 pb-20 pt-8 md:gap-16 md:px-8 md:pb-28 md:pt-12">
        <PageSection>
          <SectionHeader theme={t} label={hero.label} title={hero.title} subtitle={hero.subtitle} />
          <WorksProjectFilters
            theme={t}
            isDark={isDark}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </PageSection>

        <PageSection id="projects">
          <div className="flex flex-col gap-16 md:gap-20 lg:gap-24">
            {filteredFeaturedProjects.map((project) => (
              <ProjectShowcase key={project.id} project={project} theme={t} isDark={isDark} linkToProject />
            ))}
            <LoadMoreProjects
              key={activeFilter}
              isDark={isDark}
              projects={filteredMoreProjects}
              loadMoreBatch={loadMoreBatch}
            />
          </div>
        </PageSection>
      </div>
    </div>
  );
}
