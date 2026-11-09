import type { Messages } from '@/i18n/messages'

const how: Messages['how'] = {
  eyebrow: 'Cómo funciona',
  title: 'Tres pasos, del primer lote a la última mensualidad.',
  description: 'Se configura una vez. Después, cada pago es un solo registro.',
  steps: [
    { title: 'Agregue sus lotes', desc: 'Capture el número, la superficie y el precio de cada lote, y márquelo como disponible, apartado o vendido.' },
    { title: 'Registre la operación', desc: 'Elija al comprador, defina el precio de venta y el enganche, y escoja el plan de mensualidades.' },
    { title: 'Registre cada pago', desc: 'Anote cada mensualidad al recibirla, adjunte el comprobante y emita un recibo.' },
  ],
}
export default how
