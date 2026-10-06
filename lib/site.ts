// Production origin used for canonical URLs, sitemap and structured data.
// Set NEXT_PUBLIC_SITE_URL to the custom domain; otherwise Vercel's production URL is used.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelHost ? `https://${vercelHost}` : 'http://localhost:3000')
).replace(/\/$/, '')

export const SITE_NAME = 'Plot Ledge'
export const SITE_TITLE = 'Plot Ledge: CRM for Plot and Property Dealers'
export const SITE_DESCRIPTION =
  'Plot Ledge is a CRM for plot and property dealers. Track plots, deals, installment schedules, payments and bank slips in one place, with receipts and reports.'
