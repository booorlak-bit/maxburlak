import { defineField, defineType } from "sanity";

export const feedVideoBlock = defineType({
  name: "feedVideoBlock",
  title: "Video",
  type: "object",
  fields: [
    defineField({
      name: "videoUrl",
      type: "url",
      title: "Video URL",
      description: "Direct MP4/WebM URL or embed-friendly link.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "poster",
      type: "image",
      title: "Poster image",
      options: { hotspot: true },
    }),
    defineField({ name: "alt", type: "string", title: "Alt text" }),
  ],
  preview: {
    select: { title: "alt", subtitle: "videoUrl" },
    prepare: ({ title, subtitle }) => ({ title: title || "Video", subtitle }),
  },
});
