import { collectionsM, plotCounts, plots } from '@/data/showcase'

export type RoleId = 'owner' | 'accountant' | 'agent'

/** Numbers only. The words (names, headings, labels) live in messages (roles.items[id]). */
export type Role = {
  id: RoleId
  /** Mini dashboard panel progress, 0 to 100. */
  progress: number
  /** Whether each permission, in the order of messages roles.items[id].permissions, is allowed. */
  allowed: boolean[]
  /** Numbers the panel text uses as {amount}, {count} and {pct}. */
  values: { amount?: number; count?: number; pct?: number }
}

const soldPct = Math.round((plotCounts.sold / plots.length) * 100)

export const roles: Role[] = [
  {
    id: 'owner',
    progress: 74,
    allowed: [true, true, true, true, true],
    values: { amount: collectionsM[collectionsM.length - 1] },
  },
  {
    id: 'accountant',
    progress: 62,
    allowed: [true, true, true, false, false],
    values: {},
  },
  {
    id: 'agent',
    progress: soldPct,
    allowed: [true, true, true, false, false],
    values: { count: plotCounts.available, pct: soldPct },
  },
]
