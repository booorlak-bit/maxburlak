import { defineField, defineType } from "sanity";

export const venture = defineType({
  name: "venture",
  title: "Venture",
  type: "document",
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "name" } }),
    defineField({ name: "url", type: "url", title: "Website" }),
    defineField({ name: "tagline", type: "string" }),
    defineField({ name: "description", type: "text", rows: 5 }),
    defineField({
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Live", value: "live" },
          { title: "Beta", value: "beta" },
          { title: "Fundraising", value: "fundraising" },
          { title: "Coming soon", value: "soon" },
        ],
      },
    }),
    defineField({ name: "logo", type: "image" }),
    defineField({ name: "sortOrder", type: "number", initialValue: 0 }),
  ],
  orderings: [
    { title: "Sort order", name: "sortOrder", by: [{ field: "sortOrder", direction: "asc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "status", media: "logo" },
  },
});
