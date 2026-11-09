// Cookie consent. The visitor's choice lives in this browser only (local storage) and is asked again after a year.
// "none" = no valid choice yet, "unknown" = not read yet (server render and first client render).

export type ConsentChoice = 'accepted' | 'rejected'
export type ConsentState = ConsentChoice | 'none' | 'unknown'

export const CONSENT_KEY = 'plotledge-consent'
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000

const listeners = new Set<() => void>()
let reopened = false
let memoryChoice: ConsentChoice | null = null

const notify = () => listeners.forEach((l) => l())

export function subscribe(listener: () => void) {
  listeners.add(listener)
  const onStorage = (e: StorageEvent) => { if (e.key === CONSENT_KEY) listener() } // another tab changed it
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    window.removeEventListener('storage', onStorage)
  }
}

export function readConsent(): ConsentState {
  try {
    const raw = localStorage.getItem(CONSENT_KEY)
    if (!raw) return 'none'
    const { v, at } = JSON.parse(raw) as { v?: unknown; at?: unknown }
    if ((v !== 'accepted' && v !== 'rejected') || typeof at !== 'number' || Date.now() - at > MAX_AGE_MS) return 'none'
    return v
  } catch {
    return memoryChoice ?? 'none' // storage blocked or corrupt: use this page's choice, else ask (no consent)
  }
}

export const getServerConsent = (): ConsentState => 'unknown'
export const isReopened = () => reopened
export const getServerReopened = () => false

/** Google Analytics sets _ga and _ga_<id>. When someone withdraws consent we remove the ones this browser holds for our domain. */
function clearAnalyticsCookies() {
  const host = location.hostname
  const parts = host.split('.')
  const domains = new Set<string | undefined>([undefined, host, `.${host}`])
  for (let i = 1; i < parts.length - 1; i++) domains.add(`.${parts.slice(i).join('.')}`)
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0].trim()
    if (name !== '_ga' && !name.startsWith('_ga_') && name !== '_gid' && name !== '_gat') return
    domains.forEach((d) => { document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}` })
  })
}

export function saveConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ v: choice, at: Date.now() }))
  } catch {
    memoryChoice = choice // storage blocked: the choice applies until the page is reloaded
  }
  if (choice === 'rejected') clearAnalyticsCookies()
  reopened = false
  notify()
}

/** Opens the banner again so the choice can be changed ("Cookie settings" links). */
export function reopenConsent() {
  reopened = true
  notify()
}

export function closeConsent() {
  reopened = false
  notify()
}
