import { defineArrayMember, defineField, defineType } from "sanity";

export const feedPost = defineType({
  name: "feedPost",
  title: "Feed post",
  type: "document",
  description: "Posts for the /feed page. Supports images, video, galleries, link previews, and rich text.",
  fields: [
    defineField({
      name: "title",
      type: "string",
      description: "Optional. Leave empty for media-only posts.",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
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
    defineField({
      name: "tags",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "Shown as hashtags (e.g. thoughts → #thoughts).",
    }),
    defineField({
      name: "layout",
      type: "string",
      title: "Feed list layout",
      options: {
        list: [
          { title: "Default (media + text)", value: "default" },
          { title: "Title only", value: "titleOnly" },
        ],
        layout: "radio",
      },
      initialValue: "default",
    }),
    defineField({
      name: "previewBlockCount",
      type: "number",
      title: "Preview paragraphs on feed",
      description: "How many text blocks to show before “Read more…”. Set 0 to hide body on the feed list.",
      initialValue: 4,
      validation: (r) => r.min(0).max(20),
    }),
    defineField({
      name: "content",
      type: "array",
      title: "Content",
      of: [
        defineArrayMember({ type: "feedImageBlock" }),
        defineArrayMember({ type: "feedVideoBlock" }),
        defineArrayMember({ type: "feedGalleryBlock" }),
        defineArrayMember({ type: "feedLinkCard" }),
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    validation: (r) =>
                      r.required().uri({ allowRelative: true, scheme: ["http", "https", "mailto"] }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({ name: "seo", type: "seo" }),
  ],
  orderings: [
    {
      title: "Published (newest)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "slug.current",
      status: "status",
      media: "content.0.image",
    },
    prepare: ({ title, subtitle, status, media }) => ({
      title: title || subtitle || "Untitled post",
      subtitle: status === "draft" ? "Draft" : subtitle,
      media,
    }),
  },
});
