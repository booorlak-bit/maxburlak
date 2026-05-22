import { defineField, defineType } from "sanity";

export const feedLinkCard = defineType({
  name: "feedLinkCard",
  title: "Link preview",
  type: "object",
  fields: [
    defineField({
      name: "url",
      type: "url",
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", type: "string", title: "Title override" }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({
      name: "image",
      type: "image",
      title: "Preview image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "url", media: "image" },
    prepare: ({ title, subtitle, media }) => ({
      title: title || subtitle || "Link preview",
      subtitle,
      media,
    }),
  },
});
