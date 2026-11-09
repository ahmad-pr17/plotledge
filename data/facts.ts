import { BadgeCheck, Coins, KeyRound, Receipt, Smartphone, type LucideIcon } from 'lucide-react'
import trust from '@/messages/en/trust'

// Only true product facts belong here. Do not add counts, ratings or results.
// The words live in messages/<lang>/trust.ts (trust.facts), in the same order as these icons.
export const factIcons: LucideIcon[] = [Coins, Receipt, KeyRound, Smartphone, BadgeCheck]

// English copy, kept for the AI assistant's knowledge base. Pages read the translated text from messages (trust.securityPoints).
export const securityPoints: string[] = trust.securityPoints
