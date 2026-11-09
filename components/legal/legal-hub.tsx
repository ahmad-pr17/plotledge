import { ArrowRight, CalendarDays } from 'lucide-react'
import { PageShell } from '@/components/sections/page-shell'
import { Container } from '@/components/shared/container'
import { LocaleLink } from '@/components/shared/locale-link'
import { getLocale, getMessages } from '@/i18n/server'
import { fmt, rich } from '@/i18n/text'
import { CONTACT_EMAIL } from '@/lib/site'
import { renderText } from './legal-content'
import { LegalHeroBackdrop } from './legal-page'
import { getPolicy, getPolicyName, HUB_GROUPS, POLICY_HREFS, POLICY_ICONS } from './policies'

/** /legal: every legal and trust document in one place, grouped by what a visitor wants to know. */
export async function LegalHub() {
  const m = await getMessages()
  const locale = await getLocale()
  const { hub } = m.policies
  const { ui } = m.legal
  const date = (iso: string) => new Intl.DateTimeFormat(`${locale}-u-nu-latn`, { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`))

  return (
    <PageShell flush>
      <section className="relative overflow-hidden pb-10 pt-28 md:pb-14 md:pt-36">
        <LegalHeroBackdrop />
        <Container>
          <h1 className="t-h2 max-w-3xl text-foreground">{hub.title}</h1>
          <p className="t-lead measure mt-5 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">{renderText(hub.intro)}</p>
        </Container>
      </section>

      <Container className="pb-20 md:pb-28">
        <div className="flex flex-col gap-14">
          {HUB_GROUPS.map((group, gi) => (
            <section key={gi} aria-labelledby={`hub-group-${gi}`}>
              <h2 id={`hub-group-${gi}`} className="font-display text-2xl font-bold tracking-tight text-foreground">{hub.groups[gi].title}</h2>
              <p className="measure mt-2 text-muted-foreground [&_a]:font-semibold [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2">{renderText(hub.groups[gi].text)}</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.map((key) => {
                  const Icon = POLICY_ICONS[key]
                  const p = getPolicy(m, key)
                  return (
                    <li key={key} className="flex">
                      <LocaleLink
                        href={POLICY_HREFS[key]}
                        className="group flex w-full flex-col rounded-2xl border border-[var(--border-strong)] bg-card p-5 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-[0_20px_40px_-24px_rgb(var(--shadow-color)/.45)] sm:p-6"
                      >
                        <span aria-hidden className="grid size-12 place-items-center rounded-xl bg-brand text-amber-400 ring-1 ring-white/10">
                          <Icon className="size-6" />
                        </span>
                        <span className="mt-4 font-display text-lg font-bold text-foreground">{getPolicyName(m, key)}</span>
                        <span className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{p.description}</span>
                        <span className="mt-5 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                          <span className="inline-flex items-center gap-1.5">
                            <CalendarDays aria-hidden className="size-3.5" />
                            {fmt(ui.lastUpdated, { date: date(p.updated) })}
                          </span>
                          <ArrowRight aria-hidden className="size-4 text-primary transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" />
                        </span>
                      </LocaleLink>
                    </li>
                  )
                })}
              </ul>
            </section>
          ))}
        </div>

        <aside className="mt-16 rounded-2xl bg-secondary p-5 sm:p-6" aria-label={ui.contactAria}>
          <h2 className="font-display text-lg font-bold text-foreground">{ui.questionsTitle}</h2>
          <p className="mt-2 leading-7 text-muted-foreground">
            {rich(ui.contactSentence, { mail: (c) => <a className="font-semibold text-primary underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>{c}</a> }, { email: CONTACT_EMAIL })}
          </p>
        </aside>
      </Container>
    </PageShell>
  )
}
