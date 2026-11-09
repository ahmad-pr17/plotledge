import type { Messages } from '@/i18n/messages'

const roles: Messages['roles'] = {
  eyebrow: 'Su equipo',
  title: 'Los mismos registros, funciones distintas.',
  description: 'El propietario, el contador y el agente de ventas tienen cada uno su propio acceso y ven lo que necesitan.',
  tablistLabel: 'Roles del equipo',
  allowed: '(permitido)',
  notAllowed: '(no permitido)',
  items: {
    owner: {
      name: 'Propietario',
      heading: 'Vea cómo va el negocio.',
      description: 'Ventas totales, dinero cobrado, lo que falta por cobrar y la utilidad de cada operación. Los saldos de inversionistas y de agentes están a un clic.',
      panel: { title: 'Este mes', value: 'Rs {amount} millones', caption: 'cobrados en julio en 42 operaciones activas', progressLabel: '74% de lo que correspondía cobrar' },
      permissions: [
        'Ventas, cobrado y por cobrar',
        'Utilidad de cada operación',
        'Saldos de inversionistas y agentes',
        'Todos los libros y reportes',
        'Administrar las cuentas del equipo',
      ],
    },
    accountant: {
      name: 'Contador',
      heading: 'Concilie cada pago con su comprobante.',
      description: 'Revise los pagos contra los comprobantes bancarios, mantenga en orden los libros e imprima reportes sin pedirle cifras a nadie.',
      panel: { title: 'Esta semana', value: '18 comprobantes', caption: 'pendientes de asociar a un pago', progressLabel: '62% ya conciliado' },
      permissions: [
        'Registrar pagos y referencias de comprobantes',
        'Emitir recibos con folio único',
        'Reportes y exportaciones de operaciones',
        'Reparto de utilidades a inversionistas',
        'Administrar las cuentas del equipo',
      ],
    },
    agent: {
      name: 'Agente de ventas',
      heading: 'Capture operaciones, dé seguimiento a sus compradores.',
      description: 'Los agentes agregan operaciones nuevas y consultan lotes y compradores. Editar y eliminar operaciones queda a cargo del propietario y del contador.',
      panel: { title: 'Inventario abierto', value: '{count} lotes', caption: 'aún disponibles para vender', progressLabel: '{pct}% de los lotes vendidos' },
      permissions: [
        'Consultar los lotes disponibles',
        'Ver los datos del comprador',
        'Agregar una operación nueva',
        'Editar o eliminar una operación',
        'Ver la utilidad y los datos de inversionistas',
      ],
    },
  },
}
export default roles
