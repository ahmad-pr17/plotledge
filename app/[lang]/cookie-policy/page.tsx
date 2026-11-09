import type { Metadata } from 'next'
import Link from 'next/link'
import { CookieSettingsButton } from '@/components/consent/cookie-settings-button'
import { LegalPage, LegalTable, type LegalSection } from '@/components/legal/legal-page'
import { CONTACT_EMAIL } from '@/lib/site'

const TITLE = 'Cookie policy'
const DESCRIPTION = 'Exactly which cookies and browser storage this website uses, which ones need your consent, and how to change your choice.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/cookie-policy' },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: '/cookie-policy' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const LAST_UPDATED = '9 November 2026'
const link = 'font-semibold text-primary underline underline-offset-2'

const sections: LegalSection[] = [
  {
    id: 'what-are-cookies',
    title: 'What cookies and browser storage are',
    content: (
      <p>Cookies are small files a website saves in your browser. Local storage and session storage do a similar job: local storage stays until it is cleared, and session storage disappears when you close the tab. This page lists everything of this kind that our website uses, so you can decide what to allow.</p>
    ),
  },
  {
    id: 'what-we-use',
    title: 'What we use',
    content: (
      <>
        <LegalTable
          caption="Cookies and browser storage used by this website"
          head={['Name', 'Kind', 'What it does', 'How long', 'Needs your consent']}
          rows={[
            ['_ga, _ga_*', 'Cookie, set by Google', 'Counts visits and page views so we can see which pages help.', 'Up to 2 years', 'Yes. Set only after you accept analytics.'],
            ['plotledge-consent', 'Local storage', 'Remembers whether you accepted or rejected analytics.', '12 months', 'No. It is needed to respect your choice.'],
            ['plotledge-chat-v1', 'Session storage', 'Keeps your chat with Plot Ledge Assistant while the tab is open.', 'Until you close the tab', 'No. The chat needs it to work.'],
            ['plotledge-teaser-dismissed', 'Session storage', 'Remembers that you closed the chat prompt, so it does not reappear.', 'Until you close the tab', 'No.'],
            ['Vercel Analytics', 'None', 'Counts visits in aggregate, without cookies or a profile of you.', 'Nothing is stored in your browser', 'No cookies are used.'],
          ]}
        />
        <p>We do not use advertising or social media tracking cookies.</p>
      </>
    ),
  },
  {
    id: 'your-choice',
    title: 'Your choice',
    content: (
      <>
        <p>The first time you visit, a banner asks whether we may use Google Analytics cookies. Nothing from Google loads until you choose.</p>
        <ul>
          <li><strong>Accept analytics:</strong> Google Analytics loads and sets its cookies.</li>
          <li><strong>Reject analytics:</strong> Google Analytics never loads, and the site works exactly the same.</li>
        </ul>
        <p>We remember your choice for 12 months and then ask again. You can change it whenever you like. If you reject after accepting, we remove the Google cookies this browser holds for our site.</p>
        <p><CookieSettingsButton className="inline-flex min-h-11 items-center rounded-full border border-[var(--border-strong)] bg-card px-5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary">Change my cookie choice</CookieSettingsButton></p>
      </>
    ),
  },
  {
    id: 'other-ways',
    title: 'Other ways to control cookies',
    content: (
      <ul>
        <li>Block or delete cookies in your browser&rsquo;s settings. This site works without them.</li>
        <li>Install the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out add-on</a> to stop Google Analytics on every site you visit.</li>
        <li>Use your browser&rsquo;s private or incognito mode, which clears cookies when you close it.</li>
      </ul>
    ),
  },
  {
    id: 'third-parties',
    title: 'Google and your data',
    content: (
      <p>If you accept, Google receives the visit data described above and handles it under <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&rsquo;s privacy policy</a>. Our <Link href="/privacy" className={link}>privacy policy</Link> explains how we use the results and where Google may process them.</p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    content: (
      <p>If we add a new cookie or storage item that needs consent, we will list it here first and ask for your choice again. Questions: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
    ),
  },
]

export default function CookiePolicyPage() {
  return (
    <LegalPage
      current="/cookie-policy"
      title={TITLE}
      intro="Which cookies this website uses, which ones need your say-so, and how to change your mind."
      updated={LAST_UPDATED}
      summary={[
        'Only one thing here needs your consent: Google Analytics cookies. They load only if you accept.',
        'Everything else is needed for the site to work, such as remembering your choice and keeping your chat open.',
        'We use no advertising or social media tracking.',
        'You can change your choice at any time with the Cookie settings link in the footer.',
      ]}
      sections={sections}
    />
  )
}
