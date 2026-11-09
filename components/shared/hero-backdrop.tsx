import { LegalHeroArt } from '@/components/legal/legal-hero-art'

/**
 * Background for page heroes (policies, legal hub, guides): the home page's contour waves and glows, plus an aerial site-plan
 * illustration on the side away from the text. The whole layer fades out toward the bottom so the hero blends into the page.
 */
export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,#000_70%,transparent)]">
      <div className="bg-waves-light absolute inset-0" />
      <div className="glow-primary absolute -start-32 -top-10 size-[460px]" />
      <div className="glow-accent absolute -end-24 top-24 size-[400px]" />
      <LegalHeroArt className="absolute -end-10 top-16 w-[640px] max-w-none opacity-30 sm:opacity-45 lg:end-0 lg:top-10 lg:w-[680px] lg:opacity-70 [mask-image:linear-gradient(to_left,#000_18%,transparent_82%)] rtl:-scale-x-100" />
    </div>
  )
}
