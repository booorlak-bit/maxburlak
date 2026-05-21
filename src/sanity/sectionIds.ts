/** Homepage section keys — keep in sync with `studio/schemaTypes/objects/homeSectionSlot.ts` */
export const HOME_SECTION_IDS = [
  "heroImage",
  "designPhilosophy",
  "focusOutcomes",
  "selectedWorks",
  "stories",
  "hiringPhilosophy",
  "approach",
  "ventures",
  "workedWith",
  "bio",
  "career",
  "focusAndServices",
  "contact",
] as const;

export type HomeSectionId = (typeof HOME_SECTION_IDS)[number];

export const HOME_SECTION_LABELS: Record<HomeSectionId, string> = {
  heroImage: "Hero image & lifestyle",
  designPhilosophy: "Design philosophy",
  focusOutcomes: "Focus & service areas",
  selectedWorks: "Selected works",
  stories: "Stories (portfolio)",
  hiringPhilosophy: "Hiring philosophy",
  approach: "Approach",
  ventures: "Ventures",
  workedWith: "People I've worked with",
  bio: "Bio",
  career: "Career path",
  focusAndServices: "Focus areas & services",
  contact: "Contact",
};

export const DEFAULT_HOME_SECTIONS: { sectionType: HomeSectionId; enabled: boolean }[] =
  HOME_SECTION_IDS.map((sectionType) => ({ sectionType, enabled: true }));
