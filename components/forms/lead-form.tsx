'use client'

import { CheckCircle2, Loader2, MessageCircle, TriangleAlert } from 'lucide-react'
import { useActionState } from 'react'
import { submitLead, type LeadState } from '@/app/actions/lead'
import { ButtonLink } from '@/components/shared/button-link'
import { useMessages } from '@/i18n/client'
import { PLOT_COUNT_OPTIONS } from '@/lib/lead-options'
import { whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

const initial: LeadState = { ok: false, code: 'idle' }

const inputCls =
  'mt-1.5 block min-h-11 w-full rounded-xl border border-input bg-card px-3.5 text-base text-foreground placeholder:text-muted-foreground/70 aria-[invalid=true]:border-destructive'

function Field({ id, label, error, optional, optionalLabel, children }: { id: string; label: string; error?: string; optional?: boolean; optionalLabel: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">
        {label} {optional && <span className="font-normal text-muted-foreground">{optionalLabel}</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  )
}

export function LeadForm() {
  const m = useMessages()
  const c = m.contact
  const f = c.form
  const [state, action, pending] = useActionState(submitLead, initial)
  const err = state.errors ?? {}

  if (state.ok) {
    return (
      <div role="status" className="card-solid p-6 sm:p-8">
        <CheckCircle2 className="size-10 text-paid" aria-hidden="true" />
        <h3 className="t-h3 mt-4">{f.successTitle}</h3>
        <p className="measure mt-2 text-muted-foreground">{f.success}</p>
        <ButtonLink href={whatsappLink(f.whatsappFollowup)} variant="secondary" className="mt-6">
          <MessageCircle aria-hidden="true" /> {f.continueWhatsApp}
        </ButtonLink>
      </div>
    )
  }

  const describe = (key: string) => (err[key as keyof typeof err] ? `${key}-error` : undefined)
  const msg = (key: 'name' | 'phone' | 'plots') => (err[key] ? f.errors[key] : undefined)

  return (
    <form action={action} noValidate className="card-solid flex flex-col gap-5 p-6 sm:p-8">
      {state.code === 'failed' && (
        <div role="alert" className="flex gap-3 rounded-xl bg-overdue-soft p-4 text-sm text-overdue-ink">
          <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <div>
            <p>{f.failed}</p>
            <a href={whatsappLink(m.common.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center font-semibold underline">{f.messageWhatsApp}</a>
          </div>
        </div>
      )}

      {/* Honeypot. Hidden from people and assistive tech. */}
      <div className="absolute -start-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>{f.honeypot}<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <Field id="name" label={f.name} error={msg('name')} optionalLabel={f.optional}>
        <input id="name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={100} aria-invalid={!!err.name} aria-describedby={describe('name')} className={inputCls} />
      </Field>
      <Field id="phone" label={f.phone} error={msg('phone')} optionalLabel={f.optional}>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="0300 1234567" aria-invalid={!!err.phone} aria-describedby={describe('phone')} className={inputCls} />
      </Field>
      <Field id="company" label={f.company} optional optionalLabel={f.optional}>
        <input id="company" name="company" type="text" autoComplete="organization" maxLength={120} className={inputCls} />
      </Field>
      <Field id="plots" label={f.plots} error={msg('plots')} optionalLabel={f.optional}>
        <select id="plots" name="plots" required defaultValue="" aria-invalid={!!err.plots} aria-describedby={describe('plots')} className={inputCls}>
          <option value="" disabled>{f.choose}</option>
          {PLOT_COUNT_OPTIONS.map((o, i) => <option key={o} value={o}>{c.plotOptions[i] ?? o}</option>)}
        </select>
      </Field>

      <button
        type="submit"
        disabled={pending}
        className={cn(
          'btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-amber-500 px-6 text-base font-semibold text-emerald-950 transition-colors hover:bg-amber-400',
          'disabled:cursor-not-allowed disabled:opacity-70',
        )}
      >
        {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {pending ? f.sending : f.submit}
      </button>
      <p className="text-xs text-muted-foreground">{f.privacy}</p>
    </form>
  )
}
