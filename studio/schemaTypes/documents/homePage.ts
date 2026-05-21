import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "layout", title: "Layout", default: true },
    { name: "content", title: "Section content" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      hidden: true,
      initialValue: "Homepage",
    }),
    defineField({
      name: "sections",
      type: "array",
      group: "layout",
      title: "Sections (order & visibility)",
      description:
        "Drag to reorder. Toggle visibility per section. Each section pulls content from its own document type below.",
      of: [defineArrayMember({ type: "homeSectionSlot" })],
      validation: (r) => r.min(1),
      initialValue: [
        { _type: "homeSectionSlot", enabled: true, sectionType: "heroImage" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "designPhilosophy" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "focusOutcomes" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "selectedWorks" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "stories" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "hiringPhilosophy" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "approach" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "ventures" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "workedWith" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "bio" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "career" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "focusAndServices" },
        { _type: "homeSectionSlot", enabled: true, sectionType: "contact" },
      ],
    }),
    defineField({
      name: "designPhilosophy",
      type: "object",
      group: "content",
      title: "Design philosophy",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 5 }),
      ],
    }),
    defineField({
      name: "focusSection",
      type: "object",
      group: "content",
      title: "Focus section",
      fields: [
        defineField({ name: "headingLine1", type: "string", title: "Heading line 1" }),
        defineField({ name: "headingLine2", type: "string", title: "Heading line 2" }),
        defineField({
          name: "focusAreas",
          type: "array",
          of: [defineArrayMember({ type: "reference", to: [{ type: "focusArea" }] })],
        }),
      ],
    }),
    defineField({
      name: "selectedWorksHeading",
      type: "string",
      group: "content",
      title: "Selected works — heading",
    }),
    defineField({
      name: "selectedWorksIntro",
      type: "text",
      group: "content",
      title: "Selected works — intro",
      rows: 3,
    }),
    defineField({
      name: "caseStudies",
      type: "array",
      group: "content",
      title: "Case studies (homepage order)",
      of: [defineArrayMember({ type: "reference", to: [{ type: "caseStudy" }] })],
    }),
    defineField({
      name: "stories",
      type: "array",
      group: "content",
      title: "Stories (order)",
      of: [defineArrayMember({ type: "reference", to: [{ type: "story" }] })],
    }),
    defineField({
      name: "ventures",
      type: "array",
      group: "content",
      title: "Ventures (order)",
      of: [defineArrayMember({ type: "reference", to: [{ type: "venture" }] })],
    }),
    defineField({
      name: "testimonials",
      type: "array",
      group: "content",
      title: "Testimonials",
      of: [defineArrayMember({ type: "reference", to: [{ type: "testimonial" }] })],
    }),
    defineField({
      name: "bio",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "bodyLeft", type: "text", rows: 6 }),
        defineField({ name: "bodyRight", type: "text", rows: 6 }),
        defineField({ name: "photo", type: "image", options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: "contact",
      type: "object",
      group: "content",
      fields: [
        defineField({ name: "heading", type: "string" }),
        defineField({ name: "body", type: "text", rows: 4 }),
        defineField({ name: "availabilityLabel", type: "string", title: "Availability badge" }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
});
