'use client'

import Link from 'next/link'
import { useEffect, useRef, useSyncExternalStore } from 'react'
import { closeConsent, getServerConsent, getServerReopened, isReopened, readConsent, saveConsent, subscribe } from '@/lib/consent'

/**
 * Asks once whether Google Analytics cookies may be used. Accept and Reject are the same size and weight, and nothing
 * non-essential loads until the visitor chooses. "Cookie settings" links call reopenConsent() to show it again.
 */
export function CookieBanner() {
  const choice = useSyncExternalStore(subscribe, readConsent, getServerConsent)
  const reopened = useSyncExternalStore(subscribe, isReopened, getServerReopened)
  const ref = useRef<HTMLDivElement>(null)
  const visible = choice === 'none' || (reopened && choice !== 'unknown')

  // A reopened banner can be dismissed with Escape; the first-visit banner needs an answer.
  useEffect(() => {
    if (!visible || choice === 'none') return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeConsent() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [visible, choice])

  // Move focus into a banner the visitor opened on purpose, so keyboard and screen reader users land on it.
  useEffect(() => {
    if (visible && reopened) ref.current?.querySelector<HTMLButtonElement>('button')?.focus()
  }, [visible, reopened])

  if (!visible) return null

  const btn = 'inline-flex min-h-11 flex-1 items-center justify-center rounded-full border px-5 text-sm font-semibold transition-colors'

  return (
    <div className="cookie-banner fixed inset-x-0 bottom-0 z-[60] p-3 sm:inset-x-auto sm:bottom-4 sm:left-4 sm:max-w-md sm:p-0">
      <div
        ref={ref}
        role="region"
        aria-labelledby="cookie-banner-title"
        className="rounded-2xl border border-[var(--border-strong)] bg-card p-5 text-card-foreground shadow-[0_20px_50px_-20px_rgb(var(--shadow-color)/.45)]"
      >
        <h2 id="cookie-banner-title" className="font-display text-base font-bold text-foreground">Cookies and analytics</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          We would like to use Google Analytics cookies to count visits and see which pages help. Nothing loads until you choose, and the site works the same either way.{' '}
          <Link href="/cookie-policy" className="font-semibold text-primary underline underline-offset-2">Read the cookie policy</Link>.
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => saveConsent('rejected')} className={`${btn} border-[var(--border-strong)] bg-card text-foreground hover:bg-secondary`}>
            Reject analytics
          </button>
          <button type="button" onClick={() => saveConsent('accepted')} className={`${btn} border-transparent bg-brand text-white hover:bg-primary`}>
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  )
}
