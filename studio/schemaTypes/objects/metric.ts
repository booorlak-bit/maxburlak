import { defineField, defineType } from "sanity";

export const metric = defineType({
  name: "metric",
  title: "Metric",
  type: "object",
  fields: [
    defineField({ name: "value", type: "string", title: "Value", validation: (r) => r.required() }),
    defineField({ name: "label", type: "string", title: "Label", validation: (r) => r.required() }),
  ],
  preview: {
    select: { value: "value", label: "label" },
    prepare: ({ value, label }) => ({ title: value, subtitle: label }),
  },
});
