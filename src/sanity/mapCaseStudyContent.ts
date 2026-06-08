import type { CaseStudyMediaItem, CaseStudyPageContent, CaseStudySection } from "../content/caseStudyContent";
import type { WorksProject } from "../content/worksPage";
import { urlForSrc } from "./image";
import { blocksToPlainParagraphs, type SanityBlock } from "./portableText";
import type { CaseStudy } from "./types";

function slugKey(value: string, index: number): string {
  return value.trim().toLowerCase().replace(/\s+/g, "-") || `item-${index}`;
}

function mapSections(caseStudy: CaseStudy): CaseStudySection[] {
  return (
    caseStudy.sections
      ?.map((section, index) => {
        const id = section.id?.trim();
        const title = section.title?.trim();
        if (!id || !title) return null;

        const paragraphBlocks = section.paragraphs as SanityBlock[] | undefined;
        const plainParagraphs = blocksToPlainParagraphs(paragraphBlocks);

        return {
          id,
          title,
          paragraphs: plainParagraphs.length > 0 ? plainParagraphs : undefined,
          paragraphBlocks: paragraphBlocks?.length ? paragraphBlocks : undefined,
          table: section.table
            ?.map((row, rowIndex) => ({
              key: slugKey(row.title ?? "", rowIndex),
              title: row.title?.trim() ?? "",
              description: row.description?.trim() ?? "",
            }))
            .filter((row) => row.title),
          phases: section.phases
            ?.map((phase) => ({
              phase: phase.phase?.trim() ?? "",
              title: phase.title?.trim() ?? "",
              description: phase.description?.trim() ?? "",
            }))
            .filter((phase) => phase.title),
          features: section.features
            ?.map((feature) => ({
              title: feature.title?.trim() ?? "",
              body: feature.body?.trim() ?? "",
            }))
            .filter((feature) => feature.title),
          metrics: section.metrics
            ?.map((metric) => ({
              value: metric.value?.trim() ?? "",
              label: metric.label?.trim() ?? "",
              detail: metric.detail?.trim() ?? "",
            }))
            .filter((metric) => metric.value && metric.label),
          numberedList: section.numberedList?.map((item) => item?.trim()).filter(Boolean) as string[] | undefined,
          media: section.media
            ?.map((item): CaseStudyMediaItem | null => {
              if (item._type === "caseStudyVideo") {
                const src = item.videoUrl?.trim();
                if (!src) return null;
                return {
                  type: "video",
                  src,
                  poster: urlForSrc(item.poster, 1400),
                  alt: item.alt?.trim() || undefined,
                  caption: item.caption?.trim() || undefined,
                };
              }
              const src = urlForSrc(item.image, 1400);
              if (!src) return null;
              return {
                type: "image",
                src,
                alt: item.alt?.trim() || undefined,
                caption: item.caption?.trim() || undefined,
              };
            })
            .filter((item): item is CaseStudyMediaItem => item !== null),
        } satisfies CaseStudySection;
      })
      .filter((section): section is CaseStudySection => section !== null) ?? []
  );
}

export function hasCmsCaseStudyContent(caseStudy: CaseStudy | null | undefined): boolean {
  return Boolean(caseStudy?.sections?.length);
}

export function mapCaseStudyToPageContent(
  caseStudy: CaseStudy,
  project: WorksProject,
): CaseStudyPageContent {
  const slug = caseStudy.slug?.current?.trim() || project.caseStudySlug;
  const sections = mapSections(caseStudy);
  const nav =
    caseStudy.nav
      ?.map((item) => ({
        id: item.id?.trim() ?? "",
        label: item.label?.trim() ?? "",
      }))
      .filter((item) => item.id && item.label) ??
    sections.map((section) => ({ id: section.id, label: section.title }));

  return {
    slug,
    pageTitle: caseStudy.pageTitle?.trim() || project.title,
    lede: caseStudy.lede?.trim() || project.showcaseSummary,
    published: caseStudy.publishedLabel?.trim() || project.years,
    visitUrl: caseStudy.visitUrl?.trim() || undefined,
    visitLabel: caseStudy.visitLabel?.trim() || undefined,
    meta: {
      role: caseStudy.role?.trim() || project.role,
      timeline: caseStudy.years?.trim() || project.years,
      team: caseStudy.teamMeta?.trim() || project.tags.join(", "),
      stage: caseStudy.stageMeta?.trim() || project.tags[0] || "—",
    },
    nav,
    sections,
  };
}

export function isCaseStudyPageVisible(caseStudy: CaseStudy | null | undefined): boolean {
  if (!caseStudy) return true;
  if (caseStudy.status === "draft") return false;
  return caseStudy.showCaseStudyPage !== false;
}
