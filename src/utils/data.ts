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

// --- Career Timeline Data ---

export interface ConsultingProject {
  client: string;
  period: string;
  role: string;
  description: string;
}

export interface TimelineEntry {
  year: string;
  role: string;
  company: string;
  description: string;
  gitMsg: string;
  current?: boolean;
}

export interface ConsultingBlock {
  label: string;
  via: string;
  projects: ConsultingProject[];
}

export const mainTimeline: TimelineEntry[] = [
  {
    year: '2021 — Presente',
    role: 'Senior Product Designer & Design Ops',
    company: 'Doctori.com',
    description: 'Liderando la evolución del producto y la eficiencia operativa mediante la implementación de un Design System robusto. Enfoque en Design Ops para escalar procesos de diseño y sincronización con ingeniería.',
    gitMsg: 'feat(design-ops): implement token architecture & system analytics',
    current: true,
  },
  {
    year: '2017 — 2021',
    role: 'Junior Designer',
    company: 'JBM',
    description: 'Inicio de carrera profesional con proyectos de branding y web design.',
    gitMsg: 'init: first_commit — branding & web_design projects',
  },
];

export const consultingBlock: ConsultingBlock = {
  label: 'Proyectos de Consultoría Senior',
  via: 'Lead-it',
  projects: [
    {
      client: 'Leemons',
      period: '2023 — 2024',
      role: 'Product & UI Consultant',
      description: 'Definición de producto y UI estratégica para nuevos modelos de negocio en plataforma educativa.',
    },
    {
      client: 'Iberia',
      period: '2022 — 2023',
      role: 'Design Systems Consultant',
      description: 'Arquitectura de Design Tokens y sistema de diseño global para Web y App. Escalabilidad multi-plataforma y gobernanza del sistema.',
    },
    {
      client: 'Banco Sabadell',
      period: '2021 — 2022',
      role: 'Design Systems Consultant',
      description: 'Documentación técnica y componentes modulares para banca digital. Creación de librerías escalables y procesos de contribución.',
    },
  ],
};

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
  brandColor?: string;
  gridSpan?: 3 | 2;
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
    tags: ['Product Design', 'E-commerce', 'High-fidelity Prototyping'],
    description: 'Rediseño del flujo "Reserva en Tienda" de Massimo Dutti: de 8 pasos a 4, eliminando las fricciones que provocaban abandono en un canal omnicanal con alto potencial de conversión sin explotar.',
    longDescription: 'Massimo Dutti tiene una funcionalidad de **"Reserva en Tienda"** que permite reservar un producto online para probarlo y comprarlo en tienda física, sin cargo previo. Es una solución omnicanal con potencial real para incrementar el tráfico en tienda y el ticket medio. **Pero el flujo actual no convierte**.\n\nLa acción de reservar está enterrada, el proceso tiene el doble de pasos necesarios, el seguimiento post-reserva es opaco y la incertidumbre sobre caducidad y compromiso de compra genera abandono. Este proyecto es un rediseño end-to-end del flujo orientado a **tres resultados de negocio**: aumentar la tasa de inicio de reservas (visibilidad del CTA), aumentar la tasa de completado (menos pasos, menos fricción) y aumentar la recogida efectiva en tienda (confianza y seguimiento claro).',
    challenge: 'El flujo actual de "Reserva en Tienda" tiene **cuatro puntos de fuga** identificados en la auditoría: (1) el CTA está enterrado debajo del fold en la ficha de producto — la mayoría de usuarios nunca lo ven; (2) el proceso requiere 8 pasos incluyendo registro obligatorio, lo que genera abandono en usuarios no logueados; (3) la selección de tienda no muestra disponibilidad real de stock, generando visitas fallidas; (4) la confirmación se limita a un email sin tracking in-app, sin wallet y sin recordatorio de caducidad. **El resultado**: una tasa de reservas completadas por debajo del potencial del canal y una oportunidad de conversión omnicanal desaprovechada.',
    solution: 'Rediseño completo del flujo en **6 fases** con enfoque de conversión: CTA dual visible sin scroll en la ficha de producto, selección de tienda con stock en tiempo real y tienda favorita preseleccionada, resumen de reserva sin registro obligatorio, confirmación inmediata con QR y wallet, tracking in-app con estados claros y cross-selling contextual, y una propuesta de Service Design para la recogida física con poste QR automatizado. **Cada decisión de diseño responde a un punto de abandono identificado en la auditoría**.',
    results: [
      'Flujo reducido de 8 pasos a 4 — eliminación de registro obligatorio y pantallas intermedias sin valor',
      'CTA "Reservar en tienda" con la misma jerarquía visual que "Añadir a la cesta" — visible sin scroll',
      'Tracking in-app con estados progresivos y cross-selling contextual del stock de la misma tienda',
      'Service Design: poste QR para recogida autónoma — reduce tiempos de espera y genera datos operativos',
      'Integración con Apple Wallet y Google Wallet — acceso al QR de reserva sin abrir la app',
      'Sistema de recuperación de abandonos con push notifications segmentadas por punto de fuga',
    ],
    stack: ['UX Strategy', 'Service Design', 'Research', 'Service Blueprint', 'Prototyping'],
    cover: '/assets/projects/massimo-dutti/massimo-dutti-header-new.png',
    featured: true,
    brandColor: '#ffffff',
    gridSpan: 3,
    projectMeta: {
      role: 'UX Strategist & Service Designer',
      industry: 'Fashion Retail',
      output: 'E-commerce Optimization',
      duration: '1 semana',
      skills: ['UX Optimization', 'Checkout Flow', 'E-commerce Strategy', 'High-Fidelity Prototyping', 'Service Design', 'CRO', 'Omnichannel', 'User Flow Design', 'Conversion Optimization', 'Wireframing'],
    },
    checks: [
      'CTA de reserva enterrado debajo del fold — la mayoría de usuarios nunca lo descubren',
      '8 pasos con registro obligatorio: cada paso intermedio es un punto de fuga medible',
      'Sin tracking in-app, sin wallet, sin recordatorio de caducidad — el usuario queda en un limbo post-reserva',
    ],
    caseSections: [
      // ── 01. Definición del Problema ──
      {
        label: '01. Definición del Problema',
        title: '¿Por qué el flujo actual no convierte?',
        layout: 'center',
        content: 'Antes de diseñar, audité el flujo completo de "Reserva en Tienda" paso a paso: desde el descubrimiento del producto hasta la recogida física. En paralelo, realicé benchmarking contra otras marcas del grupo Inditex y competidores directos del segmento premium.\n\nLa auditoría reveló que el problema no es de demanda — los usuarios quieren probar antes de comprar. **El problema es de ejecución**: el flujo actual convierte una intención clara de compra en una experiencia frustrante que el usuario abandona antes de completar.',
        bullets: [
          '**CTA invisible** — La acción "reservar en tienda" está debajo del fold, detrás de composición, cuidados y envíos. Es un enlace de texto, ni siquiera un botón. La mayoría de usuarios nunca lo descubren',
          '**8 pasos para una acción simple** — Talla → CP → selección de tienda → login → reservar → solicitud → validación manual → email. Cada paso intermedio es un punto de fuga con caída de conversión acumulativa',
          '**Seguimiento opaco** — La reserva vive en un email. El tracking in-app muestra "Pendiente" sin progresión, sin estimación temporal, sin acciones posibles. El usuario no sabe qué pasará ni cuándo',
          '**Incertidumbre sobre el modelo** — ¿Tengo que pagar? ¿Qué pasa si no voy? ¿Cuándo caduca? Estas dudas sin respuesta clara convierten una propuesta de bajo riesgo en una decisión que el usuario prefiere posponer',
        ],
        highlight: 'El usuario no abandona porque no quiera el producto. Abandona porque el flujo le genera más incertidumbre que confianza. **Es un problema de diseño, no de demanda**.',
      },
      {
        label: '01. Definición del Problema',
        title: 'Punto de fuga #1 — Ficha de producto',
        layout: 'left-right',
        content: 'El primer punto de fuga es el más crítico: **el usuario nunca llega a ver la opción de reserva**. En la ficha de producto actual, el CTA está enterrado al final de la página, debajo de composición, cuidados, envíos y devoluciones. Es un enlace de texto plano ("Disponibilidad y reserva en tienda") — sin jerarquía visual, sin diferenciación del contenido circundante.\n\nEsto significa que la arquitectura de la información de la PDP prioriza la conversión online sobre la conversión omnicanal. Para una marca con presencia física fuerte como Massimo Dutti, esto es una oportunidad de negocio desperdiciada: el usuario que quiere probar antes de comprar no encuentra cómo hacerlo.',
        images: [
          '/assets/projects/massimo-dutti/viejo-reserva-tienda-flujo.png',
        ],
        captions: [
          'Flujo actual — CTA de reserva enterrado debajo del fold, sin jerarquía visual',
        ],
      },
      {
        label: '01. Definición del Problema',
        title: 'Punto de fuga #2 — Selección de tienda y registro',
        layout: 'image-grid',
        content: 'Los usuarios que sí encuentran la opción de reserva entran en un flujo con fricción innecesaria. La selección de tienda muestra "Talla disponible: M" pero no indica cuándo estará lista, qué ocurre si no se recoge, ni ofrece contexto sobre la experiencia en tienda. **Peor aún: el flujo obliga a loguearse o crear cuenta antes de poder confirmar la reserva.** Para un usuario que solo quiere probar una prenda sin compromiso de compra, exigir registro es una barrera desproporcionada que genera abandono inmediato.',
        images: [
          '/assets/projects/massimo-dutti/viejo-mapa.png',
          '/assets/projects/massimo-dutti/viejo-login.png',
        ],
        captions: [
          'Selección de tienda sin stock en tiempo real ni contexto de servicio',
          'Registro obligatorio antes de confirmar — barrera desproporcionada',
        ],
      },
      {
        label: '01. Definición del Problema',
        title: 'Punto de fuga #3 — Confirmación y post-reserva',
        layout: 'image-grid',
        content: 'El flujo post-reserva es donde se pierde la recogida efectiva. La confirmación es una pantalla mínima que redirige al email. El tracking in-app muestra un estado "Pendiente" sin progresión visual, sin estimación temporal, y sin ninguna acción que el usuario pueda realizar.\n\n**Sin wallet, sin mapa, sin recordatorio de caducidad, el usuario olvida la reserva o no tiene la información necesaria cuando llega a la tienda.** El resultado: reservas que caducan sin ser recogidas — un coste operativo para la tienda y una oportunidad perdida de venta.',
        images: [
          '/assets/projects/massimo-dutti/viejo-solicitud-reserva.png',
          '/assets/projects/massimo-dutti/viejo-tracking-in-app.png',
        ],
        captions: [
          'Confirmación mínima que delega el seguimiento al email',
          'Tracking in-app sin progresión, sin estimación, sin acciones posibles',
        ],
      },
      // ── 02. Hipótesis ──
      {
        label: '02. Hipótesis',
        title: 'Tres hipótesis de valor que guían el rediseño',
        layout: 'center',
        content: 'La auditoría reveló que los problemas del flujo actual no son bugs aislados — son consecuencias de una arquitectura que trata la reserva como funcionalidad secundaria. A partir del diagnóstico, formulé tres hipótesis que vertebran todas las decisiones de diseño:',
        bullets: [
          '**H1: Visibilidad → Inicio de reservas.** Si el CTA de reserva tiene la misma jerarquía visual que "Añadir a la cesta" y es visible sin scroll, la tasa de inicio de reservas aumentará significativamente. El problema actual no es falta de interés — es falta de descubrimiento',
          '**H2: Menos pasos → Más completados.** Si reducimos el flujo de 8 pasos a 4 y eliminamos el registro obligatorio, la tasa de completado de reservas mejorará. Cada paso intermedio tiene una caída de conversión acumulativa — la simplificación es la intervención más rentable',
          '**H3: Confianza post-reserva → Recogida efectiva.** Si proporcionamos confirmación inmediata con QR, tracking con estados claros y recordatorios de caducidad, la tasa de recogida en tienda aumentará. El usuario necesita certidumbre, no solo confirmación',
        ],
        highlight: 'Hipótesis central: si reducimos la ansiedad sobre el modelo (no hay cargo, no hay compromiso) y damos visibilidad al CTA, **convertimos tráfico digital existente en visitas a tienda** — sin coste de adquisición adicional.',
      },
      {
        label: '02. Hipótesis',
        title: 'Service Blueprint — Arquitectura del flujo propuesto',
        layout: 'mermaid',
        content: 'Antes de diseñar una sola pantalla, definí la arquitectura del sistema completo. Este service blueprint mapea cada punto de contacto del usuario, cada sistema de soporte y cada decisión de producto. **Las decisiones de diseño no son estéticas — son estructurales.** La preselección de tienda favorita no es un "nice to have": es la eliminación de un paso que causa abandono. La confirmación inmediata no es una mejora visual: es la sustitución de una validación manual que añadía latencia y generaba incertidumbre.',
        mermaidCode: `flowchart LR
  subgraph EvidenciaFisica["🏷️ EVIDENCIA FÍSICA"]
    direction LR
    EF1["📱 App/Web Massimo Dutti"]
    EF2["📍 Mapa tiendas + stock"]
    EF3["📩 Email confirmación"]
    EF4["📱 Push 'Listo para recoger'"]
    EF6["📲 QR en App"]
    EF7["🏬 Mostrador tienda"]
    EF8["🧾 Ticket + Encuesta"]
  end
  subgraph Cliente["👤 CLIENTE"]
    direction LR
    C1["1️⃣ Busca producto"]
    C2["2️⃣ Ve disponibilidad"]
    C3["3️⃣ Selecciona talla y tienda"]
    C4["4️⃣ Confirma reserva"]
    C5["5️⃣ Recibe confirmación"]
    C6["6️⃣ Ve 'Listo para recoger'"]
    C7["7️⃣ Va a la tienda"]
    C8["8️⃣ Recoge producto"]
  end
  subgraph Frontstage["💻 FRONTSTAGE - Lo que ve"]
    direction LR
    F1["✅ Botón 'Reservar en tienda'"]
    F2["✅ Selector tienda + stock live"]
    F3["✅ Resumen (3 taps máximo)"]
    F4["✅ Pantalla confirmación"]
    F5["✅ Tracker: Reservado → Preparando → Listo"]
    F6["✅ Empleado prepara producto"]
    F7["✅ Empleado escanea QR"]
  end
  subgraph Backstage["⚙️ BACKSTAGE - Sist. internos"]
    direction LR
    B1["🔧 API Catálogo"]
    B2["🔧 API Stock TIEMPO REAL"]
    B3["🔧 Motor de reservas"]
    B4["🔧 Notificaciones push+email"]
    B5["🔧 Sistema tienda (orden)"]
    B6["🔧 Notif 'Listo'"]
    B7["🔧 Validar QR → venta"]
  end
  subgraph Soporte["🗄️ SOPORTE - Base de datos"]
    direction LR
    S1["💾 ERP/PIM: productos"]
    S2["💾 WMS: stock omnicanal"]
    S3["💾 CRM: clientes"]
    S4["💾 Email/Push: templates"]
    S5["💾 Analytics: conversión"]
    S6["💾 Cron: expira reservas no recogidas"]
  end
  C1 --> F1
  F1 --> B1
  B1 --> S1
  C2 --> F2
  F2 --> B2
  B2 --> S2
  C3 --> F3
  F3 --> B3
  B3 --> S3
  C4 --> F4
  F4 --> B4
  B4 --> S4
  C5 --> F5
  F5 --> B5
  B5 --> S6
  C6 --> F6
  F6 --> B6
  C7 --> F7
  F7 --> B7
  B7 --> S5
  C8 --> B7
  EF1 --> C1
  EF2 --> C2
  EF3 --> C5
  EF4 --> C6
  EF6 --> C7
  EF7 --> C8
  EF8 --> C8
  classDef physical fill:#e94560,stroke:#fff,color:#fff,stroke-width:2px
  classDef customer fill:#0f3460,stroke:#53d8fb,color:#fff,stroke-width:2px
  classDef frontstage fill:#16213e,stroke:#e94560,color:#fff,stroke-width:2px
  classDef backstage fill:#533483,stroke:#8d99ae,color:#fff,stroke-width:2px
  classDef support fill:#2b2d42,stroke:#8d99ae,color:#edf2f4,stroke-width:2px
  class EF1,EF2,EF3,EF4,EF6,EF7,EF8 physical
  class C1,C2,C3,C4,C5,C6,C7,C8 customer
  class F1,F2,F3,F4,F5,F6,F7 frontstage
  class B1,B2,B3,B4,B5,B6,B7 backstage
  class S1,S2,S3,S4,S5,S6 support`,
        captions: ['Service Blueprint — Mapeo completo del flujo propuesto: cliente, frontstage, backstage e infraestructura de soporte'],
        highlight: 'De **8 pasos a 4**. Cada nodo de este diagrama justifica una decisión de producto, no una elección estética.',
      },
      // ── 03. Estrategia UX ──
      {
        label: '03. Estrategia UX',
        title: 'Tres pilares: Claridad, Velocidad, Confianza',
        layout: 'center',
        content: 'La estrategia del rediseño no se basa en mejorar pantallas — se basa en resolver los tres problemas estructurales que causan abandono:\n\n**Claridad** — El usuario no entiende qué es "reservar". Confunde "Reserva en Tienda" con "Click & Collect". No sabe si hay cargo, si es vinculante, ni qué pasa si no va. La solución: comunicación explícita en cada punto de contacto. "Pagarás en tienda. Ningún cargo online. Tienes 24h para decidir."\n\n**Velocidad** — El flujo actual tiene el doble de pasos necesarios. La solución: tienda favorita preseleccionada, email como único dato requerido, confirmación en un tap. Reservar debe sentirse tan directo como "Añadir a la cesta".\n\n**Confianza** — Una vez hecha la reserva, el usuario necesita saber qué pasará, cuándo y cómo. La solución: confirmación inmediata con QR, tracking con estados progresivos (Reservado → Preparando → Listo), recordatorio antes de caducidad, e integración con wallet para acceso sin fricción.',
        highlight: 'Estos tres pilares no son principios abstractos. Cada uno responde directamente a un punto de fuga identificado en la auditoría y se traduce en decisiones de diseño específicas y medibles.',
      },
      {
        label: '03. Estrategia UX',
        title: 'Objetivos medibles por categoría',
        layout: 'center',
        content: 'Todo rediseño necesita métricas claras para evaluar su impacto. Definí tres categorías de KPIs alineadas con los pilares estratégicos:',
        bullets: [
          '**Descubrimiento** — Tasa de clic en "Reservar en tienda" desde la PDP. Benchmark actual: estimado <2% (CTA invisible). Objetivo: equiparar al CTR de "Añadir a la cesta" en la misma posición',
          '**Completado** — Ratio reservas completadas / reservas iniciadas. El registro obligatorio y los pasos intermedios generan caída acumulativa. Objetivo: >70% de completado eliminando registro y reduciendo a 4 pasos',
          '**Recogida** — Tasa de recogida efectiva en tienda dentro de 24h. Actualmente, las reservas sin tracking claro caducan sin ser recogidas. Objetivo: >85% de recogida con tracking in-app, push reminders y wallet',
        ],
      },
      {
        label: '03. Estrategia UX',
        title: 'Impacto en tres dimensiones del producto',
        layout: 'center',
        content: 'El rediseño impacta en tres áreas que van más allá del flujo de reserva:',
        bullets: [
          '**Conversión omnicanal** — Transformar tráfico digital en visitas a tienda sin coste de adquisición adicional. Un usuario que reserva y recoge tiene mayor probabilidad de compra que uno que solo navega online',
          '**Eficiencia operativa** — Reducir reservas no recogidas (coste operativo para la tienda), automatizar la recogida con QR, y generar datos de demanda por tienda y producto que alimentan decisiones de stock',
          '**Experiencia de marca** — Cada pantalla del flujo mantiene la estética editorial de Massimo Dutti. La velocidad y la claridad no comprometen el posicionamiento premium — lo refuerzan. Un flujo limpio y sin fricción es la experiencia de lujo que el usuario espera',
        ],
      },
      // ── 04. Decisiones de Diseño ──
      {
        label: '04. Decisiones de Diseño',
        title: 'Las 6 fases del nuevo flujo',
        layout: 'stepper',
        content: 'Cada fase del nuevo flujo responde directamente a un punto de fuga identificado en la auditoría. No hay decisiones decorativas — cada cambio tiene una razón de conversión:',
        steps: [
          { title: 'Ficha de producto', description: 'CTA dual: "Añadir a la cesta" + "Pruébalo hoy en tienda" con la misma jerarquía visual. Visible sin scroll. **Responde a**: CTA invisible (punto de fuga #1).' },
          { title: 'Selección de tienda', description: 'Tienda favorita preseleccionada. Lista con distancia, horarios, stock en tiempo real y servicios (Style Advisor, probadores). **Responde a**: falta de contexto en selección de tienda.' },
          { title: 'Resumen de reserva', description: 'Producto, talla, tienda con mapa. Solo email si no está logueado. Banner: "Esta reserva no implica compra". **Responde a**: registro obligatorio (punto de fuga #2).' },
          { title: 'Confirmación inmediata', description: 'QR generado al instante. Apple Wallet + Google Wallet. Barra de progreso: Reservado → Preparando → Listo. **Responde a**: confirmación opaca (punto de fuga #3).' },
          { title: 'Tracking in-app', description: '"Mis reservas" con estados progresivos: Pendiente → Confirmada → Caducada → Recogida. Cross-selling del stock de la misma tienda. **Responde a**: seguimiento sin feedback.' },
          { title: 'Recogida y post-visita', description: 'Push + email con instrucciones, QR para escanear en tienda, valoración post-visita. **Responde a**: tasa baja de recogida efectiva.' },
        ],
      },
      {
        label: '04. Decisiones de Diseño',
        title: 'Decisión #1 — CTA dual visible en la PDP',
        layout: 'image-grid',
        content: '**Problema**: El CTA de reserva estaba enterrado debajo del fold. La mayoría de usuarios nunca lo descubrían.\n\n**Cambio**: El CTA "Reservar en tienda" convive con "Añadir a la cesta" en la misma jerarquía visual, visible sin scroll. Se diseñaron dos variantes para A/B testing: un enlace contextual sutil ("¿Lo quieres hoy? Pruébalo en tienda") y un botón secundario con igual prominencia ("RESERVAR EN TIENDA").\n\n**Por qué es mejor**: El usuario toma la decisión de canal (online vs. tienda) en el momento de mayor intención de compra, no después de scrollear toda la PDP. Esto captura demanda omnicanal que antes se perdía.\n\n**Impacto esperado**: Aumento significativo en la tasa de inicio de reservas — pasamos de "invisible" a "mismo nivel que el CTA principal".',
        images: [
          '/assets/projects/massimo-dutti/nuevo-reservar-en-tienda-link.png',
          '/assets/projects/massimo-dutti/nuevo-reservar-en-tienda.png',
        ],
        captions: [
          'Variante A: enlace contextual — "¿Lo quieres hoy? Pruébalo en tienda"',
          'Variante B: botón secundario con igual prominencia — "Reservar en tienda"',
        ],
      },
      {
        label: '04. Decisiones de Diseño',
        title: 'Decisión #2 — Selección de tienda con stock real y resumen sin registro',
        layout: 'image-grid',
        content: '**Problema**: La selección de tienda no mostraba disponibilidad real. El registro era obligatorio antes de confirmar.\n\n**Cambio**: La tienda favorita se preselecciona automáticamente si el usuario está logueado. Cada tienda muestra distancia, horario de recogida ("Hoy a partir de las 10:30"), stock en tiempo real y servicios disponibles. Las tiendas sin stock lo indican claramente. El resumen de reserva solo pide email si el usuario no está logueado — sin registro obligatorio. Un banner refuerza: "Esta reserva no implica la compra final del producto".\n\n**Por qué es mejor**: Eliminamos dos puntos de fricción en un solo paso: la incertidumbre sobre disponibilidad (que generaba visitas fallidas a tienda) y la barrera del registro (que causaba abandono inmediato). El mensaje de "sin cargo" reduce la ansiedad de compromiso.\n\n**Impacto esperado**: Mejora del ratio de completado al eliminar el paso de registro y reducir la carga cognitiva.',
        images: [
          '/assets/projects/massimo-dutti/nuevo-selecciona-tienda.png',
          '/assets/projects/massimo-dutti/nuevo-resumen-reserva-email.png',
        ],
        captions: [
          'Tienda favorita preseleccionada con stock en tiempo real',
          'Resumen simplificado — email como único dato, sin registro',
        ],
      },
      {
        label: '04. Decisiones de Diseño',
        title: 'Decisión #3 — Confirmación inmediata con QR y tracking progresivo',
        layout: 'image-grid',
        content: '**Problema**: La confirmación era opaca y delegaba el seguimiento al email. El usuario no sabía qué pasaría ni cuándo.\n\n**Cambio**: Confirmación inmediata con QR generado al instante, integración con Apple Wallet y Google Wallet, y barra de progreso visual (Reservado → Preparando → Listo). El tracking in-app muestra hora estimada ("A partir de las 10:30"), producto con foto, y acceso directo al QR y a las indicaciones para llegar a la tienda.\n\n**Por qué es mejor**: El usuario tiene certidumbre total sobre el estado de su reserva sin salir de la app. La integración con wallet elimina la fricción de buscar el email de confirmación al llegar a la tienda. Los estados progresivos transforman la espera pasiva en una experiencia con feedback continuo.\n\n**Impacto esperado**: Aumento de la tasa de recogida efectiva en tienda — el usuario no olvida la reserva porque el sistema le acompaña hasta la recogida.',
        images: [
          '/assets/projects/massimo-dutti/nuevo-solicitud-reserva.png',
          '/assets/projects/massimo-dutti/nuevo-reserva.png',
        ],
        captions: [
          'Confirmación inmediata con QR, wallet y referencia de reserva',
          'Tracking in-app con estados progresivos y hora estimada',
        ],
      },
      {
        label: '04. Decisiones de Diseño',
        title: 'Decisión #4 — Cross-selling contextual en el momento de mayor intención',
        layout: 'right-left',
        content: '**Problema**: La reserva terminaba en la confirmación. No había mecanismo para incrementar el ticket medio de la visita a tienda.\n\n**Cambio**: Mientras el usuario consulta el tracking, el sistema sugiere productos complementarios del stock de la misma tienda bajo "Completa tu look en tienda". La sugerencia aparece después de toda la información funcional, usando el formato de "Looks" que el usuario ya conoce de la PDP.\n\n**Por qué es mejor**: El momento entre la reserva y la recogida es un espacio de alta receptividad: el usuario ya decidió ir a la tienda. Sugerir productos del stock de esa tienda específica convierte cada visita de recogida en una oportunidad de venta adicional sin fricción.\n\n**Impacto esperado**: Incremento del ticket medio por visita. Un cliente que va a recoger una reserva tiene mayor predisposición a comprar complementos — el cross-selling contextual capitaliza esa intención.',
        highlight: 'El cross-selling no es un añadido cosmético. Es una palanca de negocio: convierte una visita de recogida (coste operativo) en una oportunidad de venta adicional (revenue).',
        images: [
          '/assets/projects/massimo-dutti/nuevo-tracking-in-app.png',
        ],
        captions: [
          'Cross-selling contextual — "Completa tu look en tienda" con stock real de la misma tienda',
        ],
      },
      // ── 05. Service Design ──
      {
        label: '05. Service Design',
        title: 'Poste QR — Extender la experiencia digital al mundo físico',
        layout: 'center',
        images: [
          '/assets/projects/massimo-dutti/poste-recogida-qr.png',
        ],
        captions: [
          'Concepto de poste QR para recogida autónoma en tienda física',
        ],
        content: 'El rediseño no termina en la pantalla. La experiencia de recogida en tienda es el último punto de contacto del flujo — y actualmente depende al 100% de que el usuario encuentre a un empleado disponible.\n\nLa propuesta: un poste automatizado donde el cliente escanea su QR al llegar. El sistema notifica al staff con el nombre del cliente, el producto reservado y sugerencias de cross-selling. El cliente recibe feedback inmediato: "Tu reserva se está preparando".\n\nEsto resuelve tres problemas con una sola intervención:',
        bullets: [
          '**Reducción de tiempo de espera** — El cliente no busca a nadie. Escanea el QR y el sistema activa la preparación. El staff llega con el producto listo en mano, no con una pregunta de "¿en qué puedo ayudarle?"',
          '**Servicio personalizado y escalable** — El staff sabe quién es el cliente y qué reservó antes de interactuar. Puede preparar sugerencias de cross-selling relevantes. La atención personal deja de ser reactiva y pasa a ser proactiva',
          '**Datos operativos para optimización** — Tiempo medio de recogida, horas pico, ratio de recogida vs. caducidad, tasa de conversión en cross-sell. Datos que hoy no existen y que permiten optimizar turnos, stock y layout de tienda',
        ],
        highlight: 'El poste QR transforma la recogida de un momento transaccional en una experiencia de servicio. Convierte un coste operativo (gestionar reservas) en una ventaja competitiva (servicio premium automatizado).',
      },
      // ── 06. Pensamiento de Conversión ──
      {
        label: '06. Pensamiento de Conversión',
        title: 'Mapa de intervenciones CRO por punto de fuga',
        layout: 'center',
        content: 'Cada intervención del rediseño responde a un punto de abandono específico identificado en la auditoría. No son mejoras genéricas — son acciones quirúrgicas con impacto medible en métricas concretas:',
        bullets: [
          '**Descubrimiento (PDP)** — CTA visible sin scroll, misma jerarquía que "Añadir a la cesta". Dos variantes para A/B test. Métrica: tasa de clic en "Reservar en tienda" desde la PDP',
          '**Evaluación (selección de tienda)** — Tienda favorita preseleccionada, stock en tiempo real, horarios de recogida. Sin registro obligatorio. Métrica: ratio de completado del flujo de selección',
          '**Confianza (resumen y confirmación)** — "Pagarás en tienda. Ningún cargo online" en cada punto de contacto clave. Confirmación inmediata con QR + wallet. Métrica: ratio de reservas confirmadas / iniciadas',
          '**Retención (tracking)** — Estados progresivos, hora estimada, push reminder 2h antes de caducidad. Cross-selling contextual. Métrica: tasa de recogida efectiva dentro de 24h',
          '**Recuperación (abandonos)** — Push notification si el usuario cierra el flujo: "¿Quieres terminar la reserva en [Tienda]?". Segmentada por punto de abandono. Métrica: tasa de recuperación de flujos abandonados',
          '**Expansión (cross-selling)** — Looks complementarios del stock de la misma tienda durante el tracking. Métrica: incremento del ticket medio por visita de recogida',
        ],
        highlight: '"Pagarás en tienda. Ningún cargo online" — Este mensaje repetido en los momentos clave elimina la principal barrera psicológica. No es copy: es una decisión de producto que impacta directamente en la conversión.',
      },
      // ── 07. Impacto Esperado ──
      {
        label: '07. Impacto Esperado',
        title: 'Estimaciones de impacto y justificación',
        layout: 'center',
        content: 'Estas estimaciones se basan en benchmarks de la industria de fashion retail para intervenciones similares en flujos de e-commerce omnicanal. No son promesas — son hipótesis fundamentadas que requieren validación con datos reales:',
        bullets: [
          '**+200-400% en tasa de inicio de reservas** — Mover un CTA de debajo del fold a la zona de acción principal es una de las intervenciones con mayor impacto documentado en e-commerce. Benchmarks del sector sitúan el incremento de CTR entre 2x y 5x cuando el CTA pasa de invisible a prominente',
          '**+25-40% en tasa de completado** — Eliminar registro obligatorio y reducir de 8 a 4 pasos. Cada paso eliminado en un flujo de checkout reduce la caída acumulativa entre un 5-10%. La eliminación del registro obligatorio por sí sola puede mejorar la conversión entre un 15-25% según datos de Baymard Institute',
          '**+15-25% en tasa de recogida efectiva** — Tracking in-app con estados claros, push reminders y wallet. Los push notifications de recordatorio tienen tasas de apertura del 20-30% en apps de retail, y la integración con wallet reduce la fricción del "último paso"',
          '**+10-15% en ticket medio por visita** — Cross-selling contextual durante el tracking. Un usuario que ya decidió ir a la tienda tiene alta receptividad a sugerencias complementarias — especialmente cuando son del stock real de la tienda que va a visitar',
        ],
        highlight: 'El impacto acumulado de estas mejoras no es la suma de cada una — es multiplicativo. Un usuario que descubre el CTA, completa el flujo y recoge la reserva también está expuesto al cross-selling. **La cadena completa importa más que cada eslabón individual**.',
      },
      // ── 08. Reflexión ──
      {
        label: '08. Reflexión',
        title: 'Qué testearía primero y qué riesgos existen',
        layout: 'center',
        content: 'Un rediseño es una hipótesis hasta que se valida con datos reales. Estas son las prioridades de validación y los riesgos identificados:',
        bullets: [
          '**A/B test del CTA** — La primera validación sería un test A/B de las dos variantes de CTA (enlace contextual vs. botón secundario) contra el flujo actual. Es la intervención con mayor potencial de impacto y menor coste de implementación. Resultado esperado: datos en 2-3 semanas con tráfico existente',
          '**Validación del flujo sin registro** — ¿Los usuarios que reservan como invitados convierten igual en tienda que los registrados? Es posible que el registro, aunque genera fricción, también genere un efecto de compromiso (sunk cost). Habría que medir recogida efectiva por segmento',
          '**Riesgo: canibalización** — ¿El aumento de reservas en tienda reduce las compras online directas? Si un usuario que habría comprado online pasa a reservar y luego no recoge, el net revenue es negativo. Sería necesario monitorizar el GMV total (online + tienda) y no solo las métricas del flujo de reserva',
          '**Riesgo: capacidad operativa** — Un aumento significativo de reservas implica más preparación de pedidos en tienda. Si la capacidad operativa no escala, los tiempos de preparación aumentan y la experiencia se degrada. El poste QR ayuda pero no resuelve el cuello de botella del picking',
          '**Siguiente iteración** — Testing con usuarios reales del flujo completo (5-8 usuarios, tareas cronometradas). Medir: tiempo de completado, puntos de confusión, comprensión del modelo "sin cargo". Priorizar los puntos de fricción que los datos reales revelen vs. los que la auditoría sugirió',
        ],
        highlight: 'La mayor limitación de este proyecto es que se basa en auditoría heurística, no en datos cuantitativos del flujo actual. Las estimaciones de impacto son hipótesis fundamentadas — no certezas. **La siguiente fase imprescindible es instrumentar el flujo actual para medir los baselines reales antes de cualquier implementación**.',
      },
    ],
  },
  {
    slug: 'movefast-startup-platform',
    title: 'MoveFast',
    client: 'MoveFast',
    year: '2021',
    category: 'UX/UI Design',
    tags: ['UI Design', 'B2B Product', 'Fleet Management'],
    description: 'De cero a MVP en 2 semanas: diseño de producto para una app de movilidad eléctrica que resuelve la "ansiedad de autonomía" con un modelo de servicio que ningún competidor ofrece — cambio de baterías bajo demanda.',
    longDescription: 'El vehículo eléctrico tiene un problema de adopción en España. No es un problema técnico — es un problema de confianza. El consumidor reconoce las ventajas, pero tres barreras frenan la decisión de compra: **escasos puntos de carga**, **autonomía limitada** y **tiempos de recarga superiores a 45 minutos**. MoveFast nace para resolver la barrera más emocional de las tres — la "range anxiety" — con una propuesta de valor inexistente en el mercado: **cambio de baterías bajo demanda**, donde un técnico acude a tu ubicación y sustituye la batería en minutos.\n\nMi rol: diseñar la experiencia completa de la app móvil en **2 semanas**, desde la investigación de mercado hasta un prototipo interactivo con design system. El reto no era solo diseñar pantallas — era diseñar un modelo de servicio nuevo y hacerlo comprensible para un usuario que nunca ha usado nada parecido.',
    challenge: 'España se sitúa a la cola de Europa en matriculaciones de vehículos eléctricos. Los datos son claros: **escasos puntos de carga** (concentrados en capitales, casi inexistentes en autopistas), **precio elevado** frente al vehículo convencional, y **autonomía real por debajo de 300 km** en la mayoría de modelos. Pero la barrera más determinante no es racional — es emocional: la **"range anxiety"**, el miedo a quedarse sin batería lejos de un punto de carga. A esto se suman tiempos de recarga de **más de 45 minutos**, que hacen inviable la recarga en ruta para viajes familiares o laborales.',
    solution: 'Dos conceptos de servicio que ninguna app competidora ofrece: (1) **Cambio de batería a domicilio** — un técnico acude a tu ubicación con una batería cargada y realiza el intercambio en minutos (10 cambios gratuitos/año para compradores, 59€ cada adicional); (2) **Puntos de intercambio dinámicos** — ubicaciones modulares en la ciudad que cambian semanalmente, con reserva anticipada y operador in situ. **La app unifica ambos servicios en un mapa interactivo** con stock en tiempo real, ocupación, y sistema de reservas.',
    results: [
      'UX end-to-end definida en 2 semanas — de research a prototipo interactivo',
      'Dos modelos de servicio validados con user flows y wireframes antes de diseñar una pantalla',
      'Design system con componentes y variantes para escalar sin deuda visual',
      'Propuesta de valor diferencial documentada: ningún competidor ofrece cambio de baterías',
    ],
    stack: ['Figma', 'Whimsical', 'Adobe Illustrator', 'Adobe Photoshop', 'Miro', 'Google Forms'],
    cover: '/assets/projects/movefast/movefast-header.png',
    featured: true,
    brandColor: '#00C7B7',
    gridSpan: 2,
    projectMeta: {
      role: 'Product Designer',
      industry: 'Mobility',
      output: 'Mobile App Design',
      duration: '2 semanas',
      skills: ['UX Research', 'Benchmarking', 'User Persona', 'Journey Mapping', 'Prototyping', 'Design System', 'Wireframing', 'Visual Design', 'Interaction Design', 'Information Architecture', 'Mobile Design', 'Competitive Analysis'],
    },
    checks: [
      'España a la cola de Europa en adopción EV: infraestructura insuficiente y autonomía real por debajo de 300 km',
      '45+ minutos de recarga generan "range anxiety" — la barrera más emocional y determinante para la compra',
      'Ninguna app competidora ofrece cambio de baterías bajo demanda — vacío de mercado validado en benchmarking',
    ],
    caseSections: [
      // ── 01. Espacio del Problema ──
      {
        label: '01. Espacio del Problema',
        title: 'Un mercado con demanda latente y barreras reales',
        layout: 'right-left',
        content: 'Antes de diseñar, necesitaba entender por qué España está a la cola de Europa en adopción del vehículo eléctrico. La respuesta no es falta de interés — el consumidor español conoce las ventajas (ahorro, acceso a zonas restringidas, beneficios fiscales). **El problema es que las barreras pesan más que los beneficios.**\n\nExisten dos categorías de vehículos eléctricos en el mercado: el **BEV** (100% eléctrico, batería recargable) y el **PHEV** (híbrido enchufable, ~40 km de autonomía eléctrica). En ambos casos, la infraestructura de recarga crece, pero no al ritmo necesario para generar confianza. Los datos de matriculaciones lo confirman: la cuota de mercado es mínima frente a Noruega, Países Bajos o Alemania.',
        images: ['/assets/projects/movefast/movefast-electric-passenger-cars-registrations-spain.png'],
        captions: ['Matriculaciones de vehículos eléctricos — España vs. Europa: una brecha que no se explica solo por precio'],
      },
      {
        label: '01. Espacio del Problema',
        title: 'Tres barreras que frenan la adopción',
        layout: 'image-grid',
        content: 'La investigación de mercado reveló tres barreras principales. Aunque las tres son relevantes, cada una tiene un peso diferente en la decisión de compra:\n\n**1. Infraestructura insuficiente** — Puntos de carga concentrados en capitales, casi inexistentes en autopistas y zonas rurales. El usuario no puede planificar un viaje largo con confianza.\n\n**2. Precio elevado** — El coste de adquisición supera al vehículo convencional equivalente. Aunque el coste operativo es menor, la barrera de entrada frena al comprador.\n\n**3. Autonomía limitada + tiempo de recarga** — Muchos modelos por debajo de 300 km reales, y recargas de más de 45 minutos. Esta combinación genera **"range anxiety"**: el miedo a quedarse sin batería lejos de un punto de carga. **Es la barrera más emocional y la más determinante** — porque convierte cada viaje en una fuente de incertidumbre.',
        images: [
          '/assets/projects/movefast/movefast-flota-vehiculos-electricos.png',
          '/assets/projects/movefast/movefast-evolucion-esp.png',
          '/assets/projects/movefast/movefast-recharging-points-spain.png',
          '/assets/projects/movefast/mf-estaciones-de-carga-en-europa-min.png',
          '/assets/projects/movefast/movefast-flota-coches-europa-2020.png',
        ],
        captions: [
          'Flota de vehículos eléctricos en España — crecimiento lento',
          'Evolución de matriculaciones — tendencia positiva pero insuficiente',
          'Puntos de recarga en España — concentración en capitales',
          'Estaciones de carga en Europa — brecha de infraestructura evidente',
          'Flota europea de coches eléctricos (2020) — España al margen',
        ],
      },
      {
        label: '01. Espacio del Problema',
        title: 'Benchmarking — El vacío que justifica la propuesta',
        layout: 'image-grid',
        content: 'Analicé las principales apps del sector para entender qué ofrecen y dónde fallan. Todas comparten las mismas funcionalidades: mapa de estaciones de carga, filtros por voltaje y conector, favoritos y pasarela de pago. La mayoría tienen una **usabilidad pobre y un diseño visual descuidado**. Iberdrola destaca visualmente pero es lenta y limitada en funcionalidad.\n\nEl hallazgo más relevante del benchmarking no es lo que estas apps hacen mal — es lo que **ninguna hace**: ofrecer un modelo alternativo a la recarga convencional. Todas asumen que el usuario tiene que ir a un punto de carga y esperar. **Ninguna cuestiona el modelo.**',
        highlight: 'Ninguna app del mercado ofrece cambio de baterías. Todas resuelven "dónde cargar", pero ninguna resuelve "cómo cargar más rápido". **MoveFast entra en el espacio que nadie cubre.**',
        images: [
          '/assets/projects/movefast/movefast-benchmarking-apps.png',
          '/assets/projects/movefast/movefast-benchmarking.png',
        ],
        captions: [
          'Análisis de apps competidoras — funcionalidades similares, ejecución deficiente',
          'Matriz de benchmarking — el vacío funcional del cambio de baterías',
        ],
      },
      // ── 02. Job To Be Done ──
      {
        label: '02. Job To Be Done',
        title: 'Quién es el usuario y qué necesita realmente',
        layout: 'full-image',
        content: 'Para diseñar la experiencia, definí a Oriol Vallmajor: arquitecto, ingresos por encima de la media, early adopter, comprometido con la sostenibilidad. Oriol quiere viajar por España con su familia en un vehículo eléctrico. Está dispuesto a pagar por la transición — pero **la incertidumbre le frena**.\n\nSu dolor principal no es técnico. Es emocional: **"¿Qué pasa si me quedo sin batería en medio de un viaje familiar?"** El Job To Be Done no es "recargar el coche" — es **"sentir que tengo el control de mi autonomía y que siempre hay una solución cerca"**. Ninguna app actual resuelve esa necesidad emocional.',
        images: ['/assets/projects/movefast/movefast-user-persona.png'],
        captions: ['User Persona — Oriol Vallmajor: early adopter frenado por la incertidumbre, no por la tecnología'],
      },
      {
        label: '02. Job To Be Done',
        title: 'La barrera es emocional, no racional',
        layout: 'full-image',
        content: 'El mapa de empatía reveló el insight central del proyecto: Oriol sabe que el coche eléctrico le conviene económicamente. Sabe que contamina menos. Sabe que tiene beneficios fiscales. **Pero cuando piensa en un viaje largo, siente miedo.** ¿Y si el punto de carga más cercano está a 80 km? ¿Y si está ocupado cuando llegue? ¿Y si tengo que esperar 45 minutos con los niños en el coche?\n\nLa **"range anxiety" no es un problema de autonomía real — es un problema de autonomía percibida.** Y se resuelve dando al usuario una alternativa que elimine la espera, no solo una app que le muestre dónde esperar.',
        images: ['/assets/projects/movefast/movefast-mapa-empatia.png'],
        captions: ['Mapa de empatía — El miedo a quedarse tirado pesa más que cualquier ventaja racional'],
      },
      {
        label: '02. Job To Be Done',
        title: 'Tres picos de frustración que definen las oportunidades',
        layout: 'full-image',
        content: 'El customer journey map documentó la experiencia completa: desde la decisión de compra hasta el momento crítico de recargar en ruta. Los **picos de frustración** se concentran en tres puntos específicos:\n\n**1. Planificación del viaje** — Descubrir que no hay puntos de carga en la ruta habitual. La incertidumbre empieza antes de salir de casa.\n\n**2. Llegada al punto de carga** — Encontrarlo ocupado o fuera de servicio. La frustración es mayor porque el usuario ya ha planificado alrededor de ese punto.\n\n**3. Tiempo de espera** — Más de 45 minutos de recarga. Para un viaje familiar, es inaceptable.\n\nEstos tres momentos definen exactamente dónde MoveFast puede intervenir: no en el punto de carga, sino **antes de que el usuario necesite uno.**',
        images: ['/assets/projects/movefast/movefast-costumer-journey.png'],
        captions: ['Customer Journey — Los tres picos de frustración que la competencia ignora'],
      },
      // ── 03. Hipótesis y Estrategia ──
      {
        label: '03. Hipótesis y Estrategia',
        title: 'Tres hipótesis de producto',
        layout: 'center',
        content: 'La investigación de mercado, el benchmarking y el análisis del usuario convergen en tres hipótesis que guían todas las decisiones de diseño:',
        bullets: [
          '**H1: El modelo de servicio importa más que la app.** Si ofrecemos cambio de batería en minutos (vs. 45+ min de recarga), eliminamos la barrera emocional que frena la adopción del vehículo eléctrico. La app es el canal — el servicio es la propuesta de valor',
          '**H2: Dos modelos complementarios, no uno.** El cambio a domicilio resuelve la comodidad diaria. Los puntos de intercambio dinámicos resuelven la autonomía en ruta. Ambos son necesarios porque atacan momentos diferentes del journey del usuario',
          '**H3: Reducir decisiones = reducir ansiedad.** Si preseleccionamos la opción más relevante (punto más cercano, franja horaria más próxima), el usuario pasa de "tengo que buscar dónde cargar" a "confirmo y listo". Menos carga cognitiva = mayor tasa de activación',
        ],
        highlight: 'La estrategia UX de MoveFast no es "mejorar la experiencia de recarga". Es **eliminar la recarga como experiencia** y sustituirla por un intercambio que se siente como repostar gasolina: rápido, predecible y sin espera.',
      },
      // ── 04. Decisiones de Producto ──
      {
        label: '04. Decisiones de Producto',
        title: 'Arquitectura de flujos y wireframes',
        layout: 'whimsical-embed',
        content: 'Antes de diseñar una sola pantalla, definí la arquitectura de los dos flujos principales en Whimsical:\n\n**1. Cambio de batería a domicilio** — App → "Cambio a domicilio" → confirmar ubicación → elegir franja horaria → técnico acude con batería cargada → intercambio en minutos. **Decisión clave**: el flujo se completa en 3 taps. La ubicación se prelocaliza por GPS, la franja horaria muestra solo opciones disponibles. Sin pasos innecesarios.\n\n**2. Reserva en punto de intercambio dinámico** — Mapa → localizar punto más cercano → reservar fecha y hora → acudir → operador realiza el cambio. **Decisión clave**: los puntos cambian de ubicación semanalmente. Esto parece una complejidad, pero permite cobertura sin infraestructura fija — un trade-off deliberado entre previsibilidad y escalabilidad.\n\nAdemás, se añadieron funcionalidades que el brief no contemplaba: **favoritos** (reducir fricción para usuarios recurrentes), **filtros avanzados** (tipo de punto + disponibilidad) y **notificaciones** de nuevas ubicaciones (retención).',
        embeds: [
          'https://whimsical.com/embed/CdxiEyLfhbfFUfhdi1XRcH',
          'https://whimsical.com/embed/TDfQTWmva6ALGvJdkPEE5o',
        ],
      },
      // ── 05. Flujo End-to-End ──
      {
        label: '05. Flujo End-to-End',
        title: 'Prototipo interactivo',
        layout: 'figma-embed',
        content: 'El prototipo en Figma cubre el flujo completo del usuario: desde el onboarding hasta la confirmación de reserva. Incluye transiciones entre pantallas y estados de interacción que permiten evaluar la experiencia sin necesidad de código. **El objetivo del prototipo no era "mostrar pantallas bonitas" — era validar que el modelo de servicio es comprensible para un usuario que nunca ha cambiado una batería.**',
        figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfAzRuKJicjcwgMw2u1sYiO%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D531-71%26page-id%3D503%253A268%26scaling%3Dscale-down%26starting-point-node-id%3D582%253A4968',
      },
      {
        label: '05. Flujo End-to-End',
        title: 'Cómo se reduce la fricción en cada paso',
        layout: 'screens-grid',
        content: 'El flujo end-to-end está diseñado para reducir la carga cognitiva en cada pantalla:\n\n**Onboarding (4 pantallas)** — No explica "cómo funciona la app". Explica "qué puede hacer por ti": puntos de carga actualizados, ocupación en tiempo real, puntos de cambio de batería cercanos, y reserva anticipada. Cada pantalla responde una objeción, no describe una feature.\n\n**Mapa interactivo** — Pantalla principal. Unifica puntos de carga, talleres de intercambio y cambio a domicilio en una sola vista. El usuario no tiene que decidir "qué tipo de servicio quiero" antes de ver las opciones — las ve todas y elige según contexto.\n\n**Filtros + Favoritos** — Reducen el tiempo de decisión para usuarios recurrentes. Un usuario que ya sabe cuál es su taller preferido no debería pasar por el flujo de descubrimiento cada vez.\n\n**Reserva (3 pasos)** — Seleccionar ubicación → elegir fecha/hora → confirmar. Sin cuenta obligatoria para el primer uso. **La fricción mínima es deliberada**: en un mercado donde el usuario aún no confía en el modelo, cada paso extra es una razón para abandonar.',
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
          'Splash — Animación de entrada que establece la marca',
          'Splash — Variante de carga con indicador de progreso',
          'Onboarding — "Puntos de carga siempre actualizados"',
          'Onboarding — "Ocupación en tiempo real"',
          'Onboarding — "Puntos de cambio de batería cerca de ti"',
          'Onboarding — "Reserva tu cambio de batería"',
          'Mapa interactivo — Vista unificada de todos los servicios',
          'Menú lateral — Acceso a vehículos, baterías, pagos',
          'Filtros — Tipo de punto y disponibilidad',
          'Detalle de taller — Horarios y disponibilidad real',
          'Favoritos — Acceso rápido para usuarios recurrentes',
          'Reserva — Selección de ubicación',
          'Reserva — Fecha y hora disponibles',
          'Confirmación — Reserva completada en 3 taps',
        ],
      },
      // ── 06. Impacto Esperado ──
      {
        label: '06. Impacto Esperado',
        title: 'Métricas hipotéticas y justificación',
        layout: 'center',
        content: 'Al ser un proyecto de diseño de MVP (sin implementación), las métricas son hipotéticas. Pero cada estimación está fundamentada en el research y en benchmarks del sector de apps de movilidad:',
        bullets: [
          '**Tiempo de primer valor: <2 minutos** — Del onboarding a la primera reserva. El flujo de reserva tiene 3 pasos, sin registro obligatorio. En apps de movilidad comparables, los flujos de 3-4 pasos tienen tasas de completado superiores al 60%',
          '**Reducción de "range anxiety" percibida** — Al ofrecer cambio en minutos (vs. 45+ min de recarga), el usuario percibe que siempre tiene una alternativa. Esta percepción de control es la palanca más poderosa para la adopción del EV según la investigación',
          '**Diferenciación competitiva total** — Ninguna app del mercado ofrece cambio de baterías. MoveFast entra en una categoría que no existe. Esto simplifica el posicionamiento y reduce el coste de adquisición: no compites por features, compites por modelo de servicio',
          '**Mayor retención por favoritos + notificaciones** — Los puntos dinámicos cambian semanalmente. Las notificaciones de nuevas ubicaciones generan motivos recurrentes para abrir la app — un loop de retención que las apps de recarga fija no tienen',
        ],
        highlight: 'El impacto más importante de MoveFast no es una métrica de la app — es una métrica del mercado. Si el cambio de baterías en minutos es viable, **elimina la barrera más determinante para la adopción del vehículo eléctrico en España**.',
      },
      // ── 07. Reflexión ──
      {
        label: '07. Reflexión',
        title: 'Qué validaría primero y qué riesgos existen',
        layout: 'center',
        content: 'Dos semanas de diseño no son suficientes para validar un modelo de servicio nuevo. Este proyecto entregó una UX completa con design system, pero queda trabajo crítico por hacer:',
        bullets: [
          '**Validar la comprensión del modelo** — ¿Los usuarios entienden qué es "cambio de batería" sin explicación previa? El onboarding intenta resolverlo, pero necesita testing con usuarios reales. Si >30% de los usuarios no entienden la propuesta tras el onboarding, hay un problema de comunicación fundamental',
          '**A/B test: domicilio vs. punto de intercambio** — ¿Cuál de los dos modelos genera mayor conversión? Es posible que uno canibalice al otro o que cada uno sirva a un segmento diferente. Habría que medir preferencia, frecuencia y willingness-to-pay por separado',
          '**Riesgo: viabilidad operativa de los puntos dinámicos** — Cambiar de ubicación semanalmente es una ventaja para la cobertura, pero una complejidad para la operación. ¿Qué pasa si los usuarios memorizan una ubicación y encuentran que ya no está? Las notificaciones mitigan el riesgo, pero no lo eliminan',
          '**Riesgo: adopción en un mercado inmaduro** — España tiene el menor ratio de EVs per cápita de Europa occidental. MoveFast necesita masa crítica de usuarios para ser viable, pero los usuarios potenciales son pocos. Es un problema de chicken-and-egg: el servicio mejora con más usuarios, pero los usuarios llegan con mejor servicio',
          '**Siguiente iteración** — Pantallas de perfil completo, historial de pagos, gestión detallada de favoritos. Versión web responsive para ampliar acceso. **Revisión WCAG** de contraste, tamaños táctiles y navegación por teclado — una deuda técnica que en un MVP se acepta pero no se ignora',
        ],
        highlight: 'La mayor fortaleza de este proyecto es también su mayor riesgo: **diseñar para un modelo de servicio que no existe en el mercado**. Si el modelo es viable, MoveFast no tiene competencia. Si no lo es, el mejor diseño del mundo no lo salva. La siguiente fase imprescindible es un piloto operativo — no más pantallas.',
      },
    ],
  },
  {
    slug: 'global-helping',
    title: 'Global Helping',
    client: 'Global Helping',
    year: '2021',
    category: 'Design Thinking',
    tags: ['UX Design', 'Design Thinking', 'Nonprofit'],
    description: 'Plataforma que unifica donaciones, voluntariado y crowdfunding en un solo lugar — diseñada para resolver la invisibilidad de las ONGs locales frente a las grandes organizaciones internacionales.',
    longDescription: 'Una persona quiere ayudar. Busca en Google. Encuentra tres plataformas diferentes: una para donar, otra para ser voluntario, otra para crowdfunding. Cada una con su propio registro, su interfaz, su lógica. **Para cuando decide cuál usar, la motivación se ha diluido.**\n\nGlobal Helping nace para eliminar esa fragmentación. Es una plataforma web que conecta personas solidarias con ONGs y causas sociales a través de **donaciones, voluntariado y crowdfunding en un único punto de acceso**. Pero el hallazgo más importante del proyecto no fue tecnológico — fue humano: tras encuestar a 48 personas, descubrí que el problema real no era la falta de solidaridad. Era la **falta de visibilidad de las ONGs locales** frente a las grandes organizaciones internacionales. El proyecto pivotó completamente a partir de ese insight.',
    challenge: 'La investigación reveló dos problemas estructurales: (1) las **ONGs locales carecen de recursos de comunicación** — no pueden competir en visibilidad con grandes organizaciones que tienen equipos de marketing, SEO y paid media; (2) **no existe ninguna plataforma que unifique donaciones, voluntariado y crowdfunding** — cada servicio vive aislado, multiplicando la fricción para el usuario que quiere actuar. El resultado: personas con intención real de ayudar que abandonan antes de completar la acción, y organizaciones locales que hacen trabajo crítico pero que nadie conoce.',
    solution: 'Una plataforma web que **unifica tres servicios en uno**: donar a causas verificadas, apuntarse como voluntario y lanzar campañas de crowdfunding. El diseño prioriza dos cosas: **confianza** (que el usuario sepa que su ayuda llega donde debe) y **conexión emocional** (que sienta la urgencia y el impacto de cada causa). El sistema visual se construyó con Design Tokens para escalabilidad, y el storytelling visual convierte datos de ONGs en narrativas que motivan la acción.',
    results: [
      'UX end-to-end en 2 semanas (45 horas) — research, persona, wireframes, design system y prototipo funcional',
      'Prototipo interactivo en Figma con 3 flujos principales: donar, ser voluntario y contribuir a crowdfunding',
      'Design system con foundations, tokens y componentes reutilizables — preparado para escalar',
      'Pivot validado por datos: 48 encuestas reorientaron el proyecto de enfoque global a visibilidad local',
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
      'Las ONGs locales hacen trabajo crítico pero carecen de recursos para competir en visibilidad con grandes organizaciones',
      'Donaciones, voluntariado y crowdfunding viven en plataformas separadas — la fragmentación diluye la intención de ayudar',
      'Sin conexión emocional con la causa ni transparencia sobre el impacto, el usuario no repite ni recomienda',
    ],
    caseSections: [
      // ── 01. Espacio del Problema ──
      {
        label: '01. Espacio del Problema',
        title: 'De las problemáticas globales a un problema concreto',
        layout: 'image-grid',
        content: 'El punto de partida fue amplio: 15.000 científicos de 184 países han identificado 10 grandes problemáticas globales — escasez de agua, sobrepesca, degradación del suelo, contaminación, extinción de especies. La pregunta inicial era ambiciosa: "¿Cómo podemos mejorar la calidad de vida de los más desfavorecidos?"\n\nPero un caso de estudio serio no empieza con la respuesta — empieza con las preguntas correctas. Formulé Research Questions en tres categorías: **Usuarios** (¿cómo se comporta la persona solidaria? ¿qué le frena? ¿qué le motiva?), **Productos** (¿qué oferta existe? ¿dónde hay vacíos?) e **Instituciones** (¿qué capacidades tienen las ONGs? ¿qué les falta?). Estas preguntas evitaron que el proyecto se convirtiera en una lista de buenas intenciones.',
        images: [
          '/assets/projects/global-helping/gh-brainstorming.png',
          '/assets/projects/global-helping/gh-research-questions.png',
        ],
        captions: [
          'Brainstorming — Mapeo de problemáticas globales para identificar oportunidades de diseño',
          'Research Questions — Tres categorías de preguntas que evitaron sesgos en la investigación',
        ],
      },
      {
        label: '01. Espacio del Problema',
        title: 'El pivote — Los datos cambiaron la dirección del proyecto',
        layout: 'image-grid',
        content: 'Encuesté a **48 personas** con diferentes grados de experiencia en solidaridad. El hallazgo fue inesperado y cambió completamente el proyecto.\n\n**Escenario real**: María, 34 años, donó 50€ a Cruz Roja el año pasado. Quiere ayudar más, pero cuando busca opciones, encuentra solo grandes organizaciones internacionales. No sabe que a 3 km de su casa hay una ONG local que reparte comida a familias en riesgo de exclusión. Esa ONG no tiene web, no tiene SEO, no tiene campaña de marketing. **Existe, pero es invisible.**\n\nEl problema no era la falta de solidaridad — las personas quieren ayudar. El problema era **la asimetría de visibilidad**: las ONGs locales hacen trabajo crítico en comunidades cercanas, pero no tienen los recursos de comunicación para llegar a los potenciales donantes y voluntarios que viven al lado.',
        highlight: 'El proyecto pivotó de "ayudar a países subdesarrollados" a **"dar visibilidad a las ONGs locales que ya están haciendo el trabajo pero que nadie conoce"**. Los datos lo decidieron, no la intuición.',
        images: [
          '/assets/projects/global-helping/gh-cuestionarios-2.png',
          '/assets/projects/global-helping/gh-cuestionarios-1.png',
        ],
        captions: [
          'Encuesta — Hábitos solidarios: la mayoría conoce solo grandes organizaciones',
          'Análisis de respuestas — El insight que reorientó todo el proyecto',
        ],
      },
      // ── 02. Usuarios y Contexto ──
      {
        label: '02. Usuarios y Contexto',
        title: 'El usuario solidario — Motivado pero frustrado',
        layout: 'image-grid',
        content: 'Los datos de las encuestas dieron forma a un perfil concreto: una persona con intención real de ayudar, pero que enfrenta **tres barreras emocionales** que la frenan:\n\n**1. Desconfianza** — "¿Mi dinero realmente llega a quien lo necesita?" Sin transparencia sobre cómo se usa la donación, el usuario prefiere no actuar. La confianza rota por escándalos mediáticos de ONGs afecta a todo el sector — incluyendo a las organizaciones honestas.\n\n**2. Parálisis por opciones** — "Hay tantas causas que no sé por dónde empezar." La fragmentación de plataformas (una para donar, otra para voluntariado, otra para crowdfunding) multiplica las decisiones y diluye la motivación.\n\n**3. Falta de feedback** — "Doné hace 6 meses y no sé qué pasó con mi dinero." Sin seguimiento del impacto, el usuario no vuelve ni recomienda. La donación se siente como tirar dinero a un pozo.\n\nEstas barreras no son racionales — son emocionales. Y requieren soluciones de diseño que construyan confianza, no solo funcionalidad.',
        images: [
          '/assets/projects/global-helping/gh-user-persona.png',
          '/assets/projects/global-helping/gh-mapa-empatia.png',
        ],
        captions: [
          'User Persona — Motivado por la causa, frustrado por la experiencia',
          'Mapa de empatía — Las barreras son emocionales: desconfianza, parálisis y falta de feedback',
        ],
      },
      // ── 03. Journey y Puntos de Fricción ──
      {
        label: '03. Journey y Puntos de Fricción',
        title: 'Dónde se pierde la intención de ayudar',
        layout: 'full-image',
        content: 'El customer journey map reveló que la motivación del usuario es más alta al principio — cuando descubre una causa que le conmueve — y decae progresivamente con cada punto de fricción.\n\n**Escenario real**: Laura ve un reportaje sobre familias sin recursos en su ciudad. Se conmueve. Abre el móvil. Busca "donar comida Barcelona". Encuentra 4 webs diferentes. Cada una le pide registro. No sabe cuál es fiable. Cierra el móvil. **La intención se ha perdido en 3 minutos.**\n\nLos puntos de fricción críticos: (1) **descubrimiento fragmentado** — no hay un punto de acceso único; (2) **registro múltiple** — cada plataforma pide crear cuenta; (3) **falta de contexto emocional** — las plataformas muestran datos, no historias; (4) **cero seguimiento** — después de la acción, silencio total.\n\nCada punto de fricción no solo pierde un usuario — **pierde una acción concreta de ayuda que habría ocurrido si la experiencia fuera más simple.**',
        images: ['/assets/projects/global-helping/gh-customer-journey.png'],
        captions: ['Customer Journey — La motivación decae con cada punto de fricción. El diseño debe proteger la intención inicial.'],
      },
      // ── 04. Estrategia UX ──
      {
        label: '04. Estrategia UX',
        title: 'El vacío competitivo que justifica la plataforma',
        layout: 'left-right',
        content: 'El benchmarking confirmó lo que las encuestas sugerían: existen plataformas de donaciones (Teaming, GoFundMe), plataformas de voluntariado (Hacesfalta.org) y plataformas de crowdfunding (Goteo, Verkami). **Pero ninguna reúne los tres servicios.**\n\nEsto importa porque el usuario no piensa en categorías de servicio — piensa en "quiero ayudar". Obligarle a elegir entre donar, ser voluntario o contribuir a crowdfunding antes de mostrarle las causas es una barrera artificial. **Global Helping elimina esa decisión**: el usuario explora causas, y cada causa le ofrece las formas de ayudar disponibles.\n\nLa estrategia UX se construye sobre cuatro principios:\n\n**1. Un punto de acceso, tres formas de actuar** — Sin fragmentación.\n**2. Confianza antes de conversión** — El usuario necesita creer antes de actuar.\n**3. Conexión emocional con storytelling** — Historias reales, no métricas frías.\n**4. Feedback post-acción** — Mostrar el impacto de la ayuda para generar recurrencia.',
        highlight: 'El usuario no piensa "quiero donar" o "quiero ser voluntario". Piensa **"quiero ayudar"**. La plataforma debe adaptarse a la intención, no obligar al usuario a adaptarse a la estructura.',
        images: ['/assets/projects/global-helping/gh-benchmarking.png'],
        captions: ['Benchmarking — Ninguna plataforma unifica donaciones, voluntariado y crowdfunding'],
      },
      // ── 05. Decisiones de Diseño ──
      {
        label: '05. Decisiones de Diseño',
        title: 'Design System — Confianza y consistencia a escala',
        layout: 'image-grid',
        content: '**Problema**: Una plataforma solidaria necesita transmitir confianza desde el primer píxel. Inconsistencias visuales — un botón que cambia de color, una tipografía que varía entre páginas — erosionan la credibilidad de forma inconsciente.\n\n**Decisión**: Construir un sistema de Design Tokens (color, tipografía, spacing, grid) como base de toda la plataforma. No es solo eficiencia técnica — es una decisión de confianza. Un sistema visual consistente comunica profesionalidad, seriedad y cuidado. Exactamente lo que un usuario necesita sentir antes de dar su dinero o su tiempo a una causa.\n\n**Trade-off**: Invertir tiempo en foundations en un proyecto de 2 semanas reduce el tiempo disponible para pantallas finales. Pero sin foundations sólidas, cada pantalla nueva introduce inconsistencias que dañan la percepción de confiabilidad.',
        images: [
          '/assets/projects/global-helping/gh-foundations.png',
          '/assets/projects/global-helping/gh-componentes.png',
        ],
        captions: [
          'Foundations — Color, tipografía, iconografía, grid y espaciado diseñados para transmitir confianza',
          'Componentes — Cards, botones, inputs construidos sobre tokens para consistencia total',
        ],
      },
      {
        label: '05. Decisiones de Diseño',
        title: 'De wireframes a alta fidelidad — Priorizar la estructura sobre la estética',
        layout: 'full-image',
        content: '**Problema**: En una plataforma con tres flujos principales (donar, voluntariado, crowdfunding), la arquitectura de información es más crítica que el diseño visual. Si el usuario no encuentra cómo ayudar en los primeros 10 segundos, abandona.\n\n**Decisión**: Wireframes primero, siempre. Validar la estructura de información y los flujos principales antes de invertir en detalle visual. Los wireframes revelaron que el flujo inicial — elegir tipo de ayuda antes de explorar causas — era incorrecto. **El usuario quiere ver causas primero y decidir cómo ayudar después.** Este insight cambió la arquitectura completa de la plataforma.\n\n**Trade-off**: Los wireframes de baja fidelidad son más rápidos de iterar, pero más difíciles de usar en testing con usuarios. Para un proyecto de 2 semanas, el trade-off fue aceptable — la prioridad era la estructura, no la validación visual.',
        images: ['/assets/projects/global-helping/gh-wireframing.png'],
        captions: ['Wireframes — La estructura correcta se validó antes de diseñar un solo componente'],
      },
      // ── 06. Confianza y Seguridad ──
      {
        label: '06. Confianza y Seguridad',
        title: 'Cómo se construye confianza — y qué pasa si falla',
        layout: 'center',
        content: 'La confianza es el recurso más frágil de una plataforma solidaria. **Si el usuario duda una sola vez de que su ayuda llega donde debe, no vuelve.** Y lo que es peor: cuenta su mala experiencia a 10 personas que tampoco vendrán.\n\nMecanismos de confianza diseñados para Global Helping:',
        bullets: [
          '**Perfiles verificados de ONGs** — Cada organización tiene un badge de verificación visible. Sin verificación, no aparece en la plataforma. **Si falla**: ONGs falsas o no verificadas erosionan la confianza de todo el ecosistema. Un solo caso de fraude puede destruir la reputación de la plataforma',
          '**Transparencia de fondos** — Cada causa muestra cuánto se ha recaudado, cuánto se necesita y cómo se distribuye. **Si falla**: sin transparencia, el usuario asume lo peor. "¿Cuánto se queda la plataforma?" es la primera pregunta que surge — y debe tener respuesta visible',
          '**Storytelling con prueba social** — Historias reales de beneficiarios con fotos y actualizaciones. No métricas frías — narrativas humanas. **Si falla**: sin conexión emocional, la donación se siente como un trámite burocrático. El usuario no repite',
          '**Actualizaciones post-acción** — Después de donar o ser voluntario, el usuario recibe actualizaciones sobre el impacto de su ayuda. **Si falla**: sin feedback, el usuario siente que su ayuda cayó en un agujero negro. La tasa de recurrencia se desploma',
          '**Protección anti-spam** — Sistema de moderación para evitar que causas falsas, duplicadas o de baja calidad contaminen la plataforma. **Si falla**: si la plataforma se llena de causas de baja calidad, el usuario pierde la capacidad de distinguir las legítimas. La confianza en el curado es tan importante como la confianza en cada ONG individual',
        ],
        highlight: 'La confianza en una plataforma solidaria no se construye con un badge de verificación. Se construye con **transparencia total en cada punto de contacto**: cuánto se recauda, cómo se distribuye, qué impacto genera, y qué pasa si algo sale mal.',
      },
      // ── 07. Accesibilidad e Inclusión ──
      {
        label: '07. Accesibilidad e Inclusión',
        title: 'Diseñar para quienes más lo necesitan',
        layout: 'center',
        content: 'Una plataforma solidaria que no es accesible tiene una contradicción fundamental: excluye a las personas que más podrían beneficiarse de ella. Las decisiones de inclusión no son un "nice to have" — son coherencia con la misión del producto:',
        bullets: [
          '**Alfabetización digital variable** — El usuario solidario no es siempre un nativo digital. El diseño prioriza botones grandes, textos claros y flujos de máximo 3 pasos. Cada acción tiene un label explícito — nunca solo un icono',
          '**Idioma y contexto cultural** — La arquitectura está preparada para traducción multi-idioma. Las causas se presentan con contexto local (ubicación, distancia al usuario) para generar conexión con la comunidad cercana',
          '**Responsive desde el diseño** — 5 breakpoints planificados desde wireframes. El 70% de los usuarios solidarios consultan desde móvil — el diseño mobile-first no es una optimización posterior, es el punto de partida',
          '**Accesibilidad visual** — Contrastes WCAG AA, tamaños táctiles mínimos de 44px, labels en todos los inputs. El storytelling visual incluye alt text descriptivo para lectores de pantalla — las historias de las causas deben llegar a todos',
        ],
        highlight: 'Si la plataforma no es accesible para una persona mayor que quiere donar desde su móvil, o para un usuario con baja visión que quiere ser voluntario, **el diseño ha fallado en su misión más básica**.',
      },
      // ── 08. Flujo Final ──
      {
        label: '08. Flujo Final',
        title: 'Prototipo interactivo — De la causa a la acción',
        layout: 'figma-embed',
        content: 'El prototipo funcional en Figma demuestra el flujo core: exploración de causas con storytelling visual, detalle de una causa con las tres opciones de ayuda (donar, voluntariado, crowdfunding), y el flujo de contribución. **Cada pantalla está diseñada para proteger la motivación inicial del usuario** — minimizando los pasos entre "quiero ayudar" y "ya he ayudado".\n\n**Escenario real que el prototipo valida**: Un usuario llega a la plataforma porque vio un post en redes sobre una ONG local. En 3 clics: descubre la causa, elige cómo ayudar y completa la acción. Sin registro previo obligatorio. Sin salir de la plataforma. Sin perder la motivación.',
        figmaUrl: 'https://embed.figma.com/proto/ZU6SwljVsA0g9iAHhZ9oDj/Global-Helping?page-id=0%3A1&node-id=340-25451&p=f&viewport=249%2C246%2C0.06&t=ghMETNDpnq6X6hrN-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=340%3A23253&embed-host=share',
      },
      // ── 09. Impacto Esperado ──
      {
        label: '09. Impacto Esperado',
        title: 'Métricas hipotéticas con justificación',
        layout: 'center',
        content: 'Al ser un proyecto de concepto sin implementación, las métricas son hipotéticas. Pero cada estimación está fundamentada en el research y en benchmarks de plataformas solidarias:',
        bullets: [
          '**Reducción de tiempo a la acción: de minutos a segundos** — El flujo actual (buscar ONG + encontrar plataforma + registro + donar) requiere >5 minutos distribuidos en 2-3 plataformas. Global Helping reduce esto a <90 segundos en una sola plataforma. Cada minuto de fricción reduce la conversión un 7% según datos de fundraising digital',
          '**Mayor visibilidad para ONGs locales** — Al reunir causas locales e internacionales en el mismo directorio, las ONGs locales pasan de "invisibles" a "descubribles". El mapa de proximidad prioriza causas cercanas, aprovechando el sesgo psicológico de cercanía que aumenta la donación hasta un 30%',
          '**Mayor tasa de recurrencia** — Las actualizaciones post-acción y el storytelling de impacto crean un loop emocional: donar → ver el impacto → sentir satisfacción → donar de nuevo. Plataformas con feedback de impacto reportan tasas de recurrencia 2-3x superiores',
          '**Efecto de red en voluntariado** — Cada voluntario que comparte su experiencia atrae a más voluntarios. El diseño incluye compartir en redes sociales con narrativa preformateada que cuenta la historia de la causa, no solo pide dinero',
        ],
        highlight: 'El impacto más importante no es una métrica de plataforma. Es **cada acción de ayuda que habría ocurrido pero no ocurrió porque la experiencia era demasiado fragmentada**. Global Helping existe para que esas acciones dejen de perderse.',
      },
      // ── 10. Reflexión ──
      {
        label: '10. Reflexión',
        title: 'Qué aprendí, qué testearía y qué riesgos existen',
        layout: 'center',
        content: 'El mayor aprendizaje fue la importancia de dejarse guiar por los datos. Las encuestas cambiaron completamente la dirección del proyecto — de "ayudar al tercer mundo" a "dar visibilidad a la ONG de tu barrio". Sin esas 48 respuestas, habría diseñado una plataforma bonita que no resolvía el problema real.',
        bullets: [
          '**Testearía primero**: Flujo de donación completo con 5-8 usuarios reales. Medir: ¿entienden la diferencia entre donar, voluntariado y crowdfunding? ¿La navegación por causas genera conexión emocional o parálisis? ¿Completan la acción sin ayuda?',
          '**Riesgo: cold start** — La plataforma necesita causas publicadas para atraer usuarios, y usuarios activos para atraer ONGs. Sin masa crítica inicial en ambos lados, la plataforma se siente vacía y pierde credibilidad. Un lanzamiento por ciudad (no global) mitigaría este riesgo',
          '**Riesgo: calidad del contenido** — Si las ONGs publican causas con texto pobre, fotos de baja calidad o información incompleta, la experiencia se degrada. Se necesitaría un equipo editorial o templates guiados para garantizar un mínimo de calidad narrativa',
          '**Riesgo: sostenibilidad** — ¿Cómo se financia la plataforma sin comprometer la confianza? Las opciones (fee por transacción, modelo freemium para ONGs, patrocinios) tienen implicaciones directas en la percepción de transparencia. Una fee no comunicada destruye confianza; un patrocinio visible la refuerza',
          '**Siguiente iteración** — Mapa interactivo con causas geolocalizadas, actualizaciones en tiempo real del impacto de donaciones, API pública para que ONGs integren la plataforma en sus webs, y diseño responsive con 5 breakpoints para cobertura total de dispositivos',
        ],
        highlight: 'Este proyecto demuestra que **el diseño centrado en humanos no empieza con pantallas — empieza con preguntas**. Las 48 encuestas que pivotaron el proyecto valen más que las 45 horas de diseño que vinieron después.',
      },
    ],
  },
  {
    slug: 'banco-sabadell-design-system',
    title: 'Banco Sabadell - Design System',
    client: 'Banco Sabadell',
    year: '2022',
    category: 'Design Systems & UX Engineering',
    tags: ['UX Design', 'Heuristic Evaluation', 'Fintech'],
    description: 'Creación y documentación técnica del Design System del Banco Sabadell, construyendo una biblioteca de componentes escalable y una arquitectura de Design Tokens como única fuente de verdad para los equipos de producto e ingeniería. Proyecto liderado en coordinación con equipos de producto e ingeniería distribuidos.',
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
    brandColor: '#006DFF',
    gridSpan: 2,
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
    title: 'Imaginbank: Mobile Banking for Gen Z',
    client: 'CaixaBank (Imaginbank)',
    year: '2021',
    category: 'Product Design',
    tags: ['Product Design', 'Mobile First', 'App Design'],
    description: 'Evolucionar la experiencia mobile de Imaginbank para conectar con la Generación Z: un banco que no parece un banco, con gamificación, agilidad y un lenguaje visual dinámico y funcional.',
    longDescription: 'Imaginbank no es solo un banco - es el ecosistema digital de CaixaBank para jóvenes. Lanzado en 2016 como banco 100% móvil, su misión era captar al público nativo digital con servicios financieros ágiles y sin sucursales. Pero el mercado evolucionó más rápido que el producto: Revolut, N26 y Bnext redefinieron las expectativas con onboardings de 5 minutos, interfaces que se sienten como apps de consumo y experiencias que conectan emocionalmente con la Gen Z.\n\nEl reto fue claro: evolucionar la experiencia mobile para conectar con la Generación Z mediante un lenguaje visual dinámico y funcional. No bastaba con optimizar - había que transformar la percepción de "app bancaria tradicional" en una herramienta financiera moderna que los jóvenes quisieran usar a diario.',
    challenge: '¿Cómo hacer que un banco no parezca un banco? Los jóvenes de 18-30 años son usuarios intensivos de apps de consumo (Instagram, TikTok, Spotify) y esperan esa misma calidad en su app bancaria. La interfaz de Imaginbank hablaba un lenguaje bancario tradicional, los flujos requerían demasiados pasos para acciones simples, y la experiencia se sentía como "la app del banco de mis padres". La brecha entre las expectativas definidas por los neobancos y la realidad de Imaginbank generaba abandono silencioso: usuarios que descargaban la app pero migraban a alternativas en semanas.',
    solution: 'Se abordó el proyecto con un enfoque de Product Design Mobile First, combinando auditoría heurística con User Testing en segmentos jóvenes. La estrategia se centró en tres ejes: gamificación de interacciones financieras cotidianas (retos de ahorro, logros, progreso visual), agilidad en los flujos core (reducir taps, eliminar jerga, feedback instantáneo), y componentes modulares con micro-interacciones que convirtieran cada acción financiera en una experiencia gratificante.',
    results: [
      'Incremento estimado del +28% en retención diaria gracias a mecánicas de gamificación',
      'Reducción del -45% en tiempo de onboarding simplificando el registro a 3 pasos',
      'Mejora del +22 puntos en CSAT (Customer Satisfaction Score)',
      'Identificados 12+ fallos de usabilidad categorizados por severidad con metodología Nielsen',
      'ROI estimado: -35% llamadas a soporte, +20% conversión onboarding',
    ],
    stack: ['Figma', 'Chrome'],
    cover: '/assets/projects/imaginbank/imaginbank-header.png',
    featured: true,
    brandColor: '#FF6200',
    gridSpan: 3,
    projectMeta: {
      role: 'Product Designer (UX/UI)',
      industry: 'Fintech',
      output: 'Mobile App Redesign & UX Audit',
      duration: '3 semanas',
      skills: ['Product Design', 'Mobile First', 'User Testing', 'Heurísticas de Nielsen', 'Gamification', 'Micro-interacciones', 'Component Design', 'UX Research', 'Accesibilidad', 'Design Tokens'],
    },
    checks: [
      'La app no conecta con la Gen Z pese a ser digital-first: neobancos como Revolut y N26 han elevado el estándar',
      'Nomenclatura bancaria tradicional y flujos rígidos que no hablan el lenguaje del usuario joven',
      'Sin gamificación, sin micro-interacciones y sin feedback emocional en las acciones financieras cotidianas',
    ],
    caseSections: [
      // ── 01. El Reto ──
      {
        label: '01. El Reto',
        title: 'Un ecosistema digital que no conecta con los jóvenes',
        layout: 'image-grid',
        content: 'Imaginbank nació en 2016 como la apuesta de CaixaBank por captar al público joven y nativo digital. Banco 100% móvil, sin sucursales, con servicios financieros diseñados para operar exclusivamente desde el smartphone. La propuesta era clara: competir con los neobancos que estaban redefiniendo la banca.\n\nPero el mercado evolucionó más rápido que el producto. Revolut, N26 y Bnext elevaron el estándar con onboardings de 5 minutos, interfaces ultra-limpias y experiencias que se sienten más como apps de consumo que como banca tradicional. La Gen Z espera ese nivel de calidad - y Imaginbank necesitaba entender por qué no conectaba con ellos a pesar de ser un producto digital-first.',
        images: ['/assets/projects/imaginbank/fotos/porcentaje-usuarios.png', '/assets/projects/imaginbank/fotos/porcentaje-uso-banca-electronica-2020.png'],
        captions: ['Evolución del porcentaje de usuarios de banca electrónica (2006-2020)', 'Uso de banca electrónica por franja de edad en 2020'],
      },
      {
        label: '01. El Reto',
        title: 'El desafío - ¿Cómo hacer que un banco no parezca un banco?',
        layout: 'center',
        content: 'El target de Imaginbank es claro: jóvenes de 18-30 años, nativos digitales, usuarios intensivos de apps de consumo que esperan la misma calidad de experiencia en su app bancaria.\n\nSu frustración nace de una interfaz que no habla su lenguaje: nomenclatura bancaria tradicional en lugar de términos directos, flujos que requieren demasiados pasos para acciones simples, y una experiencia que se siente como "la app del banco de mis padres" en lugar de una herramienta financiera moderna. La brecha entre expectativas (definidas por Revolut, N26) y realidad (Imaginbank) es lo que genera abandono.\n\nEl reto no era solo estético. Necesitábamos repensar la experiencia desde la gamificación (hacer que gestionar dinero sea gratificante) y la agilidad (cada acción en el menor número de taps posible).',
        highlight: 'La Gen Z no abandona la app porque no la necesite - la abandona porque hay alternativas que les hacen sentir que controlan su dinero, no que un banco lo controla por ellos.',
      },
      // ── 02. Metodología ──
      {
        label: '02. Metodología',
        title: 'Mobile First y User Testing con segmentos jóvenes',
        layout: 'center',
        content: 'El enfoque metodológico combinó dos pilares complementarios:\n\nMobile First como principio de diseño - Cada decisión se tomó pensando primero en el contexto móvil: pantallas pequeñas, atención fragmentada, uso con una mano, notificaciones como canal principal. No se adaptó una experiencia desktop - se diseñó desde el pulgar.\n\nUser Testing con segmentos jóvenes - Se realizaron sesiones de evaluación con usuarios de 18-25 años, observando cómo interactuaban con la app actual y con prototipos de las propuestas. Los hallazgos confirmaron que el problema no era funcional sino emocional: la app funcionaba, pero no les hacía sentir que era *su* herramienta financiera.',
        bullets: [
          'Análisis Heurístico - Evaluación experta con las 10 Heurísticas de Jakob Nielsen como marco de diagnóstico, examinando cada flujo clave de la aplicación',
          'User Testing cualitativo - Sesiones con usuarios de 18-25 años para validar hipótesis y detectar fricciones emocionales que el análisis experto no captura',
          'Benchmarking competitivo - Análisis profundo de Revolut, N26 y Bnext para identificar los patrones que la Gen Z ya considera estándar',
          'Severity Rating - Clasificación de hallazgos por impacto y frecuencia para priorizar las intervenciones con mayor ROI',
        ],
      },
      // ── 03. Diagnóstico ──
      {
        label: '03. Diagnóstico',
        title: 'H1 - Visibilidad del estado del sistema',
        layout: 'image-grid',
        content: 'El sistema debe mantener al usuario informado en todo momento sobre lo que está ocurriendo, mediante feedback apropiado y en un tiempo razonable.\n\nEn esta pantalla de la app, la Heurística #1 falla porque no existe ningún indicador visual que confirme al usuario que su transferencia se está procesando. La ausencia de un spinner, barra de progreso o mensaje de estado deja al usuario en la incertidumbre - un problema crítico cuando se trata de dinero real.\n\nHallazgo: La app no proporciona feedback visual suficiente al realizar acciones críticas como transferencias o pagos. El usuario no sabe si una operación está en proceso, se ha completado o ha fallado.\n\nRecomendación: Implementar sistema de feedback con estados de progreso, confirmaciones visuales claras y notificaciones en tiempo real para todas las operaciones financieras.',
        highlight: 'La falta de feedback en acciones financieras críticas compromete la confianza del usuario en los momentos donde más la necesita.',
        images: ['/assets/projects/imaginbank/fotos/mostrar-estado.png'],
        captions: ['Visibilidad del estado del sistema — Pantalla de login y home'],
      },
      {
        label: '03. Diagnóstico',
        title: 'H4 - Consistencia y estándares',
        layout: 'image-grid',
        content: 'Los usuarios no deberían tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.\n\nEn estas pantallas se evidencia cómo la Heurística #4 se incumple de forma sistemática: la misma acción de enviar dinero aparece como "Transferir", "Enviar" y "Bizum" en diferentes secciones. La iconografía no sigue un lenguaje visual coherente y algunos patrones de interacción varían entre pantallas similares.\n\nHallazgo: Inconsistencias en la nomenclatura de funciones: las mismas acciones reciben nombres diferentes según la sección. La iconografía no sigue un lenguaje visual coherente.\n\nRecomendación: Crear un sistema de design tokens unificado con nomenclatura consistente. Auditar todos los labels y unificar terminología en un glosario UX.',
        highlight: 'La nomenclatura inconsistente entre secciones genera confusión cognitiva - el usuario tiene que "reaprender" la interfaz en cada pantalla.',
        images: ['/assets/projects/imaginbank/fotos/consistencia-y-estandares.png', '/assets/projects/imaginbank/fotos/consistencia-y-estandares-2.png'],
        captions: ['Consistencia y estándares — Tienda WiVai con branding inconsistente', 'Consistencia y estándares — Secciones Planet con layouts dispares'],
      },
      {
        label: '03. Diagnóstico',
        title: 'H3 - Control y libertad del usuario',
        layout: 'image-grid',
        content: 'Los usuarios necesitan una "salida de emergencia" clara para abandonar estados no deseados sin tener que pasar por un proceso extenso.\n\nEn estas capturas se observa cómo la Heurística #3 se vulnera de forma crítica: la falta de flexibilidad impide al usuario deshacer acciones, volver atrás de forma intuitiva o acceder a opciones secundarias sin recorrer múltiples pantallas.\n\nHallazgo: La navegación es rígida: no hay opción de deshacer acciones, volver atrás es confuso y las opciones secundarias están enterradas en submenús.\n\nRecomendación: Implementar acción "Undo" en el flujo de transacciones. Añadir accesos directos contextuales y simplificar la navegación de retorno.',
        images: ['/assets/projects/imaginbank/fotos/control-y-libertad-del-usuario.png'],
        captions: ['Control y libertad del usuario — Flujo de ahorro y pantalla de error'],
      },
      {
        label: '03. Diagnóstico',
        title: 'H5 / H9 - Prevención de errores y recuperación',
        layout: 'image-grid',
        content: 'Un diseño cuidadoso que prevenga errores es mejor que buenos mensajes de error. Y cuando los errores ocurren, el sistema debe expresarlos en lenguaje claro y ofrecer una solución constructiva.\n\nEn estas pantallas se identifica cómo las Heurísticas #5 y #9 fallan simultáneamente: los mensajes de error son genéricos ("Ha ocurrido un error") sin orientar al usuario hacia la solución.\n\nHallazgo: Los mensajes de error son genéricos y no orientan al usuario hacia la solución. No existen confirmaciones claras ni mecanismos de "undo" en operaciones financieras.\n\nRecomendación: Rediseñar mensajes de error con lenguaje claro y accionable. Añadir confirmación previa en operaciones irreversibles y opción de cancelar/revertir.',
        highlight: 'Los mensajes de error genéricos en operaciones financieras no solo frustran - erosionan activamente la confianza en la plataforma.',
        images: ['/assets/projects/imaginbank/fotos/prevenir-errores.png', '/assets/projects/imaginbank/fotos/comunicar-errores-con-claridad.png'],
        captions: ['Prevención de errores — Error IBAN genérico sin guía de solución', 'Comunicación de errores — Gestión de notificaciones sin feedback claro'],
      },
      {
        label: '03. Diagnóstico',
        title: 'H8 - Diseño estético y minimalista',
        layout: 'image-grid',
        content: 'Cada unidad extra de información compite con las unidades relevantes y disminuye su visibilidad relativa.\n\nEn estas pantallas vemos cómo la Heurística #8 presenta debilidades: aunque la estética general era limpia, se detectaron áreas donde la jerarquía visual era confusa y elementos decorativos competían con la información funcional.\n\nHallazgo: La jerarquía visual es confusa en algunas pantallas. Elementos decorativos compiten con información funcional. Bizum y transferencias rápidas no tienen la prominencia que su frecuencia de uso justifica.\n\nRecomendación: Aplicar progressive disclosure. Priorizar visualmente las 3-4 acciones más frecuentes. Reducir ruido visual en pantallas de información financiera.',
        images: ['/assets/projects/imaginbank/fotos/estetica-y-minimalismo.png'],
        captions: ['Diseño estético y minimalista — Home con jerarquía visual confusa'],
      },
      // ── 04. Solución ──
      {
        label: '04. Solución',
        title: 'Componentes modulares y micro-interacciones',
        layout: 'center',
        content: 'La solución técnica se centró en crear un sistema de componentes modulares diseñados para Mobile First que pudieran combinarse y reutilizarse en toda la app, garantizando consistencia visual y reduciendo el tiempo de desarrollo.\n\nCada componente incorpora micro-interacciones que transforman las acciones financieras cotidianas en momentos gratificantes: animaciones de confirmación cuando se completa una transferencia, progreso visual en los retos de ahorro, feedback háptico en acciones críticas, y transiciones fluidas que transmiten velocidad y control.',
        bullets: [
          'Crítico - Rediseñar el sistema de feedback de acciones financieras: confirmaciones visuales claras, estados de progreso y mensajes de error constructivos que guíen al usuario hacia la solución',
          'Alto - Unificar la nomenclatura en toda la app: lenguaje consistente, directo y alineado con el vocabulario del usuario joven, eliminando jerga bancaria innecesaria',
          'Alto - Flexibilizar la navegación: accesos directos a acciones frecuentes (Bizum, transferencias), "deshacer" accesible y opciones secundarias visibles sin explorar submenús',
          'Medio - Optimizar la jerarquía visual: priorizar las 3-4 acciones más frecuentes en la pantalla principal, reducir el ruido visual y aplicar progressive disclosure',
        ],
        bulletEvidence: [
          { image: '/assets/projects/imaginbank/fotos/mostrar-estado.png', caption: 'H1 - Visibilidad del estado del sistema' },
          { image: '/assets/projects/imaginbank/fotos/consistencia-y-estandares.png', caption: 'H4 - Consistencia y estándares' },
          { image: '/assets/projects/imaginbank/fotos/control-y-libertad-del-usuario.png', caption: 'H3 - Control y libertad del usuario' },
          { image: '/assets/projects/imaginbank/fotos/estetica-y-minimalismo.png', caption: 'H8 - Diseño estético y minimalista' },
        ],
      },
      {
        label: '04. Solución',
        title: 'Cambios arquitectónicos y visuales',
        layout: 'image-grid',
        content: 'Las mejoras propuestas abarcan tanto la arquitectura de información como el diseño visual. A nivel arquitectónico: simplificación de la navegación principal a 4-5 secciones claras, accesos directos contextuales y reducción de la profundidad de los flujos más frecuentes.\n\nA nivel visual: sistema de feedback con micro-interacciones, jerarquía tipográfica revisada para priorizar la información financiera clave, y un lenguaje visual más cercano al estándar de los neobancos. Cada pantalla respira el principio de "menos es más" - eliminar ruido para que el usuario se enfoque en lo que importa.',
        images: ['/assets/projects/imaginbank/fotos/mejoras-ux.png'],
        captions: ['Wireframes de mejoras UX propuestas'],
      },
      {
        label: '04. Solución',
        title: 'Puntos de fricción resueltos',
        layout: 'center',
        content: 'El journey del usuario con Imaginbank revelaba tres momentos críticos que la solución aborda directamente:',
        bullets: [
          'Onboarding - De un registro largo con terminología bancaria a un flujo de 3 pasos con lenguaje directo, verificación biométrica y personalización inmediata. El usuario tiene su cuenta operativa en menos de 3 minutos',
          'Primera transferencia - De un flujo sin feedback a una experiencia con confirmación visual instantánea, animación de éxito, notificación push al destinatario y opción de repetir con un tap',
          'Gestión de tarjetas - De opciones enterradas en submenús a accesos directos contextuales: bloquear/desbloquear con swipe, cambiar PIN con biometría, ver movimientos en tiempo real',
        ],
        highlight: 'Cada punto de fricción resuelto se traduce en usuarios que completan flujos en lugar de abandonarlos. La frustración acumulada en micro-interacciones es lo que diferencia una app que se usa a diario de una que se desinstala en semanas.',
      },
      // ── 06. Métricas de Impacto ──
      {
        label: '06. Métricas de Impacto',
        title: 'Resultados e impacto en el negocio',
        layout: 'center',
        content: 'Cada decisión de diseño se vinculó a una métrica de negocio medible. Los problemas de usabilidad identificados generaban fricción que se traducía en costes reales: llamadas a soporte, abandono de onboarding, y usuarios que migraban a la competencia. Las mejoras propuestas generan un retorno de inversión tangible:',
        bullets: [
          '+28% retención diaria - Las mecánicas de gamificación (retos de ahorro, logros, progreso visual) convierten la gestión financiera en un hábito gratificante, no una obligación',
          '-45% tiempo de onboarding - Simplificar el registro de 8 pasos a 3, eliminar jerga bancaria y añadir verificación biométrica reduce el abandono en los primeros minutos críticos',
          '+22 puntos CSAT - Una experiencia consistente, con feedback claro, micro-interacciones y control del usuario, transforma la percepción de la marca de "banco tradicional" a "herramienta financiera moderna"',
          '-35% llamadas a soporte - Mensajes de error claros y feedback visual adecuado reducen drásticamente las consultas de "¿qué ha pasado con mi transferencia?"',
          '+20% conversión onboarding - Eliminar registro obligatorio y jerga bancaria convierte visitantes en usuarios activos desde el primer día',
        ],
        highlight: 'La inversión en UX se paga sola: cada punto de fricción eliminado reduce costes operativos y aumenta la retención. Cuando los usuarios dejan de llamar a soporte para preguntar "¿dónde está mi dinero?", el ROI del diseño se vuelve indiscutible.',
      },
    ],
  },
  {
    slug: 'iberia-flight-experience',
    title: 'Iberia - Flight Experience',
    client: 'Iberia',
    year: '2023',
    category: 'Digital Product Design & Design Systems',
    tags: ['Design Systems', 'Design Ops', 'Aviation'],
    description: 'Creación de un Sistema de Diseño unificado para el ecosistema digital de Iberia (Web/App), implementando una arquitectura de Design Tokens y una Librería de Componentes escalable para eliminar la fragmentación visual entre plataformas. Trabajo transversal con múltiples squads para garantizar la adopción del sistema a escala.',
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
    brandColor: '#E62232',
    gridSpan: 2,
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
    tags: ['Product Design', 'Visual Design', 'Music Tech'],
    description: 'Producto digital de descubrimiento musical con curación humana: una alternativa a los algoritmos que conecta comunidad y contenido sin fricción.',
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
    brandColor: '#1DB954',
    gridSpan: 3,
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
          'Logo versión negativa — Para fondos oscuros (plataforma)',
          'Logo versión positiva — Para fondos claros (redes sociales)',
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
        captions: [
          'Wireframes — Estructura y disposición del reproductor embebido',
        ],
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
          'Grid de 12 columnas — Estructura desktop',
          'Variaciones de grid — Layouts de 2 y 3 columnas para contenido',
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
        captions: [
          'Paleta cromática — Dark mode con acentos vibrantes para interactividad',
        ],
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
          'Sistema tipográfico — Jerarquía de pesos y tamaños',
          'Sistema de espaciado — Márgenes y paddings consistentes',
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
          'Card de canción — Portada, artista y acceso al reproductor',
          'Card de noticia — Titular e imagen destacada',
          'Card de ranking — Posición y tendencia',
          'Card de festival — Evento con información clave',
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
          'Vista de lista de reproducción — Formato editorial con portadas',
          'Vista de festivales — Eventos con información de un vistazo',
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
          'Home — Feed principal con contenido curado',
          'Reproductor — Pantalla de reproducción en curso',
          'Charts — Rankings y tendencias musicales',
          'Noticias — Feed de novedades musicales',
          'Noticias — Artículo de noticia expandido',
          'Discos — Exploración de álbumes por artista',
          'Discos — Detalle de álbum (Kygo)',
          'Festivales — Listado de eventos musicales',
          'Festivales — Detalle de festival (Tomorrowland)',
          'Lista — Exploración de listas de reproducción',
          'Lista — Detalle de lista (Levels)',
          'Logo — Pantalla de branding y splash',
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


