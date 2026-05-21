import { defineField, defineType } from "sanity";

export const caseStudyResultMetric = defineType({
  name: "caseStudyResultMetric",
  title: "Result metric",
  type: "object",
  fields: [
    defineField({ name: "value", type: "string", title: "Value", validation: (r) => r.required() }),
    defineField({ name: "label", type: "string", title: "Label", validation: (r) => r.required() }),
    defineField({ name: "detail", type: "string", title: "Detail" }),
  ],
  preview: {
    select: { value: "value", label: "label", detail: "detail" },
    prepare: ({ value, label, detail }) => ({ title: `${value} ${label}`, subtitle: detail }),
  },
});
