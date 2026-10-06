# Plot Ledge

Marketing landing page for Plot Ledge, a CRM for plot and property dealers. It is a single-page Next.js (App Router) site styled with Tailwind CSS v4 and Base UI / shadcn components.

## Getting started

```bash
pnpm install   # or: npm install
pnpm dev       # http://localhost:3000
pnpm build     # production build
pnpm start     # serve the production build
```

## Configuration

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://plotledge.com` | Origin used for canonical URL, sitemap, robots and structured data |
| `NEXT_PUBLIC_CRM_URL` | `https://realestatemanager-chi.vercel.app/login` | Target of the "Log in" and "Open the CRM" buttons |

## Project layout

- `app/page.tsx` – the landing page (client component).
- `app/layout.tsx` – metadata (title, description, canonical, Open Graph, Twitter) and JSON-LD structured data.
- `app/robots.ts`, `app/sitemap.ts` – generated `/robots.txt` and `/sitemap.xml`.
- `app/opengraph-image.tsx` – generated 1200×630 social sharing image.
- `lib/site.ts` – site URL, name, title and description in one place.
- `lib/faqs.ts` – FAQ content, shared by the page and the FAQPage schema so they stay in sync.
- `lib/currency.ts` – regional price display.
- `components/ui/` – shadcn / Base UI components.

## SEO notes

- Add new indexable pages to `app/sitemap.ts` and give each its own `alternates.canonical`, title and description.
- Structured data must describe content that is visible on the page. Don't add ratings, reviews or addresses that aren't shown.
- Keep one `h1` per page and don't skip heading levels.

## Regional pricing

Prices are defined in PKR in `app/page.tsx`. Visitors outside Pakistan see an approximate amount in their local currency (USD, AED, SAR, GBP, EUR, INR), chosen from their browser's region. The structured data and billing stay in PKR.

The exchange rates in `lib/currency.ts` are placeholders. Update them before relying on them.

## Deployment

Deployed on Vercel. Set `NEXT_PUBLIC_SITE_URL` if the production domain differs from the default, and keep HTTPS and the www/non-www redirect configured in the Vercel domain settings.
