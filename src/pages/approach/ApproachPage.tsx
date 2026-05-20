import type { ReactNode } from "react";
import {
  APPROACH_HERO,
  ENGAGEMENT_MODELS,
  LOOP_CYCLE_NOTE,
  LOOP_FLOW,
  LOOP_STEPS,
  MODEL_OVERVIEW,
  MULTIPLIER_PHASES,
  OBSOLETE,
  REQUIREMENTS,
  REQUIREMENTS_INTRO,
  TIME_ALLOCATION,
} from "../../content/approachPage";
import { getSiteTheme, SITE_FONT } from "../../components/site/siteTheme";
import { DataTable, PageSection, SectionHeader, TimeBars } from "./helpers";

type ApproachPageProps = {
  isDark: boolean;
};

function Prose({ theme: t, children }: { theme: ReturnType<typeof getSiteTheme>; children: ReactNode }) {
  return <div className={`${SITE_FONT} ${t.text} ${t.body} ${t.transition}`}>{children}</div>;
}

function PhaseBlock({
  theme: t,
  title,
  duration,
  human,
  ai,
}: {
  theme: ReturnType<typeof getSiteTheme>;
  title: string;
  duration: string;
  human: string;
  ai: string;
}) {
  return (
    <article className={`${t.card} ${t.transition} relative border border-solid p-6 md:p-8 ${t.borderHairline}`}>
      <h4 className={`${t.h3}`}>
        {title} <span className={`${t.muted} ${t.caption} font-normal`}>({duration})</span>
      </h4>
      <p className={`${t.muted} ${t.caption} mt-4`}>
        <span className={`${t.text} font-medium`}>I do: </span>
        {human}
      </p>
      <p className={`${t.muted} ${t.caption} mt-2`}>
        <span className={`${t.aiAccent} font-medium`}>AI does: </span>
        {ai}
      </p>
    </article>
  );
}

function ModelCard({
  theme: t,
  model,
}: {
  theme: ReturnType<typeof getSiteTheme>;
  model: (typeof MODEL_OVERVIEW)[number];
}) {
  return (
    <article className={`${t.card} ${t.transition} relative flex flex-col border border-solid p-6 md:p-8 ${t.borderHairline}`}>
      <p className="text-2xl" aria-hidden>
        {model.icon}
      </p>
      <h3 className={`${t.h3} mt-4`}>{model.title}</h3>
      <p className={`${t.muted} ${t.label} mt-1`}>&ldquo;{model.tagline}&rdquo;</p>
      <p className={`${t.muted} ${t.caption} mt-4`}>{model.description}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className={`${t.cardInset} ${t.transition} rounded-2xl p-4`}>
          <p className={`${t.label} ${t.muted} mb-2`}>I do</p>
          <ul className={`${t.caption} ${t.text} list-inside list-disc space-y-1`}>
            {model.iDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={`${t.cardInset} ${t.transition} rounded-2xl p-4`}>
          <p className={`${t.label} ${t.aiAccent} mb-2`}>AI does</p>
          <ul className={`${t.caption} ${t.text} list-inside list-disc space-y-1`}>
            {model.aiDoes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className={`${t.muted} ${t.caption} mt-6 border-t border-solid pt-4 ${t.borderHairline}`}>
        <span className={`${t.text} font-medium`}>Best for: </span>
        {model.bestFor}
      </p>
    </article>
  );
}

export function ApproachPage({ isDark }: ApproachPageProps) {
  const t = getSiteTheme(isDark);

  return (
    <div
      data-route="approach"
      className={`w-full shrink-0 rounded-[20px] ${t.surface} ${t.transition} my-0 md:my-[24px]`}
    >
      <div className="mx-auto flex w-full max-w-[900px] flex-col gap-10 px-4 pb-20 pt-8 md:gap-14 md:px-8 md:pb-28 md:pt-12">
        <PageSection>
          <SectionHeader theme={t} label={APPROACH_HERO.label} title={APPROACH_HERO.title} subtitle={APPROACH_HERO.subtitle} />
        </PageSection>

        <PageSection id="obsolete">
          <SectionHeader theme={t} id="obsolete-heading" title={OBSOLETE.headline} />
          <Prose theme={t}>
            {OBSOLETE.bodyParagraphs.map((paragraph) => (
              <p key={paragraph} className={`${t.muted} mb-4 last:mb-0`}>
                {paragraph}
              </p>
            ))}
          </Prose>
          <p className={`${SITE_FONT} ${t.text} ${t.bodyMedium} mt-8`}>{OBSOLETE.deadLabel}</p>
          <ul className="mt-4 flex flex-col gap-3">
            {OBSOLETE.practices.map((item) => (
              <li key={item} className={`${SITE_FONT} flex gap-3 ${t.body}`}>
                <span className="shrink-0 text-[#d4183d]" aria-hidden>
                  ✕
                </span>
                <span className={`${t.muted} line-through`}>{item}</span>
              </li>
            ))}
          </ul>
        </PageSection>

        <PageSection>
          <div className="flex flex-col gap-6">
            {MODEL_OVERVIEW.map((model) => (
              <ModelCard key={model.id} theme={t} model={model} />
            ))}
          </div>
        </PageSection>

        <PageSection id="multiplier">
          <SectionHeader theme={t} title="Multiplier Model" subtitle="Phase breakdown" />
          <div className="flex flex-col gap-4">
            {MULTIPLIER_PHASES.map((phase) => (
              <PhaseBlock
                key={phase.id}
                theme={t}
                title={phase.title}
                duration={phase.duration}
                human={phase.human}
                ai={phase.ai}
              />
            ))}
          </div>
          <h3 className={`${SITE_FONT} ${t.text} ${t.h3} mt-12`}>Time allocation shift</h3>
          <div className="mt-6 grid gap-8 md:grid-cols-2">
            <TimeBars label={TIME_ALLOCATION.beforeLabel} rows={TIME_ALLOCATION.before} theme={t} variant="before" />
            <TimeBars label={TIME_ALLOCATION.afterLabel} rows={TIME_ALLOCATION.after} theme={t} variant="after" />
          </div>
        </PageSection>

        <PageSection id="loop">
          <SectionHeader theme={t} title="Loop Model" subtitle="Cycle flow" />
          <p className={`${SITE_FONT} ${t.text} ${t.body} ${t.transition} break-words`}>{LOOP_FLOW}</p>
          <div className="mt-8">
            <DataTable
              theme={t}
              minWidth={480}
              columns={["Step", "Duration", "What happens"]}
              rows={LOOP_STEPS.map((row) => ({
                key: row.step,
                cells: [row.step, row.duration, row.detail],
              }))}
            />
          </div>
          <p className={`${SITE_FONT} ${t.muted} ${t.caption} mt-4`}>
            <span className="font-medium">Total cycle time:</span> {LOOP_CYCLE_NOTE}
          </p>
        </PageSection>

        <PageSection id="requirements">
          <SectionHeader theme={t} title="Requirements" subtitle={REQUIREMENTS_INTRO} />
          <ol className="mt-6 flex flex-col gap-6">
            {REQUIREMENTS.map((req, index) => (
              <li key={req.title} className={`${SITE_FONT} ${t.text}`}>
                <h3 className={`${t.bodyMedium}`}>
                  {index + 1}. {req.title}
                </h3>
                <p className={`${t.muted} ${t.caption} mt-2`}>{req.description}</p>
              </li>
            ))}
          </ol>
        </PageSection>

        <PageSection id="engagement">
          <SectionHeader theme={t} title="Engagement models" />
          <div className="mt-6 flex flex-col gap-6">
            {ENGAGEMENT_MODELS.map((model) => (
              <article key={model.title} className={`${t.card} ${t.transition} relative border border-solid p-6 md:p-8 ${t.borderHairline}`}>
                <h3 className={`${t.h3}`}>{model.title}</h3>
                <p className={`${t.muted} ${t.label} mt-2`}>{model.duration}</p>
                <p className={`${t.muted} ${t.caption} mt-4`}>{model.description}</p>
                <p className={`${t.muted} ${t.caption} mt-4 border-t border-solid pt-4 ${t.borderHairline}`}>
                  <span className={`${t.text} font-medium`}>Best for: </span>
                  {model.bestFor}
                </p>
              </article>
            ))}
          </div>
        </PageSection>

      </div>
    </div>
  );
}
