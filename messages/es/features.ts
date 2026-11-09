import type { Messages } from '@/i18n/messages'

const features: Messages['features'] = {
  eyebrow: 'Qué hace',
  title: 'Todo lo que necesita una operación de lotes, en un solo lugar.',
  description: 'Desde el primer apartado hasta la última mensualidad, cada paso se registra una sola vez. Es software de gestión de lotes pensado para cómo trabajan realmente los agentes.',
  items: [
    { title: 'Inventario de lotes', desc: 'Cada lote con su número, superficie y precio. Vea qué está disponible, apartado o vendido sin abrir una hoja de cálculo.' },
    { title: 'Operaciones y mensualidades', desc: 'Defina una sola vez el precio de venta, el enganche y el plan. Vea qué está pagado y qué vence después.' },
    { title: 'Pagos y recibos', desc: 'Registre cada pago en su operación y emita un recibo con su propio folio único.' },
    { title: 'Comprobantes de pago', desc: 'Guarde la referencia del comprobante bancario junto con el pago al que corresponde.' },
    { title: 'Inversionistas y reparto de utilidades', desc: 'Registre lo que aportó cada inversionista y vea su parte de la utilidad.' },
    { title: 'Reportes y exportaciones', desc: 'Imprima o exporte un reporte cuando un socio, un inversionista o su contador pregunte cómo va un proyecto.' },
  ],
  visuals: {
    paid: 'Pagado',
    exportFormats: ['PDF', 'Excel', 'Imprimir'],
  },
}
export default features
