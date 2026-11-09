import type { Messages } from '@/i18n/messages'

const calculator: Messages['calculator'] = {
  eyebrow: 'Calculateur d’économies',
  title: 'Que vous coûte le suivi aujourd’hui ?',
  description: 'Déplacez les curseurs pour refléter votre activité. Le résultat repose sur vos propres chiffres.',
  sliders: {
    hours: { label: 'Heures par semaine consacrées au suivi', unit: 'h' },
    share: { label: 'Quelle part de ce temps aimeriez-vous économiser ?', unit: '%' },
    rate: { label: 'Combien vaut une heure de votre temps ?' },
  },
  results: {
    hoursUnit: 'h',
    perMonth: 'récupérées chaque mois',
    perYear: 'récupérées chaque année',
    value: 'de votre temps chaque année',
  },
  cta: 'Réserver une démo gratuite',
  disclaimer: 'Il s’agit d’un simple calcul à partir des chiffres que vous avez saisis, pas d’une promesse de résultat. Le temps gagné dépend de votre façon de travailler aujourd’hui.',
}
export default calculator
