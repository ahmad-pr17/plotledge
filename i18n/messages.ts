import type en from '@/messages/en'
import { SERVER_ONLY_NAMESPACES, type Locale } from './config'

/** The shape every language must match. English is the source of truth; the other languages are checked against it. */
export type Messages = typeof en

type ServerOnly = (typeof SERVER_ONLY_NAMESPACES)[number]
/** What client components can read: every namespace except the server-only ones. */
export type ClientMessages = Omit<Messages, ServerOnly>

const loaders: Record<Locale, () => Promise<{ default: Messages }>> = {
  en: () => import('@/messages/en'),
  fr: () => import('@/messages/fr'),
  it: () => import('@/messages/it'),
  es: () => import('@/messages/es'),
  ar: () => import('@/messages/ar'),
  ur: () => import('@/messages/ur'),
  zh: () => import('@/messages/zh'),
  ru: () => import('@/messages/ru'),
}

export async function loadMessages(locale: Locale): Promise<Messages> {
  return (await loaders[locale]()).default
}

export function toClientMessages(messages: Messages): ClientMessages {
  const copy: Partial<Messages> = { ...messages }
  for (const key of SERVER_ONLY_NAMESPACES) delete copy[key]
  return copy as ClientMessages
}
