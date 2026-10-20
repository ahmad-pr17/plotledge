export type ActionKey = 'demo' | 'whatsapp' | 'pricing' | 'crm'
const VALID: ActionKey[] = ['demo', 'whatsapp', 'pricing', 'crm']

export type ParsedReply = { text: string; leadForm: boolean; actions: ActionKey[] }

/**
 * Splits a raw assistant reply into visible text plus the UI markers the assistant may add at the end.
 * While the reply is still streaming, a half-written marker is hidden so visitors never see it.
 */
export function parseReply(raw: string): ParsedReply {
  let leadForm = false
  const actions: ActionKey[] = []

  let text = raw.replace(/\[\[\s*LEAD_FORM\s*\]\]/gi, () => {
    leadForm = true
    return ''
  })
  text = text.replace(/\[\[\s*ACTIONS\s*:([^\]]*)\]\]/gi, (_m, list: string) => {
    list.split(',').forEach((k) => {
      const key = k.trim().toLowerCase() as ActionKey
      if (VALID.includes(key) && !actions.includes(key)) actions.push(key)
    })
    return ''
  })

  const open = text.lastIndexOf('[[')
  if (open !== -1) text = text.slice(0, open)
  if (text.endsWith('[')) text = text.slice(0, -1)

  return { text: text.trimEnd(), leadForm, actions }
}
