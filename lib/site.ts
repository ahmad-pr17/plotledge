// Production origin used for canonical URLs, sitemap and structured data.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://plotledge.com').replace(/\/$/, '')

export const SITE_NAME = 'Plot Ledge'
export const SITE_TITLE = 'Plot Ledge: CRM for Plot and Property Dealers'
export const SITE_DESCRIPTION =
  'Plot Ledge is a CRM for plot and property dealers. Track plots, deals, installment schedules, payments and bank slips in one place, with receipts and reports.'
