import type { HomeSectionId } from "./sectionIds";
import type { WorksProjectCategory } from "../content/worksPage";

export type SanityImage = {
  asset?: { _ref?: string; _type?: string };
  alt?: string;
};

export type HomeSectionSlot = {
  _key: string;
  enabled?: boolean;
  sectionType: HomeSectionId;
  titleOverride?: string;
};

export type SiteSettings = {
  siteName?: string;
  tagline?: string;
  contactEmail?: string;
  bookCallUrl?: string;
  linkedinUrl?: string;
  dribbbleUrl?: string;
  location?: string;
  heroBadge?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  trustedByLabel?: string;
  venturesSidebarLabel?: string;
};

export type HomePage = {
  sections?: HomeSectionSlot[];
  designPhilosophy?: { heading?: string; body?: string };
  focusSection?: {
    headingLine1?: string;
    headingLine2?: string;
    focusAreas?: FocusArea[];
  };
  selectedWorksHeading?: string;
  selectedWorksIntro?: string;
  caseStudies?: CaseStudy[];
  stories?: Story[];
  ventures?: Venture[];
  testimonials?: Testimonial[];
  bio?: {
    heading?: string;
    bodyLeft?: string;
    bodyRight?: string;
    photo?: SanityImage;
  };
  contact?: {
    heading?: string;
    body?: string;
    availabilityLabel?: string;
  };
};

export type CaseStudy = {
  _id: string;
  title?: string;
  slug?: { current?: string };
  client?: string;
  role?: string;
  years?: string;
  pageTitle?: string;
  metaLine?: string;
  headline?: string;
  summary?: string;
  description?: string;
  tags?: string[];
  engagementCategories?: WorksProjectCategory[];
  tradeoffs?: string;
  metrics?: { value?: string; label?: string }[];
  logoKey?: string;
  heroImage?: SanityImage;
  coverImage?: SanityImage;
  status?: string;
  sortOrder?: number;
  showCaseStudyPage?: boolean;
  lede?: string;
  publishedLabel?: string;
  visitUrl?: string;
  visitLabel?: string;
  teamMeta?: string;
  stageMeta?: string;
  nav?: { _key?: string; id?: string; label?: string }[];
  sections?: {
    _key?: string;
    id?: string;
    title?: string;
    paragraphs?: unknown[];
    table?: { _key?: string; title?: string; description?: string }[];
    phases?: { _key?: string; phase?: string; title?: string; description?: string }[];
    features?: { _key?: string; title?: string; body?: string }[];
    metrics?: { _key?: string; value?: string; label?: string; detail?: string }[];
    numberedList?: string[];
  }[];
};

export type WorksPageCms = {
  heroLabel?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  loadMoreBatch?: number;
  moreWorksTitle?: string;
  featuredProjects?: CaseStudy[];
  moreProjects?: CaseStudy[];
};

export type Venture = {
  _id: string;
  name?: string;
  url?: string;
  tagline?: string;
  description?: string;
  status?: string;
  logo?: SanityImage;
};

export type Story = {
  _id: string;
  title?: string;
  subtitle?: string;
  body?: string;
  caption?: string;
  backgroundImage?: SanityImage;
  icon?: SanityImage;
};

export type Experience = {
  _id: string;
  company?: string;
  role?: string;
  period?: string;
  projects?: string;
  logoKey?: string;
  sortOrder?: number;
};

export type Testimonial = {
  _id: string;
  quote?: string;
  name?: string;
  role?: string;
  company?: string;
  photo?: SanityImage;
  gridCellId?: string;
  isDefault?: boolean;
};

export type FocusArea = {
  _id: string;
  key?: string;
  title?: string;
  description?: string;
  image?: SanityImage;
};

export type CmsPayload = {
  siteSettings: SiteSettings | null;
  homePage: HomePage | null;
  worksPage: WorksPageCms | null;
  caseStudies: CaseStudy[];
  playgroundPage: import("../playground/playgroundTypes").PlaygroundPageCms | null;
};
