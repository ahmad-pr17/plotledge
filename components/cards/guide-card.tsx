import { ArrowRightLeft, ArrowUpRight, BookOpen, CalendarCheck, Clock, ListChecks, ReceiptText, Scale, ChartPie, type LucideIcon } from 'lucide-react'
import { LegalHeroArt } from '@/components/legal/legal-hero-art'
import { LocaleLink } from '@/components/shared/locale-link'
import type { Guide } from '@/data/guides'
import { getMessages } from '@/i18n/server'
import { fmt } from '@/i18n/text'
import { cn } from '@/lib/utils'

// One icon and one soft tone per guide, so the cards are told apart at a glance.
const ICONS: Record<string, LucideIcon> = {
  'how-to-track-plot-installments-without-excel': CalendarCheck,
  'payment-slips-and-receipts-for-property-dealers': ReceiptText,
  'split-profit-between-investors-on-a-plot-project': ChartPie,
  'how-to-choose-installment-management-software-in-pakistan': ListChecks,
  'real-estate-crm-vs-erp-for-plot-dealers': Scale,
  'how-to-track-plot-file-transfers-and-ownership-history': ArrowRightLeft,
}
const TONES = ['bg-emerald-50', 'bg-amber-50', 'bg-lime-50', 'bg-teal-50', 'bg-orange-50', 'bg-green-50']

/**
 * A guide as a card: a tinted panel with the guide's icon over a faint plot-map drawing, the read time, the title, a short
 * description and a read link. The whole card is one link whose name is the guide's title. `featured` makes it wide for the top of the list.
 */
export async function GuideCard({ guide, featured = false, index = 0, as: Title = 'h2' }: { guide: Guide; featured?: boolean; index?: number; /** Heading level of the title: h2 on the list page, h3 under another heading. */ as?: 'h2' | 'h3' }) {
  const { guides: m } = await getMessages()
  const article = m.articles[guide.slug]
  const Icon = ICONS[guide.slug] ?? BookOpen
  const tone = TONES[index % TONES.length]

  return (
    <LocaleLink
      href={`/guides/${guide.slug}`}
      className={cn(
        'group flex h-full overflow-hidden rounded-3xl border border-[var(--border-strong)] bg-card transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_24px_48px_-28px_rgb(var(--shadow-color)/.5)]',
        featured ? 'flex-col lg:flex-row' : 'flex-col',
      )}
    >
      <span aria-hidden className={cn('relative block shrink-0 overflow-hidden', tone, featured ? 'h-48 lg:h-auto lg:w-[44%]' : 'h-36')}>
        <LegalHeroArt className={cn('absolute max-w-none opacity-70 rtl:-scale-x-100', featured ? '-end-10 -top-6 w-[560px]' : '-end-6 -top-4 w-[340px]')} style={featured ? undefined : { translate: `${-(index % 3) * 70}px ${-(index % 2) * 28}px` }} />
        <span className={cn('absolute start-5 bottom-5 grid place-items-center rounded-2xl bg-brand text-amber-400 shadow-sm ring-1 ring-white/10', featured ? 'size-16' : 'size-12')}>
          <Icon className={featured ? 'size-8' : 'size-6'} />
        </span>
      </span>

      <span className={cn('flex flex-1 flex-col p-5 sm:p-6', featured && 'lg:p-9')}>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
          <Clock aria-hidden className="size-3.5" />
          {fmt(m.article.readTime, { minutes: guide.readMinutes })}
        </span>
        <Title className={cn('mt-4 font-display font-bold tracking-tight text-foreground', featured ? 'text-[clamp(1.5rem,1.2rem+1.4vw,2.25rem)] leading-tight' : 'text-xl leading-snug')}>{article.title}</Title>
        <span className={cn('mt-3 block leading-7 text-muted-foreground', featured ? 'text-base lg:text-lg' : 'text-sm')}>{article.description}</span>
        <span className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-4 text-sm font-semibold text-primary">
          {m.card.readGuide}
          <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
        </span>
      </span>
    </LocaleLink>
  )
}
