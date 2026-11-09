import type { Metadata } from 'next'
import Link from 'next/link'
import { CookieSettingsButton } from '@/components/consent/cookie-settings-button'
import { LegalPage, LegalTable, type LegalSection } from '@/components/legal/legal-page'
import { CONTACT_EMAIL } from '@/lib/site'

const TITLE = 'Privacy policy'
const DESCRIPTION = 'What Plot Ledge collects through this website, why, who it is shared with, how long it is kept, and how to use your rights.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/privacy' },
  robots: { index: true, follow: true },
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: '/privacy' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
}

const LAST_UPDATED = '9 November 2026'
const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    title: 'Who we are',
    content: (
      <>
        <p>Plot Ledge is a CRM for plot and property dealers, run from Lahore, Pakistan. In this policy, &ldquo;we&rdquo; means Plot Ledge, and we decide how the information described here is used.</p>
        <p>This policy covers this marketing website. The CRM you log in to is a separate service: the records you store there belong to you, and our <Link href="/terms">terms of use</Link> explain how we handle them.</p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    title: 'What we collect',
    content: (
      <>
        <h3>What you give us</h3>
        <ul>
          <li>The contact or demo form: your name, phone number, the number of plots you manage, and optionally your city, company and a message.</li>
          <li>The same details if you choose to send them through the chat assistant&rsquo;s contact form.</li>
          <li>Messages you type to the Plot Ledge Assistant.</li>
          <li>Anything you send us by email or WhatsApp, including the number or profile name WhatsApp shows us.</li>
        </ul>
        <h3>What we collect automatically</h3>
        <ul>
          <li><strong>Visit statistics from Vercel Analytics.</strong> Pages viewed, approximate region, device type and referring site. It uses no cookies and does not build a profile of you.</li>
          <li><strong>Visit statistics from Google Analytics, only if you accept.</strong> Pages viewed, approximate location, device, browser and referring site, linked to a random ID stored in a cookie.</li>
          <li><strong>Technical logs.</strong> Our host records your IP address, browser type and the time of each request to run and protect the site. We also count requests per IP address, briefly and in memory, to stop abuse of the forms and chat.</li>
          <li><strong>Chat ratings.</strong> If you rate an answer with thumbs up or down, we log only the rating and the time, never the message.</li>
        </ul>
        <h3>What stays on your device</h3>
        <ul>
          <li>Your cookie choice, the chat conversation while the tab is open, and whether you closed the chat prompt. See the <Link href="/cookie-policy">cookie policy</Link> for the exact names.</li>
          <li>The approximate local currency shown beside our prices. We work it out in your browser from your language setting and send nothing to do it.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'why-we-use-it',
    title: 'Why we use it',
    content: (
      <>
        <p>We only use your information for the reasons below. For visitors in the EEA, the UK or Switzerland, the right-hand column is the legal basis under the GDPR.</p>
        <LegalTable
          caption="Purposes and legal bases"
          head={['What we do', 'Using', 'Legal basis']}
          rows={[
            ['Reply to your enquiry and arrange a demo', 'Form details, email, WhatsApp', 'Our legitimate interest in answering you; once you book a demo, taking steps toward a contract'],
            ['Answer your questions in the chat', 'Chat messages', 'Our legitimate interest in giving you the help you asked for'],
            ['Understand which pages are useful', 'Google Analytics data', 'Your consent'],
            ['Count visits without cookies', 'Vercel Analytics data', 'Our legitimate interest in running a site that works well'],
            ['Keep the site secure and stop abuse', 'IP address, request counts', 'Our legitimate interest in protecting the site and its visitors'],
          ]}
        />
        <p>We do not sell your information, and we do not use it to make decisions that affect you without a person involved.</p>
      </>
    ),
  },
  {
    id: 'chat-assistant',
    title: 'The chat assistant',
    content: (
      <>
        <p>Plot Ledge Assistant is an AI assistant. To write a reply, your message and the recent conversation are sent to our AI provider, Anthropic, which may process them outside Pakistan, including in the United States.</p>
        <ul>
          <li>Please do not type bank details, card numbers, passwords or CNIC numbers into the chat.</li>
          <li>The conversation is kept in your browser&rsquo;s session storage and cleared when you close the tab. We do not keep a copy of it.</li>
          <li>We keep only what you choose to send through the contact form inside the chat, and we use it only to contact you about Plot Ledge.</li>
          <li>The assistant can be wrong. Confirm prices, plan limits and anything important with us directly.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'who-we-share-with',
    title: 'Who we share it with',
    content: (
      <>
        <p>These companies handle information for us. Each one only receives what it needs for the job in the table.</p>
        <LegalTable
          caption="Service providers"
          head={['Provider', 'What it does for us', 'Where it may process data']}
          rows={[
            ['Vercel', 'Hosts this website and provides Vercel Analytics', 'United States and other regions'],
            ['Google', 'Google Analytics, only if you accept analytics cookies', 'United States and other regions'],
            ['Anthropic', 'Writes the chat assistant’s replies', 'United States and other regions'],
            ['Resend, or an equivalent email or webhook service', 'Delivers your form details to us', 'United States and other regions'],
            ['An exchange-rate service', 'Our server asks it for daily currency rates. It receives no visitor information', 'Not applicable'],
          ]}
        />
        <p>If you message us on WhatsApp, WhatsApp&rsquo;s own privacy policy applies to that conversation. We may also share information when the law requires it. We do not sell your details to anyone.</p>
      </>
    ),
  },
  {
    id: 'international-transfers',
    title: 'Transfers outside your country',
    content: (
      <p>Some providers above process data outside Pakistan, including in the United States and the European Union. For visitors in the EEA, the UK or Switzerland, we rely on those providers&rsquo; standard contractual clauses or an equivalent safeguard recognised under the GDPR.</p>
    ),
  },
  {
    id: 'how-long',
    title: 'How long we keep it',
    content: (
      <ul>
        <li><strong>Contact requests:</strong> for as long as we need them to follow up with you. We delete them when you ask, or when they are no longer needed for that.</li>
        <li><strong>Chat conversations:</strong> not kept by us. They disappear from your browser when you close the tab.</li>
        <li><strong>Your cookie choice:</strong> 12 months, then we ask again.</li>
        <li><strong>Analytics and server logs:</strong> kept by Google and Vercel under their own schedules, and not linked back to you by us.</li>
      </ul>
    ),
  },
  {
    id: 'your-rights',
    title: 'Your rights and choices',
    content: (
      <>
        <p>Wherever you are, you can ask us what we hold about you, ask us to correct it, or ask us to delete it. Write to {mail}. We may need to confirm it is you before we act on a request.</p>
        <ul>
          <li><strong>Analytics cookies:</strong> accept or reject them in the banner, and change your mind at any time with <CookieSettingsButton className="font-semibold text-primary underline underline-offset-2">cookie settings</CookieSettingsButton>.</li>
          <li><strong>If you are in Pakistan:</strong> we handle your data in line with the data protection principles in the Prevention of Electronic Crimes Act, 2016 (PECA) and Pakistan&rsquo;s draft Personal Data Protection framework. That means using it only for the purpose you gave it to us and keeping it reasonably secure.</li>
          <li><strong>If you are in the EEA, the UK or Switzerland:</strong> under the GDPR you can also restrict or object to our use of your data, receive it in a portable format, withdraw consent at any time without affecting what happened before, and complain to your local data protection authority. We will answer within one month.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'security',
    title: 'Keeping it safe',
    content: (
      <p>This site is served over HTTPS, and we send form details only to the email inbox or system we use to follow up with you. No website can promise perfect security, so please keep sensitive financial details out of forms and chat.</p>
    ),
  },
  {
    id: 'children',
    title: 'Children',
    content: (
      <p>Plot Ledge is for property businesses and is not aimed at anyone under 18. If you think a child has sent us their details, write to {mail} and we will delete them.</p>
    ),
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    content: (
      <p>When we change this page, we will update the date at the top. If the change affects how we use information you have already given us, we will say so here and, where the law requires, ask for your consent again.</p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <LegalPage
      current="/privacy"
      title={TITLE}
      intro="What this website collects, why we collect it, and what you can do about it, in plain language."
      updated={LAST_UPDATED}
      summary={[
        'We collect what you type into our forms and chat, plus visit statistics.',
        'Google Analytics cookies load only if you accept them. Vercel Analytics uses no cookies.',
        'Chat replies are written by an AI provider (Anthropic). Please keep bank details, passwords and CNIC numbers out of the chat.',
        'We never sell your details.',
        `You can ask to see, correct or delete your details at any time: ${CONTACT_EMAIL}.`,
      ]}
      sections={sections}
    />
  )
}
