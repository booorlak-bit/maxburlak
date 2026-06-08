import { defineField, defineType } from "sanity";

export const caseStudyImage = defineType({
  name: "caseStudyImage",
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
    defineField({ name: "caption", type: "string", title: "Caption" }),
  ],
  preview: {
    select: { media: "image", title: "alt", subtitle: "caption" },
    prepare: ({ media, title, subtitle }) => ({ title: title || "Image", subtitle, media }),
  },
});
