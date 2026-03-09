export const siteConfig = {
  name: 'Ramon Riera',
  title: 'Ramon Riera - Senior UX/UI Designer',
  description: 'Diseñador de experiencias de usuario. Especializado en Design Systems, Product Design y Design Operations.',
  url: 'https://ramonriera.design',
  email: 'hello@ramonriera.design',
  logo: {
    dark: '/assets/shared/logo-negro.svg',
    light: '/assets/shared/logo-blanco.svg',
  },
  profilePhoto: '/assets/shared/foto-perfil.png',
  social: {
    linkedin: 'https://linkedin.com/in/ramonrieradepares',
    medium: 'https://medium.com/@ramriera',
  },
  og: {
    image: '/images/og-image.jpg',
  },
};

export const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre mí', href: '/about' },
  { label: 'Proyectos', href: '/projects' },

];



export interface CaseSection {
  label: string;
  title: string;
  layout: 'center' | 'left-right' | 'right-left' | 'full-image' | 'image-grid' | 'screens-grid' | 'figma-embed' | 'whimsical-embed' | 'mermaid' | 'stepper' | 'audit-deck-grid';
  figmaUrl?: string;
  embeds?: string[];
  mermaidCode?: string;
  content?: string;
  highlight?: string;
  bullets?: string[];
  images?: string[];
  captions?: string[];
  steps?: { title: string; description: string }[];
  bulletEvidence?: { image: string; caption: string }[];
}

export interface ProjectMeta {
  role: string;
  industry: string;
  output: string;
  duration: string;
  skills: string[];
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  tags: string[];
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  results: string[];
  stack: string[];
  cover: string;
  githubUrl?: string;
  featured: boolean;
  projectMeta?: ProjectMeta;
  caseSections?: CaseSection[];
  checks?: string[];
}

export const projects: Project[] = [
  {
    slug: 'massimo-dutti-conversion',
    title: 'Massimo Dutti',
    client: 'Massimo Dutti (Inditex)',
    year: '2025',
    category: 'UX Strategy & Service Design',
    tags: ['UX Optimization', 'Checkout Flow', 'E-commerce Strategy', 'High-Fidelity Prototyping', 'Service Design', 'CRO'],
    description: 'Rediseño estratégico del flujo de reserva en tienda: equilibrando el lenguaje visual editorial de una marca premium con la eficiencia transaccional.',
    longDescription: 'Massimo Dutti ofrece una funcionalidad de **"Reserva en tienda"** que permite al usuario separar un producto online para probarlo y comprarlo en tienda física, **sin cargo previo**. Sobre el papel, es una **solución omnicanal potente**. En la práctica, el flujo actual presenta fricciones que provocan abandono: la acción de reservar está escondida, el proceso requiere **demasiados pasos**, el seguimiento es opaco y las dudas sobre caducidad generan **incertidumbre**.\n\nEste proyecto propone un rediseño completo del flujo centrado en tres pilares: **claridad** (que el usuario entienda exactamente qué está haciendo), **velocidad** (que reservar sea tan directo como añadir a la cesta) y **diseño para la confianza** (que sepa que no hay cargo online y que tiene 24 horas para decidir).',
    challenge: 'El usuario confunde **"Click & Collect"** con **"Reserva en Tienda"**. La acción de reservar está **enterrada en la ficha de producto**, el flujo obliga a **loguearse antes de completar la reserva**, la selección de tienda carece de información sobre **disponibilidad real**, y la confirmación se limita a un **email sin seguimiento in-app**. Cada paso extra es una **oportunidad perdida de conversión**. El resultado: usuarios que abandonan el flujo antes de completarlo y una **tasa de recogida en tienda por debajo del potencial**.',
    solution: 'Se rediseñó el flujo completo con un enfoque de **diseño orientado a la conversión** en 6 fases: ficha de producto con **CTA dual visible**, selección de tienda con **favorita preseleccionada**, resumen de reserva **sin registro obligatorio**, **confirmación inmediata** con QR y wallet, **tracking in-app** con estados claros y venta cruzada contextual, más una propuesta de **Service Design** para la recogida física con **poste QR automatizado**.',
    results: [
      'Flujo de reserva reducido de 8 pasos a 4',
      'CTA "Reservar en tienda" visible en ficha de producto (misma jerarquía que "Añadir a la cesta")',
      'Tracking in-app con estados y venta cruzada integrada',
      'Propuesta de Service Design: poste QR para recogida autónoma en tienda',
      'Integración con Apple Wallet y Google Wallet para acceso rápido al QR',
      'Sistema de recuperación de abandonos con push notifications',
    ],
    stack: ['UX Strategy', 'Service Design', 'Research', 'Service Blueprint', 'Prototyping'],
    cover: '/assets/projects/massimo-dutti/massimo-header-big-1920x1080.jpg',
    featured: true,
    projectMeta: {
      role: 'UX Strategist & Service Designer',
      industry: 'Fashion Retail',
      output: 'E-commerce Optimization',
      duration: '1 semana',
      skills: ['UX Optimization', 'Checkout Flow', 'E-commerce Strategy', 'High-Fidelity Prototyping', 'Service Design', 'CRO', 'Omnichannel', 'User Flow Design', 'Conversion Optimization', 'Wireframing'],
    },
    checks: [
      'La opción de "Reservar en tienda" está enterrada al final de la ficha de producto, invisible sin scroll',
      'El flujo actual requiere 8 pasos y registro obligatorio antes de confirmar la reserva',
      'Sin tracking in-app, sin integración con wallet y sin feedback claro del estado de la reserva',
    ],
    caseSections: [
      // ── 01. Auditoría e Investigación ──
      {
        label: '01. Auditoría e Investigación',
        title: 'El flujo actual - ¿Por qué no funciona?',
        layout: 'center',
        content: 'El punto de partida fue una **auditoría exhaustiva del flujo de reserva** existente. Se mapeó paso a paso el journey completo: desde que el usuario descubre el producto hasta que lo recoge en tienda. En paralelo, se realizó **benchmarking** de cómo resuelven el mismo problema otras empresas del grupo Inditex y competidores directos.\n\nTres hipótesis guiaron la investigación: ¿El usuario no entiende bien qué es "reservar" vs "comprar"? ¿No hay **feedback claro del estado de la reserva**? ¿El **tiempo de expiración genera ansiedad**? Las respuestas confirmaron que los tres problemas coexisten y se retroalimentan.',
        bullets: [
          '**Difícil acceso** - La acción "reservar en tienda" está escondida y es poco escaneable en la **interfaz de usuario** de la ficha de producto',
          '**Demasiados pasos** - Talla → CP → selección de tienda → login → reservar → solicitud → validación manual → email. Un **proceso de pago** innecesariamente largo',
          '**Seguimiento opaco** - La reserva vive en un email y en "Mi cuenta", sin **feedback inmediato** ni una capa clara de seguimiento in-app',
          '**Dudas sobre caducidad y compra** - 24 horas de margen y no compra obligatoria generan incertidumbre en lugar de confianza',
        ],
        highlight: 'Cada paso extra es una **oportunidad perdida de conversión**. El usuario no abandona porque no quiera el producto - abandona porque el proceso le genera más **fricción** que **confianza**.',
      },
      {
        label: '01. Auditoría e Investigación',
        title: 'Flujo actual - Ficha de producto',
        layout: 'left-right',
        content: 'El análisis del flujo actual reveló que la opción de "Reservar en tienda" está **enterrada al final de la ficha de producto**, debajo del scroll. El usuario tiene que desplazarse más allá de la información de composición, cuidados, envíos y devoluciones para encontrar un enlace de texto - ni siquiera un botón - que dice "Disponibilidad y reserva en tienda". La **interfaz de usuario** actual **prioriza completamente la compra online** sobre la **experiencia omnicanal**, sin ofrecer **feedback inmediato** sobre la **disponibilidad de stock**.',
        images: [
          '/assets/projects/massimo-dutti/viejo-reserva-tienda-flujo.png',
        ],
        captions: ['Flujo actual: la opción de reserva está enterrada debajo del scroll en la ficha de producto'],
      },
      {
        label: '01. Auditoría e Investigación',
        title: 'Flujo actual - Selección de tienda y logueo',
        layout: 'image-grid',
        content: 'Una vez localizada la opción de reserva, el usuario entra en un **flujo con demasiados pasos intermedios**: seleccionar talla, introducir código postal, elegir tienda de una lista sin información clara de **disponibilidad de stock**, y obligatoriamente **loguearse o crear cuenta** antes de poder confirmar. La selección de tienda muestra disponibilidad como "Talla disponible: M" pero no ofrece **feedback inmediato** sobre cuándo estará lista ni qué pasa si no la recoge.',
        images: [
          '/assets/projects/massimo-dutti/viejo-mapa.png',
          '/assets/projects/massimo-dutti/viejo-login.png',
        ],
        captions: ['Selección de tienda con mapa y disponibilidad limitada', 'Login obligatorio antes de confirmar la reserva'],
      },
      {
        label: '01. Auditoría e Investigación',
        title: 'Flujo actual - Confirmación y seguimiento',
        layout: 'image-grid',
        content: 'La confirmación de reserva es una pantalla mínima que redirige al usuario a su email y a "Mis reservas en tienda" dentro de "Mi cuenta". El **tracking in-app es básico**: muestra el estado como "Pendiente" con fecha, pero sin progresión visual, sin estimación de tiempo, y sin ninguna acción que el usuario pueda realizar. No hay **integración con wallet**, no hay mapa, no hay **recordatorio de caducidad**. Sin **micro-interacciones** ni **feedback inmediato**, el usuario queda en un limbo de espera pasiva.',
        images: [
          '/assets/projects/massimo-dutti/viejo-solicitud-reserva.png',
          '/assets/projects/massimo-dutti/viejo-tracking-in-app.png',
        ],
        captions: ['Confirmación de solicitud de reserva con redirección al email', 'Tracking in-app básico: estado pendiente sin progresión visual'],
      },
      // ── 02. Flujo de Usuario y Conversión ──
      {
        label: '02. Flujo de Usuario y Conversión',
        title: 'Arquitectura del flujo propuesto',
        layout: 'full-image',
        content: 'Antes de diseñar una sola pantalla, se definió la lógica del sistema. Este diagrama es la pieza central del rediseño: mapea cada decisión del usuario, cada punto de bifurcación y cada **reducción de fricción** aplicada. La arquitectura demuestra que las decisiones de diseño no son estéticas - son estructurales. Se eliminaron **puntos de fricción** innecesarios, se redujo la **fricción cognitiva** con preselecciones inteligentes, y se priorizó la **confirmación inmediata** sobre validaciones manuales.',
        images: [
          '/assets/projects/massimo-dutti/mermaid-flujo-reserva.svg',
        ],
        captions: ['Diagrama del flujo de reserva propuesto: de 8 pasos a 4'],
        highlight: 'De **8 pasos a 4**. La lógica del sistema está por encima de la decoración visual: cada nodo del diagrama justifica una decisión de producto.',
      },
      // ── 03. Estrategia de Producto ──
      {
        label: '03. Estrategia de Producto',
        title: 'Los 3 pilares - Claridad, Velocidad, Confianza',
        layout: 'center',
        content: 'A partir del diagnóstico, se definieron tres pilares estratégicos que guían cada decisión de diseño del nuevo flujo:\n\n**Claridad** - Que el usuario entienda exactamente qué está haciendo. "Reservar" no es "comprar". No hay cargo online. El producto le espera en tienda para que lo pruebe sin compromiso.\n\n**Velocidad** - Que reservar sea tan directo como "añadir a la bolsa". Tienda favorita preseleccionada, email como único dato necesario, **confirmación en un tap**.\n\n**Confianza** - El **diseño para la confianza** implica que el usuario sepa qué pasará, cuándo y cómo. Confirmación inmediata con QR, **tracking con estados claros**, recordatorios antes de que caduque, y siempre el mensaje: "Pagarás en tienda. Ningún cargo online".',
        highlight: 'Si reducimos la **ansiedad por el tiempo de expiración** y clarificamos que no hay cargo online, la **conversión** subirá. Esta es la **hipótesis de valor** que vertebra todo el rediseño.',
      },
      {
        label: '03. Estrategia de Producto',
        title: 'Objetivos medibles',
        layout: 'center',
        content: 'Se establecieron tres categorías de objetivos para medir el impacto del rediseño:',
        bullets: [
          '**Experiencia** - Percepción de rapidez: que reservar se sienta tan directo como añadir a la bolsa. Mostrar **disponibilidad real**. Eliminar incertidumbre con información clara de qué pasará, cuándo y cómo',
          '**Flujo** - Eliminar **registro obligatorio** (permitir reserva como invitado). **Confirmación inmediata** con dirección, horario, tiempo estimado y mapa. Notificaciones push con estados claros',
          '**Conversión** - Aumentar clics en "Reservar en tienda" vs. situación actual. Mejorar **ratio reservas confirmadas / reservas iniciadas**. Incrementar recogida en tienda en menos de 24h. Crear **ventas cruzadas** in-app y en tienda física',
        ],
      },
      {
        label: '03. Estrategia de Producto',
        title: 'Impacto en el Producto',
        layout: 'center',
        content: 'El rediseño del flujo de reserva se traduce en mejoras concretas y medibles en tres áreas clave del producto:',
        bullets: [
          '**Optimización del Checkout** - Reducción de pasos innecesarios para agilizar la **compra por impulso**. Menos fricción = más reservas completadas',
          '**Mejora en la Reserva en Tienda** - Interfaz intuitiva para facilitar la **omnicanalidad (Online-to-Store)**. El usuario pasa de 8 pasos a 4 con confirmación inmediata',
          '**Branding de Lujo** - Mantenimiento de una **estética minimalista** que eleva el **valor percibido** del producto. Cada pantalla respira el diseño editorial de Massimo Dutti',
        ],
      },
      // ── 04. El Nuevo Flujo de Reserva ──
      {
        label: '04. Nuevo Flujo de Reserva',
        title: 'Las 6 fases del nuevo flujo',
        layout: 'stepper',
        content: 'El nuevo flujo se estructura en 6 fases diseñadas para minimizar la fricción y maximizar la **conversión** en cada paso:',
        steps: [
          { title: 'Ficha de producto', description: 'CTA dual: "Añadir a la cesta" + "Pruébalo hoy en tienda", con la misma **jerarquía visual**. Sin necesidad de hacer scroll.' },
          { title: 'Selección de tienda', description: 'Tienda favorita preseleccionada si el usuario está logueado. Lista con distancia, horarios, **disponibilidad de stock** y servicios disponibles (Style Advisor, probadores).' },
          { title: 'Resumen de reserva', description: 'Pantalla con producto, talla, tienda y opción de ir a mapas. Solo necesita email si no está logueado. **Proceso de pago** simplificado: "Recuerda que esta reserva no implica la compra final del producto".' },
          { title: 'Confirmación inmediata', description: 'QR generado al instante con **feedback inmediato**, integración con Apple Wallet y Google Wallet, **micro-interacciones** de progreso visibles (Reservado → Finalizando → Listo).' },
          { title: 'Tracking in-app', description: 'Sección "Mis reservas" con estados: Pendiente → Confirmada → Caducada → Recogida. Con **venta cruzada** de stock de la misma tienda para maximizar **conversión**.' },
          { title: 'Recogida y post-visita', description: 'Push + email con instrucciones claras. QR para escanear en tienda. **Experiencia premium** completa con valoración rápida post-visita.' },
        ],
      },
      {
        label: '04. Nuevo Flujo de Reserva',
        title: 'Ficha de producto - CTA dual visible',
        layout: 'image-grid',
        content: 'El cambio más impactante del rediseño: el CTA "Reservar en tienda" deja de estar escondido y pasa a convivir con "Añadir a la cesta" en la misma **jerarquía visual**. Se ofrecen dos variantes - un enlace de texto sutil bajo el botón principal ("¿Lo quieres hoy? Pruébalo en tienda") y un botón secundario con la misma prominencia ("RESERVAR EN TIENDA"). Ambas opciones son visibles sin necesidad de hacer scroll.',
        images: [
          '/assets/projects/massimo-dutti/nuevo-reservar-en-tienda-link.png',
          '/assets/projects/massimo-dutti/nuevo-reservar-en-tienda.png',
        ],
        captions: ['Variante con enlace de texto: "¿Lo quieres hoy? Pruébalo en tienda"', 'Variante con botón secundario: CTA dual con misma jerarquía visual'],
      },
      {
        label: '04. Nuevo Flujo de Reserva',
        title: 'Selección de tienda y resumen de reserva',
        layout: 'image-grid',
        content: 'Este flujo no es solo digital: gestiona la **experiencia premium** del cliente **(Online-to-Store)**, facilitando que el usuario finalice su compra físicamente con la misma elegancia con la que navegó la web. La selección de tienda muestra la tienda favorita preseleccionada con distancia, horario de disponibilidad ("Hoy a partir de las 10:30") y **disponibilidad de stock** en tiempo real. Las tiendas sin stock lo indican claramente evitando frustraciones posteriores. El resumen de reserva simplifica el **proceso de pago**: producto, talla, tienda con dirección y teléfono, horarios y servicios. Solo se pide el email si el usuario no está logueado. Un banner superior refuerza: "Recuerda que esta reserva no implica la compra final del producto".',
        images: [
          '/assets/projects/massimo-dutti/nuevo-selecciona-tienda.png',
          '/assets/projects/massimo-dutti/nuevo-resumen-reserva-email.png',
        ],
        captions: ['Selección de tienda con favorita preseleccionada y disponibilidad en tiempo real', 'Resumen de reserva simplificado con email como único dato requerido'],
      },
      {
        label: '04. Nuevo Flujo de Reserva',
        title: 'Confirmación inmediata y tracking in-app',
        layout: 'image-grid',
        content: 'La **confirmación inmediata** genera un código QR al instante con el número de referencia de la reserva, botones para añadir a Apple Wallet o Google Wallet, y toda la información del producto y la tienda. La barra de progreso con **micro-interacciones** muestra visualmente el estado: Reservado → Finalizando → Listo. El tracking in-app ofrece **feedback inmediato** al usuario con la hora estimada ("Pendiente - A partir de las 10:30"), el producto con foto y detalles, y acceso directo al QR y a las indicaciones para llegar a la tienda.',
        images: [
          '/assets/projects/massimo-dutti/nuevo-solicitud-reserva.png',
          '/assets/projects/massimo-dutti/nuevo-reserva.png',
        ],
        captions: ['Confirmación inmediata con QR e integración con Apple/Google Wallet', 'Tracking in-app con barra de progreso y estado en tiempo real'],
      },
      {
        label: '04. Nuevo Flujo de Reserva',
        title: 'Venta cruzada contextual',
        layout: 'right-left',
        content: 'Mientras el usuario espera la confirmación de su reserva o consulta el tracking, el sistema sugiere productos complementarios del stock de la misma tienda bajo el título "Completa tu look en tienda". Un cliente que va a recoger una reserva tiene un 30% más de probabilidades de comprar un accesorio o prenda complementaria, mejorando la **conversión** global.\n\nEsta **venta cruzada** no es intrusiva - aparece después de toda la información funcional y utiliza el formato de "Looks" que el usuario ya conoce de la ficha de producto. La **experiencia premium** se mantiene intacta. El objetivo: transformar cada visita de recogida en una oportunidad de venta adicional.',
        highlight: 'Un cliente que va a recoger una reserva tiene un 30% más de probabilidades de comprar un accesorio. La venta cruzada contextual convierte cada recogida en una oportunidad.',
        images: [
          '/assets/projects/massimo-dutti/nuevo-tracking-in-app.png',
        ],
        captions: ['Venta cruzada contextual: "Completa tu look en tienda" con stock real'],
      },
      // ── 05. Service Design & Post-Visita ──
      {
        label: '05. Service Design',
        title: 'Poste de Recogida QR - La experiencia en tienda',
        layout: 'center',
        images: [
          '/assets/projects/massimo-dutti/poste-recogida-qr.png',
        ],
        captions: ['Propuesta de Service Design: poste QR automatizado para recogida en tienda'],
        content: '¿Por qué no añadir una sección de recogida con un poste que lea los códigos QR? Esta propuesta de Service Design extiende la **experiencia premium** digital al mundo físico. En lugar de depender al 100% del personal de tienda para gestionar las recogidas, se propone un poste automatizado donde el cliente escanea su QR al llegar y el sistema notifica al staff para preparar el pedido.\n\nEsto resuelve tres problemas simultáneamente: reduce los tiempos de espera del cliente, libera al personal para tareas de mayor valor (asesoramiento, venta), y genera datos medibles sobre el flujo de recogida que permiten optimizar la **conversión** y la operación.',
        bullets: [
          '**Cliente tiene mejor experiencia** - Escanea el QR al llegar, sin buscar a nadie, sin esperas. El sistema ofrece **feedback inmediato**: "Tu reserva se está preparando"',
          '**Servicio personalizado** - El staff recibe una notificación con el nombre del cliente, el producto reservado y sugerencias de cross-selling antes de que llegue al mostrador',
          '**Datos operativos** - Tiempo medio de recogida, horas pico, ratio de recogida vs. caducidad. Información para optimizar turnos y stock',
        ],
        highlight: 'El poste QR transforma la recogida de un momento transaccional en una experiencia de servicio. El cliente se siente atendido antes de hablar con nadie.',
      },
      // ── 06. Acciones de Conversión ──
      {
        label: '06. Acciones de Conversión',
        title: 'CRO - Acciones concretas para mejorar conversión',
        layout: 'center',
        content: 'Cada mejora propuesta es **diseño orientado a la conversión**: responde a un punto de abandono identificado en la auditoría. No son ideas genéricas - son intervenciones quirúrgicas en los momentos exactos donde el flujo actual pierde usuarios:',
        bullets: [
          '**CTA visible** - Botón principal "Reservar en tienda" en la ficha de producto, con la misma **jerarquía visual** que "Añadir a la cesta". Sin scroll necesario',
          '**Menos fricción** - Tienda favorita preseleccionada por defecto. **Feedback inmediato**: "Se confirma en menos de 30 min". Sin registro obligatorio',
          '**Mensajes de seguridad** - "Pagarás en tienda. Ningún cargo online". "Tendrás 24h para recogerlo". Eliminar la ansiedad en el **proceso de pago**',
          '**Reforzar valor** - Destacar servicios de tienda: Style Advisor, probadores, personalización. Una **experiencia premium** completa',
          '**Recuperar abandonos** - Notificación push si el usuario cierra el flujo: "¿Quieres terminar la reserva en [Tienda]?". Push recordatorio 2h antes de caducar',
          '**Ventas cruzadas** - Sugerir looks complementarios del stock de la misma tienda durante el tracking. Convertir cada recogida en oportunidad de **conversión**',
        ],
        highlight: '"Pagarás en tienda. Ningún cargo online" - Este mensaje, repetido en los momentos clave del flujo, elimina la principal barrera psicológica de la reserva.',
      },
    ],
  },
  {
    slug: 'movefast-startup-platform',
    title: 'MoveFast',
    client: 'MoveFast',
    year: '2021',
    category: 'UX/UI Design',
    tags: ['UX/UI', 'UX Research', 'Interaction Design', 'Design System', 'Mobile Design', 'Prototyping', 'User Persona', 'Benchmarking', 'Electric Mobility'],
    description: 'Diseño de la experiencia de usuario para una app móvil de un fabricante de coches eléctricos que entra en el mercado español, con un servicio innovador de cambio de baterías.',
    longDescription: 'España se sitúa a la cola de Europa en **adopción del vehículo eléctrico**. El precio, la **autonomía limitada** y la **escasez de infraestructura de recarga** frenan a los consumidores. MoveFast nace como respuesta a este problema real: diseñar la experiencia de una app móvil para un fabricante internacional que quiere entrar en el mercado español con una **propuesta de valor inexistente en la competencia** - el **cambio de baterías bajo demanda**.',
    challenge: 'Los datos del mercado español son contundentes: las matriculaciones de vehículos eléctricos apenas representan una **fracción mínima del total europeo**. Las tres barreras principales son la **escasez de puntos de carga**, el **precio elevado** frente al vehículo convencional, y la **autonomía limitada** (muchos modelos por debajo de 300 km). A esto se suman **tiempos de carga superiores a 45 minutos**. El usuario reconoce las ventajas - menos contaminación, ahorro en combustible, acceso a zonas restringidas - pero las **barreras pesan más que los beneficios**.',
    solution: 'Tras analizar el mercado y la competencia, se proponen dos conceptos innovadores: un **servicio de cambio de batería bajo demanda** donde personal de la empresa acude a tu ubicación (10 cambios gratuitos al año para compradores, 59€ cada cambio adicional), y **puntos dinámicos de intercambio modulares** en ubicaciones estratégicas de la ciudad que cambian semanalmente con posibilidad de **reserva anticipada**. Ninguna app competidora ofrece este modelo de servicio.',
    results: [
      'UX completa definida en 2 semanas',
      'Prototipo interactivo funcional en Figma',
      'Design system con componentes y variantes',
      'Dos flujos principales validados con wireframes',
    ],
    stack: ['Figma', 'Whimsical', 'Adobe Illustrator', 'Adobe Photoshop', 'Miro', 'Google Forms'],
    cover: '/assets/projects/movefast/movefast-header.png',
    featured: true,
    projectMeta: {
      role: 'Product Designer',
      industry: 'Mobility',
      output: 'Mobile App Design',
      duration: '2 semanas',
      skills: ['UX Research', 'Benchmarking', 'User Persona', 'Journey Mapping', 'Prototyping', 'Design System', 'Wireframing', 'Visual Design', 'Interaction Design', 'Information Architecture', 'Mobile Design', 'Competitive Analysis'],
    },
    checks: [
      'España a la cola de Europa en adopción del vehículo eléctrico: escasos puntos de carga y autonomía limitada',
      'Tiempos de recarga superiores a 45 minutos generan "ansiedad de rango" en el consumidor',
      'Ninguna app competidora ofrece un modelo de cambio de batería bajo demanda',
    ],
    caseSections: [
      {
        label: '01. Descubrimiento',
        title: '¿Por qué no despega el coche eléctrico en España?',
        layout: 'right-left',
        content: 'El primer paso fue entender el contexto real del mercado. Existen dos tipos principales de vehículos eléctricos: el **BEV** (100% eléctrico, cero emisiones, motor alimentado por batería recargable) y el **PHEV** (híbrido enchufable con doble motor combustión + eléctrico, hasta 130 km/h en modo eléctrico con ~40 km de autonomía).\n\nEspaña se sitúa **a la cola de Europa** en matriculaciones de vehículos eléctricos. Los datos son claros: la cuota de mercado es mínima frente a países como Noruega, Países Bajos o Alemania. La **infraestructura de recarga** crece, pero **no al ritmo necesario** para generar confianza en el consumidor.',
        images: ['/assets/projects/movefast/movefast-electric-passenger-cars-registrations-spain.png'],
        captions: ['Matriculaciones de vehículos eléctricos en España vs. Europa'],
      },
      {
        label: '02. Investigación y Análisis',
        title: 'Los datos del mercado español',
        layout: 'image-grid',
        content: 'Los españoles conocen las ventajas del coche eléctrico - reducción de contaminación, ahorro en combustible, menor ruido, acceso sin restricciones a centros urbanos y beneficios fiscales - pero estas **no superan las barreras de compra**. Las tres razones principales por las que el coche eléctrico no termina de despegar son: **escasos puntos de carga** en autopistas y ciudades, **precio elevado** respecto al vehículo convencional, y **autonomía limitada** que genera **"ansiedad de rango"** en viajes largos.',
        images: [
          '/assets/projects/movefast/movefast-flota-vehiculos-electricos.png',
          '/assets/projects/movefast/movefast-evolucion-esp.png',
          '/assets/projects/movefast/movefast-recharging-points-spain.png',
          '/assets/projects/movefast/mf-estaciones-de-carga-en-europa-min.png',
          '/assets/projects/movefast/movefast-flota-coches-europa-2020.png',
        ],
        captions: [
          'Flota de vehículos eléctricos en España: cuota de mercado mínima',
          'Evolución de matriculaciones de vehículos eléctricos en España',
          'Puntos de recarga en España: infraestructura insuficiente',
          'Estaciones de carga en Europa: comparativa entre países',
          'Flota de coches eléctricos en Europa (2020): España a la cola',
        ],
      },
      {
        label: '02. Investigación y Análisis',
        title: 'Benchmarking - El hueco que nadie cubre',
        layout: 'image-grid',
        content: 'Analicé las principales aplicaciones del sector de recarga eléctrica disponibles en el mercado. Todas compartían funcionalidades similares: mapas interactivos con ubicación de estaciones de carga, filtros por voltaje y tipo de conector, favoritos, perfiles de usuario y pasarelas de pago integradas.\n\nLa mayoría presentaban una **usabilidad pobre** y un **diseño visual poco cuidado** - solo Iberdrola destacaba visualmente, pero sufría de rendimiento lento y funcionalidad limitada. Este **vacío en el mercado** justifica directamente nuestra propuesta de valor.',
        highlight: 'Ninguna de las aplicaciones analizadas ofrecía un **servicio de cambio de baterías**. MoveFast cubre un **vacío crítico** en el mercado.',
        images: [
          '/assets/projects/movefast/movefast-benchmarking-apps.png',
          '/assets/projects/movefast/movefast-benchmarking.png',
        ],
        captions: [
          'Apps analizadas: Electromaps, PlugSurfing, ChargeMap, Iberdrola y Wallbox',
          'Matriz comparativa de funcionalidades entre apps del sector',
        ],
      },
      {
        label: '03. Definición y Empatía',
        title: 'User Persona - Oriol Vallmajor',
        layout: 'full-image',
        content: 'Para dar forma a la experiencia, creé a Oriol Vallmajor: arquitecto, con ingresos por encima de la media, familiarizado con la tecnología y preocupado por la sostenibilidad. Oriol quiere viajar por España con su familia en un vehículo eléctrico. Es un **early adopter** dispuesto a invertir en movilidad sostenible, pero la **ansiedad por la autonomía** y la falta de infraestructura le generan inseguridad real.\n\nSu dolor principal **no es técnico - es emocional**: la incertidumbre de quedarse sin batería en medio de un viaje familiar. Necesita sentir que **tiene el control** y que siempre hay una **solución cerca**.',
        images: ['/assets/projects/movefast/movefast-user-persona.png'],
        captions: ['User Persona: Oriol Vallmajor, arquitecto early adopter de movilidad sostenible'],
      },
      {
        label: '03. Definición y Empatía',
        title: 'Mapa de empatía',
        layout: 'full-image',
        content: 'A través del mapa de empatía exploré la personalidad, necesidades, deseos y preocupaciones de Oriol. ¿Qué piensa cuando planifica un viaje largo? ¿Qué siente al ver que el punto de carga más cercano está a 80 km? ¿Qué oye de su entorno sobre los coches eléctricos? Los insights revelaron que la **barrera principal no es racional sino emocional**: la **"range anxiety"** - el miedo a quedarse tirado - es el factor que **más frena la decisión de compra**.',
        images: ['/assets/projects/movefast/movefast-mapa-empatia.png'],
        captions: ['Mapa de empatía de Oriol: pensamientos, sentimientos y frustraciones'],
      },
      {
        label: '03. Definición y Empatía',
        title: 'Customer Journey Map',
        layout: 'full-image',
        content: 'El journey map documentó la experiencia completa de Oriol: desde el momento en que decide comprar un coche eléctrico, pasando por la planificación de su primer viaje largo, hasta el momento crítico en que necesita recargar en ruta. Los **picos de frustración** se concentran en tres puntos: descubrir que **no hay puntos de carga** en su ruta habitual, llegar a un punto de carga y **encontrarlo ocupado**, y la **espera de más de 45 minutos** durante la recarga. Estos **puntos de dolor** definen las oportunidades de diseño.',
        images: ['/assets/projects/movefast/movefast-costumer-journey.png'],
        captions: ['Customer Journey Map: picos de frustración en recarga y planificación de rutas'],
      },
      {
        label: '04. Ideación y Arquitectura',
        title: 'Flujos de usuario y Wireframes',
        layout: 'whimsical-embed',
        content: 'Se diseñaron dos flujos principales en Whimsical:\n\n1. **Cambio de batería a domicilio**: El usuario abre la app → selecciona "Cambio a domicilio" → confirma ubicación → elige franja horaria → personal de MoveFast acude con batería cargada → se realiza el **intercambio en minutos**.\n\n2. **Reserva en punto de intercambio dinámico**: El usuario consulta el mapa → localiza el punto de intercambio más cercano (que cambia de ubicación semanalmente) → reserva fecha y hora → acude al punto → un operador realiza el cambio.\n\nAdemás de estos flujos principales, se añadieron **funcionalidades complementarias** no contempladas en el brief inicial: sistema de favoritos, filtros avanzados y notificaciones de nuevas ubicaciones.',
        embeds: [
          'https://whimsical.com/embed/CdxiEyLfhbfFUfhdi1XRcH',
          'https://whimsical.com/embed/TDfQTWmva6ALGvJdkPEE5o',
        ],
      },
      {
        label: '05. Diseño Visual y Prototipado',
        title: 'Prototipo interactivo',
        layout: 'figma-embed',
        content: 'Se desarrolló un **prototipo interactivo en Figma** con el flujo completo del usuario, desde la pantalla de inicio hasta el proceso completo de reserva. El prototipo incluye **animaciones de transición** entre pantallas y **estados de interacción** para simular la experiencia real.',
        figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfAzRuKJicjcwgMw2u1sYiO%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D531-71%26page-id%3D503%253A268%26scaling%3Dscale-down%26starting-point-node-id%3D582%253A4968',
      },
      {
        label: '05. Diseño Visual y Prototipado',
        title: 'Diseño de interfaces',
        layout: 'screens-grid',
        content: '**Splash screen** con animación de entrada del vehículo. **Onboarding de 4 pantallas**: puntos de carga actualizados, estado de ocupación en tiempo real, puntos de cambio de batería cercanos, y sistema de reserva. **Mapa interactivo** principal con puntos de carga, talleres de intercambio y opción de solicitar cambio a domicilio. **Menú lateral** con acceso a vehículos, baterías, pagos y notificaciones. **Filtros avanzados** por tipo de punto y disponibilidad. Vista de detalle de taller con horarios y disponibilidad. **Gestión de favoritos**. **Flujo completo de reserva** con selección de ubicación, fecha, hora y confirmación.',
        images: [
          '/assets/projects/movefast/movefast-pantalla-spinner-2.png',
          '/assets/projects/movefast/movefast-pantalla-spinner-1.png',
          '/assets/projects/movefast/movefast-pantalla-inicial-1.png',
          '/assets/projects/movefast/movefast-pantalla-inicial-2.png',
          '/assets/projects/movefast/movefast-pantalla-inicial-3.png',
          '/assets/projects/movefast/movefast-pantalla-inicial-4.png',
          '/assets/projects/movefast/movefast-pantalla-mapa.png',
          '/assets/projects/movefast/movefast-pantalla-menu.png',
          '/assets/projects/movefast/movefast-pantalla-filtros.png',
          '/assets/projects/movefast/movefast-pantalla-talleres.png',
          '/assets/projects/movefast/movefast-pantalla-favoritos.png',
          '/assets/projects/movefast/movefast-pantalla-escoger.png',
          '/assets/projects/movefast/movefast-pantalla-reserva.png',
          '/assets/projects/movefast/movefast-pantalla-aceptado.png',
        ],
        captions: [
          'Splash screen con animación del vehículo eléctrico',
          'Pantalla de carga con progreso de inicialización',
          'Onboarding: puntos de carga actualizados en tiempo real',
          'Onboarding: estado de ocupación de estaciones',
          'Onboarding: puntos de cambio de batería cercanos',
          'Onboarding: sistema de reserva anticipada',
          'Mapa interactivo principal con puntos de carga y talleres',
          'Menú lateral: vehículos, baterías, pagos y notificaciones',
          'Filtros avanzados por tipo de punto y disponibilidad',
          'Vista de detalle de taller con horarios y servicios',
          'Gestión de talleres favoritos del usuario',
          'Selección de ubicación para cambio de batería',
          'Formulario de reserva: fecha, hora y confirmación',
          'Confirmación de reserva aceptada con resumen',
        ],
      },
      {
        label: '06. Conclusión',
        title: 'Aprendizajes y Próximos Pasos',
        layout: 'center',
        content: 'Se entregó con éxito la **UX completa** de la aplicación móvil en **2 semanas**, abordando las dos soluciones propuestas: **servicio de cambio de batería bajo demanda** y **puntos de intercambio dinámicos**. El diseño incorpora funcionalidades estándar del sector al tiempo que introduce un **modelo de servicio innovador** que ningún competidor ofrece.',
        bullets: [
          'Ampliar el prototipo con pantallas de **perfil completo**, historial de pagos y gestión detallada de favoritos',
          '**Testing con usuarios reales** para validar si el servicio a domicilio o los puntos de intercambio generan mayor conversión',
          'Adaptación a **versión web responsive** para ampliar el acceso desde escritorio',
          '**Iteración de accesibilidad**: revisión WCAG de contraste, tamaños táctiles, lectores de pantalla y navegación por teclado',
        ],
      },
    ],
  },
  {
    slug: 'global-helping',
    title: 'Global Helping',
    client: 'Global Helping',
    year: '2021',
    category: 'Design Thinking',
    tags: ['Design Thinking', 'Social Impact', 'NGO', 'UX Research'],
    description: 'Plataforma web que reúne donaciones, voluntariado y crowdfunding en un solo lugar para dar visibilidad a ONGs locales frente a las grandes organizaciones internacionales.',
    longDescription: 'Vivimos en un mundo con **10 grandes problemáticas** identificadas por 15.000 científicos de 184 países: escasez de agua, sobrepesca, crecimiento demográfico, degradación del suelo, contaminación, extinción de especies y escasez alimentaria. A partir de la pregunta "¿Cómo podemos **mejorar la calidad de vida** de los más desfavorecidos?" nació Global Helping - una plataforma web que conecta personas solidarias con ONGs y causas sociales a través de **donaciones, voluntariado y crowdfunding**.',
    challenge: 'La investigación inicial reveló un problema inesperado: las **ONGs locales carecen de la capacidad y los recursos de comunicación** que tienen las grandes organizaciones internacionales. Tras encuestar a **48 personas**, el proyecto pivotó de un enfoque generalista a uno centrado en **dar visibilidad a estas organizaciones locales**. Además, **no existía ninguna plataforma** que reuniera donaciones, voluntariado y crowdfunding en un mismo sitio - cada servicio vivía aislado.',
    solution: 'Aplicando **Design Thinking end-to-end**, diseñé una plataforma web que **unifica tres servicios en uno**: donar a causas verificadas, apuntarse como voluntario y lanzar campañas de crowdfunding. El diseño se basa en un sistema visual con **Design Tokens** para garantizar consistencia y escalabilidad, y prioriza la **conexión emocional** con las causas a través de **storytelling visual**.',
    results: [
      'UX completa definida en 2 semanas (45 horas)',
      'Prototipo interactivo funcional en Figma con 3 flujos principales',
      'Design system con foundations, tokens y componentes reutilizables',
      'Caso de estudio publicado en Medium',
    ],
    stack: ['Figma', 'Whimsical', 'Adobe Illustrator', 'Adobe Photoshop', 'Miro', 'Google Forms'],
    cover: '/assets/projects/global-helping/global-helping-header.png',
    featured: false,
    projectMeta: {
      role: 'UX/UI Designer',
      industry: 'Non-Profit',
      output: 'Platform Design & Prototype',
      duration: '2 semanas (45 horas)',
      skills: ['Design Thinking', 'Surveys', 'User Persona', 'Journey Mapping', 'Design Tokens', 'Prototyping', 'Benchmarking', 'Wireframing', 'Visual Design', 'Interaction Design', 'Information Architecture', 'Responsive Design', 'Crowdfunding', 'Storytelling Visual'],
    },
    checks: [
      'Las ONGs locales carecen de recursos de comunicación frente a las grandes organizaciones internacionales',
      'No existía ninguna plataforma que reuniera donaciones, voluntariado y crowdfunding en un mismo sitio',
      'La desconexión emocional entre donantes y causas reduce la conversión y el compromiso recurrente',
    ],
    caseSections: [
      {
        label: '01. Descubrimiento',
        title: 'Research Questions y Brainstorming',
        layout: 'image-grid',
        content: 'El punto de partida fue un **brainstorming amplio** para mapear las problemáticas globales y detectar oportunidades de diseño. A partir de ahí, se formularon **Research Questions** divididas en tres categorías de actores: **Usuarios** (comportamiento y necesidades de personas solidarias), **Productos/Servicios** (qué oferta existe y qué falta) e **Instituciones** (rol y capacidades de ONGs y asociaciones).\n\nEstas preguntas guiaron toda la fase de investigación, evitando sesgos y asegurando que las **decisiones de diseño se basaran en datos reales**, no en suposiciones.',
        images: [
          '/assets/projects/global-helping/gh-brainstorming.png',
          '/assets/projects/global-helping/gh-research-questions.png',
        ],
        captions: [
          'Brainstorming: mapeo de problemáticas globales y oportunidades de diseño',
          'Research Questions organizadas por actores: usuarios, productos e instituciones',
        ],
      },
      {
        label: '01. Descubrimiento',
        title: 'Cuestionarios - El pivote del proyecto',
        layout: 'image-grid',
        content: 'Se diseñaron dos cuestionarios en Google Forms, dirigidos a personas con diferentes grados de experiencia en solidaridad y voluntariado. Se recogieron **48 respuestas** que revelaron un insight que **cambió la dirección del proyecto**.\n\nEl enfoque inicial era amplio: "¿Cómo ayudar a países subdesarrollados?" Pero los datos mostraron que el **problema real estaba más cerca**: las ONGs locales no tienen la capacidad de comunicación ni los recursos de las grandes organizaciones internacionales. El proyecto **pivotó hacia darles visibilidad** y herramientas.',
        highlight: 'Tras encuestar a 48 personas, el proyecto pivotó: el problema no era la falta de solidaridad, sino la **falta de visibilidad de las ONGs locales** frente a las internacionales.',
        images: [
          '/assets/projects/global-helping/gh-cuestionarios-2.png',
          '/assets/projects/global-helping/gh-cuestionarios-1.png',
        ],
        captions: [
          'Cuestionario dirigido a personas con experiencia en voluntariado',
          'Resultados: 48 respuestas que revelaron la falta de visibilidad de ONGs locales',
        ],
      },
      {
        label: '02. Definición',
        title: 'User Persona y Mapa de empatía',
        layout: 'image-grid',
        content: 'Con los datos de los cuestionarios, se construyó un **User Persona** que representa al usuario objetivo: una persona solidaria, con voluntad de ayudar pero frustrada por la **falta de plataformas** que le faciliten el proceso. El **mapa de empatía** profundizó en su personalidad, necesidades, deseos y miedos - revelando que la barrera principal no es la falta de interés, sino la **falta de confianza y transparencia** en las plataformas existentes.',
        images: [
          '/assets/projects/global-helping/gh-user-persona.png',
          '/assets/projects/global-helping/gh-mapa-empatia.png',
        ],
        captions: [
          'User Persona: persona solidaria frustrada por la fragmentación de plataformas',
          'Mapa de empatía: la barrera principal es la falta de confianza y transparencia',
        ],
      },
      {
        label: '02. Definición',
        title: 'Customer Journey Map',
        layout: 'full-image',
        content: 'El **Customer Journey Map** definió el viaje completo del usuario: desde que descubre una causa que le motiva, pasando por la búsqueda de una forma de ayudar, hasta la acción concreta (donar, ser voluntario o contribuir a crowdfunding). Los **puntos de mayor fricción** se identificaron en la **fragmentación de servicios** - el usuario tenía que saltar entre múltiples plataformas para encontrar opciones y ninguna le daba seguimiento ni **conexión emocional** con el impacto de su ayuda.',
        images: ['/assets/projects/global-helping/gh-customer-journey.png'],
        captions: ['Customer Journey Map: fricción en la fragmentación de servicios de donación y voluntariado'],
      },
      {
        label: '03. Ideación y Benchmarking',
        title: 'Análisis de competencia',
        layout: 'left-right',
        content: 'Se realizó un **benchmarking exhaustivo** evaluando servicios, productos, opiniones, valores y marketing de las plataformas existentes en el sector solidario.\n\nEl resultado confirmó la oportunidad: existían plataformas de donaciones, plataformas de voluntariado y plataformas de crowdfunding - pero **ninguna reunía los tres servicios en un mismo sitio**. El usuario que quería ayudar tenía que navegar entre múltiples webs, cada una con su registro, su interfaz y su lógica. Global Helping nace para **resolver esa fragmentación**.',
        highlight: 'No existía ninguna plataforma que reuniera **donaciones, voluntariado y crowdfunding** en un mismo sitio. Global Helping **cubre ese vacío**.',
        images: ['/assets/projects/global-helping/gh-benchmarking.png'],
        captions: ['Benchmarking: ninguna plataforma reunía donaciones, voluntariado y crowdfunding'],
      },
      {
        label: '04. Desarrollo',
        title: 'Foundations y Design Tokens',
        layout: 'image-grid',
        content: 'Se definió un sistema de **foundations** que incluye color, tipografía, iconografía, grid, espaciado, fotografía, animación y formato. La base del sistema son los **Design Tokens**: variables de diseño reutilizables que garantizan **consistencia visual** en toda la plataforma.\n\nLas ventajas de trabajar con tokens: mantenimiento más fácil de la consistencia, facilita la toma de decisiones, promueve la **escalabilidad**, permite la **propagación automática de cambios** y optimiza recursos del equipo de diseño y desarrollo.',
        images: [
          '/assets/projects/global-helping/gh-foundations.png',
          '/assets/projects/global-helping/gh-componentes.png',
        ],
        captions: [
          'Foundations del sistema: color, tipografía, iconografía, grid y espaciado',
          'Componentes UI: bloques de texto, cards, botones, inputs y navegación',
        ],
      },
      {
        label: '04. Desarrollo',
        title: 'De Wireframes a componentes',
        layout: 'full-image',
        content: 'El proceso fue de **menor a mayor fidelidad**: primero wireframes rápidos (esquemas de baja calidad, digitales o a mano) para validar la **estructura de información** y los flujos principales sin invertir tiempo en detalle visual. Una vez validada la arquitectura, se diseñaron los **componentes finales**: bloques de texto, iconos, cards, botones, campos de texto, selectores, barras de navegación, tablas y listas - todos construidos como **elementos independientes y combinables**.',
        images: ['/assets/projects/global-helping/gh-wireframing.png'],
        captions: ['Wireframes de baja fidelidad a componentes finales: evolución del diseño'],
      },
      {
        label: '05. Solución Final',
        title: 'Prototipo interactivo',
        layout: 'figma-embed',
        content: 'Se desarrolló un **prototipo funcional en Figma** con tres pantallas principales que demuestran el concepto core: **exploración de causas** y proyectos, detalle de una causa con opciones de **donación/voluntariado/crowdfunding**, y el flujo de contribución. El prototipo permite interactuar con la **navegación real** y validar la propuesta de valor.',
        figmaUrl: 'https://embed.figma.com/proto/ZU6SwljVsA0g9iAHhZ9oDj/Global-Helping?page-id=0%3A1&node-id=340-25451&p=f&viewport=249%2C246%2C0.06&t=ghMETNDpnq6X6hrN-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=340%3A23253&embed-host=share',
      },
      {
        label: '06. Conclusión',
        title: 'Aprendizajes y Próximos Pasos',
        layout: 'center',
        content: 'El mayor aprendizaje fue la importancia de **dejarse guiar por los datos**: las encuestas cambiaron completamente la dirección del proyecto. La investigación reveló que el problema no era la falta de solidaridad, sino la **fragmentación de servicios** y la **invisibilidad de las ONGs locales**. Global Helping resuelve ambos problemas en una **única plataforma**.',
        bullets: [
          '**Traducción multi-idioma** para ampliar el alcance a comunidades internacionales',
          'Sección de **actualizaciones de proyectos** para dar seguimiento al impacto de las donaciones',
          '**Mapa interactivo** del mundo con proyectos cercanos a la ubicación del usuario',
          'Fichas individuales de cada proyecto con **datos de contacto** de la ONG responsable',
          'Compartir en **redes sociales** y email para viralizar causas',
          '**Diseño responsive** con 5 breakpoints para cobertura total de dispositivos',
          '**API pública** para que ONGs integren la plataforma directamente en sus webs',
        ],
      },
    ],
  },
  {
    slug: 'banco-sabadell-design-system',
    title: 'Banco Sabadell - Design System',
    client: 'Banco Sabadell',
    year: '2022',
    category: 'Design Systems & UX Engineering',
    tags: ['Design Systems', 'Design Tokens', 'Component Library', 'UX Bancaria', 'Documentation', 'Accessibility'],
    description: 'Creación y documentación técnica del Design System del Banco Sabadell, construyendo una biblioteca de componentes escalable y una arquitectura de Design Tokens como única fuente de verdad para los equipos de producto e ingeniería.',
    longDescription: 'Lideré la creación y **documentación técnica** del Design System del Banco Sabadell, enfocado en la **escalabilidad** y la **coherencia visual** de sus productos digitales. El proyecto se centró en construir una base sólida de **Design Tokens** que permitiera a los equipos de producto e ingeniería trabajar de forma sincronizada bajo una única fuente de verdad.\n\nEl ecosistema digital de un banco opera sobre múltiples plataformas — web pública, banca online, app móvil y canales internos — con equipos independientes que tomaban decisiones visuales de forma aislada. Sin un sistema centralizado, cada producto acumulaba deuda de diseño: colores ligeramente distintos, tipografías inconsistentes, componentes duplicados y patrones de interacción divergentes.',
    challenge: 'La **UX bancaria** del ecosistema digital presentaba una fragmentación severa. Múltiples equipos trabajaban con estilos inconsistentes, generando deuda de diseño y fricción en el desarrollo. No existía una fuente única de verdad para la **biblioteca de componentes** ni patrones de interacción. Los **Design Tokens** no estaban definidos como concepto unificado: cada plataforma mantenía sus propios valores de color, tipografía y spacing. La **documentación técnica** era inexistente, lo que provocaba implementaciones dispares entre diseño y código.',
    solution: 'Se diseñó un sistema modular basado en **Design Tokens** como única fuente de verdad para Color (Azul Sabadell #006DFF, Neutros), Spacing (escala de 4px) y Tipografía. Se construyó una **biblioteca de componentes** basada en Átomos y Moléculas, garantizando la **coherencia visual** y la **escalabilidad** entre todas las plataformas. La **documentación técnica** se centralizó en Zeroheight con sincronización directa a Storybook para maximizar la eficiencia en desarrollo.',
    results: [
      'Reducción del 40% en tiempo de diseño de nuevas features',
      'Coherencia visual del 95% entre plataformas',
      '+200 componentes documentados y versionados',
      'Adoptado por 15 equipos de producto e ingeniería',
    ],
    stack: ['Figma', 'Zeroheight', 'Storybook', 'React'],
    cover: '/assets/projects/sabadell/banc-sabadell-header.png',
    gallery: [
      '/assets/projects/sabadell/banc-sabadell-header.png',
      '/assets/projects/sabadell/sabadell-components-16.png',
      '/assets/projects/sabadell/sabadell-components-1.png',
      '/assets/projects/sabadell/sabadell-screen-1.png',
      '/assets/projects/sabadell/sabadell-screen-9.png',
    ],
    featured: true,
    projectMeta: {
      role: 'Product Designer',
      industry: 'Fintech',
      output: 'UI Library & Documentation',
      duration: '4 meses',
      skills: ['Design Systems', 'Design Tokens', 'Component Library', 'UX Bancaria', 'Accessibility (WCAG)', 'Documentation', 'Governance', 'Cross-Platform Consistency', 'Responsive Design', 'Interaction Design'],
    },
    checks: [
      'Cada plataforma (web, app, banca online) mantenía sus propios valores de color, tipografía y spacing sin una fuente común',
      'La biblioteca de componentes estaba duplicada con variantes inconsistentes entre equipos, generando deuda de diseño acumulada',
      'Sin documentación técnica centralizada: las implementaciones divergían entre lo diseñado y lo desarrollado',
    ],
    caseSections: [
      // ── 01. El Problema: Fragmentación Digital ──
      {
        label: '01. El Problema',
        title: 'Un ecosistema bancario digital fragmentado',
        layout: 'center',
        content: 'El ecosistema digital de Banco Sabadell había crecido de forma orgánica durante años: web pública, banca online, app móvil y canales internos — cada uno con equipos independientes que tomaban decisiones de diseño aisladas. El resultado era una **UX bancaria** inconsistente donde un mismo cliente encontraba botones, colores, tipografías y flujos diferentes según el canal que utilizara.\n\nLa ausencia de **Design Tokens** como concepto unificado significaba que cada plataforma mantenía sus propios valores. Un botón primario podía tener variantes distintas entre la web y la app. La **biblioteca de componentes** estaba fragmentada con duplicados y sin **documentación técnica** que sirviera de referencia para los equipos de desarrollo.',
        highlight: 'Sin una fuente de verdad compartida, cada equipo reinventaba la rueda. El coste no era solo visual — era operativo: cada inconsistencia multiplicaba el tiempo de diseño, desarrollo y QA.',
      },
      // ── 02. Proceso Metodológico ──
      {
        label: '02. Proceso Metodológico',
        title: 'Metodología de construcción del sistema — 6 fases',
        layout: 'stepper',
        content: 'El proyecto siguió una metodología rigurosa de Design Systems Engineering, donde cada fase construye sobre la anterior para garantizar la **escalabilidad** y **coherencia visual** del ecosistema:',
        steps: [
          { title: 'Auditoría de Interfaz', description: 'Análisis exhaustivo de la fragmentación visual en los distintos portales del banco. Se documentaron todas las variantes de color, tipografía, spacing y componentes existentes en web, app y banca online para identificar la deuda de diseño y establecer el alcance del sistema de **Design Tokens**.' },
          { title: 'Definición de Átomos', description: 'Creación de la base visual del sistema: colores corporativos (Azul Sabadell #006DFF, escala de neutros), tipografía Sabadell, sistema de spacing basado en escala de 4px y grid responsive. Estos **Design Tokens** se convirtieron en la única fuente de verdad para todo el ecosistema.' },
          { title: 'Librería de Componentes', description: 'Construcción de la **biblioteca de componentes** basada en Átomos y Moléculas: botones con todos sus estados, inputs bancarios con validaciones, selectores, dropdowns, modales, calendarios y cards. Cada componente diseñado como reactivo, accesible y documentado con sus variantes.' },
          { title: 'Documentación de Comportamiento', description: 'Definición de estados (default, hover, active, focus, disabled, error, success), micro-interacciones y reglas de uso para cada componente. La **documentación técnica** incluye especificaciones de spacing, anatomía del componente y casos de uso bancarios específicos.' },
          { title: 'Governance y Handoff', description: 'Establecimiento del proceso de contribución para que diseñadores y desarrolladores adopten el sistema. Workflows de propuesta, revisión y aprobación de nuevos componentes. Sincronización entre Figma (diseño) y Storybook (código) mediante **Design Tokens**.' },
          { title: 'Aseguramiento de Calidad (QA)', description: 'Verificación de la implementación fiel en los productos finales. Revisión de **coherencia visual** entre diseño y código, testing de accesibilidad WCAG, validación de responsive behavior y comprobación de todos los estados de cada componente.' },
        ],
      },
      // ── 03. Diagrama del flujo del Design System ──
      {
        label: '03. Arquitectura del Sistema',
        title: 'Flujo de trabajo del Design System',
        layout: 'mermaid',
        content: 'El sistema opera como un ciclo continuo donde los **Design Tokens** globales alimentan la **biblioteca de componentes**, que se implementa en los productos digitales. El feedback de los equipos de producto retroalimenta la evolución del sistema, garantizando su **escalabilidad** a largo plazo.',
        mermaidCode: 'graph LR\n  A[Tokens Globales] --> B[Librería de Componentes]\n  B --> C[Implementación en Producto]\n  C --> D{Feedback & Evolución}\n  D --> A\n  style B fill:#006DFF,color:#fff',
        highlight: 'El ciclo de feedback es la clave de un Design System vivo. Sin governance y sin un proceso claro de evolución, el sistema se convierte en una librería estática que pierde relevancia con el tiempo.',
      },
      // ── 04. Átomos: Botones ──
      {
        label: '04. Átomos del Sistema',
        title: 'Botones — El componente más crítico del ecosistema bancario',
        layout: 'image-grid',
        content: 'Los botones son el átomo más utilizado de la **UX bancaria**. Se definieron todas las variantes (primario, secundario, ghost, icon-only) con sus estados completos (default, hover, pressed, focus, disabled) consumiendo directamente los **Design Tokens** de color y tipografía. Cada variante incluye versiones con y sin icono, en múltiples tamaños.',
        images: [
          '/assets/projects/sabadell/sabadell-components-16.png',
          '/assets/projects/sabadell/sabadell-components-17.png',
        ],
        captions: [
          'Sistema completo de botones: todas las variantes, tamaños y estados del ecosistema',
          'Botones con iconos y variantes de acción: primarios, secundarios, ghost e icon-only con todos sus estados',
        ],
      },
      // ── 04. Átomos: Controles de formulario ──
      {
        label: '04. Átomos del Sistema',
        title: 'Inputs, toggles y controles de formulario',
        layout: 'image-grid',
        content: 'Los controles de formulario son críticos en la **UX bancaria** — desde transferencias hasta apertura de cuentas, cada interacción depende de inputs fiables. Se diseñaron con todos sus estados (default, focus, filled, error, success, disabled) y con soporte completo de accesibilidad.',
        images: [
          '/assets/projects/sabadell/sabadell-components-1.png',
          '/assets/projects/sabadell/sabadell-components-7.png',
          '/assets/projects/sabadell/sabadell-components-8.png',
          '/assets/projects/sabadell/sabadell-components-9.png',
        ],
        captions: [
          'Inputs de texto: variantes con label, helper text, iconos y todos los estados de validación',
          'Dropdowns y selectores: estados completos con listado de opciones y variantes light/dark',
          'Toggles y switches: todas las variantes de tamaño y estado, incluyendo campo requerido',
          'Checkboxes: variantes con y sin label, estados de selección, focus y disabled',
        ],
      },
      // ── 04. Átomos: Selectores y navegación ──
      {
        label: '04. Átomos del Sistema',
        title: 'Tags, chips y selectores de fecha',
        layout: 'image-grid',
        content: 'Los componentes de selección y categorización permiten al usuario filtrar, navegar y seleccionar información dentro de los flujos bancarios. Los chips soportan selección simple y múltiple, mientras que el date picker se adaptó a los requisitos específicos de la banca (fechas de vencimiento, rangos de extractos).',
        images: [
          '/assets/projects/sabadell/sabadell-components-3.png',
          '/assets/projects/sabadell/sabadell-components-12.png',
          '/assets/projects/sabadell/sabadell-components-13.png',
          '/assets/projects/sabadell/sabadell-components-14.png',
        ],
        captions: [
          'Tags: variantes con label, icono e imagen para categorización de movimientos',
          'Chips de selección: estados default, hover, focus, selected y disabled',
          'Choice chips: selección simple y múltiple con variantes de icono y check',
          'Date picker: calendario completo con selección de día, mes y año',
        ],
      },
      // ── 05. Moléculas: Componentes compuestos ──
      {
        label: '05. Moléculas del Sistema',
        title: 'Modales, filtros y componentes compuestos',
        layout: 'image-grid',
        content: 'Las moléculas combinan múltiples átomos para resolver necesidades específicas de la **UX bancaria**. Los modales gestionan confirmaciones de operaciones, los filtros permiten segmentar movimientos y las listas presentan información financiera de forma clara y accesible.',
        images: [
          '/assets/projects/sabadell/sabadell-components-6.png',
          '/assets/projects/sabadell/sabadell-components-5.png',
          '/assets/projects/sabadell/sabadell-components-11.png',
          '/assets/projects/sabadell/sabadell-components-15.png',
        ],
        captions: [
          'Modal / Bottom sheet: diálogo con título, contenido scrollable y CTA primario',
          'Filtros: bottom sheet con categorías, checkboxes y acciones de aplicar/resetear',
          'Listas de contenido: items con estados default y hover para movimientos bancarios',
          'Cards de producto: variantes con logo, información y radio button de selección',
        ],
      },
      // ── 05. Moléculas: Stepper y calendario ──
      {
        label: '05. Moléculas del Sistema',
        title: 'Steppers, calendarios y badges',
        layout: 'image-grid',
        content: 'Los componentes de progreso y selección temporal son fundamentales en los flujos bancarios más complejos — apertura de cuenta, solicitud de préstamos y configuración de productos. Cada molécula combina átomos del sistema manteniendo la **coherencia visual** en cualquier contexto.',
        images: [
          '/assets/projects/sabadell/sabadell-components-2.png',
          '/assets/projects/sabadell/sabadell-components-10.png',
          '/assets/projects/sabadell/sabadell-components-4.png',
        ],
        captions: [
          'Stepper vertical: estados completed, started, not started y locked para flujos multi-paso',
          'Date picker compacto: variantes de calendario mensual, selector de mes y selector de año',
          'Badges numéricos: variantes de tamaño y color para notificaciones y contadores',
        ],
      },
      // ── 06. Resultado Final: Web ──
      {
        label: '06. Resultado Final',
        title: 'Pantallas Web — Banca digital unificada',
        layout: 'screens-grid',
        content: 'Las pantallas finales demuestran cómo todos los componentes de la **biblioteca de componentes** trabajan juntos en flujos bancarios reales. Cada pantalla está construida exclusivamente con Átomos y Moléculas del sistema, validando que la **escalabilidad** y **coherencia visual** se mantienen en los flujos más complejos del ecosistema — desde la home pública hasta la banca online.',
        images: [
          '/assets/projects/sabadell/sabadell-screen-1.png',
          '/assets/projects/sabadell/sabadell-screen-2.png',
          '/assets/projects/sabadell/sabadell-screen-3.png',
          '/assets/projects/sabadell/sabadell-screen-4.png',
          '/assets/projects/sabadell/sabadell-screen-5.png',
          '/assets/projects/sabadell/sabadell-screen-6.png',
          '/assets/projects/sabadell/sabadell-screen-7.png',
          '/assets/projects/sabadell/sabadell-screen-8.png',
        ],
        captions: [
          'Home pública: landing con hero, productos destacados y accesos directos',
          'Cuenta Online: listado de productos contratados con acceso a detalle',
          'Detalle de cuenta: movimientos con filtros, búsqueda y categorización',
          'Transferencias: formulario con validación en tiempo real y resumen',
          'Contratación de producto: flujo multi-paso con stepper y formularios',
          'Área de ayuda: FAQs, buscador y acceso a canales de atención',
          'Configuración: ajustes de cuenta, notificaciones y seguridad',
          'Centro de soporte: preguntas frecuentes con accordion y contacto',
        ],
      },
      // ── 06. Resultado Final: Mobile ──
      {
        label: '06. Resultado Final',
        title: 'Pantallas Mobile — Experiencia nativa',
        layout: 'screens-grid',
        content: 'La versión móvil demuestra la **coherencia visual** multiplataforma del sistema. Los mismos componentes se adaptan de forma nativa, manteniendo la identidad visual de Banco Sabadell mientras respetan los patrones de interacción móviles — bottom navigation, touch targets accesibles y flujos simplificados.',
        images: [
          '/assets/projects/sabadell/sabadell-screen-9.png',
          '/assets/projects/sabadell/sabadell-screen-10.png',
          '/assets/projects/sabadell/sabadell-screen-11.png',
          '/assets/projects/sabadell/sabadell-screen-12.png',
          '/assets/projects/sabadell/sabadell-screen-13.png',
          '/assets/projects/sabadell/sabadell-screen-14.png',
        ],
        captions: [
          'App móvil: home con resumen de cuentas y accesos rápidos',
          'App móvil: detalle de movimientos con filtros y categorías',
          'App móvil: flujo de transferencia con teclado numérico nativo',
          'App móvil: contratación de producto con stepper adaptado',
          'App móvil: configuración y ajustes de seguridad',
          'App móvil: centro de ayuda y atención al cliente',
        ],
        highlight: 'Web y App comparten el mismo lenguaje visual gracias al sistema de **Design Tokens**. Un cambio en un token se propaga instantáneamente a todas las plataformas, eliminando las inconsistencias que existían antes del proyecto.',
      },
    ],
  },
  {
    slug: 'imaginbank-digital-banking',
    title: 'Imaginbank: Heuristic Analysis & Optimization',
    client: 'CaixaBank (Imaginbank)',
    year: '2021',
    category: 'UX Audit',
    tags: ['Heuristic Evaluation', 'Nielsen', 'Usability Audit', 'Fintech', 'Mobile UX', 'Severity Analysis'],
    description: 'Auditoría de usabilidad de la app móvil de **Imaginbank (CaixaBank)** aplicando las **10 Heurísticas de Jakob Nielsen** para identificar fallos, clasificarlos por severidad y proponer optimizaciones con **impacto medible en ROI**.',
    longDescription: 'Imaginbank es el **banco 100% digital de CaixaBank**, lanzado en 2016 para operar exclusivamente en dispositivos móviles. Su misión: captar al **público joven y nativo digital** con servicios financieros ágiles y sin sucursales. Sin embargo, el mercado ha cambiado radicalmente desde su lanzamiento - neobancos como **Revolut, N26 y Bnext** han redefinido las expectativas de la Gen Z con **interfaces limpias**, onboardings de 5 minutos y experiencias que se sienten más como **apps de consumo** que como banca.',
    challenge: 'Como parte de un ejercicio de **evaluación experta**, realicé un **análisis heurístico** de la aplicación móvil de Imaginbank con el objetivo de identificar **oportunidades de mejora** en su experiencia de usuario. A través de los **principios de usabilidad de Nielsen**, examiné la interfaz y los flujos clave desde una perspectiva crítica, prestando especial atención a aspectos como la **visibilidad del estado del sistema**, la **consistencia**, el **control del usuario** y la **prevención de errores**.',
    solution: 'Durante el análisis surgieron **hallazgos significativos** relacionados con la **nomenclatura de ciertas funciones**, la **falta de flexibilidad en la navegación** y la **visibilidad limitada de opciones secundarias**. Además, se identificaron puntos de mejora en los **mensajes de error** y en la **retroalimentación de acciones críticas**. Este caso práctico resume los principales problemas detectados y propone **recomendaciones concretas** para optimizar la experiencia, con especial énfasis en **accesibilidad cognitiva**, **claridad de los flujos** y **soporte contextual**.',
    results: [
      'Auditoría completa en **5 horas** con **metodología Nielsen**',
      'Identificados **12+ fallos de usabilidad** categorizados por severidad',
      'Propuestas de mejora **priorizadas por impacto** en el usuario',
      'ROI estimado: **-35% llamadas a soporte**, **+20% conversión onboarding**',
    ],
    stack: ['Figma', 'Chrome'],
    cover: '/assets/projects/imaginbank/imaginbank-header.png',
    featured: true,
    projectMeta: {
      role: 'UX Auditor / Heuristic Evaluator',
      industry: 'Fintech',
      output: 'Heuristic Audit Report & ROI Analysis',
      duration: '5 horas',
      skills: ['Análisis Heurístico', 'Heurísticas de Nielsen', 'Severity Rating', 'UX Research', 'Usabilidad', 'Accesibilidad', 'ROI Analysis', 'Mobile Design', 'Auditoría UX', 'Evaluación Experta'],
    },
    checks: [
      'La app no conecta con la Gen Z pese a ser digital-first: neobancos como Revolut y N26 han elevado el estándar',
      'Nomenclatura confusa en funciones clave y falta de flexibilidad en la navegación principal',
      'Mensajes de error genéricos sin retroalimentación clara en acciones críticas como transferencias',
    ],
    caseSections: [
      {
        label: '01. Contexto',
        title: 'Un banco digital que compite con neobancos',
        layout: 'center',
        content: 'Imaginbank nació en 2016 como la apuesta de CaixaBank por captar al **público joven y nativo digital**. Banco **100% móvil**, sin sucursales, con servicios financieros diseñados para operar exclusivamente desde el smartphone. La propuesta era clara: competir con los **neobancos** que estaban redefiniendo la banca.\n\nPero el mercado evolucionó más rápido que el producto. **Revolut, N26 y Bnext** elevaron el estándar con **onboardings de 5 minutos**, interfaces ultra-limpias y experiencias que se sienten más como **apps de consumo** que como banca tradicional. La **Gen Z** espera ese nivel de calidad - y Imaginbank necesitaba entender por qué **no conectaba con ellos** a pesar de ser un producto digital-first.',
        images: ['/assets/projects/imaginbank/fotos/porcentaje-usuarios.png', '/assets/projects/imaginbank/fotos/porcentaje-uso-banca-electronica-2020.png'],
        captions: ['Evolución del porcentaje de usuarios de banca electrónica (2006-2020)', 'Uso de banca electrónica por franja de edad en 2020'],
      },
      {
        label: '01. Contexto',
        title: 'Objetivo y metodología',
        layout: 'center',
        content: 'El objetivo fue realizar una **evaluación experta** (heuristic evaluation) de la app de Imaginbank utilizando las **10 Heurísticas de Jakob Nielsen** como marco de análisis.\n\nNo se trataba de rediseñar, sino de **diagnosticar**: examinar cada **flujo clave** de la aplicación, documentar los **problemas de usabilidad** con capturas anotadas y proponer **recomendaciones priorizadas** por severidad e impacto. Se prestó especial atención a la **visibilidad del estado del sistema**, la **consistencia**, el **control del usuario** y la **prevención de errores**.',
      },
      {
        label: '02. Análisis Heurístico',
        title: 'H1 - Visibilidad del estado del sistema',
        layout: 'center',
        content: 'El sistema debe mantener al usuario informado en todo momento sobre lo que está ocurriendo, mediante **feedback apropiado** y en un tiempo razonable.\n\nEn esta pantalla de la app, la **Heurística #1 falla** porque no existe ningún indicador visual que confirme al usuario que su transferencia se está procesando. La ausencia de un **spinner, barra de progreso o mensaje de estado** deja al usuario en la incertidumbre - un problema crítico cuando se trata de **dinero real**.\n\n**Hallazgo:** La app no proporciona feedback visual suficiente al realizar acciones críticas como transferencias o pagos. El usuario no sabe si una operación está en proceso, se ha completado o ha fallado.\n\n**Recomendación:** Implementar sistema de feedback con estados de progreso, confirmaciones visuales claras y notificaciones en tiempo real para todas las operaciones financieras.',
        highlight: 'La falta de feedback en **acciones financieras críticas** compromete la **confianza del usuario** en los momentos donde más la necesita.',
        images: ['/assets/projects/imaginbank/fotos/mostrar-estado.png'],
        captions: ['Visibilidad del estado del sistema — Pantalla de login y home'],
      },
      {
        label: '02. Análisis Heurístico',
        title: 'H4 - Consistencia y estándares',
        layout: 'center',
        content: 'Los usuarios no deberían tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.\n\nEn estas pantallas se evidencia cómo la **Heurística #4 se incumple** de forma sistemática: la misma acción de enviar dinero aparece como "Transferir", "Enviar" y "Bizum" en diferentes secciones. La **iconografía** no sigue un **lenguaje visual coherente** y algunos **patrones de interacción** varían entre pantallas similares.\n\n**Hallazgo:** Inconsistencias en la nomenclatura de funciones: las mismas acciones reciben nombres diferentes según la sección. La iconografía no sigue un lenguaje visual coherente.\n\n**Recomendación:** Crear un sistema de design tokens unificado con nomenclatura consistente. Auditar todos los labels y unificar terminología en un glosario UX.',
        highlight: 'La **nomenclatura inconsistente** entre secciones genera **confusión cognitiva** - el usuario tiene que "reaprender" la interfaz en cada pantalla.',
        images: ['/assets/projects/imaginbank/fotos/consistencia-y-estandares.png', '/assets/projects/imaginbank/fotos/consistencia-y-estandares-2.png'],
        captions: ['Consistencia y estándares — Tienda WiVai con branding inconsistente', 'Consistencia y estándares — Secciones Planet con layouts dispares'],
      },
      {
        label: '02. Análisis Heurístico',
        title: 'H3 - Control y libertad del usuario',
        layout: 'center',
        content: 'Los usuarios necesitan una **"salida de emergencia"** clara para abandonar estados no deseados sin tener que pasar por un proceso extenso.\n\nEn estas capturas se observa cómo la **Heurística #3 se vulnera** de forma crítica: la **falta de flexibilidad** impide al usuario **deshacer acciones**, volver atrás de forma intuitiva o acceder a **opciones secundarias** sin recorrer múltiples pantallas.\n\n**Hallazgo:** La navegación es rígida: no hay opción de deshacer acciones, volver atrás es confuso y las opciones secundarias están enterradas en submenús.\n\n**Recomendación:** Implementar acción "Undo" en el flujo de transacciones. Añadir accesos directos contextuales y simplificar la navegación de retorno.',
        images: ['/assets/projects/imaginbank/fotos/control-y-libertad-del-usuario.png'],
        captions: ['Control y libertad del usuario — Flujo de ahorro y pantalla de error'],
      },
      {
        label: '02. Análisis Heurístico',
        title: 'H5 / H9 - Prevención de errores y recuperación',
        layout: 'center',
        content: 'Un diseño cuidadoso que **prevenga errores** es mejor que buenos mensajes de error. Y cuando los errores ocurren, el sistema debe expresarlos en **lenguaje claro** y ofrecer una **solución constructiva**.\n\nEn estas pantallas se identifica cómo las **Heurísticas #5 y #9 fallan simultáneamente**: los **mensajes de error son genéricos** ("Ha ocurrido un error") sin orientar al usuario hacia la solución.\n\n**Hallazgo:** Los mensajes de error son genéricos y no orientan al usuario hacia la solución. No existen confirmaciones claras ni mecanismos de "undo" en operaciones financieras.\n\n**Recomendación:** Rediseñar mensajes de error con lenguaje claro y accionable. Añadir confirmación previa en operaciones irreversibles y opción de cancelar/revertir.',
        highlight: 'Los **mensajes de error genéricos** en operaciones financieras no solo frustran - **erosionan activamente la confianza** en la plataforma.',
        images: ['/assets/projects/imaginbank/fotos/prevenir-errores.png', '/assets/projects/imaginbank/fotos/comunicar-errores-con-claridad.png'],
        captions: ['Prevención de errores — Error IBAN genérico sin guía de solución', 'Comunicación de errores — Gestión de notificaciones sin feedback claro'],
      },
      {
        label: '02. Análisis Heurístico',
        title: 'H8 - Diseño estético y minimalista',
        layout: 'center',
        content: 'Cada unidad extra de información compite con las unidades relevantes y **disminuye su visibilidad relativa**.\n\nEn estas pantallas vemos cómo la **Heurística #8 presenta debilidades**: aunque la estética general era limpia, se detectaron áreas donde la **jerarquía visual era confusa** y **elementos decorativos competían** con la información funcional.\n\n**Hallazgo:** La jerarquía visual es confusa en algunas pantallas. Elementos decorativos compiten con información funcional. Bizum y transferencias rápidas no tienen la prominencia que su frecuencia de uso justifica.\n\n**Recomendación:** Aplicar progressive disclosure. Priorizar visualmente las 3-4 acciones más frecuentes. Reducir ruido visual en pantallas de información financiera.',
        images: ['/assets/projects/imaginbank/fotos/estetica-y-minimalismo.png'],
        captions: ['Diseño estético y minimalista — Home con jerarquía visual confusa'],
      },
      {
        label: '03. Definición y Empatía',
        title: 'El usuario joven - perfil y frustraciones',
        layout: 'center',
        content: 'El target de Imaginbank es claro: **jóvenes de 18-30 años**, nativos digitales, **usuarios intensivos de apps de consumo** que esperan la misma calidad de experiencia en su app bancaria.\n\nSu frustración nace de una interfaz que **no habla su lenguaje**: **nomenclatura bancaria tradicional** en lugar de términos directos, flujos que requieren **demasiados pasos** para acciones simples, y una experiencia que se siente como "la app del banco de mis padres" en lugar de una **herramienta financiera moderna**. La brecha entre expectativas (definidas por **Revolut, N26**) y realidad (Imaginbank) es lo que genera **abandono**.',
      },
      {
        label: '03. Definición y Empatía',
        title: 'Puntos de fricción en el journey',
        layout: 'center',
        content: 'El journey del usuario con Imaginbank revela **tres momentos críticos**: el **onboarding** (demasiado largo y con terminología bancaria), la **primera transferencia** (sin feedback claro ni confirmación visual), y la **gestión de tarjetas** (opciones enterradas en submenús).\n\nEstos **puntos de fricción** coinciden directamente con las heurísticas incumplidas: **falta de visibilidad (H1)**, **navegación rígida (H3)** y **prevención de errores insuficiente (H5)**. La frustración acumulada en estas **micro-interacciones** es lo que lleva al usuario a probar alternativas donde estas acciones se resuelven en **2-3 taps**.',
      },
      {
        label: '04. Propuestas de Mejora',
        title: 'Recomendaciones priorizadas',
        layout: 'center',
        content: 'Basándome en la **severidad y el impacto** de cada hallazgo, las propuestas de mejora se organizaron en **tres niveles de prioridad**:',
        bullets: [
          '**Crítico** - Rediseñar el **sistema de feedback** de acciones financieras: **confirmaciones visuales claras**, estados de progreso y **mensajes de error constructivos** que guíen al usuario hacia la solución',
          '**Alto** - Unificar la **nomenclatura** en toda la app: lenguaje **consistente, directo** y alineado con el vocabulario del usuario joven, eliminando **jerga bancaria innecesaria**',
          '**Alto** - Flexibilizar la **navegación**: accesos directos a acciones frecuentes (**Bizum, transferencias**), **"deshacer" accesible** y opciones secundarias visibles sin explorar submenús',
          '**Medio** - Optimizar la **jerarquía visual**: priorizar las **3-4 acciones más frecuentes** en la pantalla principal, reducir el **ruido visual** y aplicar **progressive disclosure**',
        ],
        bulletEvidence: [
          { image: '/assets/projects/imaginbank/fotos/mostrar-estado.png', caption: 'H1 - Visibilidad del estado del sistema' },
          { image: '/assets/projects/imaginbank/fotos/consistencia-y-estandares.png', caption: 'H4 - Consistencia y estándares' },
          { image: '/assets/projects/imaginbank/fotos/control-y-libertad-del-usuario.png', caption: 'H3 - Control y libertad del usuario' },
          { image: '/assets/projects/imaginbank/fotos/estetica-y-minimalismo.png', caption: 'H8 - Diseño estético y minimalista' },
        ],
      },
      {
        label: '04. Propuestas de Mejora',
        title: 'Cambios arquitectónicos y visuales',
        layout: 'center',
        content: 'Las mejoras propuestas abarcan tanto la **arquitectura de información** como el **diseño visual**. A nivel arquitectónico: **simplificación de la navegación** principal a **4-5 secciones claras**, **accesos directos contextuales** y reducción de la profundidad de los flujos más frecuentes. A nivel visual: sistema de **feedback con micro-interacciones**, **jerarquía tipográfica revisada** para priorizar la información financiera clave, y un **lenguaje visual** más cercano al estándar de los neobancos.',
        images: ['/assets/projects/imaginbank/fotos/mejoras-ux.png'],
        captions: ['Wireframes de mejoras UX propuestas'],
      },
      {
        label: '04. Presentación',
        title: 'Capturas de la app',
        layout: 'screens-grid',
        content: 'Capturas reales de la interfaz de **Imaginbank**: las pantallas que se analizaron durante el audit heurístico, mostrando la UI tal y como la encuentra el usuario.',
        images: [
          '/assets/projects/imaginbank/fotos/portada-ux.png',
          '/assets/projects/imaginbank/fotos/foto-1024x768.png',
          '/assets/projects/imaginbank/fotos/mostrar-estado.png',
          '/assets/projects/imaginbank/fotos/estetica-y-minimalismo.png',
          '/assets/projects/imaginbank/fotos/atajos-flexibilidad-eficiencia.png',
          '/assets/projects/imaginbank/fotos/hablar-lenguaje.png',
          '/assets/projects/imaginbank/fotos/consistencia-y-estandares.png',
          '/assets/projects/imaginbank/fotos/consistencia-y-estandares-2.png',
          '/assets/projects/imaginbank/fotos/control-y-libertad-del-usuario.png',
          '/assets/projects/imaginbank/fotos/aliviar-la-carga-en-memoria-del-usuario.png',
          '/assets/projects/imaginbank/fotos/prevenir-errores.png',
          '/assets/projects/imaginbank/fotos/comunicar-errores-con-claridad.png',
          '/assets/projects/imaginbank/fotos/ayuda-y-documentacion.png',
        ],
        captions: [
          'Portada — Mockup 3D de Imaginbank',
          'Vista general — Perfil, tarjetas y secciones',
          'H1 — Login y pantalla de inicio',
          'H8 — Home con perfil de usuario',
          'H7 — Recibos y actividad diaria',
          'H2 — Retirar dinero y préstamos',
          'H4 — Tienda WiVai (consistencia)',
          'H4 — Secciones Planet y Destacado',
          'H3 — Flujo de ahorro y errores',
          'H6 — Dashboard y seguros',
          'H5 — Error de IBAN genérico',
          'H9 — Gestión de notificaciones',
          'H10 — Chatbot Gina de ayuda',
        ],
      },
      {
        label: '05. ROI & Impacto',
        title: 'Retorno de inversión de las mejoras UX',
        layout: 'center',
        content: 'La auditoría heurística no es solo un ejercicio académico - cada hallazgo tiene un **impacto directo y medible** en el negocio. Los problemas de usabilidad identificados generan **fricción que se traduce en costes reales**: llamadas a soporte, abandono de onboarding, y usuarios que migran a la competencia.\n\nAplicar las mejoras propuestas no solo optimiza la experiencia del usuario, sino que genera un **retorno de inversión tangible** para la organización:',
        bullets: [
          '**-35% llamadas a soporte** - Mensajes de error claros y feedback visual adecuado reducen drásticamente las consultas de "¿qué ha pasado con mi transferencia?" que saturan el call center',
          '**+20% tasa de conversión en onboarding** - Simplificar el registro y eliminar jerga bancaria del flujo inicial reduce el abandono en los primeros 5 minutos críticos',
          '**+15 puntos NPS (Net Promoter Score)** - Una experiencia consistente, con control del usuario y prevención de errores, convierte detractores en promotores activos',
          '**-40% tasa de abandono en flujos clave** - Navegación flexible con "undo", accesos directos y progressive disclosure mantienen al usuario dentro del flujo sin frustración',
        ],
        highlight: 'Cada **punto de fricción eliminado** no solo mejora la experiencia - **reduce costes operativos** y **aumenta la retención**. La inversión en UX se paga sola cuando los usuarios dejan de llamar a soporte para preguntar "¿dónde está mi dinero?".',
      },
    ],
  },
  {
    slug: 'iberia-flight-experience',
    title: 'Iberia - Flight Experience',
    client: 'Iberia',
    year: '2023',
    category: 'Digital Product Design & Design Systems',
    tags: ['Design Systems', 'Design Tokens', 'Component Library', 'Cross-Platform Consistency', 'Information Architecture', 'Digital Product Design'],
    description: 'Creación de un Sistema de Diseño unificado para el ecosistema digital de Iberia (Web/App), implementando una arquitectura de Design Tokens y una Librería de Componentes escalable para eliminar la fragmentación visual entre plataformas.',
    longDescription: 'El núcleo de este proyecto fue la creación de un Sistema de Diseño unificado para el ecosistema digital de Iberia. Implementé una arquitectura de **Design Tokens** y una **Librería de Componentes** escalable, eliminando la fragmentación visual entre la Web y la App para optimizar tanto la experiencia de usuario como la **Eficiencia en Desarrollo**.\n\nEl ecosistema digital de una aerolínea opera sobre múltiples plataformas con equipos independientes. Sin una fuente de verdad compartida, cada equipo tomaba decisiones visuales de forma aislada: colores ligeramente distintos, espaciados inconsistentes y componentes duplicados. La **Arquitectura de Información** debía unificarse bajo un sistema coherente que garantizara la **Consistencia Multiplataforma** en cada punto de contacto digital.\n\nEl objetivo: diseñar un sistema basado en **Átomos y Moléculas** que permitiera escalar el producto digital sin perder coherencia visual, con **Design Tokens** como única fuente de verdad y una **Librería de Componentes** reactivos y accesibles.',
    challenge: 'El ecosistema digital existente presentaba fragmentación visual severa entre Web y App. Los **Design Tokens** no existían como concepto unificado: cada plataforma mantenía sus propios valores de color, tipografía y spacing. La **Librería de Componentes** estaba duplicada con variantes inconsistentes, lo que generaba deuda de diseño y ralentizaba la **Eficiencia en Desarrollo**. La **Arquitectura de Información** difería entre canales, creando una experiencia desconectada para el usuario.',
    solution: 'Se diseñó un sistema de **Design Tokens** como única fuente de verdad para Color (Rojo Iberia, Neutros), Spacing y Tipografía. Se construyó una **Librería de Componentes** basada en **Átomos y Moléculas**, garantizando la **Consistencia Multiplataforma** entre Web y App. La **Arquitectura de Información** se redefinió para unificar flujos digitales, y se documentó todo el sistema para maximizar la **Eficiencia en Desarrollo** en la implementación.',
    results: [
      'Reducción del 60% en inconsistencias visuales entre Web y App',
      'Librería de +40 componentes reactivos y accesibles',
      'Tiempo de desarrollo de nuevas features reducido un 35%',
      'Adopción del 100% de Design Tokens en ambas plataformas',
    ],
    stack: ['Figma', 'Storybook', 'Zeroheight', 'Swift UI'],
    cover: '/assets/projects/iberia/iberia-header.png',
    gallery: [
      '/assets/projects/iberia/iberia-header.png',
      '/assets/projects/iberia/iberia-iconos.png',
      '/assets/projects/iberia/iberia-components-6.png',
      '/assets/projects/iberia/iberia-components-1.png',
      '/assets/projects/iberia/Iberia-screen-1.png',
      '/assets/projects/iberia/Iberia-screen-8.png',
    ],
    featured: true,
    projectMeta: {
      role: 'Design System Lead',
      industry: 'Travel',
      output: 'Unified Design System & Tokens',
      duration: '12 semanas',
      skills: ['Design Systems', 'Design Tokens', 'Component Library', 'Cross-Platform Consistency', 'Information Architecture', 'Digital Product Design', 'Atomic Design', 'Accessibility (WCAG)', 'Design Ops', 'Responsive Design', 'Prototyping', 'Documentation'],
    },
    checks: [
      'Sin una fuente de verdad compartida: Web y App mantenían estilos, componentes y tokens independientes',
      'Un botón primario tenía 4 variantes distintas entre plataformas — ninguna era la "correcta"',
      'La deuda de diseño acumulada ralentizaba el desarrollo de nuevas features un 35%',
    ],
    caseSections: [
      // ── 01. El Problema: Fragmentación Digital ──
      {
        label: '01. El Problema: Fragmentación Digital',
        title: 'Un ecosistema digital fragmentado',
        layout: 'center',
        content: 'Partíamos de un ecosistema digital fragmentado, con una deuda técnica y visual considerable. La falta de un sistema centralizado generaba una experiencia de usuario incoherente y aumentaba los costes de mantenimiento.\n\nLa web y la app de Iberia habían evolucionado de forma independiente durante años: equipos distintos, decisiones de diseño aisladas y sin una fuente de verdad compartida. El resultado era una experiencia rota donde un mismo usuario encontraba botones, colores, tipografías y flujos diferentes según la plataforma que utilizara.',
        highlight: 'Cada plataforma mantenía sus propios valores de color, tipografía y spacing. Un botón primario tenía 4 variantes distintas entre Web y App — ninguna era la "correcta" porque no existía una referencia centralizada.',
      },
      // ── 02. Proceso Metodológico ──
      {
        label: '02. Proceso Metodológico',
        title: 'Stepper vertical de producto - 6 fases técnicas',
        layout: 'stepper',
        content: 'El proyecto siguió una metodología rigurosa de Digital Product Design, donde cada fase construye sobre la anterior para garantizar la **Consistencia Multiplataforma** del ecosistema:',
        steps: [
          { title: 'Auditoría UI', description: 'Mapeo exhaustivo de inconsistencias entre plataformas. Se documentaron todas las variantes de color, tipografía, spacing y componentes existentes en Web y App para identificar la fragmentación visual y establecer el alcance del sistema de **Design Tokens**.' },
          { title: 'Definición de Tokens', description: 'Establecimiento de la "Single Source of Truth" para estilos. Se definieron **Design Tokens** para Color (Rojo Iberia #E62232, Neutros), Spacing (escala de 4px) y Tipografía, permitiendo que cualquier cambio global se aplique instantáneamente a todo el producto.' },
          { title: 'Construcción de Librería', description: 'Desarrollo de la **Librería de Componentes** basada en **Átomos y Moléculas**. Cada componente fue diseñado como reactivo y accesible, desde botones y selectores hasta listas y cards, garantizando su reutilización en ambas plataformas.' },
          { title: 'Mejora de Flujos Online', description: 'Optimización del Check-in digital y servicios adicionales (Ancillaries) utilizando los nuevos componentes del sistema. La **Arquitectura de Información** se rediseñó para priorizar las acciones críticas en cada paso del flujo.' },
          { title: 'Prototipado Sistémico', description: 'Validación de interacciones usando la nueva **Librería de Componentes**. Cada prototipo se construyó exclusivamente con componentes del sistema para verificar la **Consistencia Multiplataforma** y la **Eficiencia en Desarrollo**.' },
          { title: 'Documentación Handoff', description: 'Guías claras para asegurar una implementación fiel en código. Documentación de cada **Design Token**, especificaciones de componentes y reglas de uso para maximizar la **Eficiencia en Desarrollo** del equipo.' },
        ],
      },
      // ── 03. Iconografía ──
      {
        label: '03. Foundations del Sistema',
        title: 'Iconografía - Lenguaje visual unificado',
        layout: 'full-image',
        content: 'Se definió una librería de iconografía completa como parte de las **Foundations** del sistema. Cada icono sigue las mismas reglas de construcción: grid de 24px, trazo consistente y alineación pixel-perfect. La librería cubre todos los casos de uso del ecosistema digital — desde navegación y acciones hasta estados e información contextual.',
        images: [
          '/assets/projects/iberia/iberia-iconos.png',
        ],
        captions: [
          'Librería de iconografía completa del Design System de Iberia',
        ],
        highlight: 'Una librería de iconos unificada garantiza que cualquier equipo — Web o App — utilice exactamente el mismo lenguaje visual, eliminando las inconsistencias entre plataformas.',
      },
      // ── 04. Átomos: Componentes base ──
      {
        label: '04. Átomos del Sistema',
        title: 'Botones - El componente más crítico',
        layout: 'image-grid',
        content: 'Los botones son el átomo más utilizado del ecosistema. Se definieron todas las variantes (primario, secundario, ghost, disabled) con sus estados (default, hover, active, focus) consumiendo directamente los **Design Tokens** de color y tipografía. Cada variante está documentada con sus reglas de uso.',
        images: [
          '/assets/projects/iberia/iberia-components-6.png',
          '/assets/projects/iberia/iberia-components-5.png',
        ],
        captions: [
          'Sistema completo de botones: primarios, secundarios, ghost y disabled con todos sus estados',
          'Botones con variantes de color, hover y focus para los diferentes contextos del ecosistema',
        ],
      },
      {
        label: '04. Átomos del Sistema',
        title: 'Controles de formulario y navegación',
        layout: 'image-grid',
        content: 'Cada control de formulario fue diseñado como átomo independiente con todos sus estados. Los selectores de fecha, radio buttons, toggles, tabs y controles de navegación consumen **Design Tokens** directamente, garantizando coherencia visual en cualquier contexto.',
        images: [
          '/assets/projects/iberia/iberia-components-2.png',
          '/assets/projects/iberia/iberia-components-4.png',
          '/assets/projects/iberia/iberia-components-3.png',
          '/assets/projects/iberia/iberia-components-9.png',
        ],
        captions: [
          'Selector de fechas: calendario con estados de selección y rango basado en tokens',
          'Radio buttons: variantes con estados (default, selected, hover, error)',
          'Toggles y chips: componentes de selección con todas sus variantes de estado',
          'Controles de navegación: botones de dirección con estados para paginación y carruseles',
        ],
      },
      {
        label: '04. Átomos del Sistema',
        title: 'Tabs y autenticación social',
        layout: 'image-grid',
        content: 'Los componentes de navegación por tabs y los botones de autenticación social se diseñaron como átomos reutilizables. Los tabs soportan configuraciones de 2, 3 y 4 elementos, mientras que los botones sociales mantienen la identidad de cada plataforma respetando el sistema de spacing y tipografía de Iberia.',
        images: [
          '/assets/projects/iberia/iberia-components-14.png',
          '/assets/projects/iberia/iberia-components-13.png',
        ],
        captions: [
          'Sistema de tabs: variantes de 2, 3 y 4 elementos con indicador activo basado en tokens',
          'Botones de autenticación social: Facebook, Google y LinkedIn integrados en el sistema',
        ],
      },
      // ── 05. Moléculas: Componentes compuestos ──
      {
        label: '05. Moléculas del Sistema',
        title: 'Cards de contenido y servicios',
        layout: 'image-grid',
        content: 'Las cards son las moléculas más versátiles del sistema. Se diseñaron múltiples tipologías — cards de destino, de servicio, de información y de valor — cada una combinando átomos (iconos, botones, tipografía) siguiendo patrones predefinidos de layout y spacing.',
        images: [
          '/assets/projects/iberia/iberia-components-10.png',
          '/assets/projects/iberia/iberia-components-11.png',
          '/assets/projects/iberia/iberia-components-12.png',
          '/assets/projects/iberia/iberia-components-18.png',
        ],
        captions: [
          'Cards de destino: imagen, título, descripción y CTA para guías de viaje',
          'Cards de servicio: iconografía, título y descripción para servicios digitales',
          'Cards de valor: propuesta de valor de Iberia Plus (Práctico, Exclusivo, Especial, Cómodo)',
          'Cards de equipaje: variantes responsive del servicio de recogida a domicilio',
        ],
      },
      {
        label: '05. Moléculas del Sistema',
        title: 'Banners, tarjetas de fidelización y datos de pasajero',
        layout: 'image-grid',
        content: 'Los componentes más complejos del sistema combinan múltiples átomos para crear experiencias ricas. Los hero banners, las tarjetas Iberia Plus y las cards de pasajero son moléculas que mantienen la **Consistencia Multiplataforma** en los puntos de contacto más visibles del ecosistema.',
        images: [
          '/assets/projects/iberia/iberia-components-1.png',
          '/assets/projects/iberia/iberia-components-7.png',
          '/assets/projects/iberia/iberia-components-8.png',
          '/assets/projects/iberia/iberia-components-15.png',
        ],
        captions: [
          'Hero banners: variantes responsive con imagen de fondo, título y CTA',
          'Banners promocionales: variantes de layout para campañas y contenido editorial',
          'Tarjetas Iberia Plus: Clásica, Plata, Oro y Platino con información de nivel oneworld',
          'Card de pasajero: datos del viajero con información de equipaje para selección de asientos',
        ],
      },
      {
        label: '05. Moléculas del Sistema',
        title: 'Tarjetas de fidelización y selección de vuelo',
        layout: 'image-grid',
        content: 'Las tarjetas del programa de fidelización y la fila de selección de vuelo son moléculas críticas del ecosistema. Se diseñaron múltiples variantes responsive para adaptarse a diferentes contextos — desde la home hasta el flujo de reserva.',
        images: [
          '/assets/projects/iberia/iberia-components-17.png',
          '/assets/projects/iberia/iberia-components-20.png',
          '/assets/projects/iberia/iberia-components-19.png',
        ],
        captions: [
          'Tarjeta Clásica Iberia Plus: variantes de tamaño y layout para diferentes contextos',
          'Cards de fidelización: variantes completas con imagen, texto y CTA para captación',
          'Fila de selección de vuelo: horario, operador y tarifas (Turista, Premium, Business)',
        ],
        highlight: 'Los componentes de listas, botones y selectores se diseñaron como **Átomos y Moléculas** reutilizables. Cada componente incluye todas sus variantes (estados, tamaños, temas) documentadas para maximizar la **Eficiencia en Desarrollo**.',
      },
      // ── 06. Organismos: Estructura de página ──
      {
        label: '06. Organismos del Sistema',
        title: 'Header y Footer - Estructura global',
        layout: 'image-grid',
        content: 'El header y el footer son los organismos que enmarcan toda la experiencia digital de Iberia. Se diseñaron variantes responsive del header (desktop completo, tablet y móvil) y un footer con toda la información institucional, accesibilidad y enlaces legales.',
        images: [
          '/assets/projects/iberia/iberia-components-22.png',
          '/assets/projects/iberia/iberia-components-21.png',
        ],
        captions: [
          'Header responsive: variantes desktop, tablet y mobile con navegación adaptativa',
          'Footer institucional: enlaces, información legal y accesibilidad sobre fondo Rojo Iberia',
        ],
      },
      // ── 07. Pantallas finales ──
      {
        label: '07. Resultado Final',
        title: 'Pantallas Web - Flujos de reserva y pago',
        layout: 'screens-grid',
        content: 'Las pantallas finales demuestran cómo todos los componentes del sistema trabajan juntos en flujos reales. Cada pantalla está construida exclusivamente con **Átomos y Moléculas** de la librería, validando que el sistema soporta los flujos más complejos del ecosistema — desde la selección de vuelo hasta el pago.',
        images: [
          '/assets/projects/iberia/Iberia-screen-1.png',
          '/assets/projects/iberia/Iberia-screen-2.png',
          '/assets/projects/iberia/Iberia-screen-3.png',
          '/assets/projects/iberia/Iberia-screen-4.png',
          '/assets/projects/iberia/Iberia-screen-5.png',
          '/assets/projects/iberia/Iberia-screen-6.png',
          '/assets/projects/iberia/Iberia-screen-7.png',
        ],
        captions: [
          'Selección de vuelo de ida: tabla de horarios con tarifas y filtros',
          'Detalle de vuelo seleccionado: resumen con opciones de tarifa',
          'Selección de vuelo: vista alternativa con comparativa de precios',
          'Pago: selección de método (PayPal, tarjeta, transferencia)',
          'Pago: formulario de tarjeta de crédito con resumen del viaje',
          'Check-in online: estado de vuelos y gestión de reservas',
          'Portal de contenido: revista digital y experiencias Iberia',
        ],
      },
      {
        label: '07. Resultado Final',
        title: 'Pantallas Mobile - Experiencia nativa',
        layout: 'screens-grid',
        content: 'La versión móvil demuestra la **Consistencia Multiplataforma** del sistema. Los mismos componentes se adaptan de forma nativa a iOS, manteniendo la identidad visual de Iberia mientras respetan los patrones de interacción de cada plataforma.',
        images: [
          '/assets/projects/iberia/Iberia-screen-8.png',
          '/assets/projects/iberia/Iberia-screen-9.png',
          '/assets/projects/iberia/Iberia-screen-10.png',
        ],
        captions: [
          'App móvil: selección de vuelo y detalle de horarios con tarifas',
          'App móvil: detalle de tarifa seleccionada y flujo de pago con Avios',
          'App móvil: contenido editorial e información de equipaje permitido',
        ],
        highlight: 'Web y App comparten el mismo lenguaje visual gracias al sistema de **Design Tokens**. Un cambio en un token se propaga instantáneamente a ambas plataformas, eliminando las inconsistencias que existían antes del proyecto.',
      },
    ],
  },
  {
    slug: 'solotemazos-music-platform',
    title: 'SoloTemazos',
    client: 'SoloTemazos',
    year: '2024',
    category: 'Frontend & UX Engineering',
    tags: ['Product Strategy', 'UX/UI Design', 'Design Systems', 'Prototyping', 'UX Research', 'Visual Design'],
    description: 'Plataforma de descubrimiento musical y curación de contenido centrada en la experiencia de usuario y el rendimiento.',
    longDescription: 'SoloTemazos nace como respuesta a la saturación de algoritmos en plataformas de streaming. Mientras Spotify, Apple Music o YouTube Music priorizan la retención mediante loops algorítmicos, SoloTemazos apuesta por una curación más humana y directa: contenido seleccionado a mano, categorizado por estado de ánimo y contexto, con una interfaz que elimina la fricción entre descubrir y escuchar. El proyecto es un ejercicio completo de UX Engineering - desde la estrategia de producto y el prototipado, hasta el diseño visual y las especificaciones técnicas para implementación.',
    challenge: 'El mercado del streaming musical está dominado por plataformas con recursos ilimitados. Competir en catálogo es imposible. La oportunidad está en la experiencia: los usuarios sufren "fatiga de decisión" ante millones de canciones y playlists generadas por IA. SoloTemazos necesitaba ofrecer un descubrimiento de un solo clic - abrir la plataforma, ver lo que hay, escuchar. Sin búsquedas complejas, sin algoritmos opacos, sin frustración.',
    solution: 'Se diseñó el producto completo partiendo de una estrategia clara (Lean Canvas, User Personas, KPIs), pasando por wireframes y prototipos iterativos, hasta un sistema de diseño con componentes reutilizables y un prototipo interactivo en Figma. La estética dark mode evoca la cultura de club, y cada decisión - de negocio, de diseño, de especificación técnica - está al servicio de una sola cosa: que el usuario descubra música sin fricción.',
    results: [
      'Estrategia de producto completa (Lean Canvas, Personas, KPIs)',
      'Design system con +20 componentes y variantes documentadas',
      'Prototipo interactivo en Figma con flujos principales validados',
      '12 pantallas mobile diseñadas como first-class citizen',
      'Especificaciones técnicas para implementación front-end',
      'Documentación de paleta cromática, tipografía y espaciado',
    ],
    stack: ['Figma', 'React', 'Tailwind CSS', 'Whimsical', 'Miro', 'Google Analytics'],
    cover: '/assets/projects/solotemazos/solotemazos-header.png',
    featured: true,
    projectMeta: {
      role: 'UX Engineer & Product Designer',
      industry: 'Music & Entertainment',
      output: 'Product Design & Prototype',
      duration: '8 semanas',
      skills: ['Product Strategy', 'UX/UI Design', 'Design Systems', 'Prototyping', 'UX Research', 'Visual Design', 'Wireframing', 'Mobile Design', 'UX Engineering', 'Lean Canvas', 'Dark Mode Design', 'Component Design'],
    },
    checks: [
      'Los usuarios sufren "fatiga de decisión" ante millones de canciones y playlists generadas por IA',
      'Las plataformas dominantes priorizan retención con loops algorítmicos, no descubrimiento real',
      'No existía una alternativa con curación humana, categorizada por estado de ánimo y contexto',
    ],
    caseSections: [
      // ── Estrategia de Producto ──
      {
        label: 'Estrategia de Producto',
        title: 'Lean Canvas - El modelo de negocio',
        layout: 'center',
        content: 'Antes de escribir una sola línea de código, se definió el modelo de negocio con un Lean Canvas. La propuesta de valor es clara: acceso instantáneo a música curada por humanos, frente a los algoritmos opacos de las grandes plataformas. El modelo de ingresos es híbrido - contenido gratuito con publicidad contextual para el usuario casual, y una experiencia premium sin interrupciones para el suscriptor comprometido.\n\nEl segmento de clientes se divide en dos arquetipos fundamentales: el que busca descubrir (el "Oyente Descubridor") y el que quiere compartir y validar su gusto musical (el "Curador Musical"). Ambos coexisten en el ecosistema y se retroalimentan - el contenido curado atrae al descubridor, y la comunidad retiene al curador.',
        bullets: [
          'Propuesta de valor: Curación humana vs. algoritmos - descubrimiento genuino de un solo clic',
          'Fuentes de ingresos: Modelo híbrido Free (con anuncios contextuales) + Premium (suscripción sin interrupciones)',
          'Canales: SEO orgánico, redes sociales musicales, marketing de contenidos, newsletters',
          'Ventaja competitiva: Velocidad de carga (<1s), editorial humana, nicho no cubierto por grandes plataformas',
        ],
      },
      {
        label: 'Estrategia de Producto',
        title: 'User Personas - ¿Para quién diseñamos?',
        layout: 'center',
        content: 'Se definieron dos arquetipos principales para guiar todas las decisiones de diseño y desarrollo:\n\n"El Oyente Descubridor" - Tiene entre 22 y 35 años, está cansado de escuchar siempre lo mismo en Spotify. Abre SoloTemazos cuando quiere sorprenderse. Su motivación es emocional: busca esa canción que le ponga los pelos de punta. Su frustración principal es la parálisis ante demasiadas opciones.\n\n"El Curador Musical" - Tiene entre 25 y 40 años, es DJ, melómano o simplemente alguien con un gusto musical muy definido. Quiere un espacio donde su criterio sea visible y valorado. Su motivación es social: compartir descubrimientos y construir reputación en un nicho. Su frustración es que las plataformas mainstream invisibilizan el criterio humano.',
        highlight: 'El "Oyente Descubridor" no quiere elegir entre millones de canciones - quiere que alguien de confianza le diga "escucha esto". El "Curador Musical" quiere que su criterio tenga un escenario.',
      },
      {
        label: 'Estrategia de Producto',
        title: 'KPIs y objetivos del producto',
        layout: 'center',
        content: 'Se establecieron indicadores claros para medir el éxito de la plataforma, separando métricas de vanidad de métricas de impacto real:',
        bullets: [
          'Tiempo medio en sesión > 3 minutos (engagement real, no scroll pasivo)',
          'Tasa de rebote < 40% (contenido relevante desde el primer scroll)',
          'Tiempo de carga < 1 segundo (Lighthouse Performance > 95)',
          'Crecimiento orgánico mensual > 15% (SEO + contenido editorial)',
          'Ratio de interacción en comentarios > 5% de visitantes únicos',
        ],
      },
      // ── 01. Descubrimiento ──
      {
        label: '01. Descubrimiento',
        title: 'La fatiga del algoritmo - Análisis del consumo musical actual',
        layout: 'center',
        content: 'El punto de partida fue una observación respaldada por datos: las plataformas de streaming ofrecen más de 100 millones de canciones, pero cada vez es más difícil descubrir música nueva que realmente conecte. Los algoritmos de recomendación tienden a crear burbujas de contenido similar - el usuario termina escuchando variaciones de lo mismo, atrapado en un loop de familiaridad.\n\nLa investigación reveló un patrón claro: los usuarios más activos musicalmente (los que asisten a conciertos, compran vinilo, siguen sellos discográficos) desconfían de los algoritmos. Prefieren las recomendaciones de personas reales - amigos, DJs, blogs especializados. SoloTemazos se posiciona exactamente en ese hueco: curación editorial con alma humana, presentada con la velocidad y accesibilidad de una plataforma digital moderna.',
        highlight: 'El 67% de los oyentes activos prefiere descubrir música a través de personas de confianza antes que por algoritmos. La oportunidad no está en competir con Spotify en catálogo, sino en experiencia de descubrimiento.',
      },
      {
        label: '01. Descubrimiento',
        title: 'Identidad visual - Logo y marca',
        layout: 'image-grid',
        content: 'La identidad de SoloTemazos necesitaba funcionar en dos contextos opuestos: sobre fondos oscuros (la plataforma) y sobre fondos claros (redes sociales, compartidos). Se diseñaron dos versiones del logo - negativa y positiva - manteniendo la legibilidad y el reconocimiento en cualquier entorno.',
        images: [
          '/assets/projects/solotemazos/solotemazos-logo-BLK.png',
          '/assets/projects/solotemazos/solotemazos-logo-WHT.png',
        ],
        captions: [
          'Logo versión negativa: optimizado para fondos oscuros de la plataforma',
          'Logo versión positiva: para redes sociales y fondos claros',
        ],
      },
      // ── 02. Definición (Prototipado y Wireframes) ──
      {
        label: '02. Definición',
        title: 'De los insights a los wireframes',
        layout: 'center',
        content: 'Los insights de la fase de descubrimiento se tradujeron en wireframes de baja y media fidelidad. La estructura de la plataforma se diseñó para priorizar tres principios:\n\n1. Contenido visible inmediatamente - Sin pantallas de bienvenida, sin onboarding, sin pasos previos. El usuario aterriza y ya hay música esperándole.\n\n2. Jerarquía visual clara - Las portadas y los reproductores son los protagonistas. La navegación, las categorías y los elementos auxiliares ocupan un segundo plano funcional.\n\n3. Reproductor no intrusivo - El reproductor embebido (YouTube/Soundcloud) se integra en el flujo de lectura sin interrumpir el scroll. El usuario puede explorar mientras escucha.',
        bullets: [
          'Wireframes de baja fidelidad para validar estructura y jerarquía de información',
          'Prototipos de media fidelidad para testear flujos de navegación y disposición del reproductor',
          'Iteración basada en feedback: el reproductor pasó de posición fija (footer) a embebido en contexto',
          'Decisión clave: eliminar la barra de búsqueda en homepage - el descubrimiento es editorial, no por demanda',
        ],
      },
      {
        label: '02. Definición',
        title: 'Wireframes - Arquitectura de la información',
        layout: 'full-image',
        content: 'Los wireframes permitieron validar la estructura antes de invertir tiempo en diseño visual. El foco estaba en la disposición de los bloques de contenido: ¿dónde va el reproductor respecto al texto? ¿Cómo se navega entre categorías sin perder el contexto de lo que se está escuchando? Estos bocetos fueron la base para todas las decisiones de UI posteriores.',
        images: [
          '/assets/projects/solotemazos/solotemazos-wireframing.png',
        ],
        captions: ['Wireframes de baja y media fidelidad: validación de estructura y flujos de navegación'],
      },
      {
        label: '02. Definición',
        title: 'Sistema de grids - Estructura responsive',
        layout: 'image-grid',
        content: 'Se definió un sistema de grids que garantiza la coherencia visual en todas las resoluciones. La estructura principal usa un grid de 12 columnas con variaciones de 2 y 3 columnas para las tarjetas de contenido, asegurando que la experiencia de descubrimiento funcione tanto en desktop como en móvil.',
        highlight: 'Eliminar la búsqueda de la homepage fue contraintuitivo, pero alineaba el producto con su propuesta de valor: si vienes a SoloTemazos, déjate llevar. La curación es el producto.',
        images: [
          '/assets/projects/solotemazos/solotemazos-grid-1.png',
          '/assets/projects/solotemazos/solotemazos-grid-2.png',
        ],
        captions: [
          'Grid de 12 columnas con variaciones de 2 y 3 columnas para tarjetas',
          'Sistema de grids responsive para desktop, tablet y móvil',
        ],
      },
      // ── 03. Diseño Visual ──
      {
        label: '03. Diseño Visual',
        title: 'Dark mode y la estética del "Diseño Invisible"',
        layout: 'full-image',
        content: 'La interfaz de SoloTemazos utiliza un dark mode nativo que no es solo una decisión estética - es funcional. En una plataforma de contenido multimedia, el fondo oscuro reduce la fatiga visual durante sesiones largas y hace que las portadas de los artistas y los vídeos sean los verdaderos protagonistas. Los colores vibrantes (acentos en tonos cálidos y neón) se reservan exclusivamente para elementos interactivos y categorías, creando un sistema visual que evoca la cultura de club y música electrónica sin distraer del contenido. Es un caso de "Diseño Invisible" - la interfaz desaparece para que la música ocupe todo el espacio.',
        images: [
          '/assets/projects/solotemazos/solotemazos-color.png',
        ],
        captions: ['Paleta cromática: dark mode con acentos cálidos y neón para la cultura de club'],
      },
      {
        label: '03. Diseño Visual',
        title: 'Tipografía y espaciado - El ritmo visual',
        layout: 'full-image',
        content: 'La tipografía es limpia y neutral, con pesos que crean jerarquía sin recurrir a adornos. El sistema de espaciado define márgenes y paddings consistentes que permiten que cada artículo respire, evitando la sensación de sobrecarga que caracteriza a muchas plataformas de contenido. Juntos, tipografía y espaciado crean el ritmo visual que guía al usuario a través del contenido.',
        images: [
          '/assets/projects/solotemazos/solotemazos-typography.png',
          '/assets/projects/solotemazos/solotemazos-spacing.png',
        ],
        captions: [
          'Tipografía: escala limpia y neutral con pesos para crear jerarquía',
          'Sistema de espaciado: márgenes y paddings consistentes para ritmo visual',
        ],
      },
      {
        label: '03. Diseño Visual',
        title: 'Sistema de componentes - Tarjetas de contenido',
        layout: 'image-grid',
        content: 'Cada tipo de contenido tiene su propia tarjeta diseñada para comunicar la información esencial de un vistazo. La tarjeta de canción prioriza la portada y el artista; la de noticias, el titular y la imagen destacada; la de ranking, la posición y la tendencia. Todas comparten el mismo lenguaje visual pero están optimizadas para su función específica - simplificando el acceso al reproductor para cumplir con la premisa de descubrimiento en un solo clic.',
        images: [
          '/assets/projects/solotemazos/solotemazos-card-song.png',
          '/assets/projects/solotemazos/solotemazos-card-noticia.png',
          '/assets/projects/solotemazos/solotemazos-card-ranking.png',
          '/assets/projects/solotemazos/solotemazos-card-festival.png',
        ],
        captions: [
          'Tarjeta de canción: portada, artista y acceso directo al reproductor',
          'Tarjeta de noticia: titular, imagen destacada y fecha de publicación',
          'Tarjeta de ranking: posición, tendencia y reproductor integrado',
          'Tarjeta de festival: imagen, fecha, ubicación e información del evento',
        ],
      },
      {
        label: '03. Diseño Visual',
        title: 'Vistas completas - Listas y festivales',
        layout: 'image-grid',
        content: 'Los componentes individuales se integran en vistas completas que muestran cómo el sistema de diseño funciona en contexto real. La vista de listas de reproducción organiza las canciones en un formato editorial que prioriza la portada del artista y permite reproducir directamente desde la lista. La vista de festivales presenta los eventos musicales con información clave visible de un vistazo, facilitando el descubrimiento de experiencias en vivo.',
        images: [
          '/assets/projects/solotemazos/solotemazos-lista.png',
          '/assets/projects/solotemazos/solotemazos-festivals.png',
        ],
        captions: [
          'Vista de lista de reproducción con formato editorial y reproductor integrado',
          'Vista de festivales con información clave visible de un vistazo',
        ],
      },
      {
        label: '03. Diseño Visual',
        title: 'Diseño mobile - Todas las pantallas',
        layout: 'screens-grid',
        content: 'La experiencia mobile se diseñó como first-class citizen, no como adaptación del desktop. Cada pantalla está optimizada para el uso con una sola mano: navegación inferior, acciones principales al alcance del pulgar, y reproductores que se pueden controlar sin interrumpir el flujo de navegación. A continuación, todas las pantallas del sistema en su versión mobile:',
        images: [
          '/assets/projects/solotemazos/solotemazos-mobile-principal.png',
          '/assets/projects/solotemazos/solotemazos-mobile-reproductor.png',
          '/assets/projects/solotemazos/solotemazos-mobile-charts.png',
          '/assets/projects/solotemazos/solotemazos-mobile-noticias.png',
          '/assets/projects/solotemazos/solotemazos-mobile-noticias-principal.png',
          '/assets/projects/solotemazos/solotemazos-mobile-discos.png',
          '/assets/projects/solotemazos/solotemazos-mobile-discos-kygo.png',
          '/assets/projects/solotemazos/solotemazos-mobile-festivales.png',
          '/assets/projects/solotemazos/solotemazos-mobile-festivales-tomorrowland.png',
          '/assets/projects/solotemazos/solotemazos-mobile-lista.png',
          '/assets/projects/solotemazos/solotemazos-mobile-lista-levels.png',
          '/assets/projects/solotemazos/solotemazos-mobile-logo.png',
        ],
        captions: [
          'Home principal: contenido curado visible sin scroll',
          'Reproductor embebido: YouTube/Soundcloud integrado en el flujo',
          'Charts: rankings en tiempo real con tendencias',
          'Noticias: artículos editoriales sobre música',
          'Detalle de noticia: lectura con reproductor accesible',
          'Discos: catálogo de álbumes destacados',
          'Detalle de disco: Kygo con tracklist y reproductor',
          'Festivales: eventos musicales con fecha y ubicación',
          'Detalle de festival: Tomorrowland con lineup y entradas',
          'Lista de reproducción: canciones curadas por tema',
          'Detalle de lista: Levels con reproductor y comentarios',
          'Splash screen: logo animado de carga de la app',
        ],
      },
      // ── 04. Especificaciones Técnicas ──
      {
        label: '04. Especificaciones Técnicas',
        title: 'Decisiones de UX Engineering',
        layout: 'center',
        content: 'Cada decisión técnica en SoloTemazos está tomada desde la perspectiva del usuario, no del desarrollador. Las especificaciones de implementación se definieron durante el proceso de diseño para garantizar que la experiencia diseñada sea técnicamente viable y óptima:\n\nArquitectura estática (SSG) recomendada para carga instantánea - generando HTML en build time se alcanza 0ms de TTFB. Componentes interactivos aislados con hidratación parcial (Islands Architecture) que envía JavaScript solo donde hay interactividad real.\n\nReproductores embebidos con lazy loading: los iframes de YouTube/Soundcloud solo se cargan cuando el usuario hace scroll hasta ellos, evitando bloquear la carga inicial con múltiples embeds pesados.\n\nSistema de imágenes optimizado: formatos modernos (WebP/AVIF), responsive srcsets automáticos y Above the Fold priorizado en el Critical Rendering Path.',
        bullets: [
          'Arquitectura SSG - HTML estático, 0ms TTFB, Lighthouse Performance objetivo 95+',
          'Islands Architecture - JavaScript mínimo, hidratación parcial donde hay interactividad',
          'Lazy loading de embeds - iframes de YouTube/Soundcloud montados solo en viewport',
          'Imágenes optimizadas - WebP/AVIF con srcsets responsive generados en build time',
          'Pre-fetching de rutas en hover - navegación percibida como instantánea',
          'SEO técnico - Meta tags dinámicos, Open Graph, sitemap automático, URLs semánticas',
          'Integración de comunidad - Sistema de comentarios para feedback y retención',
        ],
      },
      // ── 05. Solución Final ──
      {
        label: '05. Solución Final',
        title: 'Prototipo interactivo',
        layout: 'figma-embed',
        content: 'El prototipo interactivo es la pieza central del proyecto. Permite navegar por todos los flujos diseñados - descubrimiento de contenido, navegación entre secciones, reproducción de música y exploración de categorías - tal y como se verían en el producto final. Es la síntesis de toda la investigación, el wireframing y el diseño visual en una experiencia cohesiva y testeable.',
        figmaUrl: 'https://embed.figma.com/proto/pML3Qqh9KRdjqNinLaPR76/Solotemazos?content-scaling=responsive&kind=proto&node-id=98-594&page-id=0%3A1&scaling=scale-down&starting-point-node-id=12%3A2&embed-host=share',
      },
      {
        label: '05. Solución Final',
        title: 'Métricas de impacto y crecimiento',
        layout: 'center',
        content: 'El proyecto completo demuestra un proceso end-to-end: desde la estrategia de producto y la investigación de usuarios, hasta un sistema de diseño completo con componentes reutilizables y un prototipo interactivo validado. Estos son los hitos principales:',
        bullets: [
          'Estrategia de producto definida: Lean Canvas, 2 User Personas, KPIs medibles',
          'Sistema de wireframes completo con validación de arquitectura de información',
          'Design system con +20 componentes: tarjetas, navegación, reproductores, grids responsive',
          'Paleta cromática, tipografía y sistema de espaciado documentados',
          'Prototipo interactivo en Figma con flujos de descubrimiento, navegación y reproducción',
          '12 pantallas mobile diseñadas como first-class citizen (no adaptación de desktop)',
          'Especificaciones técnicas para implementación: lazy loading, optimización de imágenes, SEO',
        ],
      },
    ],
  },
];

export const blogPosts = [
  {
    slug: 'construyendo-design-systems-escalables',
    title: 'Construyendo Design Systems Escalables',
    excerpt: 'Lecciones aprendidas creando sistemas de diseño para grandes organizaciones. Desde tokens hasta governance.',
    date: '2024-11-15',
    readTime: '8 min',
    tags: ['Design Systems', 'UX'],
    cover: '/assets/shared/blog-design-systems.jpg',
  },
  {
    slug: 'design-thinking-en-la-practica',
    title: 'Design Thinking en la Práctica',
    excerpt: 'Cómo aplicar Design Thinking más allá de la teoría. Casos reales y frameworks adaptados al contexto español.',
    date: '2024-10-08',
    readTime: '6 min',
    tags: ['Design Thinking', 'Metodología'],
    cover: '/assets/shared/blog-design-thinking.jpg',
  },
  {
    slug: 'de-disenador-a-design-ops',
    title: 'De Diseñador a Design Ops',
    excerpt: 'Mi transición hacia Design Operations y por qué creo que es el futuro de los equipos de diseño.',
    date: '2024-09-20',
    readTime: '10 min',
    tags: ['Design Ops', 'Carrera'],
    cover: '/assets/shared/blog-design-ops.jpg',
  },
  {
    slug: 'accesibilidad-no-es-opcional',
    title: 'Accesibilidad No Es Opcional',
    excerpt: 'Por qué la accesibilidad debería ser el punto de partida, no un afterthought. Guía práctica para diseñadores.',
    date: '2024-08-12',
    readTime: '7 min',
    tags: ['Accesibilidad', 'UX'],
    cover: '/assets/shared/blog-figma-vs-sketch.jpg',
  },
];

