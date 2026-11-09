'use client'

import { CheckCircle2, Loader2 } from 'lucide-react'
import { useId, useState } from 'react'
import { useMessages } from '@/i18n/client'
import { PLOT_COUNT_OPTIONS } from '@/lib/lead-options'
import { cn } from '@/lib/utils'

const input =
  'mt-1 block min-h-11 w-full rounded-xl border border-input bg-background px-3 text-base text-foreground placeholder:text-muted-foreground/70 aria-[invalid=true]:border-destructive'

type Props = {
  done: boolean
  onDone: () => void
  onWhatsApp: () => void
  whatsappHref: string
}

/** Small contact form inside the chat. Posts to /api/lead and shows a friendly confirmation. */
export function LeadFormCard({ done, onDone, onWhatsApp, whatsappHref }: Props) {
  const uid = useId()
  const { chat, contact } = useMessages()
  const t = chat.lead
  const [pending, setPending] = useState(false)
  // Values are error codes; the text comes from messages.
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [failed, setFailed] = useState(false)

  if (done) {
    return (
      <div role="status" className="mt-2 flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm">
        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-paid" aria-hidden />
        <p>{t.done}</p>
      </div>
    )
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const body = Object.fromEntries(form.entries())
    const next: Record<string, string> = {}
    if (String(body.name ?? '').trim().length < 2) next.name = 'required'
    const digits = String(body.phone ?? '').replace(/\D/g, '')
    if (digits.length < 10 || digits.length > 15) next.phone = 'invalid'
    if (!body.plots) next.plots = 'required'
    setErrors(next)
    setFailed(false)
    if (Object.keys(next).length) return

    setPending(true)
    try {
      const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      if (res.ok) onDone()
      else if (res.status === 422) setErrors((await res.json()).errors ?? {})
      else setFailed(true)
    } catch {
      setFailed(true)
    } finally {
      setPending(false)
    }
  }

  const field = (key: string) => ({ id: `${uid}-${key}`, 'aria-invalid': !!errors[key], 'aria-describedby': errors[key] ? `${uid}-${key}-err` : undefined })
  const err = (key: 'name' | 'phone' | 'plots') => errors[key] && <p id={`${uid}-${key}-err`} className="mt-1 text-xs text-destructive">{t.errors[key]}</p>

  return (
    <form onSubmit={submit} noValidate className="mt-2 flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 text-sm">
      <p className="font-semibold">{t.intro}</p>

      {/* Honeypot. Hidden from people and assistive tech. */}
      <div className="absolute -start-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>{contact.form.honeypot}<input type="text" name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div>
        <label htmlFor={`${uid}-name`} className="font-medium">{t.name}</label>
        <input {...field('name')} name="name" type="text" autoComplete="name" maxLength={100} className={input} />
        {err('name')}
      </div>
      <div>
        <label htmlFor={`${uid}-phone`} className="font-medium">{t.phone}</label>
        <input {...field('phone')} name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={30} placeholder="0300 1234567" className={input} />
        {err('phone')}
      </div>
      <div>
        <label htmlFor={`${uid}-plots`} className="font-medium">{t.plots}</label>
        <select {...field('plots')} name="plots" defaultValue="" className={input}>
          <option value="" disabled>{t.choose}</option>
          {PLOT_COUNT_OPTIONS.map((o, i) => <option key={o} value={o}>{contact.plotOptions[i] ?? o}</option>)}
        </select>
        {err('plots')}
      </div>
      <div>
        <label htmlFor={`${uid}-city`} className="font-medium">{t.city} <span className="font-normal text-muted-foreground">{t.optional}</span></label>
        <input id={`${uid}-city`} name="city" type="text" autoComplete="address-level2" maxLength={60} className={input} />
      </div>

      {failed && (
        <p role="alert" className="rounded-xl bg-overdue-soft p-3 text-overdue-ink">
          {t.failed}{' '}
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" onClick={onWhatsApp} className="font-semibold underline">{t.whatsapp}</a>
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className={cn('inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-amber-500 px-5 font-semibold text-emerald-950 transition-colors hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70')}
      >
        {pending && <Loader2 className="size-4 animate-spin" aria-hidden />}
        {pending ? t.sending : t.submit}
      </button>
      <p className="text-xs text-muted-foreground">{t.note}</p>
    </form>
  )
}
