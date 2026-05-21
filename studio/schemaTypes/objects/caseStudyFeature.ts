import { defineField, defineType } from "sanity";

export const caseStudyFeature = defineType({
  name: "caseStudyFeature",
  title: "Feature",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (r) => r.required() }),
    defineField({ name: "body", type: "text", title: "Body", rows: 4 }),
  ],
  preview: {
    select: { title: "title", subtitle: "body" },
  },
});
