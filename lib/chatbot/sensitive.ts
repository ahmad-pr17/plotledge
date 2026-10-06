// Detects private data that should never be typed into the chat: CNIC numbers, card numbers, passwords and codes.
// Phone numbers (10 to 11 digits) are allowed because visitors share them to get a call back.

const CNIC = /\b\d{5}-\d{7}-\d\b|\b\d{13}\b/
const CARD = /\b(?:\d[ -]?){13,19}\b/
const SECRET_WORDS = /\b(password|passcode|cvv|cvc|otp|pin code|card number|account number|iban)\b\s*(is|:|=)?\s*\S+/i

export function containsSensitive(text: string): boolean {
  return CNIC.test(text) || CARD.test(text) || SECRET_WORDS.test(text)
}

export const SENSITIVE_REPLY =
  'Please do not share bank details, card numbers, passwords or CNIC numbers in this chat. I removed that message. I can still help with questions about Plot Ledge.'
