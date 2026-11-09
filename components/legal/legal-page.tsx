import { ArrowLeft, CalendarDays, CircleCheck } from 'lucide-react'
import { PageShell } from '@/components/sections/page-shell'
import { Container } from '@/components/shared/container'
import { LocaleLink } from '@/components/shared/locale-link'
import { getLocale, getMessages } from '@/i18n/server'
import { fmt, rich } from '@/i18n/text'
import { CONTACT_EMAIL } from '@/lib/site'
import { ContentsNav } from './contents-nav'
import { LegalHeroArt } from './legal-hero-art'
import { LegalBlocks, renderText } from './legal-content'
import { ALL_POLICIES, getPolicy, getPolicyName, POLICY_HREFS, POLICY_ICONS, type PolicyKey } from './policies'

export type { PolicyKey } from './policies'

// Body copy styles live here so the policy text only contains words.
const prose =
  'flex flex-col gap-4 leading-7 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:ps-5 [&_h3]:mt-2 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-foreground'

/**
 * Background for the policy and hub heroes: the home page's contour waves and glows, plus an aerial site-plan illustration on the
 * side away from the text. The whole layer fades out toward the bottom so the hero blends into the page with no hard edge.
 */
export function LegalHeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]">
      <div className="bg-waves-light absolute inset-0" />
      <div className="glow-primary absolute -start-32 -top-10 size-[460px]" />
      <div className="glow-accent absolute -end-24 top-24 size-[400px]" />
      <LegalHeroArt className="absolute -end-10 top-16 w-[640px] max-w-none opacity-40 sm:opacity-60 lg:end-0 lg:top-10 lg:w-[720px] lg:opacity-80 [mask-image:linear-gradient(to_left,#000_30%,transparent_95%)] rtl:-scale-x-100" />
    </div>
  )
}

export async function LegalPage({ policy }: { policy: PolicyKey }) {
  const m = await getMessages()
  const locale = await getLocale()
  const { ui } = m.legal
  const p = getPolicy(m, policy)
  const HeroIcon = POLICY_ICONS[policy]
  const updated = new Intl.DateTimeFormat(`${locale}-u-nu-latn`, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${p.updated}T00:00:00Z`))
  const others = ALL_POLICIES.filter((k) => k !== policy)

  return (
    <PageShell flush>
      {/* Hero: breadcrumb back to the hub, the title with its icon, the intro, and the summary on a deep green card. */}
      <section className="relative overflow-hidden pb-12 pt-28 md:pb-16 md:pt-36">
        <LegalHeroBackdrop />
        <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,.9fr)] lg:gap-14">
          <div>
            <LocaleLink href="/legal" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border-strong)] bg-card px-4 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">
              <ArrowLeft aria-hidden className="size-4 rtl:-scale-x-100" />
              {ui.allDocuments}
            </LocaleLink>

            <div className="mt-8 flex items-center gap-4">
              <span aria-hidden className="grid size-14 shrink-0 place-items-center rounded-2xl bg-brand text-amber-400 shadow-sm ring-1 ring-white/10 sm:size-16">
                <HeroIcon className="size-7 sm:size-8" />
              </span>
              <h1 className="t-h2 text-foreground">{p.title}</h1>
            </div>
            <p className="t-lead measure mt-5 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">{renderText(p.intro)}</p>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
              <CalendarDays aria-hidden className="size-4 text-primary" />
              {fmt(ui.lastUpdated, { date: updated })}
            </p>

          </div>

          <section aria-labelledby="in-short" className="relative overflow-hidden rounded-3xl bg-brand p-6 text-white shadow-[0_30px_60px_-30px_rgb(var(--shadow-color)/.55)] ring-1 ring-amber-500/30 sm:p-8">
            <div aria-hidden className="pointer-events-none absolute -end-16 -top-16 size-56 rounded-full bg-amber-400/15 blur-2xl" />
            <h2 id="in-short" className="relative font-display text-2xl font-bold tracking-tight">{ui.inShort}</h2>
            <ul className="relative mt-5 flex flex-col gap-4 text-base leading-7 text-emerald-50 [&_a]:font-semibold [&_a]:text-amber-200 [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-white">
              {p.summary.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <CircleCheck aria-hidden className="mt-1 size-5 shrink-0 text-amber-300" />
                  <span>{renderText(s)}</span>
                </li>
              ))}
            </ul>
          </section>
        </Container>
      </section>

      <Container className="pb-20 md:pb-28">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-14">
          <ContentsNav heading={ui.onThisPage} label={fmt(ui.contentsLabel, { title: p.title })} items={p.sections.map((s) => ({ id: s.id, title: s.title }))} />

          <article className="max-w-3xl">
            <div className="flex flex-col gap-12">
              {p.sections.map((s) => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-24">
                  <h2 id={`${s.id}-h`} className="font-display text-2xl font-bold tracking-tight text-foreground">{s.title}</h2>
                  <div className={`${prose} mt-4`}><LegalBlocks blocks={s.blocks} /></div>
                </section>
              ))}
            </div>

            <aside className="mt-14 rounded-2xl bg-secondary p-5 sm:p-6" aria-label={ui.contactAria}>
              <h2 className="font-display text-lg font-bold text-foreground">{ui.questionsTitle}</h2>
              <p className="mt-2 leading-7 text-muted-foreground">
                {rich(ui.contactSentence, { mail: (c) => <a className="font-semibold text-primary underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>{c}</a> }, { email: CONTACT_EMAIL })}
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
                {others.map((k) => (
                  <li key={k}><LocaleLink href={POLICY_HREFS[k]} className="inline-flex min-h-11 items-center text-sm font-semibold text-primary underline underline-offset-2">{getPolicyName(m, k)}</LocaleLink></li>
                ))}
              </ul>
            </aside>
          </article>
        </div>
      </Container>
    </PageShell>
  )
}
