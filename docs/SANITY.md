# Sanity CMS for maxburlak.com

Content is split into **document types** (not one giant page). The homepage layout is controlled separately from section content.

## Content model

| Studio item | Type | Purpose |
|-------------|------|---------|
| Site settings | Singleton `siteSettings` | Global links, hero sidebar copy, default SEO |
| Homepage | Singleton `homePage` | Section order/visibility + homepage field overrides |
| Case studies | `caseStudy` | Portfolio pieces (referenced on homepage) |
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
5. In Studio, open **Site settings** and **Homepage** (singletons). Publish both.
6. For **Homepage → Sections**, add one row per section you want (or copy defaults below).
7. Run the site: `pnpm dev` — without `VITE_SANITY_PROJECT_ID`, the site uses built-in fallbacks.

### Default homepage sections (paste order)

Create 12 slots in this order (all visible):  
`heroImage`, `designPhilosophy`, `focusOutcomes`, `selectedWorks`, `stories`, `hiringPhilosophy`, `approach`, `ventures`, `workedWith`, `bio`, `career`, `contact`

## Deploy Studio

```bash
pnpm studio:deploy
```

Hosted Studio URL is configured in `sanity.cli.ts` (`studioHost: maxburlak`).

## Without CMS

If env vars are missing, `CmsProvider` skips fetch and the site renders static content. Section wrappers still apply default order (all sections visible).
