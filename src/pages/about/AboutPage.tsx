import type { ReactNode } from "react";
import imgProfilePlaceholder from "figma:asset/17f682c6ad35f565362649ef00a02aae5b5fb174.png";
import { PortfolioImage } from "../../components/PortfolioImage";
import { getSiteTheme, SITE_FONT } from "../../components/site/siteTheme";
import {
  ABOUT_BIO,
  ABOUT_CONNECT,
  ABOUT_HERO,
  ABOUT_HOW_I_WORK,
  ABOUT_NOW,
  ABOUT_OUTSIDE_WORK,
  type AboutContactLink,
} from "../../content/aboutPage";
import { PageSection, SectionHeader } from "../approach/helpers";

type AboutPageProps = {
  isDark: boolean;
};

function ProseBlock({
  theme: t,
  paragraphs,
}: {
  theme: ReturnType<typeof getSiteTheme>;
  paragraphs: string[];
}) {
  return (
    <div className="flex flex-col gap-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={`${SITE_FONT} ${t.muted} text-[15px] font-normal leading-[22px] ${t.transition}`}>
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function parseLanguage(entry: string): { name: string; level: string } {
  const match = entry.match(/^(.+?) \((.+)\)$/);
  if (!match) return { name: entry, level: "" };
  return { name: match[1], level: match[2] };
}

function MetaPill({ theme: t, children }: { theme: ReturnType<typeof getSiteTheme>; children: ReactNode }) {
  return (
    <span
      className={`${SITE_FONT} ${t.pill} ${t.text} inline-flex items-center rounded-full px-3 py-1.5 text-[13px] font-normal leading-[18px] ${t.transition}`}
    >
      {children}
    </span>
  );
}

function OutsidePanel({
  theme: t,
  title,
  children,
  className = "",
}: {
  theme: ReturnType<typeof getSiteTheme>;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${t.panel} ${t.transition} flex flex-col gap-4 rounded-[14px] border border-solid p-5 md:p-6 ${t.borderHairline} ${className}`}
    >
      <h3 className={`${SITE_FONT} ${t.text} text-[13px] font-medium leading-[18px] ${t.transition}`}>{title}</h3>
      {children}
    </div>
  );
}

function OutsideWorkSection({ theme: t }: { theme: ReturnType<typeof getSiteTheme> }) {
  const { hobbies, countries, languages, mentorship } = ABOUT_OUTSIDE_WORK;

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <OutsidePanel theme={t} title="Hobbies">
          <div className="flex flex-wrap gap-2">
            {hobbies.map((hobby) => (
              <MetaPill key={hobby} theme={t}>
                {hobby}
              </MetaPill>
            ))}
          </div>
        </OutsidePanel>

        <OutsidePanel theme={t} title="Languages">
          <ul className="flex flex-col">
            {languages.map((entry) => {
              const { name, level } = parseLanguage(entry);
              return (
                <li
                  key={entry}
                  className={`flex items-baseline justify-between gap-4 border-b border-solid py-2.5 first:pt-0 last:border-b-0 last:pb-0 ${t.borderHairline}`}
                >
                  <span className={`${SITE_FONT} ${t.text} text-[14px] font-normal leading-[20px]`}>{name}</span>
                  <span className={`${SITE_FONT} ${t.muted} shrink-0 text-[13px] font-normal leading-[18px] capitalize`}>
                    {level}
                  </span>
                </li>
              );
            })}
          </ul>
        </OutsidePanel>
      </div>

      <OutsidePanel theme={t} title="Countries visited">
        <div className="flex flex-wrap gap-2">
          {countries.map(({ flag, name }) => (
            <MetaPill key={name} theme={t}>
              <span aria-hidden>{flag}</span>
              <span className="ml-1.5">{name}</span>
            </MetaPill>
          ))}
        </div>
      </OutsidePanel>

      <OutsidePanel theme={t} title="Mentorship">
        <div className="flex flex-col gap-4">
          <p className={`${SITE_FONT} ${t.muted} text-[15px] font-normal leading-[22px]`}>{mentorship.intro}</p>
          <div className="flex flex-wrap gap-2">
            {mentorship.stats.map((stat) => (
              <MetaPill key={stat} theme={t}>
                {stat}
              </MetaPill>
            ))}
          </div>
          <p className={`${SITE_FONT} ${t.muted} text-[14px] font-normal leading-[22px]`}>{mentorship.note}</p>
          <a
            href={mentorship.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${SITE_FONT} ${t.text} inline-flex w-fit items-center gap-1.5 text-[14px] font-medium leading-[20px] underline decoration-solid underline-offset-[3px] transition-opacity hover:opacity-70`}
          >
            Book on ADPList
            <span aria-hidden>→</span>
          </a>
        </div>
      </OutsidePanel>
    </div>
  );
}

function ContactLink({ contact, theme: t }: { contact: AboutContactLink; theme: ReturnType<typeof getSiteTheme> }) {
  const external = contact.external ?? contact.href.startsWith("http");

  return (
    <p className={`${SITE_FONT} text-[15px] font-normal leading-[22px] ${t.transition}`}>
      <span className={`${t.text} font-medium`}>{contact.label}: </span>
      <a
        href={contact.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={`${t.muted} underline decoration-solid underline-offset-[3px] transition-opacity hover:opacity-70`}
      >
        {contact.display}
      </a>
    </p>
  );
}

export function AboutPage({ isDark }: AboutPageProps) {
  const t = getSiteTheme(isDark);

  return (
    <div
      data-route="about"
      className={`w-full shrink-0 rounded-[20px] ${t.surface} ${t.transition} my-0 md:my-[24px]`}
    >
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-10 px-4 pb-20 pt-8 md:gap-14 md:px-8 md:pb-28 md:pt-12">
        <PageSection>
          <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,280px)] lg:gap-12">
            <SectionHeader
              theme={t}
              label={ABOUT_HERO.label}
              title={ABOUT_HERO.title}
              subtitle={ABOUT_HERO.subtitle}
              subtitleClassName="!font-normal"
            />
            <div
              className={`${t.cardInset} ${t.transition} relative aspect-[3/4] w-full max-w-[280px] overflow-hidden lg:max-w-none lg:justify-self-end`}
            >
              <PortfolioImage
                alt="Max Burlak — professional headshot placeholder"
                className="absolute inset-0 h-full w-full object-cover object-center"
                src={imgProfilePlaceholder}
                width={2732}
                height={4096}
              />
            </div>
          </div>
        </PageSection>

        <PageSection id="bio">
          <SectionHeader theme={t} title={ABOUT_BIO.headline} />
          <ProseBlock theme={t} paragraphs={ABOUT_BIO.paragraphs} />
        </PageSection>

        <PageSection id="how-i-work">
          <SectionHeader theme={t} title={ABOUT_HOW_I_WORK.headline} />
          <ProseBlock theme={t} paragraphs={ABOUT_HOW_I_WORK.paragraphs} />
        </PageSection>

        <PageSection id="outside-work">
          <SectionHeader theme={t} title={ABOUT_OUTSIDE_WORK.headline} />
          <OutsideWorkSection theme={t} />
        </PageSection>

        <PageSection id="now">
          <SectionHeader theme={t} title={ABOUT_NOW.headline} />
          <div className={`${t.panel} ${t.transition} rounded-[14px] border border-solid p-6 md:p-8 ${t.borderHairline}`}>
            <p className={`${SITE_FONT} ${t.text} text-[15px] font-medium leading-[22px]`}>{ABOUT_NOW.intro}</p>
            <ul
              className={`${SITE_FONT} ${t.muted} mt-4 flex list-disc flex-col gap-2 pl-5 text-[15px] font-normal leading-[22px]`}
            >
              {ABOUT_NOW.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={`${SITE_FONT} ${t.muted} mt-6 text-[13px] font-normal leading-[18px]`}>
              Last updated: {ABOUT_NOW.lastUpdated}
            </p>
          </div>
        </PageSection>

        <PageSection id="connect">
          <SectionHeader theme={t} title={ABOUT_CONNECT.headline} />
          <div className="flex flex-col gap-6">
            <p className={`${SITE_FONT} ${t.muted} text-[15px] font-normal leading-[22px]`}>{ABOUT_CONNECT.body}</p>
            <div className="flex flex-col gap-3">
              {ABOUT_CONNECT.contacts.map((contact) => (
                <ContactLink key={contact.label} contact={contact} theme={t} />
              ))}
            </div>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
