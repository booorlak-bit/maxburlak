import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudySection = defineType({
  name: "caseStudySection",
  title: "Section",
  type: "object",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "Section ID",
      description: "Used for in-page nav anchors (e.g. challenge, results).",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Heading",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "paragraphs",
      type: "array",
      title: "Intro paragraphs",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "table",
      type: "array",
      title: "List items",
      of: [defineArrayMember({ type: "caseStudyTableRow" })],
    }),
    defineField({
      name: "phases",
      type: "array",
      title: "Phases / timeline",
      of: [defineArrayMember({ type: "caseStudyPhase" })],
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Features",
      of: [defineArrayMember({ type: "caseStudyFeature" })],
    }),
    defineField({
      name: "metrics",
      type: "array",
      title: "Result metrics",
      of: [defineArrayMember({ type: "caseStudyResultMetric" })],
    }),
    defineField({
      name: "numberedList",
      type: "array",
      title: "Numbered list",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "id" },
  },
});
