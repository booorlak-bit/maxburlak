import { defineField, defineType } from "sanity";

export const caseStudyNavItem = defineType({
  name: "caseStudyNavItem",
  title: "Nav item",
  type: "object",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "Anchor ID",
      description: "Must match a section ID below (e.g. challenge, results).",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "label",
      type: "string",
      title: "Label",
      validation: (r) => r.required(),
    }),
  ],
  preview: {
    select: { title: "label", subtitle: "id" },
  },
});
