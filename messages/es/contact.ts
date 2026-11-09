import type { Messages } from '@/i18n/messages'

const contact: Messages['contact'] = {
  meta: {
    title: 'Contacto y agendar una demo',
    description: 'Agende una demo gratuita de Plot Ledge, el software de gestión de lotes para agentes inmobiliarios. Envíe un mensaje o chatee por WhatsApp.',
  },
  eyebrow: 'Contacto',
  title: 'Agende una demo gratuita',
  lead: 'Cuéntenos cuántos lotes administra y en una llamada breve le mostraremos las mensualidades, los recibos y los reportes.',
  aside: {
    label: 'Otras formas de contactarnos',
    chatTitle: '¿Prefiere chatear?',
    whatsapp: 'Chatear por WhatsApp',
    stepsTitle: 'Qué pasa en una demo',
    enterprise: '¿Fraccionamiento o varios proyectos? Menciónelo y le explicaremos el plan Enterprise.',
  },
  steps: [
    'Le preguntamos cómo controla hoy sus lotes y mensualidades.',
    'Usted ve cómo trabajan en conjunto los lotes, las operaciones, las mensualidades y los recibos.',
    'Si desea probarlo con sus propios datos, podemos configurar una prueba de 15 días.',
  ],
  plotOptions: ['Menos de 25', 'De 25 a 100', 'De 100 a 500', 'Más de 500'],
  form: {
    successTitle: 'Solicitud recibida',
    success: 'Gracias. Nos comunicaremos con usted al número que nos dio.',
    continueWhatsApp: 'Continuar por WhatsApp',
    whatsappFollowup: 'Hola Plot Ledge, acabo de enviar una solicitud de demo en el sitio web.',
    failed: 'No pudimos enviarlo en este momento. Por favor, escríbanos por WhatsApp.',
    messageWhatsApp: 'Escríbanos por WhatsApp',
    honeypot: 'Sitio web',
    name: 'Su nombre',
    phone: 'Número de teléfono o de WhatsApp',
    company: 'Empresa o fraccionamiento',
    optional: '(opcional)',
    plots: '¿Cuántos lotes administra?',
    choose: 'Elija una opción',
    submit: 'Agendar una demo gratuita',
    sending: 'Enviando',
    privacy: 'Usamos sus datos únicamente para contactarlo sobre Plot Ledge.',
    errors: {
      name: 'Ingrese su nombre.',
      phone: 'Ingrese un número de teléfono de 10 a 15 dígitos.',
      plots: 'Elija cuántos lotes administra.',
    },
  },
}
export default contact
