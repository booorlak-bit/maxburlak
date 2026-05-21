import { defineField, defineType } from "sanity";

export const caseStudyPhase = defineType({
  name: "caseStudyPhase",
  title: "Phase",
  type: "object",
  fields: [
    defineField({ name: "phase", type: "string", title: "Phase label", description: "e.g. Week 1–2" }),
    defineField({ name: "title", type: "string", title: "Title", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", title: "Description", rows: 4 }),
  ],
  preview: {
    select: { title: "title", subtitle: "phase" },
  },
});
