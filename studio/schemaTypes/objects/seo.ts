import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({ name: "title", type: "string", title: "Meta title" }),
    defineField({ name: "description", type: "text", title: "Meta description", rows: 3 }),
    defineField({
      name: "ogImage",
      type: "image",
      title: "Open Graph image",
      options: { hotspot: true },
    }),
    defineField({
      name: "noIndex",
      type: "boolean",
      title: "Hide from search engines",
      initialValue: false,
    }),
  ],
});
