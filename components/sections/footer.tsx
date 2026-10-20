import Link from 'next/link'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { Container } from '@/components/shared/container'
import { Logo } from '@/components/shared/logo'
import { CONTACT_CITY, CONTACT_EMAIL, CRM_LOGIN_URL, whatsappLink } from '@/lib/site'

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'How it works', href: '/#how' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Guides', href: '/guides' },
      { label: 'Privacy policy', href: '/privacy' },
      { label: 'Terms of service', href: '/terms' },
    ],
  },
  {
    heading: 'Get started',
    links: [
      { label: 'Book a free demo', href: '/contact#demo' },
      { label: 'Log in to the CRM', href: CRM_LOGIN_URL },
    ],
  },
]

const linkCls = 'inline-flex min-h-11 min-w-11 items-center gap-2 text-sm text-emerald-100/80 transition-colors hover:text-white'

export function Footer() {
  return (
    <footer className="on-deep bg-deep text-emerald-100/80">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo inverse />
            <p className="mt-4 max-w-xs text-sm leading-6">Plot management software for property dealers and housing societies in Pakistan.</p>
            <ul className="mt-5 text-sm">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className={`${linkCls} break-all`}><Mail className="size-4 shrink-0" aria-hidden /> {CONTACT_EMAIL}</a></li>
              <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={linkCls}><MessageCircle className="size-4 shrink-0" aria-hidden /> Chat on WhatsApp</a></li>
              <li className="flex min-h-11 items-center gap-2"><MapPin className="size-4 shrink-0" aria-hidden /> {CONTACT_CITY}</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
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
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-1 py-5 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Plot Ledge. All rights reserved.</span>
          <span className="flex gap-4">
            <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-white">Privacy</Link>
            <Link href="/terms" className="inline-flex min-h-11 items-center hover:text-white">Terms</Link>
          </span>
        </Container>
      </div>
    </footer>
  )
}
