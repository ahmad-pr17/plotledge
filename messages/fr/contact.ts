import type { Messages } from '@/i18n/messages'

const contact: Messages['contact'] = {
  meta: {
    title: 'Contact et réservation de démo',
    description: 'Réservez une démo gratuite de Plot Ledge, le logiciel de gestion de parcelles pour agents immobiliers. Envoyez un message ou discutez sur WhatsApp.',
  },
  eyebrow: 'Contact',
  title: 'Réserver une démo gratuite',
  lead: 'Dites-nous combien de parcelles vous gérez et nous vous montrerons, lors d’un court appel, les échéances, les reçus et les rapports.',
  aside: {
    label: 'Autres moyens de nous joindre',
    chatTitle: 'Vous préférez discuter ?',
    whatsapp: 'Discuter sur WhatsApp',
    stepsTitle: 'Comment se déroule une démo',
    enterprise: 'Lotissement ou plusieurs projets ? Dites-le-nous et nous présenterons la formule Enterprise.',
  },
  steps: [
    'Nous vous demandons comment vous suivez aujourd’hui vos parcelles et vos échéances.',
    'Vous voyez comment les parcelles, les ventes, les échéances et les reçus fonctionnent ensemble.',
    'Nous pouvons mettre en place un essai de 15 jours si vous souhaitez le tester avec vos propres données.',
  ],
  plotOptions: ['Moins de 25', '25 à 100', '100 à 500', '500+'],
  form: {
    successTitle: 'Demande reçue',
    success: 'Merci. Nous vous contacterons au numéro que vous avez indiqué.',
    continueWhatsApp: 'Continuer sur WhatsApp',
    whatsappFollowup: 'Bonjour Plot Ledge, je viens d’envoyer une demande de démo depuis le site.',
    failed: 'Nous n’avons pas pu envoyer ce message pour le moment. Écrivez-nous sur WhatsApp.',
    messageWhatsApp: 'Écrivez-nous sur WhatsApp',
    honeypot: 'Site web',
    name: 'Votre nom',
    phone: 'Numéro de téléphone ou WhatsApp',
    company: 'Entreprise ou lotissement',
    optional: '(facultatif)',
    plots: 'Combien de parcelles gérez-vous ?',
    choose: 'Choisissez',
    submit: 'Réserver une démo gratuite',
    sending: 'Envoi en cours',
    privacy: 'Nous utilisons vos informations uniquement pour vous contacter au sujet de Plot Ledge.',
    errors: {
      name: 'Saisissez votre nom.',
      phone: 'Saisissez un numéro de téléphone de 10 à 15 chiffres.',
      plots: 'Indiquez combien de parcelles vous gérez.',
    },
  },
}
export default contact
