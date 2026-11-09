import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { ChatMount } from '@/components/chatbot/ChatMount'
import { ConsentAnalytics } from '@/components/consent/consent-analytics'
import { CookieBanner } from '@/components/consent/cookie-banner'
import { jsonLdString, siteJsonLd } from '@/lib/jsonld'
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from '@/lib/site'
import './globals.css'

// Inter for UI text, Bricolage Grotesque for headlines. Money uses tabular numbers via the .num class.
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage', display: 'swap', axes: ['opsz'] })

const FULL_TITLE = `${SITE_TITLE} | ${SITE_NAME}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: FULL_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'plot management software',
    'real estate CRM Pakistan',
    'property dealer software',
    'installment tracking software',
    'plot installment management system',
    'property CRM Lahore',
    'real estate software for housing societies',
  ],
  alternates: { canonical: '/' },
  openGraph: { title: FULL_TITLE, description: SITE_DESCRIPTION, type: 'website', siteName: SITE_NAME, url: '/', locale: 'en_PK' },
  twitter: { card: 'summary_large_image', title: FULL_TITLE, description: SITE_DESCRIPTION },
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

// One light, creamy theme. The theme color is the site background.
export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#fbf6ea',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(siteJsonLd()) }} />
      </head>
      <body className={`${inter.variable} ${display.variable}`}>
        {children}
        <ChatMount />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <ConsentAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <CookieBanner />
      </body>
    </html>
  )
}
