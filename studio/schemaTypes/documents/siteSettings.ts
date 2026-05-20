import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "general", title: "General", default: true },
    { name: "hero", title: "Hero (sidebar)" },
    { name: "links", title: "Links" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "siteName",
      type: "string",
      group: "general",
      initialValue: "Max Burlak",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      type: "string",
      group: "general",
      initialValue: "AI-driven product designer for founders",
    }),
    defineField({
      name: "contactEmail",
      type: "string",
      group: "links",
      initialValue: "hey@maxburlak.com",
    }),
    defineField({
      name: "bookCallUrl",
      type: "url",
      group: "links",
      title: "Book a call URL",
    }),
    defineField({
      name: "linkedinUrl",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "dribbbleUrl",
      type: "url",
      group: "links",
    }),
    defineField({
      name: "location",
      type: "string",
      group: "hero",
      initialValue: "Currently in Barcelona, Spain",
    }),
    defineField({
      name: "heroBadge",
      type: "string",
      group: "hero",
      title: "Badge",
      initialValue: "3x times Founding Designer",
    }),
    defineField({
      name: "heroTitle",
      type: "text",
      group: "hero",
      title: "Headline",
      rows: 3,
    }),
    defineField({
      name: "heroSubtitle",
      type: "text",
      group: "hero",
      title: "Subheadline",
      rows: 4,
    }),
    defineField({
      name: "trustedByLabel",
      type: "string",
      group: "hero",
      title: "Trusted by label",
    }),
    defineField({
      name: "venturesSidebarLabel",
      type: "string",
      group: "hero",
      title: "Ventures sidebar label",
    }),
    defineField({
      name: "defaultSeo",
      type: "seo",
      group: "seo",
      title: "Default SEO",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});
