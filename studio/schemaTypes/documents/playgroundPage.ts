import { defineArrayMember, defineField, defineType } from "sanity";

export const playgroundPage = defineType({
  name: "playgroundPage",
  title: "Playground page",
  type: "document",
  fields: [
    defineField({
      name: "items",
      type: "array",
      title: "Canvas items",
      description:
        "Free-form items on the playground canvas. Set X/Y position in pixels from the top-left of the canvas.",
      of: [defineArrayMember({ type: "playgroundCanvasItem" })],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Playground page" }),
  },
});
