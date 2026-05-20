import { defineArrayMember, defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  description: "Content pages for /works, /approach, /ventures, /feed, /about, etc.",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "navLabel",
      type: "string",
      title: "Navigation label",
      description: "Label in the header nav. Leave empty to use title.",
    }),
    defineField({
      name: "showInNav",
      type: "boolean",
      title: "Show in navigation",
      initialValue: true,
    }),
    defineField({
      name: "seo",
      type: "seo",
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Content",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Published", value: "published" },
          { title: "Draft", value: "draft" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
  },
});
