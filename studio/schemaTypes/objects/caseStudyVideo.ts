import { defineField, defineType } from "sanity";

export const caseStudyVideo = defineType({
  name: "caseStudyVideo",
  title: "Video",
  type: "object",
  fields: [
    defineField({
      name: "videoUrl",
      type: "url",
      title: "Video URL",
      description: "Direct MP4/WebM URL.",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "poster",
      type: "image",
      title: "Poster image",
      options: { hotspot: true },
    }),
    defineField({ name: "alt", type: "string", title: "Alt text" }),
    defineField({ name: "caption", type: "string", title: "Caption" }),
  ],
  preview: {
    select: { title: "alt", subtitle: "videoUrl", media: "poster" },
    prepare: ({ title, subtitle, media }) => ({ title: title || "Video", subtitle, media }),
  },
});
