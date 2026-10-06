import { BadgeCheck, Coins, KeyRound, Receipt, Smartphone, type LucideIcon } from 'lucide-react'

// Only true product facts belong here. Do not add counts, ratings or results.
export const productFacts: { icon: LucideIcon; text: string }[] = [
  { icon: Coins, text: 'Amounts shown in rupees and millions' },
  { icon: Receipt, text: 'Receipts with unique IDs' },
  { icon: KeyRound, text: 'Separate admin and agent logins' },
  { icon: Smartphone, text: 'Works on your phone' },
  { icon: BadgeCheck, text: 'Free plan to start' },
]

// Short and honest. State only what is true of the product. Do not claim certifications.
export const securityPoints = [
  'Everyone signs in with their own login. Owner, Accountant and Sales Agent each see only what their job needs.',
  'Every receipt gets its own unique ID, so a payment can always be traced back.',
  'You can export reports and keep your own copy of important records.',
]
