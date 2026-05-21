# Sanity CMS for maxburlak.com

Content is split into **document types** (not one giant page). The homepage layout is controlled separately from section content.

## Content model

| Studio item | Type | Purpose |
|-------------|------|---------|
| Site settings | Singleton `siteSettings` | Global links, hero sidebar copy, default SEO |
| Homepage | Singleton `homePage` | Section order/visibility + homepage field overrides |
| Works page | Singleton `worksPage` | Hero copy, featured projects, load-more projects |
| Playground page | Singleton `playgroundPage` | Free-form canvas items (images, videos, notes, links) |
| Case studies | `caseStudy` | Portfolio pieces (referenced on homepage and works page) |
| Stories | `story` | “What portfolios don’t show” carousel |
| Ventures | `venture` | Products / side projects |
| Testimonials | `testimonial` | Worked-with quotes |
| Focus areas | `focusArea` | Service area cards |
| Experience | `experience` | Career timeline entries |
| Pages | `page` | Future routes (`/works`, `/about`, etc.) |

### Homepage sections

In **Homepage → Layout → Sections**, each row is a `homeSectionSlot`:

- **Visible** — toggle section on/off
- **Section** — which block (hero, selected works, contact, …)
- **Heading override** — optional title override in the UI

Drag rows to reorder. The site uses CSS `order` on flex children; order in the array is what you set in Studio.

## Setup

1. Create a project at [sanity.io/manage](https://sanity.io/manage).
2. Copy `.env.example` to `.env` and fill in project/dataset IDs (same project for Studio and site).
3. Install deps: `npx pnpm@10.12.1 install`
4. Run Studio: `pnpm studio` → usually [http://localhost:3333](http://localhost:3333)
5. In Studio, open **Site settings**, **Homepage**, **Works page**, and **Playground page** (singletons). Publish each.
6. Create **Case studies** for each project, then assign them under **Works page → Featured projects** and **More projects**.
7. For **Homepage → Sections**, add one row per section you want (or copy defaults below).
8. Run the site: `pnpm dev` — without `VITE_SANITY_PROJECT_ID`, the site uses built-in fallbacks.

### Default homepage sections (paste order)

Create 12 slots in this order (all visible):  
`heroImage`, `designPhilosophy`, `focusOutcomes`, `selectedWorks`, `stories`, `hiringPhilosophy`, `approach`, `ventures`, `workedWith`, `bio`, `career`, `contact`

### Works page

1. Create one **Case study** per project (slug becomes `/works/:slug`).
2. Fill **Showcase title**, **Showcase summary**, **Description**, **Role**, **Years**, **Tags**, **Metrics**, and **Works page screenshot**.
3. Set **Status** to **Published** (Draft is hidden on the site).
4. Open **Works page** singleton:
   - **Featured projects** — shown immediately on `/works`
   - **More projects** — revealed via **Load more**
   - Drag rows to reorder

Without CMS data, `/works` uses static fallbacks in `src/content/worksPage.ts`.

### Case study pages (`/works/:slug`)

Each **Case study** document controls both the listing card and the full case study page.

**Listing fields** (Works grid + homepage cards):

- **Showcase title**, **Showcase summary**, **Description**, **Role**, **Years**, **Tags**, **Metrics**
- **Works page screenshot** (cover image)
- **Status** — `Draft` hides the project everywhere; `Published` shows it
- **Engagement categories** — filter chips on `/works`

**Case study page** (fieldset **Case study page**):

- **Show case study page** — turn off to keep the project on `/works` but hide `/works/:slug`
- **Lede** — intro paragraph under the hero
- **Published label**, **Visit URL**, **Visit label** — hero meta and external link
- **Team meta**, **Stage meta** — sidebar meta row
- **Section nav** — optional; auto-generated from section titles if empty
- **Sections** — page body (rich text + structured blocks):
  - **Paragraphs** — block content (bold, italic, code, bullet/numbered lists)
  - **Table rows** — title + description pairs (not HTML tables)
  - **Phases** — phase label, title, description
  - **Features** — title + body pairs
  - **Metrics** — value, label, optional detail
  - **Numbered list** — plain strings

**Works page** singleton also has **More works title** (footer grid heading on case study pages).

When Sanity env vars are set and a case study has **Sections** published, the site uses CMS content instead of static fallbacks in `src/content/caseStudyContent.ts`.

### Playground canvas (`/playground`)

Open **Playground page** singleton and add **Canvas items**. Each item has a type, X/Y position (pixels from top-left), optional max width, and layer (z-index).

| Type | Fields |
|------|--------|
| **Image** | Upload image, alt text |
| **Video** | URL (MP4/WebM, YouTube, or Vimeo), optional poster |
| **Comment** | Short text bubble |
| **Sticky note** | Title, body, color (yellow/pink/green/blue) |
| **Link preview** | URL, title, description, preview image |

Toggle **Visible** off to hide an item without deleting it. Drag rows to reorder layer stacking (or set **Layer** manually).

Without CMS items, the playground uses the built-in static concept grid fallback.

## Deploy Studio

```bash
pnpm studio:deploy
```

Hosted Studio URL is configured in `sanity.cli.ts` (`studioHost: maxburlak`).

## Without CMS

If env vars are missing, `CmsProvider` skips fetch and the site renders static content. Section wrappers still apply default order (all sections visible).
