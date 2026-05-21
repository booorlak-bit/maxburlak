import { defineArrayMember, defineField, defineType } from "sanity";

export const worksPage = defineType({
  name: "worksPage",
  title: "Works page",
  type: "document",
  fields: [
    defineField({
      name: "heroLabel",
      type: "string",
      title: "Hero label",
      initialValue: "WORKS",
    }),
    defineField({
      name: "heroTitle",
      type: "string",
      title: "Hero title",
      initialValue: "Selected projects",
    }),
    defineField({
      name: "heroSubtitle",
      type: "text",
      title: "Hero subtitle",
      rows: 3,
    }),
    defineField({
      name: "loadMoreBatch",
      type: "number",
      title: "Load more batch size",
      description: "How many additional projects to reveal per click.",
      initialValue: 2,
      validation: (r) => r.min(1).max(10),
    }),
    defineField({
      name: "featuredProjects",
      type: "array",
      title: "Featured projects",
      description: "Shown on the works page immediately. Drag to reorder.",
      of: [defineArrayMember({ type: "reference", to: [{ type: "caseStudy" }] })],
    }),
    defineField({
      name: "moreProjects",
      type: "array",
      title: "More projects",
      description: "Revealed via “Load more”. Drag to reorder.",
      of: [defineArrayMember({ type: "reference", to: [{ type: "caseStudy" }] })],
    }),
    defineField({
      name: "moreWorksTitle",
      type: "string",
      title: "More works heading",
      description: "Heading at the bottom of case study pages.",
      initialValue: "More works",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Works page" }),
  },
});
