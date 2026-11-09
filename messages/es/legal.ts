import type { Messages } from '@/i18n/messages'

type Policy = Messages['legal']['privacy']

const privacy: Policy = {
  title: 'Aviso de privacidad',
  description: 'Qué datos recaba Plot Ledge a través de este sitio web, para qué, con quién se comparten, cuánto tiempo se conservan y cómo ejercer sus derechos.',
  intro: 'Qué datos recaba este sitio web, por qué los recabamos y qué puede hacer usted al respecto, en lenguaje sencillo.',
  updated: '2026-11-09',
  summary: [
    'Recabamos lo que usted escribe en nuestros formularios y en el chat, además de estadísticas de visitas.',
    'Las cookies de Google Analytics solo se cargan si usted las acepta. Vercel Analytics no usa cookies.',
    'Las respuestas del chat las redacta un proveedor de IA (Anthropic). Por favor, no escriba en el chat datos bancarios, contraseñas ni números de CNIC.',
    'Nunca vendemos sus datos, y ninguna decisión sobre usted se toma únicamente mediante software.',
    'Puede solicitar en cualquier momento consultar, corregir o eliminar sus datos: <mail>{email}</mail>.',
  ],
  sections: [
    {
      id: 'who-we-are',
      title: 'Quiénes somos',
      blocks: [
        { type: 'p', text: 'Plot Ledge es un CRM para agentes de lotes y propiedades, operado desde Lahore, Pakistán. En este aviso, “nosotros” se refiere a Plot Ledge, y somos quienes decidimos cómo se utiliza la información aquí descrita.' },
        { type: 'p', text: 'Este aviso cubre este sitio web de promoción. El CRM al que usted inicia sesión es un servicio aparte: los registros que almacena allí le pertenecen, y nuestros <terms>términos de uso</terms> explican cómo los tratamos.' },
      ],
    },
    {
      id: 'what-we-collect',
      title: 'Qué datos recabamos',
      blocks: [
        { type: 'h3', text: 'Lo que usted nos proporciona' },
        {
          type: 'ul',
          items: [
            'El formulario de contacto o de demo: su nombre, su número de teléfono, el número de lotes que administra y, opcionalmente, su ciudad, su empresa y un mensaje.',
            'Los mismos datos, si decide enviarlos mediante el formulario de contacto del asistente de chat.',
            'Los mensajes que escriba al Asistente de Plot Ledge.',
            'Cualquier cosa que nos envíe por correo electrónico o por WhatsApp, incluido el número o el nombre de perfil que WhatsApp nos muestra.',
          ],
        },
        { type: 'h3', text: 'Lo que recabamos automáticamente' },
        {
          type: 'ul',
          items: [
            '<b>Estadísticas de visitas de Vercel Analytics.</b> Páginas vistas, región aproximada, tipo de dispositivo y sitio de procedencia. No usa cookies ni crea un perfil de usted.',
            '<b>Estadísticas de visitas de Google Analytics, solo si usted acepta.</b> Páginas vistas, ubicación aproximada, dispositivo, navegador y sitio de procedencia, vinculados a un identificador aleatorio guardado en una cookie.',
            '<b>Registros técnicos.</b> Nuestro proveedor de alojamiento registra su dirección IP, el tipo de navegador y la hora de cada solicitud para operar y proteger el sitio. También contamos las solicitudes por dirección IP, de forma breve y en memoria, para evitar el abuso de los formularios y del chat.',
            '<b>Calificaciones del chat.</b> Si usted califica una respuesta con un pulgar hacia arriba o hacia abajo, registramos solo la calificación y la hora, nunca el mensaje.',
          ],
        },
        { type: 'h3', text: 'Lo que permanece en su dispositivo' },
        {
          type: 'ul',
          items: [
            'Su elección sobre las cookies, la conversación del chat mientras la pestaña esté abierta y si cerró el aviso del chat. Consulte la <cookies>política de cookies</cookies> para ver los nombres exactos.',
            'La moneda local aproximada que se muestra junto a nuestros precios. La calculamos en su navegador a partir de la configuración de su idioma y no enviamos nada para hacerlo.',
          ],
        },
      ],
    },
    {
      id: 'what-we-do-not-collect',
      title: 'Qué datos no recabamos',
      blocks: [
        { type: 'p', text: 'Para dejar claros los límites de este sitio web:' },
        {
          type: 'ul',
          items: [
            'Ningún dato de tarjetas de pago ni de cuentas bancarias. Nuestros formularios y el chat no los solicitan, y usted no debe escribirlos.',
            'Ninguna categoría sensible de información, como salud, religión, opiniones políticas o datos biométricos. Nuestros formularios no los solicitan.',
            'Ningún rastreo publicitario ni de redes sociales, ni un perfil suyo creado para mostrarle anuncios.',
            'Ninguna cuenta ni contraseña para este sitio web de promoción. Iniciar sesión en el CRM es un servicio aparte.',
          ],
        },
      ],
    },
    {
      id: 'why-we-use-it',
      title: 'Para qué la usamos',
      blocks: [
        { type: 'p', text: 'Solo usamos su información por los motivos que se indican a continuación. Para los visitantes del EEE, el Reino Unido o Suiza, la columna de la derecha es la base jurídica conforme al Reglamento General de Protección de Datos (RGPD).' },
        {
          type: 'table',
          caption: 'Finalidades y bases jurídicas',
          head: ['Qué hacemos', 'Con qué datos', 'Base jurídica'],
          rows: [
            ['Responder a su consulta y organizar una demo', 'Datos del formulario, correo electrónico, WhatsApp', 'Nuestro interés legítimo en responderle; cuando usted agenda una demo, la aplicación de medidas precontractuales'],
            ['Responder sus preguntas en el chat', 'Mensajes del chat', 'Nuestro interés legítimo en brindarle la ayuda que solicitó'],
            ['Entender qué páginas son útiles', 'Datos de Google Analytics', 'Su consentimiento'],
            ['Contar visitas sin cookies', 'Datos de Vercel Analytics', 'Nuestro interés legítimo en operar un sitio que funcione bien'],
            ['Mantener el sitio seguro y evitar abusos', 'Dirección IP, conteo de solicitudes', 'Nuestro interés legítimo en proteger el sitio y a sus visitantes'],
          ],
        },
        { type: 'p', text: 'No vendemos su información.' },
      ],
    },
    {
      id: 'chat-assistant',
      title: 'El asistente de chat',
      blocks: [
        { type: 'p', text: 'El Asistente de Plot Ledge es un asistente de IA. Para redactar una respuesta, su mensaje y la conversación reciente se envían a nuestro proveedor de IA, Anthropic, que puede procesarlos fuera de Pakistán, incluso en Estados Unidos.' },
        {
          type: 'ul',
          items: [
            'Por favor, no escriba en el chat datos bancarios, números de tarjeta, contraseñas ni números de CNIC.',
            'La conversación se guarda en el almacenamiento de sesión de su navegador y se borra al cerrar la pestaña. No conservamos una copia.',
            'Solo conservamos lo que usted decida enviar mediante el formulario de contacto dentro del chat, y lo usamos únicamente para contactarlo sobre Plot Ledge.',
            'El asistente puede equivocarse. Confirme directamente con nosotros los precios, los límites de los planes y cualquier cosa importante.',
          ],
        },
      ],
    },
    {
      id: 'automated-decisions',
      title: 'Decisiones automatizadas',
      blocks: [
        { type: 'p', text: 'El asistente de chat ofrece respuestas y sugerencias. No toma ninguna decisión sobre usted que tenga efectos jurídicos o similarmente significativos, como aceptarlo o rechazarlo como cliente, fijarle un precio o decidir un reembolso. Esas decisiones las toman personas de Plot Ledge.' },
      ],
    },
    {
      id: 'who-we-share-with',
      title: 'Con quién la compartimos',
      blocks: [
        { type: 'p', text: 'Estas empresas tratan información por cuenta nuestra. Cada una recibe solo lo que necesita para la función indicada en la tabla.' },
        {
          type: 'table',
          caption: 'Proveedores de servicios',
          head: ['Proveedor', 'Qué hace para nosotros', 'Dónde puede tratar los datos'],
          rows: [
            ['Vercel', 'Aloja este sitio web y ofrece Vercel Analytics', 'Estados Unidos y otras regiones'],
            ['Google', 'Google Analytics, solo si usted acepta las cookies de analítica', 'Estados Unidos y otras regiones'],
            ['Anthropic', 'Redacta las respuestas del asistente de chat', 'Estados Unidos y otras regiones'],
            ['Resend, o un servicio equivalente de correo electrónico o webhook', 'Nos entrega los datos de sus formularios', 'Estados Unidos y otras regiones'],
            ['Un servicio de tipos de cambio', 'Nuestro servidor le solicita los tipos de cambio diarios. No recibe ninguna información de los visitantes', 'No aplica'],
          ],
        },
        { type: 'p', text: 'Si nos escribe por WhatsApp, a esa conversación se aplica la política de privacidad de WhatsApp. También podemos compartir información cuando la ley lo exija. No vendemos sus datos a nadie.' },
      ],
    },
    {
      id: 'international-transfers',
      title: 'Transferencias fuera de su país',
      blocks: [
        { type: 'p', text: 'Algunos de los proveedores anteriores tratan datos fuera de Pakistán, incluidos Estados Unidos y la Unión Europea. Para los visitantes del EEE, el Reino Unido o Suiza, nos basamos en las cláusulas contractuales tipo de esos proveedores o en una garantía equivalente reconocida por el RGPD.' },
      ],
    },
    {
      id: 'how-long',
      title: 'Cuánto tiempo la conservamos',
      blocks: [
        {
          type: 'table',
          caption: 'Cuánto tiempo se conserva cada tipo de información',
          head: ['Información', 'Cuánto tiempo la conservamos', 'Qué ocurre después'],
          rows: [
            ['Solicitudes de contacto', 'El tiempo que necesitemos para darle seguimiento', 'Las eliminamos cuando usted lo solicite o cuando ya no sean necesarias para ese fin'],
            ['Conversaciones del chat', 'No las conservamos', 'Desaparecen de su navegador al cerrar la pestaña'],
            ['Datos del formulario de contacto del chat', 'El tiempo que necesitemos para darle seguimiento', 'Los eliminamos cuando usted lo solicite o cuando ya no sean necesarios para ese fin'],
            ['Su elección sobre las cookies', '12 meses', 'Volvemos a preguntarle'],
            ['Analítica y registros del servidor', 'Los conservan Google y Vercel conforme a sus propios plazos', 'No los vinculamos con usted'],
          ],
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Sus derechos y opciones',
      blocks: [
        { type: 'p', text: 'Donde quiera que se encuentre, puede pedirnos que le informemos qué datos suyos tenemos, que los corrijamos o que los eliminemos. La tabla siguiente resume los derechos principales en palabras sencillas. Los aplicamos a todas las personas que nos escriben, y la ley del lugar donde usted vive puede otorgarle más.' },
        {
          type: 'table',
          caption: 'Sus derechos, qué significan y cómo ejercerlos',
          head: ['Derecho', 'Qué significa', 'Cómo ejercerlo'],
          rows: [
            ['Acceso', 'Puede preguntar si tenemos información suya y obtener una copia.', 'Escríbanos (consulte “Cómo presentar una solicitud”).'],
            ['Rectificación', 'Puede pedirnos que corrijamos la información incorrecta o incompleta.', 'Escríbanos e indíquenos qué debemos cambiar.'],
            ['Supresión', 'Puede pedirnos que eliminemos su información, salvo que la ley nos obligue a conservarla.', 'Escríbanos e indíquenos qué debemos eliminar.'],
            ['Oposición y limitación', 'Puede pedirnos que dejemos de usar su información o que limitemos su uso.', 'Escríbanos e indíquenos a qué se opone.'],
            ['Portabilidad', 'Puede solicitar la información que nos proporcionó en un formato común y legible por máquina.', 'Escríbanos.'],
            ['Retiro del consentimiento', 'Cuando nos basamos en su consentimiento (cookies de Google Analytics), puede retirarlo en cualquier momento. Lo ocurrido antes no se ve afectado.', 'Use la <cookiesettings>configuración de cookies</cookiesettings> de este sitio, o escríbanos.'],
            ['Queja', 'Puede presentar una queja ante una autoridad de protección de datos.', 'Consulte “Contacto y quejas”.'],
          ],
        },
        { type: 'h3', text: 'Si usted se encuentra en Pakistán' },
        { type: 'p', text: 'Tratamos sus datos conforme a los principios de protección de datos de la Ley de Prevención de Delitos Electrónicos de 2016 (PECA) y del proyecto de marco de protección de datos personales de Pakistán. Esto significa usarlos solo para la finalidad con la que usted nos los dio y mantenerlos razonablemente seguros.' },
        { type: 'h3', text: 'Si usted se encuentra en el EEE, el Reino Unido o Suiza' },
        { type: 'p', text: 'Todos los derechos de la tabla anterior le corresponden conforme al RGPD (o al RGPD del Reino Unido y a la ley suiza de protección de datos). Responderemos en el plazo de un mes. También puede presentar una queja ante la autoridad de protección de datos de su localidad, por ejemplo, la Information Commissioner’s Office en el Reino Unido.' },
        { type: 'h3', text: 'Si usted se encuentra en México' },
        { type: 'p', text: 'Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, usted tiene los derechos ARCO: acceso, rectificación, cancelación (supresión) y oposición. También puede revocar su consentimiento y pedirnos que limitemos el uso o la transferencia de sus datos. Escríbanos para ejercer cualquiera de ellos.' },
        { type: 'h3', text: 'Si usted se encuentra en cualquier otro lugar' },
        { type: 'p', text: 'Respetaremos los derechos que le otorgue la ley de protección de datos de su país, dentro de los límites de esa ley. Escríbanos e indíquenos dónde vive.' },
        { type: 'h3', text: 'Cookies' },
        { type: 'p', text: 'Acepte o rechace las cookies de analítica en el aviso, y cambie de opinión en cualquier momento con la <cookiesettings>configuración de cookies</cookiesettings>.' },
      ],
    },
    {
      id: 'how-to-make-a-request',
      title: 'Cómo presentar una solicitud',
      blocks: [
        {
          type: 'ul',
          items: [
            'Escriba a <mail>{email}</mail>. Indique qué derecho desea ejercer y, cuando sirva, a qué datos se refiere.',
            'Podemos pedirle datos que nos permitan localizar su información y confirmar que es usted, como el nombre, el teléfono o el correo electrónico que nos dio. No le pediremos más de lo necesario.',
            'Confirmaremos que recibimos su solicitud y le responderemos con el resultado. Procuramos responder en el plazo de un mes, y antes cuando sea posible.',
            'No tiene costo. Si una solicitud es claramente repetida o infundada, o la ley nos permite negarnos, le explicaremos por qué.',
          ],
        },
      ],
    },
    {
      id: 'security',
      title: 'Cómo la protegemos',
      blocks: [
        { type: 'p', text: 'Este sitio se sirve mediante HTTPS, y enviamos los datos de los formularios únicamente a la bandeja de correo o al sistema que usamos para darle seguimiento. Ningún sitio web puede prometer una seguridad perfecta, así que por favor no escriba datos financieros sensibles en los formularios ni en el chat.' },
      ],
    },
    {
      id: 'children',
      title: 'Menores de edad',
      blocks: [
        { type: 'p', text: 'Plot Ledge es para negocios inmobiliarios y no está dirigido a menores de 18 años. Si cree que un menor nos ha enviado sus datos, escriba a <mail>{email}</mail> y los eliminaremos.' },
      ],
    },
    {
      id: 'contact-and-complaints',
      title: 'Contacto y quejas',
      blocks: [
        { type: 'p', text: 'Para cualquier duda sobre este aviso o sobre su información, escriba a <mail>{email}</mail> y una persona le responderá. Nos gustaría tener primero la oportunidad de resolver las cosas.' },
        { type: 'p', text: 'Usted siempre tiene derecho a presentar una queja ante una autoridad de protección de datos, en el país donde vive o trabaja o donde considere que ocurrió un problema. No tiene que contactarnos primero.' },
      ],
    },
    {
      id: 'changes',
      title: 'Cambios a este aviso',
      blocks: [
        { type: 'p', text: 'Cuando modifiquemos esta página, actualizaremos la fecha que aparece al inicio. Si el cambio afecta la forma en que usamos información que usted ya nos dio, lo indicaremos aquí y, cuando la ley lo exija, le pediremos de nuevo su consentimiento.' },
      ],
    },
  ],
}

const cookies: Policy = {
  title: 'Política de cookies',
  description: 'Exactamente qué cookies y qué almacenamiento del navegador usa este sitio web, cuáles requieren su consentimiento y cómo cambiar su elección.',
  intro: 'Qué cookies usa este sitio web, cuáles requieren su autorización y cómo cambiar de opinión.',
  updated: '2026-11-09',
  summary: [
    'Solo una cosa aquí requiere su consentimiento: las cookies de Google Analytics. Se cargan únicamente si usted las acepta.',
    'Todo lo demás es necesario para que el sitio funcione, como recordar su elección y mantener abierto su chat.',
    'No usamos rastreo publicitario ni de redes sociales.',
    'Aceptar y Rechazar son opciones equivalentes, recordamos su elección durante 12 meses y puede cambiarla en cualquier momento con el enlace de configuración de cookies del pie de página.',
  ],
  sections: [
    {
      id: 'what-are-cookies',
      title: 'Qué son las cookies y el almacenamiento del navegador',
      blocks: [
        { type: 'p', text: 'Las cookies son pequeños archivos que un sitio web guarda en su navegador. El almacenamiento local y el almacenamiento de sesión cumplen una función parecida: el almacenamiento local permanece hasta que se borra, y el de sesión desaparece al cerrar la pestaña. Esta página enumera todo lo de este tipo que usa nuestro sitio web, para que usted decida qué permitir.' },
      ],
    },
    {
      id: 'what-we-use',
      title: 'Qué usamos',
      blocks: [
        {
          type: 'table',
          caption: 'Cookies y almacenamiento del navegador que usa este sitio web',
          head: ['Nombre', 'Tipo', 'Qué hace', 'Duración', 'Requiere su consentimiento'],
          rows: [
            ['_ga, _ga_*', 'Cookie, establecida por Google', 'Cuenta las visitas y las páginas vistas para que podamos saber qué páginas son útiles.', 'Hasta 2 años', 'Sí. Solo se establece después de que usted acepta la analítica.'],
            ['plotledge-consent', 'Almacenamiento local', 'Recuerda si usted aceptó o rechazó la analítica.', '12 meses', 'No. Es necesaria para respetar su elección.'],
            ['plotledge-chat-v1', 'Almacenamiento de sesión', 'Conserva su chat con el Asistente de Plot Ledge mientras la pestaña esté abierta.', 'Hasta que cierre la pestaña', 'No. El chat la necesita para funcionar.'],
            ['plotledge-teaser-dismissed', 'Almacenamiento de sesión', 'Recuerda que usted cerró el aviso del chat, para que no vuelva a aparecer.', 'Hasta que cierre la pestaña', 'No.'],
            ['Vercel Analytics', 'Ninguno', 'Cuenta las visitas de forma agregada, sin cookies ni un perfil suyo.', 'No se guarda nada en su navegador', 'No se usan cookies.'],
          ],
        },
        { type: 'p', text: 'No usamos cookies de rastreo publicitario ni de redes sociales.' },
      ],
    },
    {
      id: 'why-we-ask',
      title: 'Por qué se lo preguntamos',
      blocks: [
        { type: 'p', text: 'Google Analytics establece una cookie que no es estrictamente necesaria para que el sitio funcione, y las leyes de privacidad de muchos países establecen que debemos preguntar primero. Por eso preguntamos, y no cargamos nada de Google hasta que usted responda. Los elementos marcados con “No” en la tabla son necesarios para operar el sitio o para respetar su elección, por lo que no requieren consentimiento.' },
      ],
    },
    {
      id: 'your-choice',
      title: 'Su elección',
      blocks: [
        { type: 'p', text: 'La primera vez que nos visita, un aviso le pregunta si podemos usar cookies de Google Analytics. No se carga nada de Google hasta que usted elija.' },
        {
          type: 'ul',
          items: [
            '<b>Aceptar analítica:</b> Google Analytics se carga y establece sus cookies.',
            '<b>Rechazar analítica:</b> Google Analytics nunca se carga, y el sitio funciona exactamente igual.',
          ],
        },
        { type: 'p', text: 'Aceptar y Rechazar son opciones equivalentes: ambas requieren un clic, se ven igual y rechazar no le cuesta nada. No usamos el aviso para presionarle en ningún sentido.' },
        { type: 'p', text: 'Recordamos su elección durante 12 meses y después volvemos a preguntar. Puede cambiarla cuando quiera. Si rechaza después de haber aceptado, eliminamos las cookies de Google que este navegador conserva de nuestro sitio.' },
        { type: 'cookieSettingsButton', label: 'Cambiar mi elección sobre las cookies' },
      ],
    },
    {
      id: 'other-ways',
      title: 'Otras formas de controlar las cookies',
      blocks: [
        {
          type: 'ul',
          items: [
            'Bloquee o elimine las cookies en la configuración de su navegador. Este sitio funciona sin ellas.',
            'Instale el <gaoptout>complemento de inhabilitación de Google Analytics</gaoptout> para detener Google Analytics en todos los sitios que visite.',
            'Use el modo privado o de incógnito de su navegador, que borra las cookies al cerrarlo.',
          ],
        },
      ],
    },
    {
      id: 'third-parties',
      title: 'Google y sus datos',
      blocks: [
        { type: 'p', text: 'Si usted acepta, Google recibe los datos de visita descritos anteriormente y los trata conforme a la <googleprivacy>política de privacidad de Google</googleprivacy>. Nuestro <privacy>aviso de privacidad</privacy> explica cómo usamos los resultados y dónde puede tratarlos Google.' },
      ],
    },
    {
      id: 'changes',
      title: 'Cambios a esta política',
      blocks: [
        { type: 'p', text: 'Si agregamos una cookie o un elemento de almacenamiento nuevo que requiera consentimiento, lo enumeraremos primero aquí y le pediremos de nuevo su elección. Dudas: <mail>{email}</mail>.' },
      ],
    },
  ],
}

const terms: Policy = {
  title: 'Términos de uso',
  description: 'Los términos para usar el sitio web y el servicio de Plot Ledge: su cuenta, los planes, el uso aceptable, sus datos y nuestras responsabilidades.',
  intro: 'Las reglas para usar Plot Ledge, escritas para que se lean.',
  updated: '2026-11-09',
  summary: [
    'Plot Ledge es un software para llevar el control de lotes, operaciones, mensualidades y pagos.',
    'Los registros que usted almacena son suyos, y usted es responsable de mantenerlos exactos.',
    'Mantenga privado su acceso y dé a los miembros del equipo solo el acceso que necesiten.',
    'Los planes se facturan en rupias. Las pruebas, la cancelación y los reembolsos se explican en la política de reembolsos.',
    'La ley aplicable y el lugar donde se resuelvan las controversias se confirmarán en la versión final.',
  ],
  sections: [
    {
      id: 'agreement',
      title: 'Aceptación de estos términos',
      blocks: [
        { type: 'p', text: 'Al usar el sitio web o el servicio de Plot Ledge, usted acepta estos términos. Si no está de acuerdo, por favor no los utilice. Si usa Plot Ledge para un negocio, usted confirma que puede aceptar estos términos en su nombre.' },
      ],
    },
    {
      id: 'definitions',
      title: 'Términos que usamos',
      blocks: [
        {
          type: 'ul',
          items: [
            '<b>Sitio web</b> significa este sitio web de promoción, que describe Plot Ledge y le permite contactarnos.',
            '<b>Servicio</b> significa el software de Plot Ledge al que usted inicia sesión para llevar el control de lotes, operaciones, mensualidades, pagos y registros relacionados.',
            '<b>Usted</b> significa la persona, o el negocio en cuyo nombre actúa esa persona, que usa el sitio web o el servicio.',
            '<b>Nosotros</b> significa Plot Ledge.',
          ],
        },
      ],
    },
    {
      id: 'website',
      title: 'El sitio web',
      blocks: [
        { type: 'p', text: 'Este sitio describe Plot Ledge. Las descripciones, los ejemplos y las capturas de pantalla que contiene muestran para qué sirve el producto y no constituyen una promesa de ningún resultado comercial.' },
      ],
    },
    {
      id: 'service',
      title: 'El servicio',
      blocks: [
        { type: 'p', text: 'Plot Ledge es un software para llevar el control de lotes, operaciones, mensualidades, pagos y registros relacionados. Trabajamos para mantener el servicio disponible y exacto, y podemos mejorar o modificar las funciones con el tiempo.' },
      ],
    },
    {
      id: 'changes-to-service',
      title: 'Cambios al servicio',
      blocks: [
        { type: 'p', text: 'Podemos agregar, modificar o eliminar funciones, y podemos actualizar el servicio para corregir problemas o mejorarlo. Si hacemos un cambio que elimine algo de lo que usted depende de una manera relevante, avisaremos a los titulares de cuenta antes de que se aplique, siempre que razonablemente podamos.' },
      ],
    },
    {
      id: 'your-account',
      title: 'Su cuenta',
      blocks: [
        {
          type: 'ul',
          items: [
            'Usted es responsable de la exactitud de los datos que ingresa.',
            'Mantenga privados sus datos de acceso y avísenos de inmediato si cree que otra persona los ha usado.',
            'Dé a los miembros del equipo solo el rol que necesiten. Usted es responsable de lo que hagan en su cuenta las personas que agregue.',
          ],
        },
      ],
    },
    {
      id: 'plans-and-payment',
      title: 'Planes, pruebas y pago',
      blocks: [
        { type: 'p', text: 'Los planes tienen precio en rupias pakistaníes y se muestran en la sección de precios de este sitio, y pueden facturarse por mes o por año. Las cuentas nuevas comienzan con una prueba gratuita. Los precios y los límites de los planes pueden cambiar, y se lo avisaremos antes de que un cambio se aplique a su cuenta.' },
        { type: 'p', text: 'La forma en que funcionan las pruebas, la cancelación y los reembolsos se establece en la <refund>política de reembolsos y cancelación</refund>.' },
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Uso aceptable',
      blocks: [
        {
          type: 'ul',
          items: [
            'No use el servicio para nada ilícito ni para engañar a compradores.',
            'No intente vulnerar cuentas, ni interrumpir, sobrecargar o copiar el servicio.',
            'No suba material que no tenga derecho a usar o que sepa que es falso.',
          ],
        },
      ],
    },
    {
      id: 'your-data',
      title: 'Sus datos',
      blocks: [
        { type: 'p', text: 'Los registros que almacena en Plot Ledge le pertenecen. Los usamos únicamente para operar el servicio para usted. Conserve sus propias copias de los registros importantes exportando reportes con regularidad. El <privacy>aviso de privacidad</privacy> explica cómo tratamos la información recabada a través de este sitio web.' },
      ],
    },
    {
      id: 'our-rights',
      title: 'Nuestro software y contenido',
      blocks: [
        { type: 'p', text: 'Nos reservamos todos los derechos sobre el software, el diseño, los textos y los logotipos de Plot Ledge. Estos términos le otorgan el derecho de usar el servicio mientras su cuenta esté activa, y ningún otro derecho sobre ellos.' },
      ],
    },
    {
      id: 'third-parties',
      title: 'Servicios y enlaces de terceros',
      blocks: [
        { type: 'p', text: 'El sitio web y el servicio pueden funcionar con servicios operados por otras empresas, o enlazar a ellos, como alojamiento, analítica, correo electrónico, WhatsApp y el proveedor de IA detrás del asistente de chat. No controlamos esos servicios y no somos responsables de su contenido ni de sus prácticas. Cuando usted los utiliza, se aplican sus propios términos y avisos de privacidad.' },
      ],
    },
    {
      id: 'liability',
      title: 'Nuestra responsabilidad',
      blocks: [
        { type: 'p', text: 'Ofrecemos el servicio tal como está. En la medida en que la ley lo permita, no somos responsables de pérdidas indirectas o consecuentes, como la pérdida de utilidades o un pago no recibido que dependiera de información contenida en el servicio.' },
      ],
    },
    {
      id: 'ending',
      title: 'Terminación de su uso',
      blocks: [
        { type: 'p', text: 'Usted puede dejar de usar Plot Ledge en cualquier momento. Podemos suspender o cerrar una cuenta que incumpla estos términos, y le diremos por qué cuando podamos.' },
      ],
    },
    {
      id: 'governing-law',
      title: 'Ley aplicable y controversias',
      blocks: [
        { type: 'p', text: '[Por confirmar] La ley que rige estos términos, y los tribunales o el procedimiento para resolver controversias, se confirmarán en la versión final de estos términos. Mientras tanto, por favor escríbanos primero a <mail>{email}</mail> para que intentemos resolver juntos cualquier problema.' },
      ],
    },
    {
      id: 'severability',
      title: 'Si una parte de estos términos no resulta aplicable',
      blocks: [
        { type: 'p', text: 'Si un tribunal o una autoridad determina que una parte de estos términos no puede hacerse valer, el resto de los términos sigue en vigor. Si no hacemos valer un derecho de inmediato, no renunciamos a él.' },
      ],
    },
    {
      id: 'changes',
      title: 'Cambios a estos términos',
      blocks: [
        { type: 'p', text: 'Cuando modifiquemos estos términos, actualizaremos la fecha que aparece al inicio y avisaremos a los titulares de cuenta de los cambios relevantes antes de que se apliquen. Dudas sobre estos términos: <mail>{email}</mail>.' },
      ],
    },
  ],
}

const refund: Policy = {
  title: 'Política de reembolsos y cancelación',
  description: 'Cómo funcionan la prueba gratuita, la facturación, la cancelación y los reembolsos de los planes de Plot Ledge, y cómo solicitar uno.',
  intro: 'Cómo funcionan las pruebas, la facturación y la cancelación, y cuándo reembolsamos.',
  updated: '2026-11-09',
  summary: [
    'Usted tiene una prueba gratuita de 15 días sin necesidad de pago, y puede cancelar durante ella sin que se le cobre.',
    'Los planes de pago se facturan en rupias, por adelantado, por mes o por año.',
    'Puede cancelar en cualquier momento. Cancelar detiene la facturación futura, pero no reembolsa el periodo ya pagado.',
    'Revisamos los reembolsos por cargos hechos por error o por fallas de nuestra parte.',
  ],
  sections: [
    {
      id: 'at-a-glance',
      title: 'Qué ocurre en cada caso',
      blocks: [
        {
          type: 'table',
          caption: 'Qué ocurre en cada situación',
          head: ['Situación', 'Qué ocurre'],
          rows: [
            ['Cancela durante la prueba gratuita', 'No se le cobra.'],
            ['Cancela un plan de pago', 'La facturación futura se detiene. El periodo que ya pagó no se reembolsa automáticamente.'],
            ['Se le cobró por error o dos veces', 'Revisamos su solicitud y reembolsamos cuando corresponda.'],
            ['Una falla de nuestra parte le impidió usar el servicio', 'Revisamos su solicitud y reembolsamos cuando corresponda.'],
            ['Falla un pago', 'Consulte “Pagos fallidos”.'],
            ['Tiene un contrato Enterprise', 'Se aplican los términos de ese contrato cuando difieran de esta página.'],
          ],
        },
      ],
    },
    {
      id: 'free-trial',
      title: 'Prueba gratuita',
      blocks: [
        { type: 'p', text: 'Las cuentas nuevas comienzan con una prueba gratuita de 15 días. No se necesita pago para iniciar una prueba, y puede cancelar en cualquier momento durante ella sin que se le cobre.' },
      ],
    },
    {
      id: 'billing',
      title: 'Facturación',
      blocks: [
        { type: 'p', text: 'Los planes de pago se facturan en rupias pakistaníes, por adelantado, por mes o por año según la opción que elija, a partir de que termine su prueba o de que usted elija un plan. Los precios y los límites de los planes se muestran en la sección de precios de este sitio y pueden cambiar. Le avisaremos antes de que un cambio se aplique a su cuenta.' },
      ],
    },
    {
      id: 'taxes',
      title: 'Impuestos',
      blocks: [
        { type: 'p', text: '[Por confirmar] Si los precios mostrados incluyen o excluyen impuestos, y cómo se muestra cualquier impuesto en su factura, se confirmará en la versión final de esta política.' },
      ],
    },
    {
      id: 'failed-payments',
      title: 'Pagos fallidos',
      blocks: [
        { type: 'p', text: 'Si un pago falla o es rechazado, es posible que su plan no se renueve. Escríbanos a <mail>{email}</mail> y le ayudaremos a resolverlo. [Por confirmar] Los pasos exactos, como cuánto tiempo esperamos antes de limitar el acceso, se establecerán en la versión final de esta política.' },
      ],
    },
    {
      id: 'cancellation',
      title: 'Cancelación',
      blocks: [
        { type: 'p', text: 'Puede cancelar en cualquier momento. Cancelar detiene la facturación futura. No reembolsa automáticamente el periodo que ya se le cobró, ya sea de un mes o de un año.' },
      ],
    },
    {
      id: 'refunds',
      title: 'Reembolsos',
      blocks: [
        { type: 'p', text: 'No ofrecemos reembolsos automáticos por periodos de facturación usados parcialmente. Revisaremos una solicitud y reembolsaremos cuando corresponda si:' },
        {
          type: 'ul',
          items: [
            'se le cobró por error, o se le cobró dos veces, o',
            'una falla técnica de nuestra parte le impidió usar el servicio.',
          ],
        },
      ],
    },
    {
      id: 'enterprise',
      title: 'Planes Enterprise',
      blocks: [
        { type: 'p', text: 'Los contratos Enterprise a la medida pueden tener sus propios términos de facturación y cancelación. Esos términos se establecen en su contrato con nosotros y se aplican en lugar de esta página cuando difieran.' },
      ],
    },
    {
      id: 'how-to-ask',
      title: 'Cómo solicitar una cancelación o un reembolso',
      blocks: [
        { type: 'p', text: 'Escriba a <mail>{email}</mail> e incluya:' },
        {
          type: 'ul',
          items: [
            'el nombre o el correo electrónico de su cuenta,',
            'su plan, y la fecha y el importe del cargo,',
            'qué le gustaría que hagamos, y por qué.',
          ],
        },
        { type: 'p', text: 'Una persona leerá su solicitud y le responderá.' },
      ],
    },
  ],
}

const legal: Messages['legal'] = {
  ui: {
    inShort: 'En resumen',
    onThisPage: 'En esta página',
    lastUpdated: 'Última actualización: {date}',
    contentsLabel: 'Contenido de {title}',
    questionsTitle: '¿Dudas sobre esta página?',
    contactSentence: 'Escriba a <mail>{email}</mail> y una persona le responderá.',
    contactAria: 'Contacto y políticas relacionadas',
    /** Breadcrumb link back to the page that lists every legal document. */
    allDocuments: 'Todos los documentos legales',
    policyNames: {
      privacy: 'Aviso de privacidad',
      cookies: 'Política de cookies',
      terms: 'Términos de uso',
      refund: 'Reembolsos y cancelación',
    },
  },
  privacy,
  cookies,
  terms,
  refund,
}

export default legal
