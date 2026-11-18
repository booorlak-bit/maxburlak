import { defineArrayMember, defineField, defineType } from "sanity";

export const caseStudySection = defineType({
  name: "caseStudySection",
  title: "Section",
  type: "object",
  fields: [
    defineField({
      name: "id",
      type: "string",
      title: "Section ID",
      description: "Used for in-page nav anchors (e.g. challenge, results).",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      title: "Heading",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "paragraphs",
      type: "array",
      title: "Body",
      description: "Rich text. Headings, quote, lists, links and inline images are supported.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading", value: "h2" },
            { title: "Subheading", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
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
                    title: "URL",
                    validation: (r) =>
                      r.required().uri({ scheme: ["http", "https", "mailto", "tel"] }),
                  }),
                  defineField({
                    name: "blank",
                    type: "boolean",
                    title: "Open in new tab",
                    initialValue: true,
                  }),
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          title: "Image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", title: "Alt text" }),
            defineField({ name: "caption", type: "string", title: "Caption" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "table",
      type: "array",
      title: "List items",
      of: [defineArrayMember({ type: "caseStudyTableRow" })],
    }),
    defineField({
      name: "phases",
      type: "array",
      title: "Phases / timeline",
      of: [defineArrayMember({ type: "caseStudyPhase" })],
    }),
    defineField({
      name: "features",
      type: "array",
      title: "Features",
      of: [defineArrayMember({ type: "caseStudyFeature" })],
    }),
    defineField({
      name: "metrics",
      type: "array",
      title: "Result metrics",
      of: [defineArrayMember({ type: "caseStudyResultMetric" })],
    }),
    defineField({
      name: "numberedList",
      type: "array",
      title: "Numbered list",
      of: [defineArrayMember({ type: "string" })],
    }),
    defineField({
      name: "media",
      type: "array",
      title: "Images & video",
      description: "Add images or videos shown at the end of this section.",
      of: [
        defineArrayMember({ type: "caseStudyImage" }),
        defineArrayMember({ type: "caseStudyGallery" }),
        defineArrayMember({ type: "caseStudyVideo" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "id" },
  },
});
