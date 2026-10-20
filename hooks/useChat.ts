'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { trackChat } from '@/lib/chatbot/analytics'
import { matchOfflineFaq } from '@/lib/chatbot/offline-faq'
import { parseReply, type ActionKey } from '@/lib/chatbot/parse-reply'
import { containsSensitive, SENSITIVE_REPLY } from '@/lib/chatbot/sensitive'

export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
  ts: number
  /** Created by the website itself (errors, notices). Not sent to the AI as context. */
  local?: boolean
  feedback?: 'up' | 'down'
  /** Show the contact form card under this reply. */
  leadForm?: 'open' | 'done'
  actions?: ActionKey[]
}

export const MAX_INPUT = 500
const MAX_CONTEXT = 10
const STORAGE_KEY = 'plotledge-chat-v1'
const REQUEST_TIMEOUT_MS = 30_000

export const RATE_LIMIT_TEXT = 'You have reached the message limit for now. Please try again in a few minutes, or chat with the team on WhatsApp.'
export const FAILURE_TEXT = 'I am having trouble right now. You can chat with the team on WhatsApp or book a demo.'
export const REDACTED_TEXT = 'Message removed because it looked like private data.'

const uid = () => `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`

function load(): ChatMessage[] {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    const list = raw ? (JSON.parse(raw) as ChatMessage[]) : []
    return Array.isArray(list) ? list.filter((m) => m && typeof m.content === 'string').slice(-MAX_CONTEXT) : []
  } catch {
    return []
  }
}

function save(messages: ChatMessage[]) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-MAX_CONTEXT)))
  } catch {
    /* storage unavailable, the chat still works for this page view */
  }
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [streaming, setStreaming] = useState(false)
  const [ready, setReady] = useState(false)
  const abortRef = useRef<AbortController | null>(null)
  const messagesRef = useRef<ChatMessage[]>([])
  messagesRef.current = messages

  useEffect(() => {
    setMessages(load())
    setReady(true)
    return () => abortRef.current?.abort()
  }, [])

  useEffect(() => {
    if (ready && !streaming) save(messages)
  }, [messages, streaming, ready])

  const patch = useCallback((id: string, change: Partial<ChatMessage>) => {
    setMessages((cur) => cur.map((m) => (m.id === id ? { ...m, ...change } : m)))
  }, [])

  const send = useCallback(
    async (input: string) => {
      const content = input.trim().slice(0, MAX_INPUT)
      if (!content || streaming) return
      trackChat('chat_message_sent')

      const now = Date.now()
      const userMsg: ChatMessage = { id: uid(), role: 'user', content, ts: now }

      // Private data is caught in the browser first, so it is never even sent.
      if (containsSensitive(content)) {
        setMessages((cur) => [
          ...cur,
          { ...userMsg, content: REDACTED_TEXT, local: true },
          { id: uid(), role: 'assistant', content: SENSITIVE_REPLY, ts: now, local: true },
        ])
        return
      }

      const botId = uid()
      const context = [...messagesRef.current.filter((m) => !m.local), userMsg]
        .slice(-MAX_CONTEXT)
        .map(({ role, content: c }) => ({ role, content: c }))

      setMessages((cur) => [...cur, userMsg, { id: botId, role: 'assistant', content: '', ts: now }])
      setStreaming(true)

      const controller = new AbortController()
      abortRef.current = controller
      const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)
      let raw = ''

      const fail = (text: string, actions: ActionKey[]) => {
        patch(botId, { content: text, local: true, actions })
      }

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: context }),
          signal: controller.signal,
        })

        if (res.status === 429) {
          fail(RATE_LIMIT_TEXT, ['whatsapp'])
          return
        }
        if (!res.ok || !res.body) throw new Error(`status ${res.status}`)

        const redacted = res.headers.get('X-Chat-Redacted') === '1'
        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        for (;;) {
          const { done, value } = await reader.read()
          if (done) break
          raw += decoder.decode(value, { stream: true })
          patch(botId, { content: parseReply(raw).text })
        }
        raw += decoder.decode()

        const parsed = parseReply(raw)
        if (!parsed.text && !parsed.leadForm) throw new Error('empty reply')
        setMessages((cur) =>
          cur.map((m) => {
            if (m.id === botId) {
              return { ...m, content: parsed.text, leadForm: parsed.leadForm ? 'open' : undefined, actions: parsed.actions.length ? parsed.actions : undefined, local: redacted || undefined }
            }
            return redacted && m.id === userMsg.id ? { ...m, content: REDACTED_TEXT, local: true } : m
          }),
        )
      } catch {
        if (raw.trim()) {
          // Part of the answer arrived before the connection dropped. Keep it.
          const parsed = parseReply(raw)
          patch(botId, { content: parsed.text, actions: ['whatsapp', 'demo'] })
        } else {
          const backup = matchOfflineFaq(content)
          if (backup) fail(backup, ['demo', 'whatsapp'])
          else fail(FAILURE_TEXT, ['whatsapp', 'demo'])
        }
      } finally {
        clearTimeout(timer)
        setStreaming(false)
        abortRef.current = null
      }
    },
    [patch, streaming],
  )

  const rate = useCallback(
    (id: string, value: 'up' | 'down') => {
      patch(id, { feedback: value })
      fetch('/api/chat-feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value }),
        keepalive: true,
      }).catch(() => {})
    },
    [patch],
  )

  const markLeadDone = useCallback(
    (id: string) => {
      patch(id, { leadForm: 'done' })
      trackChat('chat_lead_submitted')
    },
    [patch],
  )

  const newChat = useCallback(() => {
    abortRef.current?.abort()
    setStreaming(false)
    setMessages([])
    try {
      sessionStorage.removeItem(STORAGE_KEY)
    } catch {
      /* nothing to clear */
    }
  }, [])

  return { messages, streaming, send, rate, markLeadDone, newChat }
}
