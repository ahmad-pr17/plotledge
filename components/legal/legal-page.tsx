import { PageShell } from '@/components/sections/page-shell'
import { LocaleLink } from '@/components/shared/locale-link'
import { getLocale, getMessages } from '@/i18n/server'
import { fmt, rich } from '@/i18n/text'
import { CONTACT_EMAIL } from '@/lib/site'
import { LegalBlocks, renderText } from './legal-content'

export type PolicyKey = 'privacy' | 'cookies' | 'terms' | 'refund'

const POLICY_HREFS: Record<PolicyKey, string> = {
  privacy: '/privacy',
  cookies: '/cookie-policy',
  terms: '/terms',
  refund: '/refund-policy',
}

// Body copy styles live here so the policy text only contains words.
const prose =
  'flex flex-col gap-4 leading-7 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:ps-5 [&_h3]:mt-2 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-foreground'

export async function LegalPage({ policy }: { policy: PolicyKey }) {
  const m = await getMessages()
  const locale = await getLocale()
  const { ui } = m.legal
  const p = m.legal[policy]
  const updated = new Intl.DateTimeFormat(`${locale}-u-nu-latn`, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(`${p.updated}T00:00:00Z`))
  const others = (Object.keys(POLICY_HREFS) as PolicyKey[]).filter((k) => k !== policy)

  return (
    <PageShell>
      {p.draftNote && <p className="mb-8 max-w-3xl rounded-xl bg-pending-soft p-4 text-sm font-semibold text-pending-ink">{p.draftNote}</p>}

      <header className="max-w-3xl">
        <h1 className="t-h2">{p.title}</h1>
        <p className="mt-3 text-lg leading-8 text-muted-foreground">{p.intro}</p>
        <p className="mt-3 text-sm text-muted-foreground">{fmt(ui.lastUpdated, { date: updated })}</p>
      </header>

      <section aria-labelledby="in-short" className="mt-8 max-w-3xl rounded-2xl border border-[var(--border-strong)] bg-card p-5 sm:p-6">
        <h2 id="in-short" className="font-display text-lg font-bold text-foreground">{ui.inShort}</h2>
        <ul className="mt-3 list-disc space-y-2 ps-5 leading-7 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">
          {p.summary.map((s, i) => <li key={i}>{renderText(s)}</li>)}
        </ul>
      </section>

      <div className="mt-10 grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
        <nav aria-label={fmt(ui.contentsLabel, { title: p.title })} className="lg:sticky lg:top-24 lg:self-start">
          <details className="group rounded-xl border border-border bg-card lg:border-0 lg:bg-transparent" open>
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-4 text-sm font-semibold text-foreground lg:min-h-0 lg:cursor-default lg:px-0 lg:pb-3 [&::-webkit-details-marker]:hidden">
              {ui.onThisPage}
              <span aria-hidden className="text-muted-foreground transition-transform group-open:rotate-180 lg:hidden">&#9662;</span>
            </summary>
            <ol className="flex flex-col px-4 pb-3 lg:px-0 lg:pb-0">
              {p.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-flex min-h-9 items-center py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">{s.title}</a>
                </li>
              ))}
            </ol>
          </details>
        </nav>

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
                <li key={k}><LocaleLink href={POLICY_HREFS[k]} className="inline-flex min-h-11 items-center text-sm font-semibold text-primary underline underline-offset-2">{ui.policyNames[k]}</LocaleLink></li>
              ))}
            </ul>
          </aside>
        </article>
      </div>
    </PageShell>
  )
}
