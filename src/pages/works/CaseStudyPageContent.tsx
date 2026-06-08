import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ApolloLogo } from "../../components/ApolloLogo";
import { DefaultLogo } from "../../components/DefaultLogo";
import { PortfolioImage } from "../../components/PortfolioImage";
import { P2pOrgLogo } from "../../components/P2pOrgLogo";
import { SiteBadge } from "../../components/site/SiteBadge";
import { SiteGhostLink } from "../../components/site/SiteButtons";
import { SITE_FONT, type SiteTheme } from "../../components/site/siteTheme";
import type { CaseStudyPageContent, CaseStudySection } from "../../content/caseStudyContent";
import { WORK_SCREENSHOTS } from "../../content/worksImages";
import type { WorksProject } from "../../content/worksPage";
import { WORKS_PROJECT_FILTERS } from "../../content/worksPage";
import { PortableTextBody } from "../../sanity/portableText";

function formatMetricChipText(metric: { label: string; value: string }): string {
  const label = metric.label.toLowerCase().replace(/→/g, " to ");
  return `${metric.value} ${label}`;
}

function CaseStudyHero({
  project,
  content,
  theme: t,
  isDark,
}: {
  project: WorksProject;
  content: CaseStudyPageContent;
  theme: SiteTheme;
  isDark: boolean;
}) {
  return (
    <header className="flex max-w-[720px] flex-col gap-4 md:gap-5">
      <p className={`${SITE_FONT} ${t.muted} text-[12px] font-medium uppercase tracking-[0.12em]`}>
        {project.company}
      </p>
      <h1 className={`${SITE_FONT} ${t.text} text-[clamp(28px,4.5vw,40px)] font-medium leading-[1.12] tracking-[-0.4px]`}>
        {content.pageTitle}
      </h1>
      <p className={`${SITE_FONT} ${t.muted} max-w-[640px] text-[15px] font-light leading-[22px] md:text-[16px] md:leading-[24px]`}>
        {content.lede}
      </p>
      {content.meta ? (
        <div className={`${SITE_FONT} ${t.muted} flex flex-col gap-1 text-[13px] font-light leading-[18px]`}>
          <p>
            {content.meta.role} · {content.meta.timeline}
          </p>
          <p>
            {content.meta.team} · {content.meta.stage}
          </p>
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {content.published ? (
          <p className={`${SITE_FONT} ${t.muted} text-[13px] font-light leading-[18px]`}>{content.published}</p>
        ) : null}
        {content.visitUrl ? (
          <a
            href={content.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${SITE_FONT} ${t.text} text-[13px] font-medium leading-[18px] underline underline-offset-2 transition-opacity hover:opacity-80`}
          >
            {content.visitLabel ?? "Visit site"} →
          </a>
        ) : null}
      </div>
      {project.metrics.length > 0 ? (
        <div className="flex flex-wrap gap-2 pt-1">
          {project.metrics.map((metric) => (
            <SiteBadge key={metric.label} isDark={isDark} showCheckIcon>
              {formatMetricChipText(metric)}
            </SiteBadge>
          ))}
        </div>
      ) : null}
    </header>
  );
}

function CaseStudyGallery({ project, theme: t }: { project: WorksProject; theme: SiteTheme }) {
  const shot = project.screenshot ?? WORK_SCREENSHOTS[project.id];
  if (!shot) return null;

  return (
    <figure className="w-full">
      <div className="w-full overflow-hidden rounded-[16px]" style={{ aspectRatio: shot.aspectRatio.replace(/\s/g, "") }}>
        <PortfolioImage
          alt={shot.alt}
          className="size-full object-cover object-top"
          src={shot.src}
          width={shot.width}
          height={shot.height}
        />
      </div>
      <figcaption className={`${SITE_FONT} ${t.muted} mt-3 text-[12px] font-light leading-[16px]`}>Gallery</figcaption>
    </figure>
  );
}

const MOBILE_CASE_STUDY_NAV_TOP = 80;

function CaseStudyNav({
  content,
  theme: t,
  isDark,
}: {
  content: CaseStudyPageContent;
  theme: SiteTheme;
  isDark: boolean;
}) {
  const [isPinned, setIsPinned] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const renderNavLinks = () =>
    content.nav.map((item) => (
      <li key={item.id}>
        <a
          href={`#${item.id}`}
          className={`${SITE_FONT} ${t.muted} text-[13px] font-medium leading-[18px] transition-colors duration-200 hover:underline`}
        >
          {item.label}
        </a>
      </li>
    ));

  const mobileShellClass = `border-y border-solid px-4 py-3 backdrop-blur-md ${t.borderHairline} ${isDark ? "bg-[#0a0a0a]/90" : "bg-white/90"}`;

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 1024px)");

    const updatePinned = () => {
      if (desktopQuery.matches) {
        setIsPinned(false);
        return;
      }

      const sentinel = sentinelRef.current;
      const nav = navRef.current;
      if (!sentinel) return;

      setIsPinned(sentinel.getBoundingClientRect().top <= MOBILE_CASE_STUDY_NAV_TOP);
      if (nav) setNavHeight(nav.offsetHeight);
    };

    updatePinned();
    window.addEventListener("scroll", updatePinned, { passive: true });
    window.addEventListener("resize", updatePinned);
    desktopQuery.addEventListener("change", updatePinned);

    return () => {
      window.removeEventListener("scroll", updatePinned);
      window.removeEventListener("resize", updatePinned);
      desktopQuery.removeEventListener("change", updatePinned);
    };
  }, []);

  return (
    <>
      <div className="lg:hidden">
        <div ref={sentinelRef} className="h-0 w-full" aria-hidden />
        <div aria-hidden style={{ height: isPinned ? navHeight : 0 }} />
        <nav
          ref={navRef}
          aria-label="Case study sections"
          className={`z-20 ${mobileShellClass} ${
            isPinned
              ? "fixed inset-x-[12px] top-[80px]"
              : "relative -mx-4 md:-mx-8 md:px-8"
          }`}
        >
          <details className="group">
            <summary className={`${SITE_FONT} ${t.text} flex cursor-pointer list-none items-center justify-between text-[13px] font-medium leading-[18px] [&::-webkit-details-marker]:hidden`}>
              Sections
              <span className={`${t.muted} transition-transform duration-200 group-open:rotate-45`} aria-hidden>
                +
              </span>
            </summary>
            <ul className={`${SITE_FONT} mt-3 flex flex-col gap-y-2 pb-1`}>
              {renderNavLinks()}
            </ul>
          </details>
        </nav>
      </div>

      <nav
        aria-label="Case study sections"
        className="sticky top-[84px] z-[1] hidden lg:block"
      >
        <ul className={`${SITE_FONT} flex flex-col flex-nowrap gap-y-2`}>
          {renderNavLinks()}
        </ul>
      </nav>
    </>
  );
}

function CaseStudyMetrics({
  metrics,
  theme: t,
}: {
  metrics: NonNullable<CaseStudySection["metrics"]>;
  theme: SiteTheme;
}) {
  return (
    <div
      className={`grid w-full min-w-0 grid-cols-1 gap-x-0 gap-y-0 divide-y sm:grid-cols-2 sm:divide-y-0 sm:gap-8 xl:grid-cols-4 xl:gap-8 ${t.borderHairline} divide-solid`}
    >
      {metrics.map((metric) => (
        <div key={metric.label} className="flex min-w-0 flex-col gap-4 py-10 sm:py-0">
          <p className={`${SITE_FONT} ${t.text} text-[32px] font-medium leading-[36px] tracking-[-0.2px]`}>
            {metric.value}
          </p>
          <div className="flex flex-col gap-2">
            <p className={`${SITE_FONT} ${t.text} text-[18px] font-medium leading-[24px]`}>{metric.label}</p>
            {metric.detail ? (
              <p className={`${SITE_FONT} ${t.muted} text-[13px] font-light leading-[18px]`}>{metric.detail}</p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

function CaseStudyMedia({
  media,
  theme: t,
}: {
  media: NonNullable<CaseStudySection["media"]>;
  theme: SiteTheme;
}) {
  return (
    <div className="mt-2 flex flex-col gap-6 md:gap-8">
      {media.map((item, index) => (
        <figure key={index} className="w-full">
          {item.type === "video" ? (
            <video
              className="h-auto w-full rounded-[16px]"
              controls
              playsInline
              preload="metadata"
              poster={item.poster}
              aria-label={item.alt ?? "Video"}
            >
              <source src={item.src} />
            </video>
          ) : (
            <PortfolioImage
              alt={item.alt ?? ""}
              className="h-auto w-full rounded-[16px] object-cover"
              src={item.src}
            />
          )}
          {item.caption ? (
            <figcaption className={`${SITE_FONT} ${t.muted} mt-3 text-[12px] font-light leading-[16px]`}>
              {item.caption}
            </figcaption>
          ) : null}
        </figure>
      ))}
    </div>
  );
}

function CaseStudySectionBlock({ section, theme: t }: { section: CaseStudySection; theme: SiteTheme }) {
  const bodyClass = `${SITE_FONT} ${t.muted} max-w-[640px] text-[15px] font-normal leading-[22px]`;

  return (
    <section id={section.id} className="scroll-mt-28 flex flex-col gap-4 md:gap-5">
      <h2 className={`${SITE_FONT} ${t.text} text-[22px] font-medium leading-[30px] tracking-[-0.2px]`}>
        {section.title}
      </h2>
      {section.paragraphBlocks && section.paragraphBlocks.length > 0 ? (
        <PortableTextBody blocks={section.paragraphBlocks} theme={t} />
      ) : section.paragraphs && section.paragraphs.length > 0 ? (
        <div className="flex flex-col gap-4">
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className={bodyClass}>
              {paragraph}
            </p>
          ))}
        </div>
      ) : null}
      {section.table && section.table.length > 0 ? (
        <ul className="mt-2 flex flex-col gap-8 md:gap-10">
          {section.table.map((row) => (
            <li key={row.key} className="flex flex-col gap-2">
              <h3 className={`${SITE_FONT} ${t.text} text-[15px] font-medium leading-[20px]`}>{row.title}</h3>
              <p className={bodyClass}>
                {row.description}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
      {section.phases && section.phases.length > 0 ? (
        <ul className="mt-2 flex flex-col gap-8 md:gap-10">
          {section.phases.map((phase) => (
            <li key={phase.phase} className="flex flex-col gap-2">
              <h3 className={`${SITE_FONT} ${t.text} text-[15px] font-medium leading-[20px]`}>
                {phase.phase} · {phase.title}
              </h3>
              <p className={bodyClass}>
                {phase.description}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
      {section.features && section.features.length > 0 ? (
        <ul className="mt-2 flex flex-col gap-8 md:gap-10">
          {section.features.map((feature) => (
            <li key={feature.title} className="flex flex-col gap-2">
              <h3 className={`${SITE_FONT} ${t.text} text-[15px] font-medium leading-[20px]`}>{feature.title}</h3>
              <p className={bodyClass}>{feature.body}</p>
            </li>
          ))}
        </ul>
      ) : null}
      {section.metrics && section.metrics.length > 0 ? <CaseStudyMetrics metrics={section.metrics} theme={t} /> : null}
      {section.numberedList && section.numberedList.length > 0 ? (
        <ol className={`${bodyClass} mt-2 flex list-decimal flex-col gap-4 pl-5`}>
          {section.numberedList.map((item) => (
            <li key={item} className="font-normal">
              {item}
            </li>
          ))}
        </ol>
      ) : null}
      {section.media && section.media.length > 0 ? <CaseStudyMedia media={section.media} theme={t} /> : null}
    </section>
  );
}

type CaseStudyPageContentViewProps = {
  project: WorksProject;
  content: CaseStudyPageContent;
  theme: SiteTheme;
  isDark: boolean;
};

export function CaseStudyPageContentView({ project, content, theme: t, isDark }: CaseStudyPageContentViewProps) {
  return (
    <div className="flex w-full flex-col gap-12 md:gap-16 lg:gap-20">
      <CaseStudyHero project={project} content={content} theme={t} isDark={isDark} />
      <CaseStudyGallery project={project} theme={t} />

      <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
        <aside className="lg:w-[180px] lg:shrink-0">
          <CaseStudyNav content={content} theme={t} isDark={isDark} />
        </aside>

        <div className="flex min-w-0 flex-1 flex-col gap-12 md:gap-16 lg:gap-20">
          {content.sections.map((section) => (
            <CaseStudySectionBlock key={section.id} section={section} theme={t} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function CaseStudyBackLink({ theme: t }: { theme: SiteTheme }) {
  return (
    <Link
      to="/works"
      className={`${SITE_FONT} ${t.muted} inline-flex items-center text-[13px] font-light leading-[18px] transition-colors duration-200 hover:underline`}
    >
      ← All works
    </Link>
  );
}

function companyInitials(company: string): string {
  return company
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function WorksProjectThumb({ project }: { project: WorksProject }) {
  const shot = project.screenshot ?? WORK_SCREENSHOTS[project.id];
  const logoKey = project.logoKey || project.id;

  if (shot) {
    return (
      <div className="relative size-16 shrink-0 overflow-hidden rounded-[10px] md:size-[72px]">
        <PortfolioImage alt="" className="size-full object-cover object-top" src={shot.src} />
      </div>
    );
  }

  switch (logoKey) {
    case "default":
      return <DefaultLogo size={72} className="shrink-0 rounded-[10px]" />;
    case "apollo":
      return <ApolloLogo size={72} className="shrink-0 rounded-[10px]" />;
    case "p2p":
      return <P2pOrgLogo size={72} className="shrink-0 rounded-[10px]" />;
    default:
      return (
        <div
          className="flex size-16 shrink-0 items-center justify-center rounded-[10px] bg-[#0a0c11] text-[11px] font-semibold text-white md:size-[72px]"
          aria-hidden
        >
          {companyInitials(project.company)}
        </div>
      );
  }
}

function projectTypeLabel(project: WorksProject): string {
  const categoryId = project.categories?.[0];
  const categoryLabel = WORKS_PROJECT_FILTERS.find((filter) => filter.id === categoryId)?.label;
  return categoryLabel ?? project.tags[0] ?? "Project";
}

function CaseStudyOtherProjectRow({
  project,
  theme: t,
  isDark,
}: {
  project: WorksProject;
  theme: SiteTheme;
  isDark: boolean;
}) {
  return (
    <li className={`border-b border-solid last:border-b-0 ${t.borderHairline} md:[&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-child(odd)]:border-r`}>
      <div className="flex items-center gap-4 px-0 py-5 md:gap-5 md:px-5 md:py-6">
        <WorksProjectThumb project={project} />
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <p className={`${SITE_FONT} ${t.muted} ${t.caption}`}>{projectTypeLabel(project)}</p>
          <p className={`${SITE_FONT} ${t.text} text-[15px] font-medium leading-[20px] tracking-[-0.1px]`}>
            {project.showcaseTitle}
          </p>
        </div>
        <SiteGhostLink isDark={isDark} to={`/works/${project.caseStudySlug}`}>
          Open
        </SiteGhostLink>
      </div>
    </li>
  );
}

export function CaseStudyOtherProjects({
  projects,
  theme: t,
  isDark,
  title = "More works",
}: {
  projects: WorksProject[];
  theme: SiteTheme;
  isDark: boolean;
  title?: string;
}) {
  if (projects.length === 0) return null;

  return (
    <section className="flex flex-col gap-6 md:gap-8">
      <h2 className={`${SITE_FONT} ${t.text} ${t.h2}`}>{title}</h2>
      <ul className={`grid grid-cols-1 border-t border-solid md:grid-cols-2 ${t.borderHairline}`}>
        {projects.map((project) => (
          <CaseStudyOtherProjectRow key={project.id} project={project} theme={t} isDark={isDark} />
        ))}
      </ul>
    </section>
  );
}
