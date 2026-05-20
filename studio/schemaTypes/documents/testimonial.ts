import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string" }),
    defineField({ name: "company", type: "string" }),
    defineField({
      name: "photo",
      type: "image",
      options: { hotspot: true },
      description: "Avatar shown in the grid.",
    }),
    defineField({
      name: "gridCellId",
      type: "string",
      title: "Grid cell ID",
      description: "Optional Figma grid cell id for default selection.",
    }),
    defineField({
      name: "isDefault",
      type: "boolean",
      title: "Default testimonial",
      initialValue: false,
    }),
    defineField({ name: "sortOrder", type: "number", initialValue: 0 }),
  ],
  preview: {
    select: { title: "name", subtitle: "company", media: "photo" },
  },
});
