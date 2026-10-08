// Production origin used for canonical URLs, sitemap and structured data.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.plotledge.com').replace(/\/$/, '')

export const SITE_NAME = 'Plot Ledge'
export const SITE_TITLE = 'Plot Management Software for Property Dealers'
export const SITE_DESCRIPTION =
  'Plot management software for Pakistani dealers. Track installments, payments and receipts in one place. Start free or book a demo.'

export const CRM_LOGIN_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://realestatemanager-chi.vercel.app/login'

// Set the real WhatsApp number (international format, digits only) in .env.local or in Vercel.
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '923000000000'
// Set the real contact details in .env.local or in Vercel.
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@plotledge.com'
export const CONTACT_PHONE_DISPLAY = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+92 300 0000000'
export const CONTACT_CITY = 'Lahore, Pakistan'

export const DEMO_URL = '/contact#demo'

export function whatsappLink(message = 'Hi Plot Ledge, I would like a demo for my plot business.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
] as const

/** Chat events and the sticky mobile bar read the same open/closed flag from the <html> element. */
export const CHAT_OPEN_ATTR = 'data-chat-open'
