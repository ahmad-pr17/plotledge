import { track } from '@vercel/analytics'

export type SiteEvent = 'generate_lead' | 'demo_click' | 'whatsapp_click' | 'email_click' | 'phone_click' | 'signup_click' | 'login_click' | 'social_click'

type Params = Record<string, string>

/**
 * Conversion events. They carry no personal data (never form fields, message text or the phone number).
 * Vercel Analytics is cookieless, so it always receives them. Google Analytics only exists on the page after the
 * visitor accepts analytics cookies, so window.gtag is missing otherwise and nothing is sent to Google.
 */
export function trackEvent(name: SiteEvent, params: Params = {}) {
  try {
    track(name, params)
  } catch {
    /* analytics must never break the page */
  }
  try {
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag
    if (typeof gtag === 'function') gtag('event', name, params)
  } catch {
    /* same */
  }
}

/** Which kind of conversion a link is, from its address. Null for ordinary links. */
export function classifyLink(a: HTMLAnchorElement): SiteEvent | null {
  const href = a.getAttribute('href') ?? ''
  if (href.startsWith('mailto:')) return 'email_click'
  if (href.startsWith('tel:')) return 'phone_click'
  let url: URL
  try { url = new URL(href, location.href) } catch { return null }
  if (url.hostname === 'wa.me' || url.hostname.endsWith('whatsapp.com')) return 'whatsapp_click'
  if (url.origin === location.origin) return url.hash === '#demo' ? 'demo_click' : null
  if (/\/signup\/?$/.test(url.pathname) && url.hostname.startsWith('app.')) return 'signup_click'
  if (url.hostname.startsWith('app.')) return 'login_click'
  if (/instagram\.com|facebook\.com/.test(url.hostname)) return 'social_click'
  return null
}
