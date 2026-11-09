import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/legal-page'
import { getLocale, getMessages } from '@/i18n/server'
import { openGraphLocale, pageAlternates } from '@/i18n/seo'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const { legal } = await getMessages()
  const { title, description } = legal.cookies
  return {
    title,
    description,
    alternates: pageAlternates(locale, '/cookie-policy'),
    robots: { index: true, follow: true },
    openGraph: { title, description, type: 'website', url: '/cookie-policy', ...openGraphLocale(locale) },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function CookiePolicyPage() {
  return <LegalPage policy="cookies" />
}
