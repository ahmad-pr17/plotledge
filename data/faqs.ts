import en from '@/messages/en/faq'

export type Faq = { q: string; a: string }

// The website reads the FAQ from messages (faq.items) in the visitor's language. This English copy is only for the
// English-only chatbot prompt and offline answers, so they always match the website's English text.
export const faqs: Faq[] = en.items
