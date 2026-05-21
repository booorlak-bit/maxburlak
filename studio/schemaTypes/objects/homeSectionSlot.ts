import { defineField, defineType } from "sanity";

const SECTION_OPTIONS = [
  { title: "Hero image & lifestyle", value: "heroImage" },
  { title: "Design philosophy", value: "designPhilosophy" },
  { title: "Focus & service areas", value: "focusOutcomes" },
  { title: "Selected works", value: "selectedWorks" },
  { title: "Stories (portfolio)", value: "stories" },
  { title: "Hiring philosophy", value: "hiringPhilosophy" },
  { title: "Approach", value: "approach" },
  { title: "Ventures", value: "ventures" },
  { title: "People I've worked with", value: "workedWith" },
  { title: "Bio", value: "bio" },
  { title: "Career path", value: "career" },
  { title: "Focus areas & services", value: "focusAndServices" },
  { title: "Contact", value: "contact" },
] as const;

export const homeSectionSlot = defineType({
  name: "homeSectionSlot",
  title: "Homepage section",
  type: "object",
  fields: [
    defineField({
      name: "enabled",
      type: "boolean",
      title: "Visible on homepage",
      initialValue: true,
    }),
    defineField({
      name: "sectionType",
      type: "string",
      title: "Section",
      options: { list: [...SECTION_OPTIONS], layout: "dropdown" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "titleOverride",
      type: "string",
      title: "Heading override",
      description: "Optional — replaces the default section heading in the UI when set.",
    }),
  ],
  preview: {
    select: { sectionType: "sectionType", enabled: "enabled", titleOverride: "titleOverride" },
    prepare: ({ sectionType, enabled, titleOverride }) => {
      const label =
        SECTION_OPTIONS.find((o) => o.value === sectionType)?.title ?? sectionType ?? "Section";
      return {
        title: titleOverride || label,
        subtitle: enabled === false ? "Hidden" : "Visible",
      };
    },
  },
});
