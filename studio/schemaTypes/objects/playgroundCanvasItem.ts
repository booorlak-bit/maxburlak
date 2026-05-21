import { defineField, defineType } from "sanity";

const ITEM_TYPES = [
  { title: "Image", value: "image" },
  { title: "Video", value: "video" },
  { title: "Comment", value: "comment" },
  { title: "Sticky note", value: "stickyNote" },
  { title: "Link preview", value: "link" },
] as const;

export const playgroundCanvasItem = defineType({
  name: "playgroundCanvasItem",
  title: "Canvas item",
  type: "object",
  fields: [
    defineField({
      name: "itemType",
      type: "string",
      title: "Type",
      options: { list: [...ITEM_TYPES], layout: "radio" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "enabled",
      type: "boolean",
      title: "Visible",
      initialValue: true,
    }),
    defineField({
      name: "x",
      type: "number",
      title: "X position (px)",
      description: "Horizontal position on the canvas.",
      initialValue: 0,
    }),
    defineField({
      name: "y",
      type: "number",
      title: "Y position (px)",
      description: "Vertical position on the canvas.",
      initialValue: 0,
    }),
    defineField({
      name: "width",
      type: "number",
      title: "Max width (px)",
      description: "Optional display width cap.",
      validation: (rule) => rule.min(80).max(800),
    }),
    defineField({
      name: "zIndex",
      type: "number",
      title: "Layer (z-index)",
      initialValue: 1,
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true },
      hidden: ({ parent }) => parent?.itemType !== "image",
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Alt text",
      hidden: ({ parent }) => parent?.itemType !== "image",
    }),
    defineField({
      name: "videoUrl",
      type: "url",
      title: "Video URL",
      description: "Direct MP4/WebM URL or YouTube/Vimeo link.",
      hidden: ({ parent }) => parent?.itemType !== "video",
    }),
    defineField({
      name: "poster",
      type: "image",
      title: "Poster image",
      hidden: ({ parent }) => parent?.itemType !== "video",
    }),
    defineField({
      name: "comment",
      type: "text",
      title: "Comment",
      rows: 4,
      hidden: ({ parent }) => parent?.itemType !== "comment",
    }),
    defineField({
      name: "noteTitle",
      type: "string",
      title: "Note title",
      hidden: ({ parent }) => parent?.itemType !== "stickyNote",
    }),
    defineField({
      name: "noteBody",
      type: "text",
      title: "Note body",
      rows: 5,
      hidden: ({ parent }) => parent?.itemType !== "stickyNote",
    }),
    defineField({
      name: "noteColor",
      type: "string",
      title: "Note color",
      options: {
        list: [
          { title: "Yellow", value: "yellow" },
          { title: "Pink", value: "pink" },
          { title: "Green", value: "green" },
          { title: "Blue", value: "blue" },
        ],
      },
      initialValue: "yellow",
      hidden: ({ parent }) => parent?.itemType !== "stickyNote",
    }),
    defineField({
      name: "linkUrl",
      type: "url",
      title: "Link URL",
      hidden: ({ parent }) => parent?.itemType !== "link",
    }),
    defineField({
      name: "linkTitle",
      type: "string",
      title: "Link title",
      hidden: ({ parent }) => parent?.itemType !== "link",
    }),
    defineField({
      name: "linkDescription",
      type: "text",
      title: "Link description",
      rows: 3,
      hidden: ({ parent }) => parent?.itemType !== "link",
    }),
    defineField({
      name: "linkPreviewImage",
      type: "image",
      title: "Preview image",
      hidden: ({ parent }) => parent?.itemType !== "link",
    }),
  ],
  preview: {
    select: {
      itemType: "itemType",
      linkTitle: "linkTitle",
      noteTitle: "noteTitle",
      comment: "comment",
      media: "image",
    },
    prepare({ itemType, linkTitle, noteTitle, comment, media }) {
      const label =
        linkTitle?.trim() ||
        noteTitle?.trim() ||
        comment?.trim()?.slice(0, 40) ||
        itemType ||
        "Canvas item";
      return {
        title: label,
        subtitle: itemType,
        media,
      };
    },
  },
});
