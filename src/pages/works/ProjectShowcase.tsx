import { Link } from "react-router";
import { ApolloLogo } from "../../components/ApolloLogo";
import { DefaultLogo } from "../../components/DefaultLogo";
import { PortfolioImage } from "../../components/PortfolioImage";
import { P2pOrgLogo } from "../../components/P2pOrgLogo";
import { SiteGhostLink } from "../../components/site/SiteButtons";
import { SiteBadge } from "../../components/site/SiteBadge";
import { SITE_FONT, type SiteTheme } from "../../components/site/siteTheme";
import { WORK_SCREENSHOTS } from "../../content/worksImages";
import type { WorksProject } from "../../content/worksPage";

function projectCaseStudyPath(project: WorksProject): string {
  return `/works/${project.caseStudySlug}`;
}

function companyInitials(company: string): string {
  return company
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function CompanyLogo({
  project,
  size = 40,
}: {
  project: Pick<WorksProject, "id" | "company" | "logoKey">;
  size?: number;
}) {
  const logoKey = project.logoKey || project.id;

  switch (logoKey) {
    case "default":
      return <DefaultLogo size={size} className="rounded-[8px]" />;
    case "apollo":
      return <ApolloLogo size={size} className="rounded-[8px]" />;
    case "p2p":
      return <P2pOrgLogo size={size} className="rounded-[8px]" />;
    default:
      return (
        <div
          className="flex items-center justify-center rounded-[8px] bg-[#0a0c11] text-[11px] font-semibold text-white"
          style={{ width: size, height: size }}
          aria-hidden
        >
          {companyInitials(project.company)}
        </div>
      );
  }
}

function WorkScreenshot({
  project,
  linkToProject = false,
}: {
  project: WorksProject;
  linkToProject?: boolean;
}) {
  const shot = project.screenshot ?? WORK_SCREENSHOTS[project.id];
  if (!shot) return null;

  const image = (
    <div className="w-full overflow-hidden rounded-[16px]" style={{ aspectRatio: shot.aspectRatio.replace(/\s/g, "") }}>
      <PortfolioImage
        alt={shot.alt}
        className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
        src={shot.src}
        width={shot.width}
        height={shot.height}
      />
    </div>
  );

  if (!linkToProject) return image;

  return (
    <Link
      to={projectCaseStudyPath(project)}
      className="group block w-full no-underline"
      aria-label={`View ${project.showcaseTitle} case study`}
    >
      {image}
    </Link>
  );
}

function ProjectShowcaseHeader({
  project,
  theme: t,
  linkToProject = false,
}: {
  project: WorksProject;
  theme: SiteTheme;
  linkToProject?: boolean;
}) {
  const titleClassName = `${SITE_FONT} ${t.text} text-[clamp(22px,3.2vw,28px)] font-medium leading-[1.2] tracking-[-0.3px]`;

  return (
    <div className="mb-6 flex max-w-[640px] flex-col items-start gap-3 md:mb-8">
      <CompanyLogo project={project} size={36} />
      {linkToProject ? (
        <Link
          to={projectCaseStudyPath(project)}
          className={`${titleClassName} no-underline transition-opacity duration-200 hover:opacity-80`}
        >
          {project.showcaseTitle}
        </Link>
      ) : (
        <h3 className={titleClassName}>{project.showcaseTitle}</h3>
      )}
      <p className={`${SITE_FONT} ${t.muted} max-w-[520px] text-[13px] font-light leading-[18px] md:text-[14px] md:leading-[20px]`}>
        {project.showcaseSummary}
      </p>
    </div>
  );
}

function formatMetricChipText(metric: { label: string; value: string }): string {
  const label = metric.label.toLowerCase().replace(/→/g, " to ");
  return `${metric.value} ${label}`;
}

function ProjectMetrics({ metrics, isDark }: { metrics: WorksProject["metrics"]; isDark: boolean }) {
  if (metrics.length === 0) return null;

  return (
    <>
      {metrics.map((metric) => (
        <SiteBadge key={metric.label} isDark={isDark} showCheckIcon>
          {formatMetricChipText(metric)}
        </SiteBadge>
      ))}
    </>
  );
}

function ProjectAction({ project, isDark, linkToProject }: { project: WorksProject; isDark: boolean; linkToProject?: boolean }) {
  if (!linkToProject) return null;

  return (
    <div className="w-fit self-start pt-1">
      <SiteGhostLink isDark={isDark} to={projectCaseStudyPath(project)}>
        View project →
      </SiteGhostLink>
    </div>
  );
}

type ProjectShowcaseProps = {
  project: WorksProject;
  theme: SiteTheme;
  isDark: boolean;
  linkToProject?: boolean;
};

export function ProjectShowcase({ project, theme: t, isDark, linkToProject = false }: ProjectShowcaseProps) {
  return (
    <article id={project.id} className="flex w-full flex-col">
      <ProjectShowcaseHeader project={project} theme={t} linkToProject={linkToProject} />
      <WorkScreenshot project={project} linkToProject={linkToProject} />

      <div className="mt-8 flex flex-col gap-6 md:mt-10 md:gap-8">
        <div className="flex w-full flex-col gap-4 md:flex-row md:flex-nowrap md:items-center md:justify-start md:gap-x-4">
          <div className="flex min-w-0 flex-col gap-2">
            <p className={`${SITE_FONT} ${t.muted} text-[13px] font-light leading-[18px]`}>
              {project.role} · {project.years}
            </p>
            <p className={`${SITE_FONT} ${t.muted} text-[13px] font-light leading-[18px]`}>
              {project.tags.join(" · ")}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:ml-auto md:shrink-0 md:flex-nowrap">
            <ProjectMetrics metrics={project.metrics} isDark={isDark} />
          </div>
        </div>

        <ProjectAction project={project} isDark={isDark} linkToProject={linkToProject} />
      </div>
    </article>
  );
}
