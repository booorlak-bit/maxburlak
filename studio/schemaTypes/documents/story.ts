import { defineField, defineType } from "sanity";

export const story = defineType({
  name: "story",
  title: "Story",
  type: "document",
  description: "Instagram-style story slide on the homepage.",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "subtitle", type: "string" }),
    defineField({ name: "body", type: "text", rows: 4 }),
    defineField({ name: "caption", type: "text", title: "How I handled it", rows: 4 }),
    defineField({ name: "backgroundImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "icon", type: "image", title: "Icon (optional)" }),
    defineField({ name: "sortOrder", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { title: "Sort order", name: "sortOrder", by: [{ field: "sortOrder", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "subtitle", media: "backgroundImage" },
  },
});
