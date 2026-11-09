import type { Metadata } from 'next'
import { LegalPage } from '@/components/legal/legal-page'
import { getLocale, getMessages } from '@/i18n/server'
import { openGraphLocale, pageAlternates } from '@/i18n/seo'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const { policies } = await getMessages()
  const { title, description } = policies.dataProcessing
  return {
    title,
    description,
    alternates: pageAlternates(locale, '/data-processing'),
    robots: { index: true, follow: true },
    openGraph: { title, description, type: 'website', url: '/data-processing', ...openGraphLocale(locale) },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function Page() {
  return <LegalPage policy="dataProcessing" />
}
