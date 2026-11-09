import type { Messages } from '@/i18n/messages'

const faq: Messages['faq'] = {
  eyebrow: 'Preguntas',
  title: 'Preguntas que hacen los agentes antes de cambiar',
  items: [
    {
      q: '¿Qué es Plot Ledge?',
      a: 'Plot Ledge es un CRM para agentes inmobiliarios que venden lotes y propiedades. Reúne en un solo lugar sus lotes, operaciones, mensualidades, pagos y recibos, para que deje de armar todo a partir de hojas de Excel y capturas de WhatsApp.',
    },
    {
      q: '¿Quién puede ver qué?',
      a: 'Cada persona tiene su propio acceso. El propietario ve todo, incluidas las ventas, la utilidad y los inversionistas. El contador se encarga de los pagos, los comprobantes, los recibos y los reportes. Un agente de ventas puede agregar operaciones y consultar lotes y compradores, pero no puede editar ni eliminar una operación.',
    },
    {
      q: '¿Puedo traer mis registros de Excel?',
      a: 'Sí, podemos ayudarle a cargar sus lotes, compradores y pagos actuales desde Excel. Envíenos la hoja y le diremos si algo necesita ordenarse antes, por ejemplo dos compradores en una misma fila.',
    },
    {
      q: '¿Cómo funcionan los recibos y los comprobantes de pago?',
      a: 'Cada pago que usted registra genera un recibo con su propio folio único. Puede adjuntar la referencia del comprobante bancario al mismo pago, de modo que el recibo, el comprobante y la operación queden vinculados.',
    },
    {
      q: '¿Funciona en mi celular?',
      a: 'Sí. Plot Ledge funciona en celulares y tabletas, así que puede consultar el saldo de un comprador o registrar un pago desde el terreno o durante una reunión con un cliente.',
    },
    {
      q: '¿Cómo funciona el reparto de utilidades entre inversionistas?',
      a: 'Usted registra cuánto aportó cada inversionista a un proyecto y la participación que tiene. Plot Ledge muestra entonces a cada inversionista la utilidad que le corresponde, de modo que el reparto es una cifra en pantalla y no una discusión.',
    },
    {
      q: '¿Cuánto cuesta?',
      a: 'Los planes comienzan en Rs 10,000 al mes con Silver. Gold cuesta Rs 40,000 al mes, y pagar por año ahorra 17% (dos meses gratis). Enterprise tiene un precio según el caso para desarrolladores con varias sucursales, fraccionamientos y grupos más grandes, así que hable con nosotros.',
    },
    {
      q: '¿Hay una prueba gratuita?',
      a: 'Sí. Hay una prueba gratuita de 15 días. No se necesita pago. Agende una demo y la configuramos; después, si desea continuar, elige un plan de pago.',
    },
    {
      q: '¿Un fraccionamiento puede usarlo?',
      a: 'Sí. El plan Enterprise está hecho para fraccionamientos y desarrolladores con varias sucursales, con varios proyectos y equipos más grandes. Chatee con nosotros por WhatsApp o agende una demo y lo configuraremos según sus proyectos.',
    },
  ],
}
export default faq
