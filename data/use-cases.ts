export type UseCase = {
  id: string
  title: string
  icon: 'user' | 'building' | 'landmark' | 'users'
  pain: string
  outcome: string
}

export const useCases: UseCase[] = [
  {
    id: 'dealer',
    title: 'Individual dealer',
    icon: 'user',
    pain: 'Buyers, token amounts and installments live in one notebook and a WhatsApp chat.',
    outcome: 'Property dealer software that shows every buyer balance and next due date on one page.',
  },
  {
    id: 'agency',
    title: 'Real estate agency',
    icon: 'building',
    pain: 'Agents each keep their own sheet, so nobody knows which plots are really booked.',
    outcome: 'One shared plot inventory. Agents add deals, you keep control of edits and deletes.',
  },
  {
    id: 'society',
    title: 'Housing society',
    icon: 'landmark',
    pain: 'Several projects and hundreds of files make installment tracking a full time job.',
    outcome: 'Real estate software for housing societies with separate roles, receipts and reports per project.',
  },
  {
    id: 'investors',
    title: 'Investor group',
    icon: 'users',
    pain: 'Partners keep asking how much they put in and what profit they are owed.',
    outcome: 'Each investor contribution and profit share is recorded, so the split is a number on screen.',
  },
]
