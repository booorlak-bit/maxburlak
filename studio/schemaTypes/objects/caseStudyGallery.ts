import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudyGallery = defineType({
  name: "caseStudyGallery",
  title: "Gallery",
  type: "object",
  fields: [
    defineField({
      name: "images",
      type: "array",
      title: "Images",
      validation: (r) => r.min(1),
      of: [
        defineArrayMember({
          type: "object",
          name: "galleryImage",
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
            prepare: ({ media, title, subtitle }) => ({ title: title || "Gallery image", subtitle, media }),
          },
        }),
      ],
    }),
    defineField({
      name: "allowFullscreen",
      type: "boolean",
      title: "Open in fullscreen on click",
      initialValue: true,
    }),
  ],
  preview: {
    select: { images: "images" },
    prepare: ({ images }) => ({
      title: "Gallery",
      subtitle: `${images?.length ?? 0} image(s)`,
      media: images?.[0]?.image,
    }),
  },
});
