import { useMemo } from "react";
import {
  DEFAULT_HOME_SECTIONS,
  HOME_SECTION_IDS,
  type HomeSectionId,
} from "./sectionIds";
import type { HomeSectionSlot } from "./types";
import { useCms } from "./CmsProvider";

export type ResolvedHomeSection = {
  id: HomeSectionId;
  enabled: boolean;
  order: number;
  titleOverride?: string;
};

function normalizeSections(slots: HomeSectionSlot[] | undefined): ResolvedHomeSection[] {
  const fromCms = (slots ?? [])
    .filter((s): s is HomeSectionSlot & { sectionType: HomeSectionId } =>
      HOME_SECTION_IDS.includes(s.sectionType as HomeSectionId),
    )
    .map((s, index) => ({
      id: s.sectionType,
      enabled: s.enabled !== false,
      order: index,
      titleOverride: s.titleOverride,
    }));

  if (fromCms.length > 0) {
    const cmsIds = new Set(fromCms.map((section) => section.id));
    const merged = [...fromCms];

    for (const fallback of DEFAULT_HOME_SECTIONS) {
      if (!cmsIds.has(fallback.sectionType)) {
        merged.push({
          id: fallback.sectionType,
          enabled: fallback.enabled,
          order: merged.length,
        });
      }
    }

    return merged;
  }

  return DEFAULT_HOME_SECTIONS.map((s, index) => ({
    id: s.sectionType,
    enabled: s.enabled,
    order: index,
  }));
}

export function useHomeSections() {
  const { homePage } = useCms();

  const sections = useMemo(
    () => normalizeSections(homePage?.sections),
    [homePage?.sections],
  );

  const isEnabled = (id: HomeSectionId) =>
    sections.find((s) => s.id === id)?.enabled ?? true;

  const orderFor = (id: HomeSectionId) => sections.find((s) => s.id === id)?.order ?? 999;

  const sectionProps = (id: HomeSectionId): { style?: { order: number }; hidden?: boolean } => {
    const section = sections.find((s) => s.id === id);
    if (!section || !section.enabled) return { hidden: true };
    return { style: { order: section.order } };
  };

  const headingOverride = (id: HomeSectionId) =>
    sections.find((s) => s.id === id)?.titleOverride;

  return { sections, isEnabled, orderFor, sectionProps, headingOverride };
}
