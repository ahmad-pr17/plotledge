import { ArrowRight, MessageCircle } from 'lucide-react'
import { ButtonLink } from '@/components/shared/button-link'
import { Reveal } from '@/components/shared/reveal'
import { Section } from '@/components/shared/container'
import { QrCode } from '@/components/shared/qr-code'
import { getMessages } from '@/i18n/server'
import { CRM_INSTALL_URL, CRM_LOGIN_URL, DEMO_URL, trackedUrl, whatsappLink } from '@/lib/site'

export async function FinalCta() {
  const { finalCta: m, common } = await getMessages()
  return (
    <Section id="start" tone="deep" className="contour overflow-hidden" containerClassName="text-center">
      <Reveal>
        <h2 className="t-h2 mx-auto max-w-3xl text-white">{m.title}</h2>
        <p className="t-lead measure mx-auto mt-5 text-emerald-100/80">
          {m.lead}
        </p>
        <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <ButtonLink href={DEMO_URL} size="lg">{m.cta.primary} <ArrowRight className="rtl:-scale-x-100" /></ButtonLink>
          <ButtonLink href={CRM_LOGIN_URL} variant="deep" size="lg">{m.cta.secondary}</ButtonLink>
        </div>
        <p className="mt-6 text-sm text-emerald-100/80">
          {m.trialNote}{' '}
          <a href={whatsappLink(common.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-white underline underline-offset-4">
            <MessageCircle className="size-4" aria-hidden /> {m.whatsapp}
          </a>
        </p>
        {/* Phones cannot scan their own screen, so the code only shows where a second device is likely. */}
        <div className="mx-auto mt-10 hidden max-w-md items-center gap-5 rounded-2xl border border-white/15 bg-white/5 p-5 text-start md:flex">
          <QrCode value={trackedUrl(CRM_INSTALL_URL, 'qr', 'app_install')} label={m.qr.label} size={144} className="shrink-0 rounded-lg" />
          <div>
            <p className="font-display text-base font-semibold text-white">{m.qr.title}</p>
            <p className="mt-1 text-sm leading-6 text-emerald-100/80">{m.qr.hint}</p>
            <p className="mt-2 text-xs text-emerald-100/80" dir="ltr">{CRM_INSTALL_URL.replace(/^https?:\/\//, '')}</p>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
