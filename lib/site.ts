// Production origin used for canonical URLs, sitemap and structured data.
// Set NEXT_PUBLIC_SITE_URL to the custom domain; otherwise Vercel's production URL is used.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelHost ? `https://${vercelHost}` : 'http://localhost:3000')
).replace(/\/$/, '')

export const SITE_NAME = 'Plot Ledge'
export const SITE_TITLE = 'Plot Management Software for Property Dealers'
export const SITE_DESCRIPTION =
  'Plot management software for Pakistani dealers. Track installments, payments and receipts in one place. Book a demo to get started.'

export const CRM_LOGIN_URL = process.env.NEXT_PUBLIC_CRM_URL ?? 'https://app.plotledge.com'
// The app's own install screen (the QR code opens it). It must be on the app's domain, because browsers only
// offer to install an app from the site that serves it. Built from the app address, so it follows NEXT_PUBLIC_CRM_URL.
export const CRM_INSTALL_URL = new URL('/install', CRM_LOGIN_URL).toString()
export const CRM_SIGNUP_URL = process.env.NEXT_PUBLIC_CRM_SIGNUP_URL ?? 'https://app.plotledge.com/signup'

// Set the real WhatsApp number (international format, digits only) in .env.local or in Vercel.
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '923196796717'
// Set the real contact details in .env.local or in Vercel.
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'info@plotledge.com'
export const CONTACT_PHONE_DISPLAY = process.env.NEXT_PUBLIC_CONTACT_PHONE ?? '+92 319 6796717'
export const CONTACT_CITY = 'Lahore, Pakistan'

export const DEMO_URL = '/contact#demo'

// Social profiles. Set the full profile address in .env.local or in Vercel. A platform with no address set is
// not shown anywhere on the site. Only https:// addresses are accepted, so a typo cannot create an unsafe link.
// To add another platform, add its env var here and its icon in components/shared/social-icons.tsx.
const socialCandidates = [
  { key: 'instagram', label: 'Instagram', href: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? 'https://www.instagram.com/plotledge/' },
  { key: 'facebook', label: 'Facebook', href: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? 'https://www.facebook.com/share/1FLGBuUT4X/' },
] as const

export type SocialKey = (typeof socialCandidates)[number]['key']
export const SOCIAL_LINKS: { key: SocialKey; label: string; href: string }[] = socialCandidates.flatMap(({ key, label, href }) =>
  href && /^https:\/\//i.test(href.trim()) ? [{ key, label, href: href.trim() }] : [],
)

/** Adds campaign tags so analytics can tell which placement (for example the QR code) brought a visit. */
export function trackedUrl(url: string, medium: string, campaign: string) {
  const u = new URL(url)
  u.searchParams.set('utm_source', 'website')
  u.searchParams.set('utm_medium', medium)
  u.searchParams.set('utm_campaign', campaign)
  return u.toString()
}

/** Pass the translated message: whatsappLink(m.common.whatsappMessage). */
export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { key: 'features', href: '/#features' },
  { key: 'how', href: '/#how' },
  { key: 'pricing', href: '/#pricing' },
  { key: 'faq', href: '/#faq' },
] as const

/** Chat events and the sticky mobile bar read the same open/closed flag from the <html> element. */
export const CHAT_OPEN_ATTR = 'data-chat-open'
