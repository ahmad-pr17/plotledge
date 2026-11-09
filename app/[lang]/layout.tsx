import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter, Noto_Naskh_Arabic, Noto_Nastaliq_Urdu, Noto_Sans_Arabic, Noto_Sans_SC } from 'next/font/google'
import { ChatMount } from '@/components/chatbot/ChatMount'
import { ConsentAnalytics } from '@/components/consent/consent-analytics'
import { CookieBanner } from '@/components/consent/cookie-banner'
import { LOCALE_META, LOCALES } from '@/i18n/config'
import { I18nProvider } from '@/i18n/client'
import { toClientMessages } from '@/i18n/messages'
import { openGraphLocale, pageAlternates } from '@/i18n/seo'
import { getLocale, getMessages } from '@/i18n/server'
import { jsonLdString, siteJsonLd } from '@/lib/jsonld'
import { SITE_URL } from '@/lib/site'
import '../globals.css'

// Inter (Latin, Latin Extended, Cyrillic) for text and Bricolage Grotesque for Latin headlines. Money uses tabular numbers via .num.
const inter = Inter({ subsets: ['latin', 'latin-ext', 'cyrillic'], variable: '--font-inter', display: 'swap' })
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage', display: 'swap', axes: ['opsz'] })
// Other scripts. They are not preloaded: the browser downloads one only when a page actually uses its characters.
const arabic = Noto_Sans_Arabic({ subsets: ['arabic'], variable: '--font-arabic', display: 'swap', preload: false })
const naskh = Noto_Naskh_Arabic({ subsets: ['arabic'], variable: '--font-naskh', display: 'swap', preload: false })
const urdu = Noto_Nastaliq_Urdu({ subsets: ['arabic'], variable: '--font-urdu', display: 'swap', preload: false })
const chinese = Noto_Sans_SC({ variable: '--font-chinese', display: 'swap', preload: false })

export const dynamicParams = false

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const { meta } = await getMessages()
  const fullTitle = `${meta.siteTitle} | ${meta.siteName}`
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: fullTitle, template: `%s | ${meta.siteName}` },
    description: meta.siteDescription,
    applicationName: meta.siteName,
    keywords: meta.keywords,
    alternates: pageAlternates(locale, '/'),
    openGraph: { title: fullTitle, description: meta.siteDescription, type: 'website', siteName: meta.siteName, url: '/', ...openGraphLocale(locale) },
    twitter: { card: 'summary_large_image', title: fullTitle, description: meta.siteDescription },
    icons: {
      icon: [
        // Google needs a favicon whose size is a multiple of 48px. /favicon.ico (app/favicon.ico) holds 16, 32 and 48.
        { url: '/icon-48.png', sizes: '48x48', type: 'image/png' },
        { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icon.svg', type: 'image/svg+xml' },
      ],
      apple: '/apple-icon.png',
    },
  }
}

// One light, creamy theme. The theme color is the site background.
export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf6ea',
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale()
  const messages = await getMessages()
  const { htmlLang, dir } = LOCALE_META[locale]
  const fonts = [inter, display, arabic, naskh, urdu, chinese].map((f) => f.variable).join(' ')

  return (
    <html lang={htmlLang} dir={dir}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(siteJsonLd(locale, messages.meta.siteDescription)) }} />
      </head>
      <body className={fonts}>
        <I18nProvider locale={locale} messages={toClientMessages(messages)}>
          {children}
          <ChatMount />
          {process.env.NODE_ENV === 'production' && <Analytics />}
          {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
            <ConsentAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
          )}
          <CookieBanner />
        </I18nProvider>
      </body>
    </html>
  )
}
