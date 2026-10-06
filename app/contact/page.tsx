import type { Metadata } from 'next'
import { Building2, CalendarCheck, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { LeadForm } from '@/components/forms/lead-form'
import { PageShell } from '@/components/sections/page-shell'
import { ButtonLink } from '@/components/shared/button-link'
import { CONTACT_CITY, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, whatsappLink } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact and book a demo',
  description: 'Book a free demo of Plot Ledge, the plot management software for property dealers. Send a message or chat on WhatsApp.',
  alternates: { canonical: '/contact' },
}

const steps = [
  'We ask how you track plots and installments today.',
  'You see Plot Ledge with sample plots, deals and receipts.',
  'We set up a Starter account if you want to try it with your own data.',
]

export default function ContactPage() {
  return (
    <PageShell>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
        <div id="demo" className="scroll-mt-28">
          <p className="eyebrow">Contact</p>
          <h1 className="t-h2 mt-3">Book a free demo</h1>
          <p className="t-lead measure mt-4 text-muted-foreground">
            Tell us how many plots you manage and we will show you installments, receipts and reports on a short call.
          </p>
          <div className="mt-8"><LeadForm /></div>
        </div>

        <aside className="flex flex-col gap-8 lg:pt-24" aria-label="Other ways to reach us">
          <div className="card-glass p-6">
            <h2 className="t-h3">Prefer to chat?</h2>
            <ButtonLink href={whatsappLink()} variant="whatsapp" className="mt-4 w-full">
              <MessageCircle aria-hidden="true" /> Chat on WhatsApp
            </ButtonLink>
            <ul className="mt-6 flex flex-col gap-1 text-sm">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className="flex min-h-11 items-center gap-3 hover:text-primary"><Mail className="size-4 text-primary" aria-hidden="true" />{CONTACT_EMAIL}</a></li>
              <li><a href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\s/g, '')}`} className="flex min-h-11 items-center gap-3 hover:text-primary"><Phone className="size-4 text-primary" aria-hidden="true" />{CONTACT_PHONE_DISPLAY}</a></li>
              <li className="flex min-h-11 items-center gap-3"><MapPin className="size-4 text-primary" aria-hidden="true" />{CONTACT_CITY}</li>
            </ul>
          </div>

          <div>
            <h2 className="t-h3 flex items-center gap-2"><CalendarCheck className="size-5 text-primary" aria-hidden="true" /> What happens on a demo</h2>
            <ol className="mt-4 flex flex-col gap-3">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <span className="num grid size-6 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
            <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><Building2 className="size-4" aria-hidden="true" /> Housing society or several projects? Mention it and we will cover Enterprise.</p>
          </div>
        </aside>
      </div>
    </PageShell>
  )
}
