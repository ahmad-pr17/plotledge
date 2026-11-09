import type { Messages } from '@/i18n/messages'

const policies: Messages['policies'] = {
  hub: {
    title: 'Legal y confianza',
    description: 'Todos los documentos legales y de confianza de Plot Ledge en un solo lugar: privacidad, cookies, términos, uso aceptable, seguridad, tratamiento de datos y más.',
    intro: 'Aquí encontrará todos los documentos legales y de confianza de Plot Ledge, agrupados según lo que usted quiera saber. Si algo no queda claro o falta, escriba a <mail>{email}</mail> y una persona le responderá.',
    groups: [
      { title: 'Sus datos y su privacidad', text: 'Qué datos recabamos, qué cookies usamos y cómo tratamos los registros que usted almacena en Plot Ledge: el aviso de privacidad, la política de cookies y el tratamiento de datos.' },
      { title: 'Uso de Plot Ledge', text: 'Las reglas para usar el servicio y lo que no está permitido, además de cómo funcionan las pruebas, la facturación y los reembolsos: los términos de uso, la política de uso aceptable y la política de reembolsos.' },
      { title: 'Seguridad y confianza', text: 'Cómo protegemos sus registros, cómo informarnos de un problema de seguridad y qué tan accesible es este sitio web: seguridad, divulgación responsable y accesibilidad.' },
    ],
  },
  names: { acceptableUse: 'Uso aceptable', security: 'Seguridad', dataProcessing: 'Tratamiento de datos', accessibility: 'Accesibilidad', disclosure: 'Divulgación responsable' },

  acceptableUse: {
    title: 'Política de uso aceptable',
    description: 'Qué puede y qué no puede hacer con Plot Ledge, su responsabilidad por su equipo, qué podemos hacer si se incumplen las reglas y cómo reportar abusos.',
    intro: 'Plot Ledge guarda registros inmobiliarios en los que confían personas reales. Esta política establece lo que se espera de todos los que lo usan.',
    updated: '2026-11-09',
    summary: [
      'Use Plot Ledge para negocios inmobiliarios honestos. No lo use para engañar a compradores ni para crear registros falsos.',
      'No haga mal uso de los datos de otras personas, no ataque el servicio y no comparta accesos.',
      'Usted es responsable de lo que hagan los miembros de su equipo en su cuenta.',
      'Si se incumplen las reglas, podemos enviarle una advertencia, limitar la cuenta o suspenderla, y usted puede pedirnos que revisemos la decisión.',
      'Reporte abusos a <mail>{email}</mail>.',
    ],
    sections: [
      {
        id: 'who-this-applies-to',
        title: 'A quién se aplica esta política',
        blocks: [
          { type: 'p', text: 'Esta política se aplica a todas las personas que usan el servicio de Plot Ledge o este sitio web: los titulares de cuenta, los miembros del equipo que agregan y los visitantes. Forma parte de nuestros <terms>términos de uso</terms>. Si ambos documentos llegaran a diferir, prevalecen los términos de uso.' },
          { type: 'p', text: 'En esta política, “nosotros” se refiere a Plot Ledge, “usted” se refiere a la persona o el negocio que usa Plot Ledge y “contenido” se refiere a cualquier registro, archivo, texto o dato que usted ingrese en el servicio.' },
        ],
      },
      {
        id: 'what-you-may-do',
        title: 'Lo que puede hacer',
        blocks: [
          { type: 'p', text: 'Plot Ledge está diseñado para agentes de lotes y propiedades y para operadores de fraccionamientos. Puede usarlo para:' },
          {
            type: 'ul',
            items: [
              'registrar lotes, compradores, operaciones, mensualidades, pagos y los documentos relacionados;',
              'dar a los miembros de su equipo acceso a las partes del servicio que necesitan para su trabajo;',
              'exportar sus propios registros y descargar sus propios respaldos;',
              'importar registros que usted tenga derecho a conservar.',
            ],
          },
        ],
      },
      {
        id: 'unlawful-or-deceptive-use',
        title: 'Uso ilícito o engañoso',
        blocks: [
          { type: 'p', text: 'No use Plot Ledge para infringir la ley ni para engañar a nadie. En particular, no debe:' },
          {
            type: 'ul',
            items: [
              'crear ni emitir recibos, registros de pago, contratos u otros documentos falsificados, alterados o con fecha anterior a la real;',
              'engañar a un comprador sobre un lote, por ejemplo, sobre su propiedad, su estatus de autorización, su superficie, su precio, su ubicación o lo que se ha pagado;',
              'registrar anuncios falsos, operaciones falsas o lotes que usted no tenga derecho a vender o representar;',
              'usar el servicio para lavar dinero, cometer fraude o ayudar a otra persona a hacerlo.',
            ],
          },
          { type: 'p', text: 'Los errores de buena fe son distintos. Corregir una cifra equivocada es normal. Registrar algo que usted sabe que es falso, no.' },
        ],
      },
      {
        id: 'other-peoples-data',
        title: 'Los datos de otras personas',
        blocks: [
          { type: 'p', text: 'Los registros que usted almacena suelen incluir datos personales de compradores, vendedores y personal. Usted debe:' },
          {
            type: 'ul',
            items: [
              'tener un motivo legítimo para conservar esa información y usarla solo para su negocio inmobiliario;',
              'no subir datos personales que haya obtenido mediante engaño o que no tenga derecho a conservar;',
              'no intentar ver, copiar ni modificar los registros de otro cliente, ni los datos de otro miembro del equipo a los que no se le haya dado acceso;',
              'no usar los datos de compradores o de personal para acosarlos ni para enviarles publicidad ajena a la relación sin una base legal.',
            ],
          },
        ],
      },
      {
        id: 'service-and-security',
        title: 'Atacar, sobrecargar o copiar el servicio',
        blocks: [
          { type: 'p', text: 'No debe:' },
          {
            type: 'ul',
            items: [
              'atacar el servicio, sobrecargarlo ni enviar tráfico diseñado para ralentizarlo o dejarlo fuera de línea;',
              'sondear, escanear o probar el servicio en busca de vulnerabilidades, salvo en los términos que permite nuestra <disclosure>política de divulgación responsable</disclosure>;',
              'intentar eludir los límites de frecuencia, los permisos, los límites del plan u otras protecciones;',
              'extraer, copiar o recopilar el servicio o este sitio web con herramientas automatizadas, ni aplicar ingeniería inversa al software;',
              'revender, sublicenciar u ofrecer el servicio a terceros como propio, salvo que lo hayamos acordado por escrito.',
            ],
          },
          { type: 'p', text: 'Si encuentra un problema de seguridad, avísenos mediante la política de divulgación responsable en lugar de seguir probándolo.' },
        ],
      },
      {
        id: 'spam-and-malware',
        title: 'Spam y software malicioso',
        blocks: [
          {
            type: 'ul',
            items: [
              'No use el servicio ni este sitio web para enviar spam ni mensajes masivos no solicitados.',
              'No suba ni envíe virus, código malicioso ni archivos destinados a dañar un dispositivo o un sistema.',
              'No suba material que no tenga derecho a usar, como documentos o imágenes de otra empresa.',
            ],
          },
        ],
      },
      {
        id: 'logins-and-plan-limits',
        title: 'Accesos y límites del plan',
        blocks: [
          {
            type: 'ul',
            items: [
              'Mantenga privado su acceso. No comparta un mismo acceso entre varias personas. Agregue a cada persona como miembro del equipo.',
              'No use el acceso de otra persona ni permita que alguien más use el suyo.',
              'No eluda ni rodee los límites de su plan, por ejemplo, creando cuentas adicionales para no pasar a un plan superior.',
            ],
          },
          { type: 'p', text: 'Los planes y sus límites se describen en la sección de precios de este sitio web.' },
        ],
      },
      {
        id: 'harassment-and-abuse',
        title: 'Acoso y abuso',
        blocks: [
          { type: 'p', text: 'No use Plot Ledge, ni los datos de contacto que encuentre en él, para acosar, amenazar, difamar o discriminar a nadie. No agreda a nuestro personal ni a quienes trabajan con nosotros.' },
        ],
      },
      {
        id: 'your-team',
        title: 'Su responsabilidad por su equipo',
        blocks: [
          { type: 'p', text: 'Usted es responsable de lo que hagan con su cuenta las personas que agregue. En la práctica, esto significa:' },
          {
            type: 'ul',
            items: [
              'dar a cada miembro del equipo solo el rol y los permisos que necesite;',
              'asegurarse de que conozcan y cumplan esta política;',
              'dar de baja a las personas sin demora cuando se vayan o cambien de puesto.',
            ],
          },
          { type: 'p', text: 'Nuestra <security>página de seguridad</security> explica más sobre los roles y sobre lo que pueden hacer los clientes para mantener segura una cuenta.' },
        ],
      },
      {
        id: 'what-we-may-do',
        title: 'Qué podemos hacer si se incumplen las reglas',
        blocks: [
          { type: 'p', text: 'Si consideramos que se ha incumplido esta política, podemos tomar la medida que corresponda al problema. Según su gravedad, podemos:' },
          {
            type: 'ul',
            items: [
              'enviarle una advertencia y pedirle que corrija el problema;',
              'limitar algunas funciones o el acceso;',
              'suspender o cerrar una cuenta;',
              'retirar o bloquear contenido que sea ilícito o que incumpla esta política;',
              'compartir información con las autoridades cuando la ley lo exija o se presente una solicitud legal.',
            ],
          },
          { type: 'p', text: 'Cuando el riesgo sea urgente, por ejemplo, un ataque al servicio o una amenaza para otros clientes, podemos actuar primero y explicar después.' },
        ],
      },
      {
        id: 'notice-and-appeal',
        title: 'Aviso e impugnación',
        blocks: [
          { type: 'p', text: 'Salvo que la ley o un riesgo urgente nos lo impidan, informaremos al titular de la cuenta lo que encontramos y lo que haremos, y le daremos oportunidad de responder antes de tomar una medida grave. Si considera que nos equivocamos, escriba a <mail>{email}</mail> con el nombre de su cuenta y sus razones. Una persona que no haya participado en la primera decisión la revisará de nuevo, cuando sea posible. Procuramos responder en un plazo de [Por confirmar].' },
        ],
      },
      {
        id: 'reporting-abuse',
        title: 'Cómo reportar abusos',
        blocks: [
          { type: 'p', text: 'Si considera que alguien incumple esta política, por ejemplo, un recibo falsificado o un anuncio falso que usa Plot Ledge, escriba a <mail>{email}</mail>. Díganos qué vio, dónde y cuándo, e incluya todo lo que nos ayude a localizarlo. Para problemas de seguridad, use en su lugar la <disclosure>política de divulgación responsable</disclosure>.' },
        ],
      },
      {
        id: 'changes',
        title: 'Cambios a esta política',
        blocks: [
          { type: 'p', text: 'Cuando modifiquemos esta política, actualizaremos la fecha que aparece al inicio y avisaremos a los titulares de cuenta de los cambios relevantes antes de que se apliquen. Los demás documentos aparecen en la página de <legalhub>legal y confianza</legalhub>.' },
        ],
      },
    ],
  },

  security: {
    title: 'Seguridad',
    description: 'Cómo protege Plot Ledge sus registros: alojamiento, separación entre clientes, control de acceso, inicio de sesión, bitácora de auditoría, respaldos y lo que usted puede hacer.',
    intro: 'Esta página explica en lenguaje sencillo cómo protegemos los registros que usted guarda en Plot Ledge y qué le pedimos que haga de su parte.',
    updated: '2026-11-09',
    summary: [
      'Los registros de cada cliente están separados a nivel de base de datos, por lo que un cliente no puede ver los de otro.',
      'Los roles y los permisos controlan lo que cada miembro del equipo puede ver y hacer, y una bitácora de auditoría registra las acciones importantes.',
      'Las contraseñas se almacenan cifradas con hash, los intentos de inicio de sesión tienen límite de frecuencia y todo se sirve mediante HTTPS.',
      'Usted puede exportar sus datos y descargar un respaldo completo en cualquier momento.',
      'Esta página no declara ninguna certificación de terceros. Para reportar un problema de seguridad, consulte nuestra <disclosure>política de divulgación responsable</disclosure>.',
    ],
    sections: [
      {
        id: 'our-approach',
        title: 'Nuestro enfoque',
        blocks: [
          { type: 'p', text: 'Plot Ledge guarda registros importantes para su negocio y para sus compradores: lotes, operaciones, mensualidades, pagos y los datos personales relacionados. Procuramos protegerlos con varias medidas sencillas y en capas, en lugar de una gran promesa. Ningún sistema es perfectamente seguro, y no afirmamos que el nuestro lo sea.' },
          { type: 'p', text: 'En esta página, “nosotros” se refiere a Plot Ledge y “cliente” se refiere al negocio que tiene una cuenta con nosotros.' },
        ],
      },
      {
        id: 'hosting',
        title: 'Alojamiento e infraestructura',
        blocks: [
          { type: 'p', text: 'Plot Ledge no opera sus propios centros de datos. Usamos proveedores consolidados:' },
          {
            type: 'ul',
            items: [
              'los datos del CRM se almacenan en una base de datos PostgreSQL administrada, que ofrece Neon;',
              'la aplicación y este sitio web se ejecutan en Vercel;',
              'todo se sirve mediante HTTPS.',
            ],
          },
          { type: 'p', text: 'Estos proveedores aparecen, junto con lo que hace cada uno, en nuestra página de <dpa>tratamiento de datos y subencargados</dpa>. Las marcas de tiempo se almacenan en UTC para que los registros se mantengan consistentes sin importar desde dónde se consulten.' },
        ],
      },
      {
        id: 'separation',
        title: 'Separación entre clientes',
        blocks: [
          { type: 'p', text: 'Plot Ledge es un servicio multiinquilino: muchos clientes usan el mismo sistema. Los registros de cada cliente están separados a nivel de base de datos mediante seguridad a nivel de fila, de modo que la propia base de datos restringe lo que un cliente puede leer. Sus registros le pertenecen y no son visibles para otros clientes.' },
        ],
      },
      {
        id: 'access-control',
        title: 'Control de acceso y roles',
        blocks: [
          { type: 'p', text: 'Dentro de su cuenta, los roles y los permisos deciden lo que cada miembro del equipo puede ver y hacer. Los roles estándar son propietario o administrador, contador y agente de ventas. También puede crear conjuntos de permisos personalizados según sus necesidades. Dar a cada persona solo lo que su trabajo requiere limita el daño si algún acceso llegara a usarse indebidamente.' },
        ],
      },
      {
        id: 'sign-in',
        title: 'Inicio de sesión y sesiones',
        blocks: [
          {
            type: 'ul',
            items: [
              'Las contraseñas se almacenan cifradas con hash. Nunca las guardamos en texto plano y no podemos leerlas.',
              'Los inicios de sesión fallidos repetidos tienen límite de frecuencia, por cuenta y por dirección de red.',
              'Todo el tráfico hacia nuestra API tiene límite de frecuencia por dirección de red.',
              'Cuando una persona cambia su contraseña, sus sesiones se cierran.',
              'Se aplican encabezados de seguridad, y el acceso desde scripts de otros sitios web se restringe a una lista de permitidos.',
            ],
          },
        ],
      },
      {
        id: 'encryption',
        title: 'Cifrado',
        blocks: [
          { type: 'p', text: 'Los datos viajan entre su navegador y Plot Ledge mediante HTTPS, que los cifra en tránsito. Nuestro proveedor de base de datos administra el cifrado de los datos almacenados. [Por confirmar] Los detalles exactos del cifrado en reposo de nuestros proveedores se confirmarán antes del lanzamiento.' },
        ],
      },
      {
        id: 'audit-trail',
        title: 'Bitácora de auditoría',
        blocks: [
          { type: 'p', text: 'Una bitácora de auditoría registra las acciones importantes en su cuenta, para que usted pueda ver qué cambió y quién lo hizo. Los propietarios y los administradores de la cuenta pueden usarla para investigar errores o cambios inesperados.' },
        ],
      },
      {
        id: 'backups-and-exports',
        title: 'Respaldos y exportaciones',
        blocks: [
          { type: 'p', text: 'Usted no queda atado a nosotros ni depende solo de nosotros para sus propios registros. En cualquier momento puede:' },
          {
            type: 'ul',
            items: [
              'exportar sus datos a Excel o CSV;',
              'descargar un respaldo completo en formato JSON;',
              'importar registros desde Excel.',
            ],
          },
          { type: 'p', text: '[Por confirmar] Con qué frecuencia hacemos nuestros propios respaldos de la base de datos, cuánto tiempo los conservamos y con qué rapidez podemos restaurarlos se establecerá aquí antes del lanzamiento. Le recomendamos que también exporte sus datos con regularidad.' },
        ],
      },
      {
        id: 'payments',
        title: 'Pagos',
        blocks: [
          { type: 'p', text: 'Las suscripciones se pagan con tarjeta mediante Stripe, o mediante métodos pakistaníes como JazzCash y OPay. Plot Ledge no almacena números completos de tarjeta; los procesan los proveedores de pago. [Por confirmar] Este sitio web no recibe pagos y no tiene cuentas ni inicios de sesión.' },
        ],
      },
      {
        id: 'our-staff',
        title: 'Acceso de nuestro propio personal',
        blocks: [
          { type: 'p', text: 'Usamos los registros de los clientes únicamente para operar el servicio para usted. Quién en Plot Ledge puede acceder a los datos de producción, cómo se aprueba ese acceso y cómo se registra es [Por confirmar].' },
        ],
      },
      {
        id: 'incidents',
        title: 'Si algo sale mal',
        blocks: [
          { type: 'p', text: 'Si detectamos un incidente de seguridad que afecte sus registros, lo investigaremos, tomaremos medidas para contenerlo e informaremos a los clientes afectados sin demora injustificada, con lo que sepamos y lo que recomendemos. La notificación en el caso de datos personales se describe en nuestra página de <dpa>tratamiento de datos</dpa>.' },
        ],
      },
      {
        id: 'what-customers-can-do',
        title: 'Lo que usted puede hacer',
        blocks: [
          { type: 'p', text: 'La seguridad es una responsabilidad compartida. Las medidas más útiles de su parte son:' },
          {
            type: 'ul',
            items: [
              'use contraseñas largas y únicas, y no comparta un mismo acceso entre varias personas;',
              'dé a cada miembro del equipo el rol más bajo que le permita hacer su trabajo;',
              'dé de baja a las personas de su cuenta en cuanto se vayan;',
              'revise la bitácora de auditoría de vez en cuando;',
              'exporte sus registros y descargue un respaldo con regularidad;',
              'avísenos de inmediato si cree que una cuenta se ha usado indebidamente.',
            ],
          },
        ],
      },
      {
        id: 'certifications',
        title: 'Certificaciones',
        blocks: [
          { type: 'p', text: 'Esta página no declara ninguna certificación ni auditoría de terceros. Describimos lo que hacemos, no un estándar con el que estemos certificados. Si eso cambia, lo indicaremos aquí y mencionaremos el estándar y la fecha.' },
        ],
      },
      {
        id: 'report-a-problem',
        title: 'Cómo reportar un problema de seguridad',
        blocks: [
          { type: 'p', text: 'Si cree que encontró una vulnerabilidad, avísenos mediante la <disclosure>política de divulgación responsable</disclosure>. Para otras dudas sobre esta página, escriba a <mail>{email}</mail>. Consulte también la <aup>política de uso aceptable</aup> y la página de <legalhub>legal y confianza</legalhub>.' },
        ],
      },
    ],
  },

  dataProcessing: {
    title: 'Tratamiento de datos y subencargados',
    description: 'Quién es responsable de qué datos, cómo trata Plot Ledge los registros del CRM de los clientes, los proveedores que usamos y cómo obtener una adenda de tratamiento de datos.',
    intro: 'Esta página explica quién es responsable de qué cuando usted almacena registros en Plot Ledge, y qué proveedores nos ayudan a operarlo.',
    updated: '2026-11-09',
    summary: [
      'Usted es responsable de los datos de sus compradores y de su personal. Nosotros tratamos los registros de su CRM por cuenta suya, únicamente para operar el servicio.',
      'Para este sitio web y para los datos de la cuenta, Plot Ledge es el responsable; consulte el aviso de privacidad.',
      'Los proveedores que usamos aparecen a continuación, con lo que hace cada uno.',
      'Usted puede exportar sus datos en cualquier momento. El plazo de eliminación tras la cancelación aún está por confirmarse.',
      'Una adenda de tratamiento de datos firmada está disponible a solicitud por correo electrónico.',
    ],
    sections: [
      {
        id: 'purpose',
        title: 'Finalidad de esta página',
        blocks: [
          { type: 'p', text: 'Sus registros de Plot Ledge contienen datos personales de otras personas, como compradores, vendedores y personal. Las leyes de privacidad de muchos países esperan que el negocio que conserva esos datos y el servicio que los almacena acuerden quién hace qué. Esta página lo establece. Complementa nuestros <terms>términos de uso</terms>. Los datos recabados a través de este sitio web de promoción se rigen por nuestro <privacy>aviso de privacidad</privacy>.' },
          { type: 'p', text: 'En esta página, “nosotros” se refiere a Plot Ledge, “cliente” se refiere al negocio titular de una cuenta y “registros del CRM” se refiere al contenido que un cliente almacena en el servicio de Plot Ledge.' },
        ],
      },
      {
        id: 'roles',
        title: 'Quién es responsable de qué',
        blocks: [
          {
            type: 'table',
            caption: 'Funciones según el tipo de datos',
            head: ['Datos', 'Cliente', 'Plot Ledge'],
            rows: [
              ['Registros del CRM: compradores, vendedores, operaciones, mensualidades, pagos y datos del personal que usted almacena', 'Responsable del tratamiento. Usted decide para qué y cómo se usan los datos.', 'Encargado del tratamiento. Los tratamos por cuenta suya, para operar el servicio.'],
              ['Visitantes del sitio web y personas que nos contactan', 'No aplica', 'Responsable del tratamiento. Consulte el <privacy>aviso de privacidad</privacy>.'],
              ['Datos de la cuenta del cliente y de los miembros de su equipo, como nombres, correos electrónicos y plan', 'No aplica', 'Responsable del tratamiento, para la administración de cuentas y la facturación. Consulte el <privacy>aviso de privacidad</privacy>.'],
            ],
          },
          { type: 'p', text: 'Estos términos provienen de leyes de protección de datos como el RGPD. Si la ley de su país usa otras palabras, aplicamos la misma idea: usted decide qué se hace con los registros y nosotros lo hacemos por usted.' },
        ],
      },
      {
        id: 'what-we-process',
        title: 'Qué tratamos y para qué',
        blocks: [
          { type: 'p', text: 'Tratamos los registros del CRM únicamente para prestarle el servicio. Esto incluye almacenarlos, mostrarlos a los miembros del equipo que usted autorice, generar reportes y exportaciones, mantener la seguridad del servicio y resolver problemas. Los registros que usted almacena pueden incluir nombres, datos de contacto, números de CNIC, datos de lotes y de pagos, y notas, según lo que usted decida ingresar. Usted decide qué se ingresa.' },
        ],
      },
      {
        id: 'instructions',
        title: 'Sus instrucciones',
        blocks: [
          { type: 'p', text: 'Tratamos los registros del CRM únicamente conforme a sus instrucciones. Sus instrucciones son esta página, los <terms>términos de uso</terms> y la forma en que usted usa y configura el servicio. No usaremos sus registros del CRM para fines propios, como publicidad, y no los vendemos. Si consideramos que una instrucción infringe la ley, se lo haremos saber.' },
        ],
      },
      {
        id: 'confidentiality',
        title: 'Confidencialidad',
        blocks: [
          { type: 'p', text: 'Mantenemos la confidencialidad de los registros del CRM. Toda persona de Plot Ledge que pueda acceder a ellos está sujeta a un deber de confidencialidad. [Por confirmar] Cómo se limita y se registra el acceso del personal se describirá antes del lanzamiento.' },
        ],
      },
      {
        id: 'security-measures',
        title: 'Medidas de seguridad',
        blocks: [
          { type: 'p', text: 'Protegemos los registros del CRM con las medidas descritas en nuestra <security>página de seguridad</security>, entre ellas la separación entre clientes, el acceso por roles, las contraseñas cifradas con hash, los límites de frecuencia, HTTPS y una bitácora de auditoría. Podemos mejorar esas medidas con el tiempo y no las debilitaremos de manera que se reduzca el nivel de protección.' },
        ],
      },
      {
        id: 'subprocessors',
        title: 'Subencargados',
        blocks: [
          { type: 'p', text: 'Recurrimos a otras empresas para ayudarnos a operar Plot Ledge. Usted nos autoriza a utilizar las que se enumeran a continuación. Seguimos siendo responsables de ellas y pedimos a cada una que proteja los datos de manera adecuada.' },
          {
            type: 'table',
            caption: 'Proveedores que usamos, qué hacen, dónde y qué datos tratan',
            head: ['Proveedor', 'Qué hace', 'Dónde', 'Datos involucrados'],
            rows: [
              ['Neon', 'Base de datos PostgreSQL administrada que almacena los registros del CRM', '[Por confirmar]', 'Registros del CRM y datos de la cuenta'],
              ['Vercel', 'Aloja la aplicación de Plot Ledge y este sitio web; ofrece analítica sin cookies para el sitio web', 'Estados Unidos y otras regiones', 'Datos que pasan por la aplicación; datos de visitas al sitio web'],
              ['Stripe', 'Pagos con tarjeta de las suscripciones', '[Por confirmar]', 'Datos de facturación y de pago. Plot Ledge no almacena números completos de tarjeta.'],
              ['JazzCash', 'Pagos de las suscripciones mediante billetera móvil de Pakistán', 'Pakistán [Por confirmar]', 'Datos de facturación y de pago'],
              ['OPay', 'Pagos de las suscripciones en Pakistán', '[Por confirmar]', 'Datos de facturación y de pago'],
              ['Resend, o un servicio equivalente', 'Entrega los mensajes enviados mediante nuestros formularios de contacto', 'Estados Unidos y otras regiones', 'Datos que usted escribe en nuestros formularios'],
              ['Anthropic', 'Redacta las respuestas del asistente de chat, solo en este sitio web', 'Estados Unidos y otras regiones', 'Mensajes escritos en el chat del sitio web. Ningún registro del CRM.'],
            ],
          },
        ],
      },
      {
        id: 'changes-to-subprocessors',
        title: 'Cambios en los subencargados',
        blocks: [
          { type: 'p', text: 'Actualizaremos esta tabla cuando agreguemos o sustituyamos a un proveedor. Anunciaremos los cambios a los clientes [Por confirmar] antes de que el nuevo proveedor trate registros del CRM, y los clientes que se opongan por un motivo justificado pueden escribir a <mail>{email}</mail>. Si no podemos resolver la objeción, usted puede dejar de usar el servicio y exportar sus datos.' },
        ],
      },
      {
        id: 'international-transfers',
        title: 'Transferencias fuera de su país',
        blocks: [
          { type: 'p', text: 'Algunos de los proveedores anteriores pueden tratar datos fuera de Pakistán, incluidos Estados Unidos y la Unión Europea. Cuando la ley exige una garantía para esas transferencias, nos basamos en las cláusulas contractuales tipo del proveedor o en un mecanismo equivalente. [Por confirmar] La región donde se aloja la base de datos del CRM se indicará aquí antes del lanzamiento.' },
        ],
      },
      {
        id: 'data-subject-requests',
        title: 'Cómo le ayudamos a atender solicitudes de las personas',
        blocks: [
          { type: 'p', text: 'Las personas cuyos datos usted conserva, como los compradores, pueden pedirle consultarlos, corregirlos o eliminarlos. Usted mismo puede buscar, modificar y exportar registros en el servicio. Si no puede, escriba a <mail>{email}</mail> y le ayudaremos dentro de límites razonables. Si alguien nos contacta directamente sobre registros que usted controla, le trasladaremos la solicitud en lugar de responderla nosotros.' },
        ],
      },
      {
        id: 'breach-notification',
        title: 'Violaciones de la seguridad de los datos personales',
        blocks: [
          { type: 'p', text: 'Si tenemos conocimiento de una violación de la seguridad que afecte datos personales de sus registros del CRM, se lo notificaremos sin demora injustificada. Le diremos qué ocurrió, qué datos resultan afectados hasta donde sepamos, qué hemos hecho y qué le recomendamos hacer. [Por confirmar] Podría agregarse un plazo objetivo para este aviso.' },
        ],
      },
      {
        id: 'return-and-deletion',
        title: 'Devolución y eliminación',
        blocks: [
          { type: 'p', text: 'Usted puede exportar sus datos a Excel o CSV y descargar un respaldo completo en JSON en cualquier momento, incluso antes de cancelar. Después de que cancele, eliminaremos los registros de su CRM en un plazo de [Por confirmar], salvo que la ley nos obligue a conservar algo. Los datos eliminados pueden permanecer durante un breve periodo en los respaldos de los proveedores hasta que se sobrescriban. [Por confirmar]' },
        ],
      },
      {
        id: 'audits',
        title: 'Información y auditorías',
        blocks: [
          { type: 'p', text: 'Previa solicitud razonable, le proporcionaremos la información necesaria para demostrar que cumplimos con lo dispuesto en esta página. [Por confirmar] Aquí se indicará si se ofrecen auditorías en sitio o informes de terceros. Nuestra <security>página de seguridad</security> no declara ninguna certificación.' },
        ],
      },
      {
        id: 'dpa',
        title: 'Cómo obtener una adenda firmada',
        blocks: [
          { type: 'p', text: 'Si su negocio necesita una adenda de tratamiento de datos firmada, escriba a <mail>{email}</mail> con el nombre de su empresa y la persona que firmará. Le enviaremos una copia a solicitud. Las dudas sobre esta página son bienvenidas en la misma dirección. Todos los documentos aparecen en la página de <legalhub>legal y confianza</legalhub>.' },
        ],
      },
    ],
  },

  accessibility: {
    title: 'Declaración de accesibilidad',
    description: 'Cómo busca este sitio web cumplir el nivel AA de WCAG 2.2, qué hemos hecho hasta ahora, las limitaciones conocidas y cómo pedir ayuda o enviar comentarios.',
    intro: 'Queremos que todas las personas puedan usar este sitio web. Esta declaración indica lo que hemos hecho, en qué aún no llegamos y cómo avisarnos cuando algo no le funcione.',
    updated: '2026-11-09',
    summary: [
      'Buscamos cumplir el nivel AA de WCAG 2.2 en este sitio web.',
      'El sitio funciona con teclado, tiene un enlace para saltar al contenido y un foco visible, y respeta la configuración de movimiento reducido.',
      'Está disponible en ocho idiomas, incluidos el árabe y el urdu, que se leen de derecha a izquierda.',
      'Todavía no ha tenido una auditoría de accesibilidad independiente.',
      'Si algo no le funciona, escriba a <mail>{email}</mail>.',
    ],
    sections: [
      {
        id: 'our-commitment',
        title: 'Nuestro compromiso',
        blocks: [
          { type: 'p', text: 'Plot Ledge quiere que su sitio web pueda ser usado por el mayor número posible de personas, incluidas las que usan teclado, lector de pantalla, ampliación o un teléfono. Nuestra meta son las Pautas de Accesibilidad para el Contenido Web (WCAG) versión 2.2, nivel AA.' },
          { type: 'p', text: 'Esta declaración cubre este sitio web de promoción. El CRM al que usted inicia sesión es un producto aparte y no se describe aquí.' },
        ],
      },
      {
        id: 'status',
        title: 'Dónde estamos hoy',
        blocks: [
          { type: 'p', text: 'Trabajamos para alcanzar WCAG 2.2 AA, pero no afirmamos un cumplimiento total. El sitio web no ha tenido una auditoría de accesibilidad independiente. Lo hemos probado nosotros mismos mientras lo construíamos. [Por confirmar] Aquí se agregarán la fecha y el método de nuestra evaluación más reciente.' },
        ],
      },
      {
        id: 'what-we-have-done',
        title: 'Lo que hemos hecho',
        blocks: [
          { type: 'ul', items: [
            'Todo el sitio se puede usar con teclado, y el elemento con el foco se distingue con claridad.',
            'Un enlace “Saltar al contenido” permite pasar por alto el encabezado.',
            'Los botones y otros controles miden al menos 44 píxeles de alto para que sean más fáciles de pulsar, y el texto nunca es menor de 12 píxeles.',
            'Los campos de los formularios tienen etiquetas, y los enlaces usan textos descriptivos en lugar de “haga clic aquí”.',
            'La combinación de colores crema claro y esmeralda se eligió para ofrecer un contraste legible.',
            'La animación se reduce o se elimina si su dispositivo está configurado para preferir movimiento reducido.',
            'Las páginas están diseñadas para adaptarse a distintos tamaños de pantalla y al zoom.',
          ] },
        ],
      },
      {
        id: 'languages',
        title: 'Idiomas y dirección de lectura',
        blocks: [
          { type: 'p', text: 'El sitio web está disponible en ocho idiomas. El árabe y el urdu se muestran de derecha a izquierda, y el diseño se invierte en consecuencia. Puede cambiar de idioma desde el encabezado o el pie de página en cualquier página.' },
          { type: 'p', text: 'Algunas traducciones se realizan con ayuda de herramientas automáticas y pueden contener errores. Las estamos revisando. Si una traducción es incorrecta o difícil de entender, por favor avísenos.' },
        ],
      },
      {
        id: 'known-limitations',
        title: 'Limitaciones conocidas',
        blocks: [
          { type: 'p', text: 'Conocemos estas deficiencias:' },
          { type: 'ul', items: [
            'Las maquetas del producto en la página de inicio son gráficos ilustrativos. No son una copia funcional del producto y es posible que no estén totalmente disponibles para los lectores de pantalla.',
            'El asistente de chat se ofrece con la ayuda de un tercero y puede ser menos accesible que el resto de la página.',
            'Es posible que los archivos PDF descargables no sean totalmente accesibles.',
            'Las traducciones asistidas por herramientas automáticas pueden contener errores que afecten la claridad de una página.',
            'Es posible que se nos hayan pasado otros problemas. Avísenos si encuentra alguno.',
          ] },
        ],
      },
      {
        id: 'third-party-content',
        title: 'Contenido de terceros',
        blocks: [
          { type: 'p', text: 'Algunas funciones provienen de otras empresas, como el asistente de chat. No controlamos su accesibilidad, pero las elegimos con cuidado y les plantearemos los problemas cuando podamos.' },
        ],
      },
      {
        id: 'feedback',
        title: 'Comentarios y formatos alternativos',
        blocks: [
          { type: 'p', text: 'Si no puede usar alguna parte de este sitio web, o necesita algo en otro formato, como un documento leído en voz alta o en letra grande, escriba a <mail>{email}</mail>. Por favor, indíquenos:' },
          { type: 'ul', items: [
            'la página o función, y su dirección si la tiene;',
            'qué salió mal y qué intentaba hacer;',
            'el navegador, el dispositivo y la tecnología de asistencia que usa, si desea compartirlo.',
          ] },
          { type: 'p', text: 'También puede contactarnos por WhatsApp o mediante el formulario de contacto de este sitio web.' },
        ],
      },
      {
        id: 'how-we-respond',
        title: 'Cómo respondemos',
        blocks: [
          { type: 'p', text: 'Una persona leerá su mensaje. Procuramos responder en un plazo de [Por confirmar] e informarle qué podemos hacer y cuándo. Si no podemos corregir algo con rapidez, le ofreceremos otra manera de obtener lo que necesita.' },
        ],
      },
      {
        id: 'complaints',
        title: 'Si no queda satisfecho',
        blocks: [
          { type: 'p', text: 'Si no está conforme con nuestra respuesta, escríbanos de nuevo e indíquelo, y la revisaremos por segunda vez. También es posible que usted tenga derecho a plantear el asunto ante un organismo público de su país. [Por confirmar]' },
        ],
      },
      {
        id: 'updates',
        title: 'Actualizaciones de esta declaración',
        blocks: [
          { type: 'p', text: 'Actualizaremos esta declaración cuando cambien nuestro sitio web, nuestra evaluación o nuestras limitaciones conocidas. La fecha que aparece al inicio indica cuándo se actualizó por última vez. Consulte también nuestro <privacy>aviso de privacidad</privacy> y la página de <legalhub>legal y confianza</legalhub>.' },
        ],
      },
    ],
  },

  disclosure: {
    title: 'Política de divulgación responsable',
    description: 'Cómo reportar un problema de seguridad en Plot Ledge, qué pedimos a los investigadores, qué prometemos a cambio y qué está dentro y fuera del alcance.',
    intro: 'Si encuentra una vulnerabilidad de seguridad en Plot Ledge, queremos saberlo. Esta política explica cómo reportarla de forma segura y qué puede esperar de nosotros.',
    updated: '2026-11-09',
    summary: [
      'Reporte una posible vulnerabilidad a <mail>{email}</mail> con el asunto “Reporte de seguridad”.',
      'Pruebe únicamente con su propia cuenta y sus propios datos, y deténgase en cuanto haya demostrado el problema.',
      'No dañe datos, no ataque el servicio ni use ingeniería social.',
      'Acusaremos recibo de su reporte, le mantendremos informado y le daremos crédito si así lo desea.',
      'Por el momento no ofrecemos recompensas en efectivo.',
    ],
    sections: [
      {
        id: 'purpose',
        title: 'Finalidad',
        blocks: [
          { type: 'p', text: 'Plot Ledge guarda registros inmobiliarios y de pagos de nuestros clientes, por lo que tomamos en serio los reportes de vulnerabilidades. Agradecemos las investigaciones hechas de buena fe que cumplan esta política. En esta política, “nosotros” se refiere a Plot Ledge y “usted” se refiere a la persona que hace un reporte.' },
        ],
      },
      {
        id: 'scope',
        title: 'Qué está dentro del alcance',
        blocks: [
          { type: 'p', text: 'Esta política cubre:' },
          { type: 'ul', items: [
            'plotledge.com, este sitio web de promoción;',
            'app.plotledge.com, la aplicación web del CRM de Plot Ledge, y su API.',
          ] },
          { type: 'p', text: 'Los servicios operados por otras empresas, como nuestros proveedores de alojamiento, de pagos y de correo electrónico, no están cubiertos. Por favor, reporte los problemas de esos servicios a la empresa que los opera.' },
        ],
      },
      {
        id: 'how-to-report',
        title: 'Cómo reportar',
        blocks: [
          { type: 'p', text: 'Escriba a <mail>{email}</mail> con el asunto “Reporte de seguridad”. [Por confirmar] Una dirección de seguridad específica podría sustituir a esta. Por favor, escriba en inglés si le es posible y no publique antes los detalles.' },
        ],
      },
      {
        id: 'what-to-include',
        title: 'Qué incluir',
        blocks: [
          { type: 'ul', items: [
            'en qué consiste la vulnerabilidad y dónde se encuentra, con la dirección o la función;',
            'los pasos para reproducirla, con la mayor claridad posible;',
            'lo que usted cree que alguien podría hacer con ella;',
            'capturas de pantalla, solicitudes u otras pruebas que nos ayuden a confirmarla;',
            'cómo desea que lo contactemos y si desea recibir crédito.',
          ] },
          { type: 'p', text: 'Por favor, no incluya datos reales de clientes en su reporte. Descríbalos en su lugar.' },
        ],
      },
      {
        id: 'what-we-ask',
        title: 'Lo que le pedimos',
        blocks: [
          { type: 'p', text: 'Para proteger a nuestros clientes, por favor:' },
          { type: 'ul', items: [
            'use únicamente su propia cuenta y sus propios datos de prueba;',
            'no lea, modifique, copie ni elimine datos de otro cliente. Si accede a ellos por accidente, deténgase y avísenos, y no use más de lo mínimo necesario para demostrar el problema;',
            'no destruya datos ni interrumpa el servicio;',
            'no realice ataques de denegación de servicio ni ataques automatizados de alto volumen;',
            'no use ingeniería social, phishing ni ataques físicos contra nuestro personal, clientes o proveedores;',
            'no envíe spam ni deje una puerta trasera;',
            'denos un plazo razonable para corregir el problema antes de hacerlo público. Pedimos [Por confirmar].',
          ] },
        ],
      },
      {
        id: 'out-of-scope',
        title: 'Qué queda fuera del alcance',
        blocks: [
          { type: 'p', text: 'Por lo general, esto no se considera una vulnerabilidad de seguridad, y le pedimos que no lo reporte:' },
          { type: 'ul', items: [
            'hallazgos de escáneres automáticos que no muestren un impacto real;',
            'encabezados o configuraciones de buenas prácticas ausentes, sin un riesgo demostrado;',
            'ataques que requieran acceso físico a un dispositivo o la computadora comprometida del propio usuario;',
            'pruebas de denegación de servicio, spam o fuerza bruta;',
            'ingeniería social dirigida a nuestro personal o a nuestros clientes;',
            'vulnerabilidades en servicios de terceros que no controlamos;',
            'que un usuario simplemente comparta o pierda su propia contraseña.',
          ] },
          { type: 'p', text: 'Si no está seguro de si algo cuenta, envíelo de todos modos y le diremos.' },
        ],
      },
      {
        id: 'our-commitments',
        title: 'Lo que prometemos',
        blocks: [
          { type: 'ul', items: [
            'Acusaremos recibo de su reporte en un plazo de [Por confirmar].',
            'Lo investigaremos y le mantendremos informado de los avances.',
            'Le avisaremos cuando esté corregido, y lo corregiremos tan pronto como razonablemente podamos.',
            'Si desea crédito, le agradeceremos por su nombre o su alias una vez que esté corregido. Si prefiere permanecer en el anonimato, lo respetaremos.',
            'Trataremos su reporte y sus datos de contacto como confidenciales, y los usaremos únicamente para atender el reporte.',
          ] },
        ],
      },
      {
        id: 'rewards',
        title: 'Recompensas',
        blocks: [
          { type: 'p', text: 'Plot Ledge no tiene un programa de recompensas por errores (bug bounty) y no promete ningún pago por los reportes. [Por confirmar] Si esto cambia, lo indicaremos en esta página.' },
        ],
      },
      {
        id: 'safe-harbour',
        title: 'Investigación de buena fe',
        blocks: [
          { type: 'p', text: 'Si usted cumple esta política de buena fe, no emprenderemos acciones legales en su contra por su investigación ni pediremos a las autoridades que lo hagan. [Por confirmar] La redacción jurídica exacta de este compromiso debe ser revisada por nuestros abogados.' },
          { type: 'p', text: 'Esta protección tiene límites. Cubre únicamente nuestros propios servicios y solo las investigaciones que cumplan esta política. No cubre los daños a terceros, y no podemos hablar en nombre de otras empresas ni de las autoridades. Actuar fuera de esta política, por ejemplo, accediendo a datos de clientes que no necesitaba, puede ser ilícito y no está protegido.' },
        ],
      },
      {
        id: 'related',
        title: 'Páginas relacionadas',
        blocks: [
          { type: 'p', text: 'Para saber qué hacemos para proteger los registros, consulte nuestra <security>página de seguridad</security>. Realizar pruebas fuera de esta política también incumple nuestra <aup>política de uso aceptable</aup>. Todos los documentos legales aparecen en la página de <legalhub>legal y confianza</legalhub>.' },
        ],
      },
    ],
  },
}
export default policies
