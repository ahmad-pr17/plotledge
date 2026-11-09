import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DEFAULT_LOCALE, LOCALES } from '@/i18n/config'

/**
 * Language routing. English keeps the URLs it always had (/, /privacy); other languages live under a prefix (/fr, /fr/privacy).
 *   /privacy     -> served by app/[lang] with lang = "en" (a rewrite: the address bar does not change)
 *   /en/privacy  -> permanent redirect to /privacy, so each page has one address
 *   /fr/privacy  -> passed through
 * There is no automatic redirect by browser language: crawlers and shared links must always land on the page they asked for.
 * Visitors switch language with the switcher in the header and footer.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const first = pathname.split('/')[1]

  if (first === DEFAULT_LOCALE) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || '/'
    return NextResponse.redirect(url, 308)
  }
  if ((LOCALES as readonly string[]).includes(first)) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip the API, Next internals, the generated social image, and anything with a file extension (favicon.ico, robots.txt, sitemap.xml, images).
  matcher: ['/((?!api|_next|opengraph-image|.*\\..*).*)'],
}
