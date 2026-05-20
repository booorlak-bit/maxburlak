import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({ name: "company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "period", type: "string", title: "Period", description: "e.g. Jan 2023 — Jan 2026 · Full-time" }),
    defineField({ name: "projects", type: "string", title: "Projects line (optional)" }),
    defineField({
      name: "logoKey",
      type: "string",
      title: "Logo",
      description: "Maps to built-in logo component in the site.",
      options: {
        list: [
          { title: "Default.com", value: "default" },
          { title: "Apollo.io", value: "apollo" },
          { title: "P2P Validator", value: "p2p" },
          { title: "Commun", value: "commun" },
          { title: "Kinescope", value: "kinescope" },
        ],
      },
    }),
    defineField({ name: "sortOrder", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { title: "Sort order", name: "sortOrder", by: [{ field: "sortOrder", direction: "asc" }] },
  ],
  preview: {
    select: { title: "company", subtitle: "role" },
  },
});
