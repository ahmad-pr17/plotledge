import { ArrowUpRight, BookOpen } from 'lucide-react'
import { LocaleLink } from '@/components/shared/locale-link'
import { SpotlightCard } from '@/components/shared/spotlight-card'
import type { Guide } from '@/data/guides'
import { getMessages } from '@/i18n/server'
import { fmt } from '@/i18n/text'

export async function GuideCard({ guide }: { guide: Guide }) {
  const { guides: m } = await getMessages()
  const article = m.articles[guide.slug]
  return (
    <SpotlightCard variant="solid" lift className="h-full">
      <LocaleLink href={`/guides/${guide.slug}`} className="flex h-full flex-col gap-4 p-6">
        <span className="grid size-10 place-items-center rounded-xl bg-paid-soft text-paid-ink"><BookOpen className="size-5" aria-hidden="true" /></span>
        <h3 className="t-h3">{article.title}</h3>
        <p className="text-sm leading-6 text-muted-foreground">{article.description}</p>
        <span className="mt-auto flex items-center justify-between pt-2 text-sm font-semibold text-primary">
          <span className="text-muted-foreground">{fmt(m.article.readTime, { minutes: guide.readMinutes })}</span>
          <span className="inline-flex min-h-11 items-center gap-1">{m.card.readGuide} <ArrowUpRight className="size-4 rtl:-scale-x-100" aria-hidden="true" /></span>
        </span>
      </LocaleLink>
    </SpotlightCard>
  )
}
