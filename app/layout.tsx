import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { ChatMount } from '@/components/chatbot/ChatMount'
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
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

// Theme colors are the site background in each mode.
export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf8f3' },
    { media: '(prefers-color-scheme: dark)', color: '#0b1f17' },
  ],
}

// Runs before first paint so the saved theme never flashes.
const themeScript = `try{var t=localStorage.getItem('theme');if(t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.classList.add('dark')}catch(e){}`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(siteJsonLd()) }} />
      </head>
      <body className={`${inter.variable} ${display.variable}`}>
        {children}
        <ChatMount />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
