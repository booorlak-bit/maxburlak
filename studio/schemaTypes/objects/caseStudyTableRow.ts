import { defineField, defineType } from "sanity";

export const caseStudyTableRow = defineType({
  name: "caseStudyTableRow",
  title: "List item",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", title: "Description", rows: 4 }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
});
