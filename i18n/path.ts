import { DEFAULT_LOCALE, LOCALES, type Locale } from './config'

/**
 * The URL of an internal path in a language. English stays unprefixed.
 *   localePath('fr', '/privacy') -> '/fr/privacy'    localePath('fr', '/#faq') -> '/fr#faq'
 *   localePath('fr', '/')        -> '/fr'            localePath('en', '/privacy') -> '/privacy'
 */
export function localePath(locale: Locale, path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path
  const clean = path.startsWith('/') ? path : `/${path}`
  // For '/#faq' and '/?x=1' drop the slash so the language prefix joins cleanly: '/fr#faq'.
  const rest = clean === '/' ? '' : clean.replace(/^\/(?=[#?])/, '')
  if (locale === DEFAULT_LOCALE) return rest === '' ? '/' : /^[#?]/.test(rest) ? `/${rest}` : rest
  return `/${locale}${rest}`
}

/** '/fr/privacy' -> { locale: 'fr', path: '/privacy' }. Unprefixed paths are English. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const first = pathname.split('/')[1]
  // '/en/...' is accepted too, though the proxy redirects it to the unprefixed address.
  if ((LOCALES as readonly string[]).includes(first)) {
    return { locale: first as Locale, path: pathname.slice(first.length + 1) || '/' }
  }
  return { locale: DEFAULT_LOCALE, path: pathname || '/' }
}
