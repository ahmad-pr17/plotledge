'use client'

import Link from 'next/link'
import { CalendarCheck, LogIn, MessageCircle, Tag, ThumbsDown, ThumbsUp } from 'lucide-react'
import { LeadFormCard } from '@/components/chatbot/LeadFormCard'
import { TypingIndicator } from '@/components/chatbot/TypingIndicator'
import type { ChatMessage } from '@/hooks/useChat'
import type { ActionKey } from '@/lib/chatbot/parse-reply'
import { CRM_LOGIN_URL, DEMO_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

const time = (ts: number) => new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit' }).format(ts)

const actionStyle = 'inline-flex min-h-11 items-center gap-2 rounded-full border border-[var(--border-strong)] bg-card px-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:bg-secondary [&_svg]:size-4'

type Props = {
  message: ChatMessage
  streaming: boolean
  whatsappHref: string
  onWhatsApp: () => void
  onNavigate: () => void
  onRate: (value: 'up' | 'down') => void
  onLeadDone: () => void
}

function Actions({ keys, whatsappHref, onWhatsApp, onNavigate }: { keys: ActionKey[]; whatsappHref: string; onWhatsApp: () => void; onNavigate: () => void }) {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {keys.map((k) => {
        if (k === 'whatsapp') {
          return (
            <a key={k} href={whatsappHref} target="_blank" rel="noopener noreferrer" onClick={onWhatsApp} className={actionStyle}>
              <MessageCircle aria-hidden /> Chat on WhatsApp
            </a>
          )
        }
        if (k === 'crm') {
          return (
            <a key={k} href={CRM_LOGIN_URL} target="_blank" rel="noopener noreferrer" className={actionStyle}>
              <LogIn aria-hidden /> Open the CRM
            </a>
          )
        }
        if (k === 'pricing') {
          return (
            <Link key={k} href="/#pricing" onClick={onNavigate} className={actionStyle}>
              <Tag aria-hidden /> See pricing
            </Link>
          )
        }
        return (
          <Link key={k} href={DEMO_URL} onClick={onNavigate} className={actionStyle}>
            <CalendarCheck aria-hidden /> Book a free demo
          </Link>
        )
      })}
    </div>
  )
}

export function MessageBubble({ message, streaming, whatsappHref, onWhatsApp, onNavigate, onRate, onLeadDone }: Props) {
  const mine = message.role === 'user'
  const waiting = !mine && streaming && message.content === ''
  const canRate = !mine && !message.local && !streaming && message.content !== ''

  return (
    <div className={cn('flex flex-col', mine ? 'items-end' : 'items-start')}>
      <div className={cn('max-w-[88%]', !mine && 'w-full max-w-[92%]')}>
        {waiting ? (
          <div className="inline-block rounded-2xl rounded-bl-md bg-secondary px-3"><TypingIndicator /></div>
        ) : (
          message.content !== '' && (
            <p
              dir="auto"
              className={cn(
                'inline-block whitespace-pre-wrap break-words rounded-2xl px-4 py-2.5 text-[15px] leading-6',
                mine ? 'rounded-br-md bg-primary text-primary-foreground' : 'rounded-bl-md bg-secondary text-secondary-foreground',
              )}
            >
              {message.content}
            </p>
          )
        )}

        {!mine && message.leadForm && !streaming && (
          <LeadFormCard done={message.leadForm === 'done'} onDone={onLeadDone} onWhatsApp={onWhatsApp} whatsappHref={whatsappHref} />
        )}
        {!mine && message.actions && !streaming && (
          <Actions keys={message.actions} whatsappHref={whatsappHref} onWhatsApp={onWhatsApp} onNavigate={onNavigate} />
        )}
      </div>

      <div className="mt-1 flex items-center gap-1 px-1 text-xs text-muted-foreground">
        <span className="num">{time(message.ts)}</span>
        {canRate && (
          <span className="ml-1 flex" role="group" aria-label="Rate this reply">
            {(['up', 'down'] as const).map((v) => {
              const Icon = v === 'up' ? ThumbsUp : ThumbsDown
              return (
                <button
                  key={v}
                  type="button"
                  aria-pressed={message.feedback === v}
                  aria-label={v === 'up' ? 'Helpful reply' : 'Not helpful reply'}
                  disabled={!!message.feedback}
                  onClick={() => onRate(v)}
                  className={cn(
                    '-my-2 grid size-11 place-items-center rounded-lg transition-colors hover:bg-muted hover:text-foreground disabled:cursor-default disabled:hover:bg-transparent',
                    message.feedback === v && 'text-primary',
                  )}
                >
                  <Icon className="size-3.5" aria-hidden />
                </button>
              )
            })}
          </span>
        )}
      </div>
    </div>
  )
}
