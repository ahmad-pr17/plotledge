# Plot Ledge

Marketing website for **Plot Ledge**, a CRM for plot and property dealers. It tracks plots, deals, installments, payments and bank slips in one place. This repository contains the public landing page. The CRM application itself lives elsewhere and is linked through the "Log in" and "Open the CRM" buttons.

## Table of contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Available scripts](#available-scripts)
- [Project structure](#project-structure)
- [SEO](#seo)
- [Regional pricing](#regional-pricing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Responsive single-page marketing site with light and dark themes
- Server-rendered HTML, so content is crawlable without JavaScript
- Technical SEO: canonical URL, Open Graph and Twitter/X cards, `robots.txt`, `sitemap.xml`, JSON-LD structured data
- Generated 1200×630 social sharing image
- Pricing displayed in rupees, with an approximate local currency for visitors in other regions
- Accessible FAQ, tabs and mobile navigation built on Base UI

## Tech stack

| Area | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI | React 19, [Tailwind CSS](https://tailwindcss.com/) v4, [Base UI](https://base-ui.com/), [shadcn/ui](https://ui.shadcn.com/) |
| Icons | [lucide-react](https://lucide.dev/) |
| Language | TypeScript |
| Analytics | [Vercel Web Analytics](https://vercel.com/docs/analytics) (production only) |
| Hosting | [Vercel](https://vercel.com/) |

## Prerequisites

- Node.js 20.9 or later
- npm (bundled with Node.js) or pnpm

## Getting started

```bash
# 1. Clone the repository
git clone git@github.com:ahmad-pr17/plotledge.git
cd plotledge

# 2. Install dependencies
npm install

# 3. (Optional) create a local environment file
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

The site is then available at <http://localhost:3000>.

## Environment variables

Create a `.env.local` file in the project root. Both variables are optional.

| Variable | Default | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://plotledge.com` | Origin used for the canonical URL, sitemap, robots and structured data |
| `NEXT_PUBLIC_CRM_URL` | `https://realestatemanager-chi.vercel.app/login` | Destination of the "Log in" and "Open the CRM" buttons |

## Available scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npx tsc --noEmit` | Type-check the project (`next build` skips type errors, see `next.config.mjs`) |

## Project structure

```
app/
  layout.tsx             Root layout, metadata and JSON-LD structured data
  page.tsx               Landing page (client component)
  globals.css            Tailwind setup, theme tokens and custom styles
  robots.ts              Generates /robots.txt
  sitemap.ts             Generates /sitemap.xml
  opengraph-image.tsx    Generates the social sharing image
components/ui/           shadcn / Base UI components
lib/
  site.ts                Site URL, name, title and description
  faqs.ts                FAQ content shared by the page and FAQPage schema
  currency.ts            Regional price formatting
  utils.ts               Shared helpers
public/                  Static assets and favicons
```

## SEO

- Site-wide values (URL, title, description) live in `lib/site.ts`. Change them there.
- When adding a page, add it to `app/sitemap.ts` and give it its own title, description and `alternates.canonical`.
- Structured data must describe content that is visible on the page. Do not add ratings, reviews, addresses or other details the page does not show.
- Keep one `h1` per page and do not skip heading levels.
- After deploying, verify the domain in Google Search Console and submit `https://plotledge.com/sitemap.xml`.

## Regional pricing

Prices are defined in rupees in `data/pricing.ts`. Visitors outside Pakistan see an approximate amount in their local currency (USD, AED, SAR, GBP, EUR or INR), chosen from the browser's language region. Structured data and billing remain in rupees.

> **Note:** the exchange rates in `lib/currency.ts` are placeholders. Review and update them before relying on them.

## Deployment

The site is deployed on Vercel.

1. Import the repository in Vercel.
2. Set `NEXT_PUBLIC_SITE_URL` if the production domain differs from the default.
3. Add `plotledge.com` as a domain and configure the www / non-www redirect. Vercel enforces HTTPS automatically.

## Contributing

1. Create a branch from `main` (for example `dev-<name>` or `feature/<topic>`).
2. Make your changes and confirm `npx tsc --noEmit` and `npm run build` pass.
3. Commit with a clear, descriptive message.
4. Push the branch and open a pull request against `main`.

## License

No license has been specified. All rights reserved by the repository owner unless stated otherwise.

## Chat assistant

The assistant lives in `components/chatbot/`, `hooks/useChat.ts`, `app/api/chat*`, `app/api/lead` and `lib/chatbot/`.

- `lib/chatbot/knowledge.ts` is everything it may state about the product. Prices come from `data/pricing.ts`.
- `lib/chatbot/system-prompt.ts` holds its rules.
- Replies stream from `/api/chat` (server side only). If the AI service fails, a small offline matcher answers the top questions.
- Rate limit: 20 messages per 10 minutes per IP (in memory per server instance; add Vercel Firewall rate limiting for a hard limit).

### Environment variables on Vercel

Project Settings > Environment Variables. Add every name from `.env.example` (at least `ANTHROPIC_API_KEY`, `CHAT_MODEL`, `NEXT_PUBLIC_WHATSAPP_NUMBER`, and either `LEAD_WEBHOOK_URL` or `RESEND_API_KEY` plus `LEAD_EMAIL_TO`), choose Production and Preview, then redeploy. `NEXT_PUBLIC_` values are baked in at build time, so a redeploy is required after changing them.

### Content you must fill in

- `data/testimonials.ts` and `data/logos.ts`: empty, so those sections stay hidden until you add real entries.
- `data/pricing.ts`: confirm the final prices.

## Custom domain and Google Search Console

1. Vercel: Project > Settings > Domains > Add your domain, then add the DNS records Vercel shows at your registrar.
2. Set `NEXT_PUBLIC_SITE_URL` to the final `https://` address and redeploy. Canonical links, the sitemap and structured data use it.
3. In Google Search Console add the domain as a property, verify it with the DNS TXT record, then open Sitemaps and submit `sitemap.xml`.
