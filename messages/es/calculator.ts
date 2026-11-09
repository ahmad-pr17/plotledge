import type { Messages } from '@/i18n/messages'

const calculator: Messages['calculator'] = {
  eyebrow: 'Calculadora de ahorro',
  title: '¿Cuánto le cuesta hoy llevar el control?',
  description: 'Mueva los controles según su negocio. El resultado usa sus propias cifras.',
  sliders: {
    hours: { label: 'Horas por semana que dedica al control', unit: 'h' },
    share: { label: '¿Qué parte de ese tiempo le gustaría ahorrar?', unit: '%' },
    rate: { label: '¿Cuánto vale una hora de su tiempo?' },
  },
  results: {
    hoursUnit: 'h',
    perMonth: 'recuperadas cada mes',
    perYear: 'recuperadas cada año',
    value: 'de su tiempo al año',
  },
  cta: 'Agendar una demo gratuita',
  disclaimer: 'Es solo aritmética con las cifras que usted ingresó. No es una promesa de resultados. El tiempo que ahorre depende de cómo trabaje hoy.',
}
export default calculator
