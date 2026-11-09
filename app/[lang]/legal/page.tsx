import type { Metadata } from 'next'
import { LegalHub } from '@/components/legal/legal-hub'
import { getLocale, getMessages } from '@/i18n/server'
import { openGraphLocale, pageAlternates } from '@/i18n/seo'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const { policies } = await getMessages()
  const { title, description } = policies.hub
  return {
    title,
    description,
    alternates: pageAlternates(locale, '/legal'),
    robots: { index: true, follow: true },
    openGraph: { title, description, type: 'website', url: '/legal', ...openGraphLocale(locale) },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function LegalHubPage() {
  return <LegalHub />
}
