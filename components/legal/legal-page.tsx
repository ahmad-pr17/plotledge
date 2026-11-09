import Link from 'next/link'
import { PageShell } from '@/components/sections/page-shell'
import { CONTACT_EMAIL } from '@/lib/site'

export type LegalSection = { id: string; title: string; content: React.ReactNode }

type Props = {
  title: string
  intro: string
  updated: string
  /** Plain-language points shown first, for people who will not read the whole page. */
  summary: string[]
  sections: LegalSection[]
  /** Shown above the title when the text still needs a lawyer's review. */
  draftNote?: string
  current: '/privacy' | '/cookie-policy' | '/terms' | '/refund-policy'
}

const POLICIES = [
  { href: '/privacy', label: 'Privacy policy' },
  { href: '/cookie-policy', label: 'Cookie policy' },
  { href: '/terms', label: 'Terms of use' },
  { href: '/refund-policy', label: 'Refund and cancellation' },
] as const

// Body copy styles live here so the policy pages only contain words.
const prose =
  'flex flex-col gap-4 leading-7 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_strong]:font-semibold [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_h3]:mt-2 [&_h3]:font-display [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-foreground'

export function LegalPage({ title, intro, updated, summary, sections, draftNote, current }: Props) {
  return (
    <PageShell>
      {draftNote && <p className="mb-8 max-w-3xl rounded-xl bg-pending-soft p-4 text-sm font-semibold text-pending-ink">{draftNote}</p>}

      <header className="max-w-3xl">
        <h1 className="t-h2">{title}</h1>
        <p className="mt-3 text-lg leading-8 text-muted-foreground">{intro}</p>
        <p className="mt-3 text-sm text-muted-foreground">Last updated {updated}</p>
      </header>

      <section aria-labelledby="in-short" className="mt-8 max-w-3xl rounded-2xl border border-[var(--border-strong)] bg-card p-5 sm:p-6">
        <h2 id="in-short" className="font-display text-lg font-bold text-foreground">In short</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
          {summary.map((s) => <li key={s}>{s}</li>)}
        </ul>
      </section>

      <div className="mt-10 grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
        <nav aria-label={`${title} contents`} className="lg:sticky lg:top-24 lg:self-start">
          <details className="group rounded-xl border border-border bg-card lg:border-0 lg:bg-transparent" open>
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between px-4 text-sm font-semibold text-foreground lg:min-h-0 lg:cursor-default lg:px-0 lg:pb-3 [&::-webkit-details-marker]:hidden">
              On this page
              <span aria-hidden className="text-muted-foreground transition-transform group-open:rotate-180 lg:hidden">&#9662;</span>
            </summary>
            <ol className="flex flex-col px-4 pb-3 lg:px-0 lg:pb-0">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="inline-flex min-h-9 items-center py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">{s.title}</a>
                </li>
              ))}
            </ol>
          </details>
        </nav>

        <article className="max-w-3xl">
          <div className="flex flex-col gap-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-24">
                <h2 id={`${s.id}-h`} className="font-display text-2xl font-bold tracking-tight text-foreground">{s.title}</h2>
                <div className={`${prose} mt-4`}>{s.content}</div>
              </section>
            ))}
          </div>

          <aside className="mt-14 rounded-2xl bg-secondary p-5 sm:p-6" aria-label="Contact and related policies">
            <h2 className="font-display text-lg font-bold text-foreground">Questions about this page?</h2>
            <p className="mt-2 leading-7 text-muted-foreground">
              Write to <a className="font-semibold text-primary underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> and a person will reply.
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
              {POLICIES.filter((p) => p.href !== current).map((p) => (
                <li key={p.href}><Link href={p.href} className="inline-flex min-h-11 items-center text-sm font-semibold text-primary underline underline-offset-2">{p.label}</Link></li>
              ))}
            </ul>
          </aside>
        </article>
      </div>
    </PageShell>
  )
}

/** A simple bordered table that scrolls sideways on narrow screens instead of breaking the page. */
export function LegalTable({ head, rows, caption }: { head: string[]; rows: React.ReactNode[][]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card" tabIndex={0} role="region" aria-label={caption}>
      <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border bg-secondary text-foreground">
            {head.map((h) => <th key={h} scope="col" className="px-4 py-3 font-semibold">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/60 align-top last:border-0">
              {r.map((c, j) => <td key={j} className={j === 0 ? 'px-4 py-3 font-semibold text-foreground' : 'px-4 py-3'}>{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
