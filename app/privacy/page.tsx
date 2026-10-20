import type { Metadata } from 'next'
import { PageShell } from '@/components/sections/page-shell'
import { CONTACT_EMAIL } from '@/lib/site'

const TITLE = 'Privacy policy'
const DESCRIPTION = 'How Plot Ledge handles information collected through this website and the contact form.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: '/privacy' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const LAST_UPDATED = '20 October 2026'

export default function PrivacyPage() {
  return (
    <PageShell>
      <article className="measure-wide">
        <h1 className="t-h2">Privacy policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated {LAST_UPDATED}</p>

        <div className="mt-8 flex flex-col gap-4 leading-7 text-muted-foreground [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:pl-5">
          <p>This page explains what Plot Ledge collects through this marketing website and why, and the rights you have over that information under Pakistani law and, for visitors from the European Economic Area (EEA), the UK or Switzerland, under the General Data Protection Regulation (GDPR). The CRM application that you log in to may have its own terms for the records you store there.</p>

          <h2>What we collect</h2>
          <ul>
            <li>Details you send in the contact or demo form: name, phone number, company, and the number of plots you manage.</li>
            <li>Messages you send us by email or WhatsApp.</li>
            <li>Messages you type into the Plot Ledge Assistant chat, and the details you choose to send through its contact form.</li>
            <li>A theme preference (light or dark) saved in your browser's local storage. This never leaves your device.</li>
            <li>Basic visit statistics from Google Analytics and Vercel Analytics, such as pages viewed, approximate region, device type and referring site.</li>
          </ul>

          <h2>Cookies and similar technology</h2>
          <p>We use Google Analytics, which sets cookies to measure how visitors use this site, and Vercel Analytics, which does not use cookies. See our <a className="font-semibold text-primary underline" href="/cookie-policy">cookie policy</a> for details and how to opt out.</p>

          <h2>The chat assistant</h2>
          <p>Plot Ledge Assistant is an AI assistant. Your chat messages are sent to our AI provider (Anthropic) to produce a reply; this provider may process data outside Pakistan, including in the United States. Please do not share bank details, card numbers, passwords or CNIC numbers in the chat. The conversation is kept in your browser's session storage only, and is cleared when you close the tab. We store only what you send through the contact form, and we use it only to contact you about Plot Ledge.</p>

          <h2>Why we collect it, and our legal basis</h2>
          <p>We use form details to reply to your request and arrange a demo, which we rely on as a legitimate interest in responding to enquiries and, once you book a demo, as necessary to take steps toward a contract. We use visit statistics, which rely on your consent where required by law, to understand which pages are useful and to fix problems.</p>

          <h2>Who we share it with</h2>
          <p>We do not sell your details. They pass through the services that run this site: our hosting provider (Vercel), analytics providers (Google Analytics, Vercel Analytics), our AI provider (Anthropic), and the form or email service used to deliver your message to us (Resend or an equivalent webhook).</p>

          <h2>International transfers</h2>
          <p>Some of the services above may process data outside Pakistan, including in the United States and the European Union. Where this applies to visitors in the EEA, UK or Switzerland, we rely on those providers' standard contractual clauses or an equivalent safeguard recognised under GDPR.</p>

          <h2>How long we keep it</h2>
          <p>We keep contact requests for as long as we need them to follow up with you, and delete them when you ask or when they are no longer needed for that purpose.</p>

          <h2>Your rights</h2>
          <p>Wherever you are, you can ask to see, correct or delete the details you sent us by writing to <a className="font-semibold text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          <ul>
            <li><strong>If you are in Pakistan:</strong> we handle your data consistent with the data protection principles set out in the Prevention of Electronic Crimes Act, 2016 (PECA) and Pakistan's draft Personal Data Protection framework, including using your data only for the purpose you gave it to us and keeping it reasonably secure.</li>
            <li><strong>If you are in the EEA, UK or Switzerland:</strong> under the GDPR you additionally have the right to access, rectify, erase or restrict your data, to data portability, to object to processing, to withdraw consent at any time without affecting past processing, and to lodge a complaint with your local data protection supervisory authority.</li>
          </ul>

          <h2>Changes</h2>
          <p>If we change this page, we will update the date at the top.</p>

          <h2>Related policies</h2>
          <ul>
            <li><a className="font-semibold text-primary underline" href="/cookie-policy">Cookie policy</a></li>
            <li><a className="font-semibold text-primary underline" href="/refund-policy">Refund and cancellation policy</a></li>
            <li><a className="font-semibold text-primary underline" href="/terms">Terms of use</a></li>
          </ul>
        </div>
      </article>
    </PageShell>
  )
}
