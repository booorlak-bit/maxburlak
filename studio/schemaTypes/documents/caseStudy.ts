import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Project name",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "client", type: "string", title: "Client / company" }),
    defineField({ name: "metaLine", type: "string", title: "Meta line", description: "e.g. Default · B2B SaaS · 2023-2026" }),
    defineField({ name: "headline", type: "text", title: "Headline", rows: 3 }),
    defineField({ name: "summary", type: "text", rows: 4 }),
    defineField({
      name: "tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({ name: "tradeoffs", type: "text", title: "Trade-offs / notes", rows: 4 }),
    defineField({
      name: "metrics",
      type: "array",
      of: [defineArrayMember({ type: "metric" })],
    }),
    defineField({ name: "heroImage", type: "image", options: { hotspot: true } }),
    defineField({ name: "coverImage", type: "image", title: "Cover / pipeline image", options: { hotspot: true } }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Published", value: "published" },
          { title: "Coming soon", value: "soon" },
          { title: "Draft", value: "draft" },
        ],
        layout: "radio",
      },
      initialValue: "published",
    }),
    defineField({
      name: "sortOrder",
      type: "number",
      title: "Sort order",
      description: "Used when not manually ordered on the homepage.",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Sort order", name: "sortOrder", by: [{ field: "sortOrder", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "client", media: "heroImage" },
  },
});
