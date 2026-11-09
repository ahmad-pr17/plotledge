import type { Messages } from '@/i18n/messages'

const chat: Messages['chat'] = {
  launcher: {
    open: 'Chatear con el Asistente de Plot Ledge',
    close: 'Cerrar el chat con el Asistente de Plot Ledge',
    teaser: '¿Preguntas sobre Plot Ledge? Pregúntenos.',
    dismiss: 'Descartar',
  },
  window: {
    title: 'Asistente de Plot Ledge',
    subtitle: 'Asistente de IA',
    onlineSr: 'En línea. ',
    options: 'Opciones del chat',
    newChat: 'Nuevo chat',
    minimize: 'Minimizar el chat',
    close: 'Cerrar el chat',
    conversation: 'Conversación',
    inputLabel: 'Escriba su pregunta',
    inputPlaceholder: 'Escriba su pregunta',
    send: 'Enviar mensaje',
    disclaimer: 'Asistente de IA. Las respuestas pueden no ser perfectas.',
    privacy: 'Privacidad',
    typing: 'El Asistente de Plot Ledge está escribiendo',
  },
  greeting: '¡Hola! Soy el Asistente de Plot Ledge. Puedo responder preguntas sobre lotes, mensualidades, recibos y precios. ¿Qué le gustaría saber?',
  quickRepliesLabel: 'Preguntas sugeridas',
  quickReplies: ['¿Qué hace Plot Ledge?', 'Precios', 'Agendar una demo', '¿Puedo importar mis datos de Excel?'],
  actions: {
    whatsapp: 'Chatear por WhatsApp',
    crm: 'Abrir el CRM',
    pricing: 'Ver precios',
    demo: 'Agendar una demo gratuita',
  },
  rate: {
    label: 'Califique esta respuesta',
    up: 'Respuesta útil',
    down: 'Respuesta no útil',
  },
  whatsapp: {
    withTopics: 'Hola Plot Ledge, estaba chateando en su sitio web y pregunté sobre: {topics}. Me gustaría hablar con el equipo.',
    plain: 'Hola Plot Ledge, estaba chateando en su sitio web. Me gustaría hablar con el equipo.',
  },
  errors: {
    rateLimit: 'Ha alcanzado el límite de mensajes por ahora. Inténtelo de nuevo en unos minutos o chatee con el equipo por WhatsApp.',
    failure: 'Tengo problemas en este momento. Puede chatear con el equipo por WhatsApp o agendar una demo.',
    redacted: 'Mensaje eliminado porque parecía contener datos privados.',
  },
  sensitiveReply: 'Por favor, no comparta datos bancarios, números de tarjeta, contraseñas ni números de CNIC en este chat. Eliminé ese mensaje. Aun así puedo ayudarle con preguntas sobre Plot Ledge.',
  lead: {
    intro: 'Déjenos sus datos y el equipo se pondrá en contacto con usted.',
    name: 'Su nombre',
    phone: 'Número de teléfono o de WhatsApp',
    plots: '¿Cuántos lotes administra?',
    choose: 'Elija una opción',
    city: 'Ciudad',
    optional: '(opcional)',
    submit: 'Enviar mis datos',
    sending: 'Enviando',
    note: 'Solo los usaremos para contactarlo sobre Plot Ledge.',
    done: 'Gracias. El equipo se comunicará con usted pronto al número que nos dio.',
    failed: 'No pudimos enviarlo en este momento.',
    whatsapp: 'Escríbanos por WhatsApp',
    errors: {
      name: 'Ingrese su nombre.',
      phone: 'Ingrese un número de 10 a 15 dígitos.',
      plots: 'Elija una opción.',
    },
  },
  offline: [
    {
      id: 'pricing',
      keywords: ['precio', 'precios', 'cuanto cuesta', 'cuánto cuesta', 'costo', 'costos', 'plan', 'planes', 'tarifa', 'mensualidad del plan', 'cuanto cobran', 'gratis', 'price', 'pricing', 'cost'],
      answer: 'Los planes comienzan en {silver} al mes con Silver. Gold cuesta {gold} al mes, y pagar por año ahorra {pct}% (dos meses gratis). Enterprise tiene un precio según el caso para desarrolladores con varias sucursales, fraccionamientos y grupos más grandes, así que hable con nosotros.',
    },
    {
      id: 'import',
      keywords: ['excel', 'importar', 'importacion', 'importación', 'hoja de calculo', 'hoja de cálculo', 'subir datos', 'cargar datos', 'pasar mis datos', 'migrar', 'migracion', 'migración'],
      answer: 'Sí, podemos ayudarle a cargar sus lotes, compradores y pagos actuales desde Excel. Envíenos la hoja y le diremos si algo necesita ordenarse antes, por ejemplo dos compradores en una misma fila.',
    },
    {
      id: 'roles',
      keywords: ['roles', 'acceso', 'accesos', 'usuario', 'usuarios', 'permiso', 'permisos', 'propietario', 'contador', 'agente de ventas', 'quien puede ver', 'quién puede ver', 'login', 'owner', 'accountant'],
      answer: 'Cada persona tiene su propio acceso. El propietario ve todo, incluidas las ventas, la utilidad y los inversionistas. El contador se encarga de los pagos, los comprobantes, los recibos y los reportes. Un agente de ventas puede agregar operaciones y consultar lotes y compradores, pero no puede editar ni eliminar una operación.',
    },
    {
      id: 'receipts',
      keywords: ['recibo', 'recibos', 'comprobante', 'comprobantes', 'ficha de deposito', 'ficha de depósito', 'boucher', 'voucher', 'prueba de pago', 'comprobante de pago', 'receipt', 'slip'],
      answer: 'Cada pago que usted registra genera un recibo con su propio folio único. Puede adjuntar la referencia del comprobante bancario al mismo pago, de modo que el recibo, el comprobante y la operación queden vinculados.',
    },
    {
      id: 'mobile',
      keywords: ['celular', 'telefono', 'teléfono', 'movil', 'móvil', 'tableta', 'tablet', 'app', 'aplicacion', 'aplicación', 'smartphone', 'desde mi cel', 'mobile', 'phone'],
      answer: 'Sí. Plot Ledge funciona en celulares y tabletas, así que puede consultar el saldo de un comprador o registrar un pago desde el terreno o durante una reunión con un cliente.',
    },
    {
      id: 'investor',
      keywords: ['inversionista', 'inversionistas', 'inversion', 'inversión', 'utilidad', 'utilidades', 'ganancia', 'ganancias', 'reparto', 'socio', 'socios', 'investor', 'profit'],
      answer: 'Usted registra cuánto aportó cada inversionista a un proyecto y la participación que tiene. Plot Ledge muestra entonces a cada inversionista la utilidad que le corresponde, de modo que el reparto es una cifra en pantalla y no una discusión.',
    },
    {
      id: 'society',
      keywords: ['fraccionamiento', 'fraccionamientos', 'desarrollo inmobiliario', 'desarrolladora', 'desarrollador', 'varios proyectos', 'muchos proyectos', 'sucursal', 'sucursales', 'enterprise', 'society', 'housing'],
      answer: 'Sí. El plan Enterprise está hecho para fraccionamientos y desarrolladores con varias sucursales, con varios proyectos y equipos más grandes. Chatee con nosotros por WhatsApp o agende una demo y lo configuraremos según sus proyectos.',
    },
    {
      id: 'about',
      keywords: ['que es', 'qué es', 'que hace', 'qué hace', 'para que sirve', 'para qué sirve', 'de que se trata', 'de qué se trata', 'como funciona', 'cómo funciona', 'que ofrecen', 'qué ofrecen', 'about', 'what is'],
      answer: 'Plot Ledge es un CRM para agentes inmobiliarios que venden lotes y propiedades. Reúne en un solo lugar sus lotes, operaciones, mensualidades, pagos y recibos, para que deje de armar todo a partir de hojas de Excel y capturas de WhatsApp.',
    },
  ] as { id: string; keywords: string[]; answer: string }[],
}
export default chat
