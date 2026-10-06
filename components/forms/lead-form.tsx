'use client'

import { CheckCircle2, Loader2, MessageCircle, TriangleAlert } from 'lucide-react'
import { useActionState } from 'react'
import { submitLead, type LeadState } from '@/app/actions/lead'
import { ButtonLink } from '@/components/shared/button-link'
import { PLOT_COUNT_OPTIONS } from '@/lib/lead-options'
import { whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

const initial: LeadState = { ok: false, message: '' }

const inputCls =
  'mt-1.5 block min-h-11 w-full rounded-xl border border-input bg-card px-3.5 text-base text-foreground placeholder:text-muted-foreground/70 aria-[invalid=true]:border-destructive'

function Field({ id, label, error, optional, children }: { id: string; label: string; error?: string; optional?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">
        {label} {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  )
}

export function LeadForm() {
  const [state, action, pending] = useActionState(submitLead, initial)
  const err = state.errors ?? {}

  if (state.ok) {
    return (
      <div role="status" className="card-solid p-6 sm:p-8">
        <CheckCircle2 className="size-10 text-paid" aria-hidden="true" />
        <h3 className="t-h3 mt-4">Request received</h3>
        <p className="measure mt-2 text-muted-foreground">{state.message}</p>
        <ButtonLink href={whatsappLink('Hi Plot Ledge, I just sent a demo request on the website.')} variant="whatsapp" className="mt-6">
          <MessageCircle aria-hidden="true" /> Continue on WhatsApp
        </ButtonLink>
      </div>
    )
  }

  const describe = (key: string) => (err[key] ? `${key}-error` : undefined)

  return (
    <form action={action} noValidate className="card-solid flex flex-col gap-5 p-6 sm:p-8">
      {state.message && !state.ok && !state.errors && (
        <div role="alert" className="flex gap-3 rounded-xl bg-overdue-soft p-4 text-sm text-overdue-ink">
          <TriangleAlert className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
          <div>
            <p>{state.message}</p>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 items-center font-semibold underline">Message us on WhatsApp</a>
          </div>
        </div>
      )}

      {/* Honeypot. Hidden from people and assistive tech. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>Website<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <Field id="name" label="Your name" error={err.name}>
        <input id="name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={100} aria-invalid={!!err.name} aria-describedby={describe('name')} className={inputCls} />
      </Field>
      <Field id="phone" label="Phone or WhatsApp number" error={err.phone}>
        <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" required placeholder="0300 1234567" aria-invalid={!!err.phone} aria-describedby={describe('phone')} className={inputCls} />
      </Field>
      <Field id="company" label="Company or society" optional>
        <input id="company" name="company" type="text" autoComplete="organization" maxLength={120} className={inputCls} />
      </Field>
      <Field id="plots" label="How many plots do you manage?" error={err.plots}>
        <select id="plots" name="plots" required defaultValue="" aria-invalid={!!err.plots} aria-describedby={describe('plots')} className={inputCls}>
          <option value="" disabled>Choose one</option>
          {PLOT_COUNT_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      </Field>

      <button
        type="submit"
        disabled={pending}
        className={cn(
          'btn-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 text-base font-semibold text-emerald-950 transition-colors hover:bg-amber-400',
          'disabled:cursor-not-allowed disabled:opacity-70',
        )}
      >
        {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {pending ? 'Sending' : 'Book a free demo'}
      </button>
      <p className="text-xs text-muted-foreground">We use your details only to contact you about Plot Ledge.</p>
    </form>
  )
}
