import type { ReactNode } from 'react'
import { CookieSettingsButton } from '@/components/consent/cookie-settings-button'
import { LocaleLink } from '@/components/shared/locale-link'
import { rich } from '@/i18n/text'
import type { Block } from '@/messages/en/legal'
import { CONTACT_EMAIL } from '@/lib/site'

const linkClass = 'font-semibold text-primary underline underline-offset-2'

function external(href: string) {
  const Tag = (c: ReactNode) => <a href={href} target="_blank" rel="noopener noreferrer">{c}</a>
  return Tag
}

/** Renders one piece of policy text with its inline tags (<b>, <privacy>, <mail>, ...). See messages/en/legal.ts. */
export function renderText(text: string): ReactNode[] {
  return rich(
    text,
    {
      b: (c) => <strong>{c}</strong>,
      privacy: (c) => <LocaleLink href="/privacy">{c}</LocaleLink>,
      cookies: (c) => <LocaleLink href="/cookie-policy">{c}</LocaleLink>,
      terms: (c) => <LocaleLink href="/terms">{c}</LocaleLink>,
      refund: (c) => <LocaleLink href="/refund-policy">{c}</LocaleLink>,
      aup: (c) => <LocaleLink href="/acceptable-use">{c}</LocaleLink>,
      security: (c) => <LocaleLink href="/security">{c}</LocaleLink>,
      dpa: (c) => <LocaleLink href="/data-processing">{c}</LocaleLink>,
      accessibility: (c) => <LocaleLink href="/accessibility">{c}</LocaleLink>,
      disclosure: (c) => <LocaleLink href="/responsible-disclosure">{c}</LocaleLink>,
      legalhub: (c) => <LocaleLink href="/legal">{c}</LocaleLink>,
      mail: (c) => <a href={`mailto:${CONTACT_EMAIL}`}>{c}</a>,
      cookiesettings: (c) => <CookieSettingsButton className={linkClass}>{c}</CookieSettingsButton>,
      gaoptout: external('https://tools.google.com/dlpage/gaoptout'),
      googleprivacy: external('https://policies.google.com/privacy'),
    },
    { email: CONTACT_EMAIL },
  )
}

/** A simple bordered table that scrolls sideways on narrow screens instead of breaking the page. */
export function LegalTable({ head, rows, caption }: { head: string[]; rows: string[][]; caption: string }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-card" tabIndex={0} role="region" aria-label={caption}>
      <table className="w-full min-w-[34rem] border-collapse text-start text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="border-b border-border bg-secondary text-foreground">
            {head.map((h) => <th key={h} scope="col" className="px-4 py-3 text-start font-semibold">{renderText(h)}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/60 align-top last:border-0">
              {r.map((c, j) => <td key={j} className={j === 0 ? 'px-4 py-3 font-semibold text-foreground' : 'px-4 py-3'}>{renderText(c)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function LegalBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'p':
            return <p key={i}>{renderText(b.text)}</p>
          case 'h3':
            return <h3 key={i}>{renderText(b.text)}</h3>
          case 'ul':
            return <ul key={i}>{b.items.map((item, j) => <li key={j}>{renderText(item)}</li>)}</ul>
          case 'table':
            return <LegalTable key={i} caption={b.caption} head={b.head} rows={b.rows} />
          case 'cookieSettingsButton':
            return (
              <p key={i}>
                <CookieSettingsButton className="inline-flex min-h-11 items-center rounded-full border border-[var(--border-strong)] bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">{b.label}</CookieSettingsButton>
              </p>
            )
        }
      })}
    </>
  )
}
