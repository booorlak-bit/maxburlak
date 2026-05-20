import { defineField, defineType } from "sanity";

export const focusArea = defineType({
  name: "focusArea",
  title: "Focus area",
  type: "document",
  fields: [
    defineField({
      name: "key",
      type: "string",
      title: "Area",
      options: {
        list: [
          { title: "Activation", value: "activation" },
          { title: "Conversion", value: "conversion" },
          { title: "Design system", value: "system" },
          { title: "Retention", value: "retention" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "description", type: "text", rows: 3 }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "sortOrder", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "title", subtitle: "key" },
  },
});
