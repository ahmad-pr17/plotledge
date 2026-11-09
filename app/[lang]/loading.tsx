import { PlotLedgeLoader } from '@/components/shared/plot-ledge-loader'
import { getMessages } from '@/i18n/server'

// Shown while a page is loading during navigation (for example after switching language): the same loader the CRM uses,
// centred on the screen at every size.
export default async function Loading() {
  const m = await getMessages()
  return <PlotLedgeLoader label={m.common.loading} fullscreen />
}
