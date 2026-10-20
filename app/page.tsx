import dynamic from 'next/dynamic'
import { BentoFeatures } from '@/components/sections/bento-features'
import { FinalCta } from '@/components/sections/final-cta'
import { FloatingActions } from '@/components/sections/floating-actions'
import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Navbar } from '@/components/sections/navbar'
import { ProblemSolution } from '@/components/sections/problem-solution'
import { TrustStrip } from '@/components/sections/trust-strip'
import { faqJsonLd, jsonLdString } from '@/lib/jsonld'

// Below-the-fold sections with charts and interactive widgets are split into their own chunks.
// They still render on the server, so the content stays in the HTML for search engines.
const DashboardShowcase = dynamic(() => import('@/components/sections/dashboard-showcase').then((m) => m.DashboardShowcase))
const DealShowcase = dynamic(() => import('@/components/sections/deal-showcase').then((m) => m.DealShowcase))
const RoleViews = dynamic(() => import('@/components/sections/role-views').then((m) => m.RoleViews))
const SavingsCalculator = dynamic(() => import('@/components/sections/savings-calculator').then((m) => m.SavingsCalculator))
const Testimonials = dynamic(() => import('@/components/sections/testimonials').then((m) => m.Testimonials))
const SecurityNote = dynamic(() => import('@/components/sections/security-note').then((m) => m.SecurityNote))
const Pricing = dynamic(() => import('@/components/sections/pricing').then((m) => m.Pricing))
const Faq = dynamic(() => import('@/components/sections/faq').then((m) => m.Faq))

export default function Page() {
  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-amber-500 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-emerald-950"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="content">
        <Hero />
        <TrustStrip />
        <ProblemSolution />
        <BentoFeatures />
        <HowItWorks />
        <DashboardShowcase />
        <DealShowcase />
        <RoleViews />
        <SavingsCalculator />
        <Testimonials />
        <SecurityNote />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd()) }} />
    </>
  )
}
