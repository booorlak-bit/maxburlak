import { usePostHog } from "@posthog/react";
import { SiteBookCallButton, SiteGhostLink } from "../../components/site/SiteButtons";
import {
  FliqMarkIcon,
  MndfrndMarkIcon,
  OrganicaaaMarkIcon,
  PinnboardsMarkIcon,
  TheFirstMarkIcon,
} from "../../components/ventureMarkIcons";
import { getSiteTheme, SITE_FONT } from "../../components/site/siteTheme";
import {
  ACTIVE_VENTURES,
  BUILDER_PHILOSOPHY,
  FAILED_EXPERIMENTS,
  type Venture,
  VENTURES_CTA,
  VENTURES_HERO,
} from "../../content/venturesPage";
import { BOOK_CALL_URL } from "../../seo/site";
import { PageSection, SectionHeader } from "../approach/helpers";

type VenturesPageProps = {
  isDark: boolean;
};

function ventureHref(url: string | undefined): string | null {
  if (!url) return null;
  return url.startsWith("http") ? url : `https://${url}`;
}

function ProblemBulbIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={`size-4 shrink-0 ${className ?? ""}`}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 1.25C5.38 1.25 3.25 3.38 3.25 6c0 1.74.88 3.28 2.21 4.18V11.5c0 .41.34.75.75.75h3.58c.41 0 .75-.34.75-.75V10.18c1.33-.9 2.21-2.44 2.21-4.18 0-2.62-2.13-4.75-4.75-4.75ZM6.75 13h2.5v.75a.75.75 0 0 1-1.5 0V13Z" />
    </svg>
  );
}

function VentureMark({ venture }: { venture: Venture }) {
  const className = "size-11 shrink-0 overflow-hidden rounded-[12px] md:size-12";

  switch (venture.icon) {
    case "fliq":
      return (
        <div className={className}>
          <FliqMarkIcon className="size-full" idSuffix={`ventures-${venture.id}`} />
        </div>
      );
    case "pinnboards":
      return (
        <div className={className}>
          <PinnboardsMarkIcon className="size-full" glowFilterId={`pinnboardsGlow-ventures-${venture.id}`} />
        </div>
      );
    case "the-first":
      return (
        <div className={className}>
          <TheFirstMarkIcon className="size-full" />
        </div>
      );
    case "mndfrnd":
      return (
        <div className={className}>
          <MndfrndMarkIcon className="size-full" />
        </div>
      );
    case "organicaaa":
      return (
        <div className={className}>
          <OrganicaaaMarkIcon className="size-full" />
        </div>
      );
  }
}

function VentureCard({ venture, theme: t }: { venture: Venture; theme: ReturnType<typeof getSiteTheme> }) {
  const posthog = usePostHog();
  const href = ventureHref(venture.url);

  const handleVentureLinkClick = () => {
    posthog?.capture("venture_website_clicked", {
      venture_name: venture.name,
      venture_id: venture.id,
    });
  };

  return (
    <article
      className={`${t.card} ${t.transition} flex flex-col gap-5 rounded-[14px] border border-solid p-6 md:gap-6 md:p-8 ${t.borderHairline}`}
    >
      <header className="flex items-start gap-4">
        <VentureMark venture={venture} />
        <div className="flex min-w-0 flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleVentureLinkClick}
                className={`${SITE_FONT} ${t.text} text-[22px] font-medium leading-[28px] tracking-[-0.2px] no-underline transition-opacity hover:opacity-80`}
              >
                {venture.name}
              </a>
            ) : (
              <h3 className={`${SITE_FONT} ${t.text} text-[22px] font-medium leading-[28px] tracking-[-0.2px]`}>
                {venture.name}
              </h3>
            )}
            {venture.url ? (
              <span className={`${SITE_FONT} ${t.muted} text-[13px] font-normal leading-[18px]`}>{venture.url}</span>
            ) : null}
          </div>
          <p className={`${SITE_FONT} ${t.muted} text-[13px] font-normal leading-[18px]`}>
            {venture.role} · {venture.status}
          </p>
        </div>
      </header>

      <p className={`${SITE_FONT} ${t.text} text-[15px] font-medium leading-[20px]`}>{venture.oneLiner}</p>
      <p className={`${SITE_FONT} ${t.muted} text-[15px] font-normal leading-[22px]`}>{venture.description}</p>

      <div className={`${t.cardInset} ${t.transition} rounded-[12px] px-4 py-4 md:px-5 md:py-5`}>
        <div className="flex items-center gap-2">
          <ProblemBulbIcon className={t.feedTag} />
          <p className={`${SITE_FONT} ${t.text} text-[13px] font-normal leading-[18px]`}>Problem it solves</p>
        </div>
        <p className={`${SITE_FONT} ${t.muted} mt-2 text-[14px] font-normal leading-[22px]`}>
          {venture.problemItSolves}
        </p>
      </div>

      <div>
        <p className={`${SITE_FONT} ${t.text} text-[13px] font-medium leading-[18px]`}>Current stage</p>
        <ul className={`${SITE_FONT} ${t.muted} mt-2 flex list-disc flex-col gap-1.5 pl-5 text-[14px] font-normal leading-[22px]`}>
          {venture.currentStage.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function BuilderPhilosophySection({ theme: t }: { theme: ReturnType<typeof getSiteTheme> }) {
  return (
    <div className={`overflow-hidden rounded-[20px] border border-solid ${t.borderHairline}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className={`${t.card} ${t.transition} flex flex-col gap-5 p-6 md:gap-6 md:p-8 lg:p-10`}>
          <h2 className={`${SITE_FONT} ${t.text} ${t.h2}`}>{BUILDER_PHILOSOPHY.title}</h2>
          <p className={`${SITE_FONT} ${t.text} text-[clamp(17px,2.2vw,20px)] font-medium leading-[1.35] tracking-[-0.2px]`}>
            {BUILDER_PHILOSOPHY.paragraphs[0]}
          </p>
          <p className={`${SITE_FONT} ${t.muted} text-[15px] font-normal leading-[22px]`}>
            {BUILDER_PHILOSOPHY.paragraphs[1]}
          </p>
          <p
            className={`${SITE_FONT} ${t.text} border-t border-solid pt-5 text-[15px] font-medium leading-[22px] ${t.borderHairline}`}
          >
            {BUILDER_PHILOSOPHY.paragraphs[2]}
          </p>
        </div>

        <div className={`${t.panel} ${t.transition} flex flex-col gap-6 border-t border-solid p-6 md:p-8 lg:border-t-0 lg:border-l lg:p-10 ${t.borderHairline}`}>
          <p className={`${SITE_FONT} ${t.text} text-[13px] font-medium leading-[18px]`}>
            {BUILDER_PHILOSOPHY.intro}
          </p>
          <ul className="flex flex-col gap-4">
            {BUILDER_PHILOSOPHY.learnings.map((item) => (
              <li
                key={item}
                className={`${SITE_FONT} ${t.muted} flex gap-3 text-[14px] font-normal leading-[22px]`}
              >
                <span className={`${t.muted} shrink-0 pt-px`} aria-hidden>
                  →
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function VenturesPage({ isDark }: VenturesPageProps) {
  const t = getSiteTheme(isDark);

  return (
    <div
      data-route="ventures"
      className={`w-full shrink-0 rounded-[20px] ${t.surface} ${t.transition} my-0 md:my-[24px]`}
    >
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-10 px-4 pb-20 pt-8 md:gap-14 md:px-8 md:pb-28 md:pt-12">
        <PageSection>
          <SectionHeader
            theme={t}
            label={VENTURES_HERO.label}
            title={VENTURES_HERO.title}
            subtitle={VENTURES_HERO.subtitle}
          />
        </PageSection>

        <PageSection id="active">
          <SectionHeader theme={t} title="Active ventures" />
          <div className="flex flex-col gap-6 md:gap-8">
            {ACTIVE_VENTURES.map((venture) => (
              <VentureCard key={venture.id} venture={venture} theme={t} />
            ))}
          </div>
        </PageSection>

        <PageSection id="failed">
          <SectionHeader
            theme={t}
            title={FAILED_EXPERIMENTS.title}
            subtitle={FAILED_EXPERIMENTS.subheadline}
          />
          <div
            className={`${t.panel} ${t.transition} flex w-full items-center rounded-[14px] border border-solid px-6 py-5 md:px-8 md:py-6 ${t.borderHairline}`}
          >
            <p className={`${SITE_FONT} ${t.muted} text-[15px] font-normal leading-[22px]`}>
              {FAILED_EXPERIMENTS.body}
            </p>
          </div>
        </PageSection>

        <PageSection id="philosophy">
          <BuilderPhilosophySection theme={t} />
        </PageSection>

        <PageSection>
          <div className={`${t.panel} ${t.transition} flex flex-col gap-6 rounded-[20px] px-6 py-8 md:px-8 md:py-10`}>
            <div className="flex max-w-[520px] flex-col gap-3">
              <h2 className={`${SITE_FONT} ${t.text} ${t.h2}`}>{VENTURES_CTA.title}</h2>
              <p className={`${SITE_FONT} ${t.muted} text-[15px] font-normal leading-[22px]`}>
                {VENTURES_CTA.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <SiteBookCallButton isDark={isDark} href={BOOK_CALL_URL}>
                {VENTURES_CTA.primaryLabel}
              </SiteBookCallButton>
              <SiteGhostLink isDark={isDark} to="/works">
                {VENTURES_CTA.secondaryLabel}
              </SiteGhostLink>
            </div>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
