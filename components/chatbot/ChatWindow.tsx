'use client'

import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { MoreVertical, Minus, RotateCcw, Send, X } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { MessageBubble } from '@/components/chatbot/MessageBubble'
import { QuickReplies } from '@/components/chatbot/QuickReplies'
import { LogoMark } from '@/components/shared/logo'
import { MAX_INPUT, useChat } from '@/hooks/useChat'
import { trackChat } from '@/lib/chatbot/analytics'
import { whatsappLink } from '@/lib/site'
import { cn } from '@/lib/utils'

const GREETING = 'Assalam o Alaikum! I am the Plot Ledge Assistant. I can answer questions about plots, installments, receipts and pricing. What would you like to know?'
const COUNTER_FROM = 400
const MAX_LINES = 4

type Props = {
  open: boolean
  onClose: () => void
  onMinimize: () => void
}

export default function ChatWindow({ open, onClose, onMinimize }: Props) {
  const reduce = useReducedMotion()
  const { messages, streaming, send, rate, markLeadDone, newChat } = useChat()
  const [draft, setDraft] = useState('')
  const [menu, setMenu] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const greetedAt = useRef(Date.now())

  // Summary of what the visitor asked, for the pre-filled WhatsApp message.
  const whatsappHref = useMemo(() => {
    const asked = messages.filter((m) => m.role === 'user' && !m.local).slice(-3).map((m) => m.content.slice(0, 120))
    const base = 'Hi Plot Ledge, I was chatting on your website'
    return whatsappLink(asked.length ? `${base} and asked about: ${asked.join('; ')}. I would like to talk to the team.` : `${base}. I would like to talk to the team.`)
  }, [messages])

  const onWhatsApp = useCallback(() => trackChat('chat_whatsapp_clicked'), [])

  // Focus moves into the chat when it opens. The launcher takes focus back on close.
  useEffect(() => {
    if (!open) return
    const id = requestAnimationFrame(() => inputRef.current?.focus())
    return () => cancelAnimationFrame(id)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (menu) setMenu(false)
      else onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, menu, onClose])

  // Keep the newest message in view.
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduce ? 'auto' : 'smooth' })
  }, [messages, reduce])

  const resize = () => {
    const el = inputRef.current
    if (!el) return
    el.style.height = 'auto'
    const line = parseFloat(getComputedStyle(el).lineHeight) || 24
    el.style.height = `${Math.min(el.scrollHeight, line * MAX_LINES + 20)}px`
  }

  const submit = (text = draft) => {
    if (!text.trim() || streaming) return
    void send(text)
    setDraft('')
    requestAnimationFrame(() => {
      resize()
      inputRef.current?.focus()
    })
  }

  const showChips = messages.length === 0

  return (
    <AnimatePresence>
      {open && (
        <motion.section
          role="dialog"
          aria-label="Plot Ledge Assistant"
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: 'bottom right' }}
          className={cn(
            'fixed z-50 flex flex-col overflow-hidden border border-border bg-background shadow-[0_24px_60px_-20px_rgb(var(--shadow-color)/.35)]',
            'max-sm:inset-x-0 max-sm:bottom-0 max-sm:h-[calc(100dvh-0.75rem)] max-sm:rounded-t-3xl',
            'sm:bottom-24 sm:right-6 sm:h-[560px] sm:max-h-[calc(100dvh-8rem)] sm:w-[380px] sm:rounded-3xl',
          )}
        >
          <header className="relative flex items-center gap-3 border-b border-border bg-[var(--glass)] px-4 py-3 backdrop-blur-xl">
            <LogoMark className="size-10" />
            <div className="min-w-0 flex-1">
              <h2 className="truncate font-display text-[15px] font-semibold leading-tight">Plot Ledge Assistant</h2>
              <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                <span aria-hidden className="size-2 rounded-full bg-paid" />
                <span className="sr-only">Online. </span>
                AI assistant
              </p>
            </div>
            <div className="relative flex items-center">
              <button type="button" aria-label="Chat options" aria-haspopup="menu" aria-expanded={menu} onClick={() => setMenu((v) => !v)} className="grid size-11 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <MoreVertical className="size-[18px]" aria-hidden />
              </button>
              {menu && (
                <div role="menu" className="absolute right-0 top-12 z-10 w-44 rounded-xl border border-border bg-popover p-1 shadow-lg">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      newChat()
                      setMenu(false)
                      inputRef.current?.focus()
                    }}
                    className="flex min-h-11 w-full items-center gap-2 rounded-lg px-3 text-sm font-medium hover:bg-muted"
                  >
                    <RotateCcw className="size-4" aria-hidden /> New chat
                  </button>
                </div>
              )}
              <button type="button" aria-label="Minimize chat" onClick={onMinimize} className="grid size-11 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <Minus className="size-[18px]" aria-hidden />
              </button>
              <button type="button" aria-label="Close chat" onClick={onClose} className="grid size-11 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
                <X className="size-[18px]" aria-hidden />
              </button>
            </div>
          </header>

          <div
            ref={scrollRef}
            role="log"
            aria-live="polite"
            aria-busy={streaming}
            aria-label="Conversation"
            tabIndex={0}
            className="flex flex-1 flex-col gap-4 overflow-y-auto overscroll-contain px-4 py-4"
          >
            <MessageBubble
              message={{ id: 'greeting', role: 'assistant', content: GREETING, ts: greetedAt.current, local: true }}
              streaming={false}
              whatsappHref={whatsappHref}
              onWhatsApp={onWhatsApp}
              onNavigate={onMinimize}
              onRate={() => {}}
              onLeadDone={() => {}}
            />
            {showChips && <QuickReplies onPick={(q) => submit(q)} disabled={streaming} />}
            {messages.map((m, i) => (
              <MessageBubble
                key={m.id}
                message={m}
                streaming={streaming && i === messages.length - 1}
                whatsappHref={whatsappHref}
                onWhatsApp={onWhatsApp}
                onNavigate={onMinimize}
                onRate={(v) => rate(m.id, v)}
                onLeadDone={() => markLeadDone(m.id)}
              />
            ))}
          </div>

          <div className="border-t border-border bg-background px-3 pb-2 pt-3" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                submit()
              }}
              className="flex items-end gap-2"
            >
              <div className="relative flex-1">
                <label htmlFor="chat-input" className="sr-only">Type your question</label>
                <textarea
                  id="chat-input"
                  ref={inputRef}
                  rows={1}
                  value={draft}
                  maxLength={MAX_INPUT}
                  placeholder="Type your question"
                  onChange={(e) => {
                    setDraft(e.target.value)
                    resize()
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) {
                      e.preventDefault()
                      submit()
                    }
                  }}
                  dir="auto"
                  className="block max-h-[116px] min-h-11 w-full resize-none rounded-2xl border border-input bg-card px-4 py-2.5 text-base leading-6 text-foreground placeholder:text-muted-foreground/80"
                />
              </div>
              <button
                type="submit"
                aria-label="Send message"
                disabled={!draft.trim() || streaming}
                className="grid size-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="size-[18px]" aria-hidden />
              </button>
            </form>
            <div className="mt-1.5 flex items-center justify-between gap-3 px-1 text-xs text-muted-foreground">
              <p>
                AI assistant. Answers may be imperfect.{' '}
                <Link href="/privacy" onClick={onMinimize} className="inline-flex min-h-11 items-center underline underline-offset-2 hover:text-foreground">Privacy</Link>
              </p>
              {draft.length >= COUNTER_FROM && <span className="num shrink-0" aria-hidden>{draft.length}/{MAX_INPUT}</span>}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
