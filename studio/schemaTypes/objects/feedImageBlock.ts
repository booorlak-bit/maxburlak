import { defineField, defineType } from "sanity";

export const feedImageBlock = defineType({
  name: "feedImageBlock",
  title: "Image",
  type: "object",
  fields: [
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (r) => r.required(),
    }),
    defineField({ name: "alt", type: "string", title: "Alt text" }),
    defineField({
      name: "allowFullscreen",
      type: "boolean",
      title: "Open in fullscreen",
      initialValue: true,
    }),
    defineField({
      name: "static",
      type: "boolean",
      title: "Static (no fullscreen)",
      description: "Image is not clickable.",
      initialValue: false,
    }),
  ],
  preview: {
    select: { media: "image", title: "alt" },
    prepare: ({ media, title }) => ({ title: title || "Image", media }),
  },
});
