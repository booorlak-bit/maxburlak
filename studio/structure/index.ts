import type { StructureResolver } from "sanity/structure";

const SINGLETONS = ["siteSettings", "homePage"] as const;

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.listItem()
        .title("Homepage")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.divider(),
      S.documentTypeListItem("caseStudy").title("Case studies"),
      S.documentTypeListItem("venture").title("Ventures"),
      S.documentTypeListItem("story").title("Stories"),
      S.documentTypeListItem("experience").title("Experience"),
      S.documentTypeListItem("testimonial").title("Testimonials"),
      S.documentTypeListItem("focusArea").title("Focus areas"),
      S.divider(),
      S.documentTypeListItem("page").title("Pages"),
      ...S.documentTypeListItems().filter(
        (item) =>
          !SINGLETONS.includes(item.getId() as (typeof SINGLETONS)[number]) &&
          !["caseStudy", "venture", "story", "experience", "testimonial", "focusArea", "page"].includes(
            item.getId() ?? "",
          ),
      ),
    ]);
