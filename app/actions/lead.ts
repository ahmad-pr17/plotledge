'use server'

import { cleanLead, deliverLead, type FieldErrors } from '@/lib/leads'

/** Machine codes only. The form turns them into text in the visitor's language. */
export type LeadState = {
  ok: boolean
  code: 'idle' | 'ok' | 'invalid' | 'failed'
  errors?: FieldErrors
}

export async function submitLead(_prev: LeadState, form: FormData): Promise<LeadState> {
  // Honeypot: real people never fill this hidden field. Pretend success for bots.
  if (typeof form.get('website') === 'string' && (form.get('website') as string).trim()) {
    return { ok: true, code: 'ok' }
  }

  const result = cleanLead(Object.fromEntries(form.entries()), 'website-form')
  if ('errors' in result) return { ok: false, code: 'invalid', errors: result.errors }

  const sent = await deliverLead(result.data)
  if (!sent) return { ok: false, code: 'failed' }
  return { ok: true, code: 'ok' }
}
