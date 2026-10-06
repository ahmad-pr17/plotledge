import dynamic from 'next/dynamic'
import { BentoFeatures } from '@/components/sections/bento-features'
import { FinalCta } from '@/components/sections/final-cta'
import { FloatingActions } from '@/components/sections/floating-actions'
import { Footer } from '@/components/sections/footer'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Navbar } from '@/components/sections/navbar'
import { ProblemSolution } from '@/components/sections/problem-solution'
import { SocialProof } from '@/components/sections/social-proof'
import { faqJsonLd, jsonLdString } from '@/lib/jsonld'

// Below-the-fold sections with charts and interactive widgets are split into their own chunks.
// They still render on the server, so the content stays in the HTML for search engines.
const DashboardShowcase = dynamic(() => import('@/components/sections/dashboard-showcase').then((m) => m.DashboardShowcase))
const RoleViews = dynamic(() => import('@/components/sections/role-views').then((m) => m.RoleViews))
const InstallmentDemo = dynamic(() => import('@/components/sections/installment-demo').then((m) => m.InstallmentDemo))
const PlotMapDeal = dynamic(() => import('@/components/sections/plot-map-deal').then((m) => m.PlotMapDeal))
const ExportsIntegrations = dynamic(() => import('@/components/sections/exports-integrations').then((m) => m.ExportsIntegrations))
const ComparisonTable = dynamic(() => import('@/components/sections/comparison-table').then((m) => m.ComparisonTable))
const UseCases = dynamic(() => import('@/components/sections/use-cases').then((m) => m.UseCases))
const SavingsCalculator = dynamic(() => import('@/components/sections/savings-calculator').then((m) => m.SavingsCalculator))
const SecurityTrust = dynamic(() => import('@/components/sections/security-trust').then((m) => m.SecurityTrust))
const Testimonials = dynamic(() => import('@/components/sections/testimonials').then((m) => m.Testimonials))
const Pricing = dynamic(() => import('@/components/sections/pricing').then((m) => m.Pricing))
const Faq = dynamic(() => import('@/components/sections/faq').then((m) => m.Faq))
const GuidesPreview = dynamic(() => import('@/components/sections/guides-preview').then((m) => m.GuidesPreview))

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
        <SocialProof />
        <ProblemSolution />
        <BentoFeatures />
        <HowItWorks />
        <DashboardShowcase />
        <RoleViews />
        <InstallmentDemo />
        <PlotMapDeal />
        <ExportsIntegrations />
        <ComparisonTable />
        <UseCases />
        <SavingsCalculator />
        <SecurityTrust />
        <Testimonials />
        <Pricing />
        <Faq />
        <GuidesPreview />
        <FinalCta />
      </main>
      <Footer />
      <FloatingActions />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(faqJsonLd()) }} />
    </>
  )
}
