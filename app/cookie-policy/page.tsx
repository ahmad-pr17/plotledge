import type { Metadata } from 'next'
import { PageShell } from '@/components/sections/page-shell'
import { CONTACT_EMAIL } from '@/lib/site'

const TITLE = 'Cookie policy'
const DESCRIPTION = 'How Plot Ledge uses cookies and local storage on this website, and how to opt out.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/cookie-policy' },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: '/cookie-policy' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const LAST_UPDATED = '20 October 2026'

export default function CookiePolicyPage() {
  return (
    <PageShell>
      <article className="measure-wide">
        <h1 className="t-h2">Cookie policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated {LAST_UPDATED}</p>

        <div className="mt-8 flex flex-col gap-4 leading-7 text-muted-foreground [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_table]:w-full [&_table]:text-left [&_table]:text-sm [&_th]:border-b [&_th]:border-border [&_th]:py-2 [&_th]:pr-4 [&_td]:border-b [&_td]:border-border/60 [&_td]:py-2 [&_td]:pr-4">
          <p>This page lists the cookies and browser storage this website uses, in plain terms, so you can decide what to allow.</p>

          <h2>What we use</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Purpose</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Google Analytics (_ga, _ga_*)</td>
                <td>Cookie</td>
                <td>Counts visits and page views so we can see which pages are useful.</td>
                <td>Up to 2 years</td>
              </tr>
              <tr>
                <td>Vercel Analytics / Speed Insights</td>
                <td>None (cookieless)</td>
                <td>Aggregate visit and performance statistics without tracking individuals.</td>
                <td>Not stored in your browser</td>
              </tr>
              <tr>
                <td>theme</td>
                <td>Local storage</td>
                <td>Remembers whether you chose light or dark mode.</td>
                <td>Until you clear it</td>
              </tr>
              <tr>
                <td>plotledge-chat-v1</td>
                <td>Session storage</td>
                <td>Keeps your conversation with Plot Ledge Assistant while the tab is open.</td>
                <td>Cleared when you close the tab</td>
              </tr>
            </tbody>
          </table>

          <h2>Strictly necessary vs. optional</h2>
          <p>The theme preference and chat session storage are necessary for those features to work and do not require consent. Google Analytics is used to understand site usage; if you are in the EEA, UK or Switzerland, we only load it after you accept analytics cookies, or you can opt out at any time as described below.</p>

          <h2>How to opt out</h2>
          <ul className="list-disc pl-5">
            <li>Block or delete cookies in your browser's settings. This may affect how some sites behave, though this site works without them.</li>
            <li>Install the <a className="font-semibold text-primary underline" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics opt-out browser add-on</a> to stop Google Analytics on all sites you visit.</li>
            <li>Use your browser's "Do Not Track" or private/incognito mode.</li>
          </ul>

          <h2>Questions</h2>
          <p>Write to <a className="font-semibold text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. See also our <a className="font-semibold text-primary underline" href="/privacy">privacy policy</a>.</p>
        </div>
      </article>
    </PageShell>
  )
}
