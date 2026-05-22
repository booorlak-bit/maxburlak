import { defineArrayMember, defineField, defineType } from "sanity";

export const feedGalleryBlock = defineType({
  name: "feedGalleryBlock",
  title: "Gallery",
  type: "object",
  fields: [
    defineField({
      name: "images",
      type: "array",
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
            defineField({ name: "alt", type: "string" }),
          ],
          preview: {
            select: { media: "image", title: "alt" },
            prepare: ({ media, title }) => ({ title: title || "Gallery image", media }),
          },
        }),
      ],
    }),
    defineField({
      name: "allowFullscreen",
      type: "boolean",
      title: "Open gallery in fullscreen",
      initialValue: true,
    }),
  ],
  preview: {
    select: { images: "images" },
    prepare: ({ images }) => ({
      title: "Gallery",
      subtitle: `${images?.length ?? 0} image(s)`,
    }),
  },
});
