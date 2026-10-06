import type { Metadata } from 'next'
import { PageShell } from '@/components/sections/page-shell'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of use',
  description: 'The terms for using the Plot Ledge website and service, including plans and acceptable use.',
  alternates: { canonical: '/terms' },
  robots: { index: true, follow: true },
}

const LAST_UPDATED = '1 October 2026'

export default function TermsPage() {
  return (
    <PageShell>
      <article className="measure-wide">
        <p className="rounded-xl bg-pending-soft p-4 text-sm font-semibold text-pending-ink">Draft for review. Have a lawyer check this before launch.</p>
        <h1 className="t-h2 mt-8">Terms of use</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated {LAST_UPDATED}</p>

        <div className="mt-8 flex flex-col gap-4 leading-7 text-muted-foreground [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_ul]:list-disc [&_ul]:pl-5">
          <p>By using the Plot Ledge website or service you agree to these terms. If you do not agree, please do not use them.</p>
          <h2>The website</h2>
          <p>This site describes Plot Ledge. Nothing on it is a promise of results.</p>
          <h2>The service</h2>
          <p>Plot Ledge is software for tracking plots, deals, installments, payments and related records. You are responsible for the accuracy of the data you enter and for keeping your login details private.</p>
          <h2>Plans and payment</h2>
          <p>Starter is free within its limits. Paid plans are priced in rupees and shown on the pricing section. Prices and plan limits can change, and we will tell you before a change applies to your account.</p>
          <h2>Acceptable use</h2>
          <ul>
            <li>Do not use the service for anything unlawful or to deceive buyers.</li>
            <li>Do not try to break into accounts, or to disrupt or copy the service.</li>
            <li>Give team members only the role they need.</li>
          </ul>
          <h2>Your data</h2>
          <p>The records you store belong to you. See the privacy policy for how we handle information collected through this website.</p>
          <h2>Liability</h2>
          <p>We work to keep the service available and accurate, but we provide it as is. To the extent the law allows, we are not liable for indirect losses. Keep your own copies of important records, such as by exporting reports.</p>
          <h2>Contact</h2>
          <p>Questions about these terms: <a className="font-semibold text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</p>
        </div>
      </article>
    </PageShell>
  )
}
