import Link from 'next/link'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { Container } from '@/components/shared/container'
import { Logo } from '@/components/shared/logo'
import { CONTACT_CITY, CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CRM_LOGIN_URL, whatsappLink } from '@/lib/site'

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'How it works', href: '/#how' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Book a demo', href: '/contact#demo' },
      { label: 'Open the CRM', href: CRM_LOGIN_URL },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Guides', href: '/guides' },
      { label: 'FAQ', href: '/#faq' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of service', href: '/terms' },
    ],
  },
]

const linkCls = 'inline-flex min-h-11 items-center text-sm text-emerald-100/75 transition-colors hover:text-white'

export function Footer() {
  return (
    <footer className="on-deep bg-deep text-emerald-100/75">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo inverse />
            <p className="mt-4 max-w-xs text-sm leading-6">Plot management software for property dealers and housing societies in Pakistan.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-white">Questions before you start?</p>
              <p className="mt-1 text-sm">Message us on WhatsApp and we reply with a demo time.</p>
              <ButtonLink href={whatsappLink()} variant="deep" className="mt-3 w-full sm:w-auto"><MessageCircle /> Chat on WhatsApp</ButtonLink>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((c) => (
              <nav key={c.heading} aria-label={c.heading}>
                <h2 className="font-display text-sm font-semibold text-white">{c.heading}</h2>
                <ul className="mt-2">
                  {c.links.map((l) => (
                    <li key={c.heading + l.label}>
                      {l.href.startsWith('http') ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkCls}>{l.label}</a>
                      ) : (
                        <Link href={l.href} className={linkCls}>{l.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <div>
              <h2 className="font-display text-sm font-semibold text-white">Contact</h2>
              {/* PLACEHOLDER contact details: set real values in lib/site.ts or .env.local */}
              <ul className="mt-2 text-sm">
                <li><a href={`mailto:${CONTACT_EMAIL}`} className={`${linkCls} gap-2 break-all`}><Mail className="size-4 shrink-0" aria-hidden /> {CONTACT_EMAIL}</a></li>
                <li><a href={`tel:${CONTACT_PHONE_DISPLAY.replace(/\s/g, '')}`} className={`${linkCls} gap-2`}><Phone className="size-4 shrink-0" aria-hidden /> {CONTACT_PHONE_DISPLAY}</a></li>
                <li className="flex min-h-11 items-center gap-2"><MapPin className="size-4 shrink-0" aria-hidden /> {CONTACT_CITY}</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Plot Ledge. All rights reserved.</span>
          <span>Sample data and placeholder logos on this site are for illustration.</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-white">Privacy</Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-white">Terms</Link>
          </span>
        </Container>
      </div>
    </footer>
  )
}
