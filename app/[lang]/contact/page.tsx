import type { Metadata } from 'next'
import { Building2, CalendarCheck, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { LeadForm } from '@/components/forms/lead-form'
import { getLocale, getMessages } from '@/i18n/server'
import { localePath } from '@/i18n/path'
import { openGraphLocale, pageAlternates } from '@/i18n/seo'
import { PageShell } from '@/components/sections/page-shell'
import { ButtonLink } from '@/components/shared/button-link'
import { CONTACT_CITY, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, whatsappLink } from '@/lib/site'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const { title, description } = (await getMessages()).contact.meta
  const url = localePath(locale, '/contact')
  return {
    title,
    description,
    alternates: pageAlternates(locale, '/contact'),
    openGraph: { title, description, type: 'website', url, ...openGraphLocale(locale) },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function ContactPage() {
  const m = await getMessages()
  const c = m.contact
  return (
    <PageShell>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div id="demo" className="scroll-mt-28">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="t-h2 mt-3">{c.title}</h1>
          <p className="t-lead measure mt-4 text-muted-foreground">{c.lead}</p>
          <div className="mt-8"><LeadForm /></div>
        </div>

        <aside className="flex flex-col gap-8 lg:pt-24" aria-label={c.aside.label}>
          <div className="card-glass p-6">
            <h2 className="t-h3">{c.aside.chatTitle}</h2>
            <ButtonLink href={whatsappLink(m.common.whatsappMessage)} variant="secondary" className="mt-4 w-full">
              <MessageCircle aria-hidden="true" /> {c.aside.whatsapp}
            </ButtonLink>
            <ul className="mt-6 flex flex-col gap-1 text-sm">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="flex min-h-11 items-center gap-3 hover:text-primary"><Mail className="size-4 text-primary" aria-hidden="true" />{CONTACT_EMAIL}</a></li>
              <li><a href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\s/g, '')}`} className="flex min-h-11 items-center gap-3 hover:text-primary"><Phone className="size-4 text-primary" aria-hidden="true" />{CONTACT_PHONE_DISPLAY}</a></li>
              <li className="flex min-h-11 items-center gap-3"><MapPin className="size-4 text-primary" aria-hidden="true" />{CONTACT_CITY}</li>
            </ul>
          </div>

          <div>
            <h2 className="t-h3 flex items-center gap-2"><CalendarCheck className="size-5 text-primary" aria-hidden="true" /> {c.aside.stepsTitle}</h2>
            <ol className="mt-4 flex flex-col gap-3">
              {c.steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="num grid size-6 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><Building2 className="size-4" aria-hidden="true" /> {c.aside.enterprise}</p>
          </div>
        </aside>
      </div>
    </PageShell>
  )
}
