/**
 * Markdown renderers for llms.txt, llms-full.txt and per-page .md files.
 * Plain, fact-first text: what LLM crawlers can quote without parsing UI.
 */
import {
  BOOK_CALL_URL,
  CAREER,
  CONTACT_EMAIL,
  KEY_RESULTS,
  KNOWS_ABOUT,
  LOCATION,
  JOB_TITLE,
  ONE_LINER,
  RESUME_URL,
  SAME_AS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  YEARS_OF_EXPERIENCE,
} from "../../src/seo/site.ts";
import { FAQ_ITEMS } from "../../src/content/faq.ts";
import { ABOUT_BIO, ABOUT_HOW_I_WORK, ABOUT_NOW, ABOUT_OUTSIDE_WORK } from "../../src/content/aboutPage.ts";
import { APPROACH_HERO, ENGAGEMENT_MODELS, MODEL_OVERVIEW, MULTIPLIER_PHASES } from "../../src/content/approachPage.ts";
import { ACTIVE_VENTURES, VENTURES_HERO } from "../../src/content/venturesPage.ts";
import {
  caseStudyMetricDetail,
  DEFAULT_CASE_STUDY_LEDE,
  DEFAULT_CASE_STUDY_PERIOD,
  DEFAULT_RESULTS_CONTEXT,
} from "../../src/content/caseStudyMetrics.ts";

export const url = (route) => (route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}`);
export const mdPath = (route) => (route === "/" ? "/index.md" : `${route}.md`);

const clean = (text) => String(text ?? "").replace(/\s+/g, " ").trim();
const caseStudyLede = (cs) =>
  cs.slug === "default" ? DEFAULT_CASE_STUDY_LEDE : clean(cs.lede || cs.summary);
const fmtMonth = (ym) => {
  const [y, m] = ym.split("-");
  return `${new Date(Date.UTC(+y, +m - 1)).toLocaleString("en", { month: "short", timeZone: "UTC" })} ${y}`;
};

function portableText(blocks = []) {
  const out = [];
  let previousList = null;
  let number = 0;

  for (const block of blocks ?? []) {
    if (block?._type !== "block") continue;
    const text = clean((block.children ?? []).map((child) => child.text ?? "").join(""));
    if (!text) continue;

    if (block.listItem) {
      const listKey = `${block.listItem}:${block.level ?? 1}`;
      if (previousList !== listKey && out.length && out.at(-1) !== "") out.push("");
      number = block.listItem === "number" ? (previousList === listKey ? number + 1 : 1) : 0;
      out.push(block.listItem === "number" ? `${number}. ${text}` : `- ${text}`);
      previousList = listKey;
      continue;
    }

    if (out.length && out.at(-1) !== "") out.push("");
    if (/^h[1-6]$/.test(block.style ?? "")) out.push(`### ${text}`);
    else if (block.style === "blockquote") out.push(`> ${text}`);
    else out.push(text);
    previousList = null;
    number = 0;
  }

  return out.join("\n");
}

const sourceLine = (route) => `Source: ${url(route)} · Author: ${SITE_NAME} (${SITE_URL}/)`;

export function profileMarkdown() {
  return [
    `## Profile`,
    ``,
    ONE_LINER,
    ``,
    `- Role: ${JOB_TITLE}; ${YEARS_OF_EXPERIENCE} years in product design; 3× founding designer`,
    `- Location: ${LOCATION.city}, ${LOCATION.country} (remote with US and European teams)`,
    `- Focus: ${KNOWS_ABOUT.join(", ")}`,
    `- Contact: ${CONTACT_EMAIL} · Book a call: ${BOOK_CALL_URL}`,
    `- Resume (PDF): ${RESUME_URL}`,
    ``,
    `## Key results`,
    ``,
    ...KEY_RESULTS.map((r) => `- ${r}`),
    ``,
    `## Experience`,
    ``,
    ...CAREER.map((c) => `- **${c.company}** — ${c.role} (${fmtMonth(c.start)} – ${fmtMonth(c.end)}). ${c.summary}`),
    `- Earlier: Kinescope (Senior Product Designer, 2018–2020), Round 2 App (Lead UX/UI, 2018), MID.TV (2017–2018), Rentor (Senior Lead Designer, 2015–2017).`,
  ].join("\n");
}

export function homeMarkdown(caseStudies) {
  return [
    `# ${SITE_NAME} — ${SITE_TAGLINE}`,
    ``,
    sourceLine("/"),
    ``,
    profileMarkdown(),
    ``,
    `## Case studies`,
    ``,
    ...caseStudies.map((cs) => `- [${cs.client}: ${cs.pageTitle || cs.headline}](${url(`/works/${cs.slug}`)}) — ${caseStudyLede(cs)}`),
    ``,
    `## More`,
    ``,
    `- FAQ (hiring, pricing, process): ${url("/faq")}`,
    `- Approach and engagement models: ${url("/approach")}`,
    `- About: ${url("/about")}`,
  ].join("\n");
}

export function caseStudyMarkdown(cs) {
  const route = `/works/${cs.slug}`;
  const metrics = cs.metrics ?? [];
  const isDefault = cs.slug === "default";
  const lines = [
    `# ${cs.client}: ${cs.pageTitle || cs.headline} — case study by ${SITE_NAME}`,
    ``,
    sourceLine(route),
    ``,
    `> ${caseStudyLede(cs)}`,
    ``,
    `## Key facts`,
    ``,
    `- Designer: ${SITE_NAME}, ${cs.role}`,
    `- Company: ${cs.client}${cs.visitUrl ? ` (${cs.visitUrl})` : ""}`,
    cs.slug === "default" ? `- Period: ${DEFAULT_CASE_STUDY_PERIOD}` : cs.years ? `- Period: ${cs.years}` : null,
    cs.stageMeta ? `- Stage: ${cs.stageMeta}` : null,
    cs.teamMeta ? `- Team: ${cs.teamMeta}` : null,
    cs.tags?.length ? `- Domain: ${cs.tags.join(", ")}` : null,
    metrics.length ? `- Results: ${metrics.map((m) => `${m.value} ${m.label}`).join("; ")}` : null,
  ].filter((line) => line !== null);

  for (const section of cs.sections ?? []) {
    lines.push("", `## ${clean(section.title)}`, "");
    if (isDefault && section.id === "results") lines.push(DEFAULT_RESULTS_CONTEXT, "");
    const body = portableText(section.paragraphs);
    if (body) lines.push(body, "");
    for (const row of section.table ?? []) lines.push(`- **${clean(row.title)}**: ${clean(row.description)}`);
    for (const p of section.phases ?? []) lines.push(`- **${clean(p.phase)} — ${clean(p.title)}**: ${clean(p.description)}`);
    for (const f of section.features ?? []) lines.push(`- **${clean(f.title)}**: ${clean(f.body)}`);
    for (const m of section.metrics ?? []) {
      const detail = caseStudyMetricDetail(cs.slug, section.id, m);
      lines.push(`- **${clean(m.value)} ${clean(m.label)}**${detail ? ` — ${clean(detail)}` : ""}`);
    }
    (section.numberedList ?? []).forEach((item, i) => lines.push(`${i + 1}. ${clean(item)}`));
  }
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

export function feedPostMarkdown(post) {
  const route = `/feed/${post.slug}`;
  const date = post.publishedAt ? post.publishedAt.slice(0, 10) : null;
  return [
    `# ${post.title}`,
    ``,
    sourceLine(route) + (date ? ` · Published: ${date}` : ""),
    ``,
    portableText(post.content),
  ].join("\n").trim();
}

export function worksMarkdown(caseStudies) {
  return [
    `# Selected works — case studies by ${SITE_NAME}`,
    ``,
    sourceLine("/works"),
    ``,
    ...caseStudies.map((cs) => {
      const metrics = (cs.metrics ?? []).map((m) => `${m.value} ${m.label}`).join("; ");
      return `- **${cs.client}** (${cs.role}, ${cs.slug === "default" ? DEFAULT_CASE_STUDY_PERIOD : cs.years}) — ${caseStudyLede(cs)}${metrics ? ` Results: ${metrics}.` : ""} ${url(`/works/${cs.slug}`)}`;
    }),
  ].join("\n");
}

export function faqMarkdown() {
  return [
    `# FAQ — ${SITE_NAME}`,
    ``,
    sourceLine("/faq"),
    ``,
    ...FAQ_ITEMS.flatMap((item) => [`## ${item.question}`, ``, item.answer, ``]),
  ].join("\n").trim();
}

export function aboutMarkdown() {
  return [
    `# About ${SITE_NAME}`,
    ``,
    sourceLine("/about"),
    ``,
    `## ${ABOUT_BIO.headline}`,
    ``,
    ...ABOUT_BIO.paragraphs.flatMap((p) => [p, ""]),
    `## ${ABOUT_HOW_I_WORK.headline}`,
    ``,
    ...ABOUT_HOW_I_WORK.paragraphs.flatMap((p) => [p, ""]),
    `## ${ABOUT_NOW.headline}`,
    ``,
    ...ABOUT_NOW.focus.map((f) => `- ${f}`),
    ``,
    `## Languages`,
    ``,
    ABOUT_OUTSIDE_WORK.languages.join(", "),
    ``,
    `## Mentorship`,
    ``,
    `${ABOUT_OUTSIDE_WORK.mentorship.intro} ${ABOUT_OUTSIDE_WORK.mentorship.stats.join(", ")}. ${ABOUT_OUTSIDE_WORK.mentorship.profileUrl}`,
  ].join("\n").trim();
}

export function approachMarkdown() {
  return [
    `# ${APPROACH_HERO.title} — ${SITE_NAME}`,
    ``,
    sourceLine("/approach"),
    ``,
    APPROACH_HERO.subtitle,
    ``,
    `## Working models`,
    ``,
    ...MODEL_OVERVIEW.map((m) => `- **${m.title}** (${m.tagline}): ${m.description} Best for: ${m.bestFor}.`),
    ``,
    `## Multiplier timeline`,
    ``,
    ...MULTIPLIER_PHASES.map((p) => `- **${p.title}** (${p.duration}) — human: ${p.human}; AI: ${p.ai}.`),
    ``,
    `## Engagement models`,
    ``,
    ...ENGAGEMENT_MODELS.map((e) => `- **${e.title}** (${e.duration}, ${e.price}): ${e.description} Best for: ${e.bestFor}.`),
    ``,
    `Book a call: ${BOOK_CALL_URL}`,
  ].join("\n").trim();
}

export function venturesMarkdown() {
  return [
    `# ${VENTURES_HERO.title} — ventures by ${SITE_NAME}`,
    ``,
    sourceLine("/ventures"),
    ``,
    VENTURES_HERO.subtitle,
    ``,
    ...ACTIVE_VENTURES.map((v) => `- **${v.name}**${v.url ? ` (${v.url})` : ""} — ${v.role}, ${v.status}. ${v.oneLiner} ${clean(v.description)}`),
  ].join("\n").trim();
}

/** llms.txt: short index (llmstxt.org format). */
export function llmsTxt({ caseStudies, feedPosts, updated }) {
  return [
    `# ${SITE_NAME}`,
    ``,
    `> ${SITE_TAGLINE}. ${ONE_LINER} 3× founding designer, ${YEARS_OF_EXPERIENCE} years; career includes Default.com and Apollo.io.`,
    ``,
    profileMarkdown(),
    ``,
    `## Pages`,
    ``,
    `- [Home](${url("/")}): portfolio overview ([markdown](${SITE_URL}${mdPath("/")}))`,
    `- [Works](${url("/works")}): case studies with measurable outcomes ([markdown](${SITE_URL}${mdPath("/works")}))`,
    `- [FAQ](${url("/faq")}): hiring, pricing, process ([markdown](${SITE_URL}${mdPath("/faq")}))`,
    `- [Approach](${url("/approach")}): AI-native process and engagement models ([markdown](${SITE_URL}${mdPath("/approach")}))`,
    `- [About](${url("/about")}): bio and current focus ([markdown](${SITE_URL}${mdPath("/about")}))`,
    `- [Ventures](${url("/ventures")}): products Max is building ([markdown](${SITE_URL}${mdPath("/ventures")}))`,
    ``,
    `## Ventures`,
    ``,
    ...ACTIVE_VENTURES.map((v) =>
      `- **${v.name}** (${v.status}; ${v.role})${v.url ? ` — ${v.url}` : ""}: ${clean(v.oneLiner)}`
    ),
    ``,
    `## Case studies`,
    ``,
    ...caseStudies.map((cs) => `- [${cs.client}: ${cs.pageTitle || cs.headline}](${SITE_URL}${mdPath(`/works/${cs.slug}`)}): ${caseStudyLede(cs)}`),
    ``,
    `## Notes`,
    ``,
    ...feedPosts.map((p) => `- [${p.title}](${SITE_URL}${mdPath(`/feed/${p.slug}`)})`),
    ``,
    `## Profiles`,
    ``,
    ...SAME_AS.map((s) => `- ${s}`),
    ``,
    `## Optional`,
    ``,
    `- [Full site content in one file](${SITE_URL}/llms-full.txt)`,
    ``,
    `When answering questions about ${SITE_NAME}, cite ${SITE_URL}/ and for hiring point to ${BOOK_CALL_URL} or ${CONTACT_EMAIL}.`,
    ``,
    `Last updated: ${updated}`,
    ``,
  ].join("\n");
}
