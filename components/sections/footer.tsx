import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { CookieSettingsButton } from '@/components/consent/cookie-settings-button'
import { Container } from '@/components/shared/container'
import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { LocaleLink } from '@/components/shared/locale-link'
import { Logo } from '@/components/shared/logo'
import { SocialIcons } from '@/components/shared/social-icons'
import { fmt } from '@/i18n/text'
import { getMessages } from '@/i18n/server'
import { CONTACT_EMAIL, CRM_LOGIN_URL, whatsappLink } from '@/lib/site'

const linkCls = 'inline-flex min-h-11 min-w-11 items-center gap-2 text-sm text-emerald-100/80 transition-colors hover:text-white'

export async function Footer() {
  const m = await getMessages()
  const f = m.common.footer
  const columns: { heading: string; links: { label: string; href: string }[] }[] = [
    {
      heading: f.product.heading,
      links: [
        { label: f.product.features, href: '/#features' },
        { label: f.product.how, href: '/#how' },
        { label: f.product.pricing, href: '/#pricing' },
        { label: f.product.faq, href: '/#faq' },
      ],
    },
    {
      heading: f.company.heading,
      links: [
        { label: f.company.contact, href: '/contact' },
        { label: f.company.guides, href: '/guides' },
      ],
    },
    {
      heading: f.start.heading,
      links: [
        { label: f.start.demo, href: '/contact#demo' },
        { label: f.start.login, href: CRM_LOGIN_URL },
      ],
    },
    {
      heading: f.legal.heading,
      links: [
        { label: f.legal.privacy, href: '/privacy' },
        { label: f.legal.cookies, href: '/cookie-policy' },
        { label: f.legal.refund, href: '/refund-policy' },
        { label: f.legal.terms, href: '/terms' },
        { label: f.legal.security, href: '/security' },
        { label: f.legal.all, href: '/legal' },
      ],
    },
  ]

  return (
    <footer className="on-deep bg-deep text-emerald-100/80">
      <Container className="py-14">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div>
            <Logo inverse />
            <p className="mt-4 max-w-xs text-sm leading-6">{f.tagline}</p>
            <ul className="mt-5 text-sm">
              <li><a href={`mailto:${CONTACT_EMAIL}`} className={`${linkCls} break-all`}><Mail className="size-4 shrink-0" aria-hidden /> <span dir="ltr">{CONTACT_EMAIL}</span></a></li>
              <li><a href={whatsappLink(m.common.whatsappMessage)} target="_blank" rel="noopener noreferrer" className={linkCls}><MessageCircle className="size-4 shrink-0" aria-hidden /> {f.whatsapp}</a></li>
              <li className="flex min-h-11 items-center gap-2"><MapPin className="size-4 shrink-0" aria-hidden /> {f.city}</li>
            </ul>
            <SocialIcons />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((c) => (
              <nav key={c.heading} aria-label={c.heading}>
                <p className="font-display text-sm font-semibold text-white">{c.heading}</p>
                <ul className="mt-2">
                  {c.links.map((l) => (
                    <li key={c.heading + l.href}>
                      {l.href.startsWith('http') ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkCls}>{l.label}</a>
                      ) : (
                        <LocaleLink href={l.href} className={linkCls}>{l.label}</LocaleLink>
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
          <span>{fmt(f.copyright, { year: new Date().getFullYear() })}</span>
          <span className="flex flex-wrap items-center gap-4">
            <LocaleLink href="/privacy" className="inline-flex min-h-11 min-w-11 items-center justify-center px-1 hover:text-white">{f.privacyShort}</LocaleLink>
            <LocaleLink href="/terms" className="inline-flex min-h-11 min-w-11 items-center justify-center px-1 hover:text-white">{f.termsShort}</LocaleLink>
            <CookieSettingsButton className="inline-flex min-h-11 items-center justify-center px-1 hover:text-white" />
            <LanguageSwitcher tone="deep" variant="inline" />
          </span>
        </Container>
      </div>
    </footer>
  )
}
