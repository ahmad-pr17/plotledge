import type { Metadata } from 'next'
import { PageShell } from '@/components/sections/page-shell'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: 'How Plot Ledge handles information collected through this website and the contact form.',
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = '1 October 2026'

export default function PrivacyPage() {
  return (
    <PageShell>
      <article className="measure-wide">
        <h1 className="t-h2">Privacy policy</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated {LAST_UPDATED}</p>

        <div className="mt-8 flex flex-col gap-4 leading-7 text-muted-foreground [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:pl-5">
          <p>This page explains what Plot Ledge collects through this marketing website and why. The CRM application that you log in to may have its own terms for the records you store there.</p>
          <h2>What we collect</h2>
          <ul>
            <li>Details you send in the contact or demo form: name, phone number, company, and the number of plots you manage.</li>
            <li>Messages you send us by email or WhatsApp.</li>
            <li>Messages you type into the Plot Ledge Assistant chat, and the details you choose to send through its contact form.</li>
            <li>Basic visit statistics from website analytics, such as pages viewed and approximate region.</li>
          </ul>
          <h2>The chat assistant</h2>
          <p>Plot Ledge Assistant is an AI assistant. Your chat messages are sent to our AI provider to produce a reply. Please do not share bank details, card numbers, passwords or CNIC numbers in the chat. The conversation is kept in your browser for the current visit only. We store only what you send through the contact form, and we use it only to contact you about Plot Ledge.</p>
          <h2>Why we collect it</h2>
          <p>We use form details to reply to your request and arrange a demo. We use visit statistics to understand which pages are useful and to fix problems.</p>
          <h2>Who we share it with</h2>
          <p>We do not sell your details. They pass through the services that run this site, such as our hosting provider, analytics provider and the form or email service used to deliver your message to us.</p>
          <h2>How long we keep it</h2>
          <p>We keep contact requests for as long as we need them to follow up with you, and delete them when you ask.</p>
          <h2>Your choices</h2>
          <p>You can ask to see, correct or delete the details you sent us. Write to <a className="font-semibold text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
          <h2>Changes</h2>
          <p>If we change this page, we will update the date at the top.</p>
        </div>
      </article>
    </PageShell>
  )
}
