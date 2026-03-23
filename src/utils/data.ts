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
    category: 'Product Design',
    tags: ['Product Design', 'Service Design', 'Mobility', 'Friction Reduction'],
    description: 'Diseño de producto para una app de movilidad eléctrica que elimina la barrera más determinante para la adopción del EV en España: la range anxiety. Un modelo de servicio inexistente en el mercado — cambio de baterías bajo demanda — diseñado de research a prototipo en 2 semanas.',
    longDescription: 'El vehículo eléctrico tiene un problema de adopción en España. No es técnico — es de confianza. El consumidor conoce las ventajas, pero tres barreras frenan la compra: infraestructura insuficiente, autonomía limitada y tiempos de recarga de 45+ minutos. MoveFast ataca la barrera más emocional — la range anxiety — con una propuesta que no existe en el mercado: cambio de baterías bajo demanda, donde un técnico acude a tu ubicación y sustituye la batería en minutos.\n\nEste caso documenta el diseño completo de la app en 2 semanas: de investigación de mercado a prototipo interactivo con design system. El reto no era diseñar pantallas — era diseñar un modelo de servicio nuevo y hacerlo comprensible para un usuario que nunca ha usado nada parecido. Cada decisión de producto busca lo mismo: reducir el tiempo entre "necesito batería" y "problema resuelto".',
    challenge: 'España se sitúa a la cola de Europa en matriculaciones de vehículos eléctricos. Escasos puntos de carga (concentrados en capitales, casi inexistentes en autopistas), precio elevado frente al convencional, y autonomía real por debajo de 300 km. Pero la barrera más determinante no es racional — es emocional: la range anxiety, el miedo a quedarse sin batería lejos de un punto de carga. Y las apps existentes no resuelven el problema: todas asumen que el usuario tiene que ir a un punto de carga y esperar 45+ minutos. Ninguna cuestiona el modelo.',
    solution: 'Dos modelos de servicio complementarios que ninguna app competidora ofrece: (1) cambio de batería a domicilio — un técnico acude con batería cargada y realiza el intercambio en minutos; (2) puntos de intercambio dinámicos — ubicaciones modulares en la ciudad con reserva anticipada y operador in situ. La app unifica ambos en un mapa interactivo con stock en tiempo real, ocupación y sistema de reservas. El flujo de reserva se completa en 3 taps. Cero fricción innecesaria.',
    results: [
      'De research a prototipo interactivo en 2 semanas — UX completa con design system escalable',
      'Modelo de servicio validado con user flows antes de diseñar una pantalla: dos conceptos complementarios que eliminan la espera',
      'Flujo de reserva de 3 pasos sin registro obligatorio — fricción mínima en un mercado donde cada paso extra es abandono',
      'Diferenciación total: ninguna app del mercado ofrece cambio de baterías — MoveFast entra en una categoría que no existe',
    ],
    stack: ['Figma', 'Whimsical', 'Adobe Illustrator', 'Adobe Photoshop', 'Miro', 'Google Forms'],
    cover: '/assets/projects/movefast/movefast-header.png',
    featured: true,
    brandColor: '#00C7B7',
    gridSpan: 2,
    projectMeta: {
      role: 'Senior Product Designer',
      industry: 'Mobility & CleanTech',
      output: 'Service Design & Mobile Product — Research to Prototype',
      duration: '2 semanas',
      skills: ['Product Strategy', 'Service Design', 'Friction Reduction', 'UX Research', 'Competitive Analysis', 'Information Architecture', 'Interaction Design', 'Design Systems', 'Prototyping', 'Mobile-First Design'],
    },
    checks: [
      'España a la cola de Europa en adopción EV: infraestructura insuficiente y autonomía real <300 km generan desconfianza',
      '45+ minutos de recarga convierten cada viaje en fuente de incertidumbre — la range anxiety frena más que el precio',
      'Todas las apps del mercado resuelven "dónde cargar" pero ninguna resuelve "cómo cargar sin esperar" — vacío de categoría',
    ],
    caseSections: [
      // ── 01. Product Intent ──
      {
        label: '01. Product Intent',
        title: 'Un mercado con demanda latente y barreras que nadie resuelve',
        layout: 'full-image',
        content: 'MoveFast existe porque el vehículo eléctrico tiene un problema de adopción que no es técnico — es de confianza. El consumidor español conoce las ventajas (ahorro, acceso a zonas restringidas, beneficios fiscales). **Pero las barreras pesan más que los beneficios.**\n\nExisten dos categorías de EVs: el **BEV** (100% eléctrico) y el **PHEV** (híbrido enchufable, ~40 km de autonomía eléctrica). En ambos casos, la infraestructura de recarga crece, pero no al ritmo necesario para generar confianza. Los datos de matriculaciones lo confirman: cuota de mercado mínima frente a Noruega, Países Bajos o Alemania. El éxito de MoveFast se mide con una métrica: **¿el usuario siente que siempre tiene una solución cerca cuando necesita batería?**',
        images: ['/assets/projects/movefast/movefast-electric-passenger-cars-registrations-spain.png'],
        captions: ['Matriculaciones de vehículos eléctricos — España vs. Europa: una brecha que no se explica solo por precio'],
      },
      {
        label: '01. Product Intent',
        title: 'Tres barreras que frenan la adopción — y una oportunidad que nadie cubre',
        layout: 'image-grid',
        content: 'La investigación reveló tres barreras con peso desigual en la decisión de compra:\n\n**1. Infraestructura insuficiente** — Puntos de carga concentrados en capitales, casi inexistentes en autopistas y zonas rurales. El usuario no puede planificar un viaje largo con confianza.\n\n**2. Precio elevado** — Coste de adquisición superior al vehículo convencional. Aunque el coste operativo es menor, la barrera de entrada frena al comprador.\n\n**3. Autonomía limitada + tiempo de recarga** — Modelos por debajo de 300 km reales, y recargas de 45+ minutos. Esta combinación genera **range anxiety**: el miedo a quedarse sin batería lejos de un punto de carga. **Es la barrera más emocional y la más determinante** — convierte cada viaje en fuente de incertidumbre.\n\nLa oportunidad de producto está en la tercera barrera: no es un problema de infraestructura (requiere inversión pública), ni de precio (requiere economías de escala). Es un problema de **modelo de servicio** — y se puede resolver con diseño.',
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
        label: '02. Differentiation',
        title: 'Benchmarking — El vacío de categoría que justifica la propuesta',
        layout: 'image-grid',
        content: 'El análisis competitivo reveló que todas las apps del sector comparten las mismas funcionalidades: mapa de estaciones de carga, filtros por voltaje y conector, favoritos y pasarela de pago. La mayoría tienen usabilidad pobre. Iberdrola destaca visualmente pero es lenta y limitada en funcionalidad.\n\nPero el hallazgo más relevante no es lo que hacen mal — es lo que **ninguna hace**: ofrecer un modelo alternativo a la recarga convencional. Todas asumen que el usuario tiene que ir a un punto de carga y esperar. **Ninguna cuestiona el modelo.** MoveFast no compite por features dentro de la misma categoría — entra en una categoría que no existe. Esto simplifica el posicionamiento y reduce el coste de adquisición: no compites por mapa, compites por modelo de servicio.',
        highlight: 'Todas las apps resuelven "dónde cargar". Ninguna resuelve "cómo cargar sin esperar". **MoveFast entra en el espacio que nadie cubre.**',
        images: [
          '/assets/projects/movefast/movefast-benchmarking-apps.png',
          '/assets/projects/movefast/movefast-benchmarking.png',
        ],
        captions: [
          'Análisis de apps competidoras — funcionalidades similares, ejecución deficiente',
          'Matriz de benchmarking — el vacío funcional del cambio de baterías',
        ],
      },
      // ── 03. Core User Goal (JTBD) ──
      {
        label: '03. Core User Goal',
        title: 'Quién es el usuario y qué necesita realmente',
        layout: 'full-image',
        content: 'Para diseñar la experiencia, definí a Oriol Vallmajor: arquitecto, ingresos por encima de la media, early adopter, comprometido con la sostenibilidad. Oriol quiere viajar por España con su familia en un vehículo eléctrico. Está dispuesto a pagar por la transición — pero **la incertidumbre le frena**.\n\nSu dolor principal no es técnico. Es emocional: **"¿Qué pasa si me quedo sin batería en medio de un viaje familiar?"** El Job To Be Done no es "recargar el coche" — es **"sentir que tengo el control de mi autonomía y que siempre hay una solución cerca"**. Ninguna app actual resuelve esa necesidad emocional.',
        images: ['/assets/projects/movefast/movefast-user-persona.png'],
        captions: ['User Persona — Oriol Vallmajor: early adopter frenado por la incertidumbre, no por la tecnología'],
      },
      {
        label: '03. Core User Goal',
        title: 'La barrera es emocional, no racional',
        layout: 'full-image',
        content: 'El mapa de empatía reveló el insight central del proyecto: Oriol sabe que el coche eléctrico le conviene económicamente. Sabe que contamina menos. Sabe que tiene beneficios fiscales. **Pero cuando piensa en un viaje largo, siente miedo.** ¿Y si el punto de carga más cercano está a 80 km? ¿Y si está ocupado cuando llegue? ¿Y si tengo que esperar 45 minutos con los niños en el coche?\n\nLa **"range anxiety" no es un problema de autonomía real — es un problema de autonomía percibida.** Y se resuelve dando al usuario una alternativa que elimine la espera, no solo una app que le muestre dónde esperar.',
        images: ['/assets/projects/movefast/movefast-mapa-empatia.png'],
        captions: ['Mapa de empatía — El miedo a quedarse tirado pesa más que cualquier ventaja racional'],
      },
      {
        label: '03. Core User Goal',
        title: 'Tres picos de frustración que definen las oportunidades',
        layout: 'full-image',
        content: 'El customer journey map documentó la experiencia completa: desde la decisión de compra hasta el momento crítico de recargar en ruta. Los **picos de frustración** se concentran en tres puntos específicos:\n\n**1. Planificación del viaje** — Descubrir que no hay puntos de carga en la ruta habitual. La incertidumbre empieza antes de salir de casa.\n\n**2. Llegada al punto de carga** — Encontrarlo ocupado o fuera de servicio. La frustración es mayor porque el usuario ya ha planificado alrededor de ese punto.\n\n**3. Tiempo de espera** — Más de 45 minutos de recarga. Para un viaje familiar, es inaceptable.\n\nEstos tres momentos definen exactamente dónde MoveFast puede intervenir: no en el punto de carga, sino **antes de que el usuario necesite uno.**',
        images: ['/assets/projects/movefast/movefast-costumer-journey.png'],
        captions: ['Customer Journey — Los tres picos de frustración que la competencia ignora'],
      },
      // ── 04. UX Principles ──
      {
        label: '04. UX Principles',
        title: 'Principios de producto que restringen las decisiones de diseño',
        layout: 'center',
        content: 'Estos principios no son aspiracionales — son restricciones. Cada decisión de diseño se evalúa contra ellos. Si una propuesta viola un principio, se descarta.',
        bullets: [
          '**Reducir decisiones, no añadir opciones.** Preseleccionar la opción más relevante (punto más cercano, franja más próxima). El usuario pasa de "tengo que buscar dónde cargar" a "confirmo y listo". Menos carga cognitiva = mayor activación',
          '**Optimizar para velocidad sobre flexibilidad.** El flujo de reserva se completa en 3 taps. Sin registro obligatorio en primer uso. Cada paso extra es una razón para abandonar en un mercado donde el usuario aún no confía en el modelo',
          '**Guiar en lugar de exponer complejidad.** Dos modelos de servicio (domicilio + punto de intercambio) unificados en una sola interfaz. El usuario no elige "qué tipo de servicio quiero" antes de ver opciones — ve todas y elige según contexto',
          '**El modelo de servicio importa más que la app.** La app es el canal, el servicio es la propuesta de valor. Si el cambio de batería en minutos funciona, la app se diseña sola. Si no funciona, ningún diseño lo salva',
        ],
        highlight: 'La estrategia UX de MoveFast no es "mejorar la experiencia de recarga". Es **eliminar la recarga como experiencia** y sustituirla por un intercambio que se siente como repostar gasolina: rápido, predecible y sin espera.',
      },
      // ── 05. Key Product Decisions ──
      {
        label: '05. Key Product Decisions',
        title: 'Arquitectura de flujos: cada decisión eliminada es fricción eliminada',
        layout: 'whimsical-embed',
        content: 'Antes de diseñar una sola pantalla, definí la arquitectura de los dos flujos principales:\n\n**1. Cambio de batería a domicilio** — App → "Cambio a domicilio" → confirmar ubicación → elegir franja horaria → técnico acude → intercambio en minutos. **Decisión clave**: 3 taps. La ubicación se prelocaliza por GPS, la franja muestra solo opciones disponibles. Decisiones eliminadas: buscar dirección, comparar opciones, elegir método de pago en cada uso.\n\n**2. Reserva en punto de intercambio dinámico** — Mapa → punto más cercano → reservar fecha y hora → acudir → operador realiza el cambio. **Trade-off**: los puntos cambian de ubicación semanalmente. Permite cobertura sin infraestructura fija — flexibilidad sobre previsibilidad. Las notificaciones de nuevas ubicaciones mitigan el riesgo.\n\n**Funcionalidades añadidas sobre el brief**: favoritos (fricción cero para usuarios recurrentes), filtros avanzados (tipo de punto + disponibilidad) y notificaciones de nuevas ubicaciones (loop de retención que apps de recarga fija no tienen).',
        embeds: [
          'https://whimsical.com/embed/CdxiEyLfhbfFUfhdi1XRcH',
          'https://whimsical.com/embed/TDfQTWmva6ALGvJdkPEE5o',
        ],
      },
      // ── 06. End-to-End Flow ──
      {
        label: '06. End-to-End Flow',
        title: 'Prototipo interactivo',
        layout: 'figma-embed',
        content: 'El prototipo en Figma cubre el flujo completo del usuario: desde el onboarding hasta la confirmación de reserva. Incluye transiciones entre pantallas y estados de interacción que permiten evaluar la experiencia sin necesidad de código. **El objetivo del prototipo no era "mostrar pantallas bonitas" — era validar que el modelo de servicio es comprensible para un usuario que nunca ha cambiado una batería.**',
        figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfAzRuKJicjcwgMw2u1sYiO%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D531-71%26page-id%3D503%253A268%26scaling%3Dscale-down%26starting-point-node-id%3D582%253A4968',
      },
      {
        label: '07. Friction Reduction',
        title: 'Cómo se reduce la fricción en cada paso del flujo',
        layout: 'screens-grid',
        content: 'Cada pantalla del flujo tiene un objetivo: eliminar una decisión o una fuente de incertidumbre.\n\n**Onboarding (4 pantallas)** — No explica "cómo funciona la app". Explica "qué puede hacer por ti". Cada pantalla responde una objeción del usuario, no describe una feature. Decisiones eliminadas: ninguna — el usuario solo avanza o salta.\n\n**Mapa interactivo** — Pantalla principal. Unifica puntos de carga, talleres de intercambio y cambio a domicilio en una sola vista. Decisión eliminada: "qué tipo de servicio quiero" — el usuario ve todas las opciones y elige según contexto.\n\n**Filtros + Favoritos** — Reducen el tiempo de decisión para usuarios recurrentes. Decisión eliminada: recorrer el flujo de descubrimiento cada vez que se abre la app.\n\n**Reserva (3 pasos)** — Seleccionar ubicación → fecha/hora → confirmar. Sin cuenta obligatoria en primer uso. Decisiones eliminadas: registro previo, selección de método de pago, comparación entre opciones. **En un mercado donde el usuario aún no confía en el modelo, cada paso extra es abandono.**',
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
      // ── 08. Expected Outcomes ──
      {
        label: '08. Expected Outcomes',
        title: 'Métricas hipotéticas fundamentadas en research',
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
      // ── 09. Reflection ──
      {
        label: '09. Reflection',
        title: 'Supuestos no validados, riesgos y límites del diseño',
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
        layout: 'image-grid',
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
    title: 'Imaginbank: System-Level Redesign of a Mobile Banking Product',
    client: 'CaixaBank (Imaginbank)',
    year: '2021',
    category: 'Product Design',
    tags: ['Product Design', 'Fintech Systems', 'Error Prevention', 'Trust Design'],
    description: 'Rediseño de sistema de una app de banca móvil donde cada fallo de diseño tiene un coste financiero real. Análisis de estados, prevención de errores y construcción de confianza en operaciones con dinero.',
    longDescription: 'Imaginbank es la app de banca móvil de CaixaBank para usuarios de 18-30 años. Este caso documenta el rediseño de sus flujos financieros críticos — no como ejercicio visual, sino como problema de sistema. Cuando hay dinero real en juego, un estado ambiguo no es un inconveniente de usabilidad: es pánico. Una transferencia sin confirmación no es mala UX: es riesgo financiero.\n\nLa pregunta que guía este trabajo es concreta: ¿por qué los usuarios cometen errores evitables y pierden confianza en la app al operar con su dinero? La respuesta está en el comportamiento del sistema, no en la interfaz. Revolut y N26 habían redefinido el estándar de claridad financiera. Imaginbank necesitaba cerrar esa brecha con decisiones de producto, no con rediseño visual.',
    challenge: 'Imaginbank operaba con tres fallos estructurales que generaban riesgo financiero directo: (1) operaciones sin feedback — el usuario ejecutaba una transferencia y no sabía si estaba en proceso, completada o fallida; (2) nomenclatura inconsistente — "Transferir", "Enviar" y "Bizum" para la misma acción en distintas pantallas, multiplicando la carga cognitiva en flujos donde la precisión es crítica; (3) errores sin ruta de recuperación — mensajes genéricos ("Ha ocurrido un error") sin explicar qué falló, por qué, ni cómo resolverlo. En fintech, estos fallos no son deuda de diseño. Son vectores de pérdida de dinero, confianza y usuarios.',
    solution: 'Rediseño desde la arquitectura de comportamiento del sistema, no desde la capa visual. Tres ejes: (1) máquina de estados explícita para cada operación financiera — idle, loading, pending, success, failure — sin estados silenciosos; (2) prevención de errores estructural — validación en tiempo real, confirmación pre-ejecución obligatoria, bloqueo de doble acción; (3) jerarquía de datos orientada a la decisión — saldo disponible primero, operaciones pendientes segundo, información contextual tercero. Cada decisión evaluada contra un criterio: ¿reduce el riesgo de que el usuario pierda dinero o confianza?',
    results: [
      'Reducción estimada del 60% en errores de transferencia: validación IBAN en tiempo real + confirmación pre-ejecución obligatoria',
      'Máquina de 5 estados explícitos (idle → loading → pending → success/failure) elimina toda ambigüedad en operaciones financieras',
      'Reducción estimada del 35% en llamadas a soporte: feedback preciso sustituye consultas de "¿qué ha pasado con mi transferencia?"',
      'De 3 términos para "enviar dinero" a 1 — unificación terminológica que elimina confusión cognitiva en flujos críticos',
      'Flujo de transferencia de 8 pasos a 4, manteniendo confirmación de seguridad y resumen pre-ejecución',
    ],
    stack: ['Figma', 'Chrome'],
    cover: '/assets/projects/imaginbank/imaginbank-header.png',
    featured: true,
    brandColor: '#FF6200',
    gridSpan: 3,
    projectMeta: {
      role: 'UX Lead / Product Designer',
      industry: 'Fintech',
      output: 'System-Level Product Redesign & Risk Analysis',
      duration: '3 semanas',
      skills: ['Product Thinking', 'System Design', 'Error Prevention', 'Trust Design', 'State Management', 'Fintech UX', 'Risk Mitigation', 'Heuristic Analysis', 'Data Hierarchy', 'Failure Mode Analysis'],
    },
    checks: [
      'El usuario ejecuta una transferencia y no sabe si se ha procesado, está pendiente o ha fallado — riesgo financiero directo',
      'Tres términos distintos para "enviar dinero" generan confusión cognitiva en flujos donde un error mueve dinero real',
      'Mensajes de error genéricos sin causa ni recuperación: en fintech, "Ha ocurrido un error" equivale a pánico del usuario',
    ],
    caseSections: [
      // ── 01. Overview ──
      {
        label: '01. Overview',
        title: 'Un producto financiero donde cada fallo de diseño cuesta dinero',
        layout: 'center',
        content: 'Imaginbank es la app de banca móvil de CaixaBank para usuarios de 18-30 años. Banco 100% móvil, sin sucursales. Su propuesta era competitiva en 2016. En 2021, Revolut, N26 y Bnext habían redefinido qué significa claridad financiera en una app — e Imaginbank se había quedado atrás.\n\nEste rediseño no es un proyecto visual. Es un análisis de sistema: dónde falla el producto cuando hay dinero real en juego, qué comportamientos generan riesgo para el usuario, y qué decisiones de diseño reducen ese riesgo de forma medible.\n\nEl objetivo de producto es concreto: (1) los usuarios completan transferencias sin errores evitables, (2) el sistema nunca deja al usuario sin saber qué ha pasado con su dinero, (3) la confianza percibida aumenta — el usuario siente que controla su dinero, no que el banco lo controla por él.\n\nEn fintech, cada fallo de claridad tiene un coste directo: dinero enviado al destinatario equivocado, llamadas a soporte, y usuarios que migran a competidores donde se sienten más seguros.',
        highlight: 'En banca móvil, "mejorar la experiencia" no es un objetivo válido. El objetivo es: reducir el riesgo de error del usuario cuando opera con dinero real.',
      },
      // ── 02. Problem Space ──
      {
        label: '02. Problem Space',
        title: 'Tres categorías de fallo con impacto financiero directo',
        layout: 'image-grid',
        content: 'Antes de proponer soluciones, se mapearon los modos de fallo del sistema actual. En fintech, un fallo de diseño no es un inconveniente — es un riesgo financiero.\n\nErrores del usuario: IBAN introducido incorrectamente sin validación en tiempo real. Confusión entre "Transferir", "Enviar" y "Bizum" — tres términos para la misma acción en diferentes pantallas. Imposibilidad de distinguir saldo disponible de saldo contable, que lleva a intentos de transferencia con fondos insuficientes.\n\nRoturas de confianza: El usuario ejecuta una transferencia y no recibe confirmación — no sabe si se ha procesado, está pendiente o ha fallado. Los estados de carga muestran un spinner genérico sin contexto. Los mensajes de error dicen "Ha ocurrido un error" sin especificar qué, por qué, ni cómo resolverlo.\n\nFallos de sistema: Timeouts de red sin feedback — el usuario no sabe si la operación se ejecutó antes del corte de conexión. Inconsistencia entre el balance mostrado y las operaciones pendientes. Doble ejecución: el usuario toca "Enviar" dos veces porque no hubo feedback en el primer tap.\n\nEstos problemas son críticos porque la ambigüedad en fintech es inaceptable. Si un usuario no sabe si su transferencia de 500€ se ha ejecutado, el coste no es frustración — es pánico.',
        highlight: 'En fintech, cada estado ambiguo es un fallo de producto. El usuario nunca debería preguntarse: "¿se ha movido mi dinero?"',
        images: ['/assets/projects/imaginbank/fotos/mostrar-estado.png', '/assets/projects/imaginbank/fotos/prevenir-errores.png'],
        captions: ['Ausencia de feedback de estado en operaciones financieras', 'Error IBAN genérico sin validación en tiempo real ni guía de recuperación'],
      },
      {
        label: '02. Problem Space',
        title: 'Nomenclatura inconsistente como vector de error financiero',
        layout: 'image-grid',
        content: 'Un modo de fallo merece análisis propio: la inconsistencia terminológica. La auditoría reveló que "enviar dinero" aparece con tres nombres según la sección: "Transferir", "Enviar" y "Bizum". Esto no es un problema de estilo — es un problema de seguridad cognitiva.\n\nCuando un usuario opera con dinero real, necesita certeza absoluta sobre qué acción está ejecutando. Si la misma operación cambia de nombre según el contexto, el usuario tiene que reaprender la interfaz en cada pantalla. En un flujo de transferencia, esa carga cognitiva adicional aumenta directamente la probabilidad de error.\n\nEl mismo problema se extiende a la iconografía (iconos distintos para la misma función) y a los patrones de interacción (botones en posiciones diferentes para acciones equivalentes). La inconsistencia no es deuda de diseño — es un multiplicador de riesgo.',
        images: ['/assets/projects/imaginbank/fotos/consistencia-y-estandares.png', '/assets/projects/imaginbank/fotos/consistencia-y-estandares-2.png'],
        captions: ['Misma acción, tres nombres distintos en diferentes secciones', 'Patrones de interacción inconsistentes entre pantallas equivalentes'],
      },
      // ── 03. Core User Tasks ──
      {
        label: '03. Core User Tasks',
        title: 'Acciones de alto riesgo: definición de éxito seguro',
        layout: 'center',
        content: 'Este rediseño se centra exclusivamente en tres flujos críticos — los que implican dinero real y donde un error tiene consecuencias irreversibles.\n\nConsultar saldo: Éxito seguro significa que el usuario ve su saldo disponible real (no contable) con operaciones pendientes claramente diferenciadas. Nunca debe haber ambigüedad entre "lo que tengo" y "lo que puedo gastar". El saldo se actualiza en tiempo real o muestra explícitamente cuándo fue la última sincronización.\n\nEnviar dinero: Éxito seguro significa que el usuario confirma destinatario, importe y concepto en una pantalla de resumen antes de ejecutar. El IBAN se valida en tiempo real durante la introducción. El sistema bloquea doble ejecución. Tras confirmar, el usuario recibe feedback inmediato del estado (procesando → completado / fallido) sin abandonar el contexto.\n\nConfirmar transacción: Éxito seguro significa que la pantalla de confirmación muestra todos los datos críticos sin scroll. El botón de confirmación requiere acción deliberada (no es accesible por gesto accidental). Tras la ejecución, el usuario recibe confirmación con número de referencia, timestamp, y opción de compartir recibo.',
        bullets: [
          'Consultar saldo — El usuario distingue sin esfuerzo entre saldo disponible, saldo contable y operaciones pendientes. Cero ambigüedad',
          'Enviar dinero — Validación en tiempo real, resumen previo obligatorio, bloqueo de doble ejecución, feedback de estado inmediato',
          'Confirmar transacción — Datos críticos visibles sin scroll, acción deliberada requerida, confirmación con referencia y timestamp',
        ],
        highlight: 'Cada tarea crítica tiene una definición de "éxito seguro" que no es negociable. Si el usuario puede completar la tarea sin errores y sin incertidumbre, el diseño funciona.',
      },
      // ── 04. UX Principles ──
      {
        label: '04. UX Principles',
        title: 'Restricciones de diseño, no aspiraciones',
        layout: 'center',
        content: 'Estos principios no son aspiracionales — son restricciones de diseño. Cada decisión de producto se evalúa contra ellos. Si una propuesta viola un principio, se descarta.',
        bullets: [
          'Claridad financiera sobre simplicidad visual — Si simplificar la interfaz implica ocultar información financiera relevante, no se simplifica. El usuario siempre ve lo que necesita para tomar una decisión segura, aunque la pantalla sea más densa',
          'Prevenir errores en lugar de corregirlos — El sistema valida en tiempo real, muestra confirmaciones antes de ejecutar, y bloquea acciones duplicadas. La corrección post-error es el último recurso, no la estrategia',
          'Comunicar siempre el estado del sistema — Cada operación financiera tiene exactamente 5 estados posibles: idle, loading, pending, success, failure. Ningún estado es silencioso. El usuario siempre sabe qué está pasando con su dinero',
          'Cero ambigüedad en transacciones — Un término para cada acción. Un patrón para cada interacción. Un formato para cada dato financiero. La consistencia no es estética, es seguridad cognitiva',
          'Feedback proporcional al riesgo — Las acciones de bajo riesgo (consultar movimientos) reciben feedback ligero. Las acciones de alto riesgo (enviar dinero) reciben confirmación explícita, resumen completo, y verificación de estado post-ejecución',
        ],
      },
      // ── 05. System Thinking ──
      {
        label: '05. System Thinking',
        title: 'Comportamiento del sistema, no diseño de pantallas',
        layout: 'image-grid',
        content: 'Este rediseño define cómo se comporta el sistema, no cómo se ve. La interfaz es una consecuencia del comportamiento, no al revés.\n\nGestión de estados: Cada operación financiera implementa una máquina de estados con 5 estados explícitos: idle (antes de la acción), loading (operación en curso — con indicador de progreso y tiempo estimado), pending (operación enviada al banco, esperando confirmación — con número de referencia provisional), success (operación confirmada — con recibo descargable), failure (operación fallida — con razón específica y ruta de recuperación). No existe un sexto estado. No existe un estado silencioso.\n\nBucles de feedback: El sistema responde en menos de 300ms a cualquier acción del usuario. Si la operación requiere más tiempo, se muestra progreso incremental (no un spinner genérico). Si la conexión se pierde durante una operación, el sistema informa del último estado conocido y ofrece verificación manual.\n\nJerarquía de datos: En cada pantalla, la información se ordena por criticidad para la decisión del usuario. En la pantalla de balance: saldo disponible primero, operaciones pendientes segundo, historial tercero. En la pantalla de transferencia: importe y destinatario primero, detalles secundarios después. Nunca se mezclan datos de decisión con datos informativos.',
        highlight: 'Un producto financiero no es un conjunto de pantallas. Es un sistema de estados, transiciones y feedback. Si el sistema se comporta correctamente, la interfaz se diseña sola.',
        images: ['/assets/projects/imaginbank/fotos/mostrar-estado.png'],
        captions: ['Diagnóstico de estados: ausencia de máquina de estados explícita en operaciones financieras'],
      },
      // ── 06. Key Design Decisions ──
      {
        label: '06. Key Design Decisions',
        title: 'Cada decisión implicó rechazar una alternativa',
        layout: 'center',
        content: 'Cada decisión importante implicó rechazar una alternativa. Documentar el trade-off es tan importante como documentar la decisión.',
        bullets: [
          'Confirmación obligatoria pre-transferencia — Problema: usuarios ejecutaban transferencias por error (tap accidental, datos incorrectos). Alternativa rechazada: permitir cancelación post-ejecución (técnicamente complejo con el backend bancario, y la ventana de cancelación real es de segundos). Trade-off: añade un paso al flujo (+1 pantalla). Decisión: el coste de un tap extra es trivial comparado con el coste de una transferencia errónea. La fricción deliberada es aceptable cuando protege dinero real',
          'Un solo término para "enviar dinero" — Problema: "Transferir", "Enviar" y "Bizum" generaban confusión. Alternativa rechazada: mantener terminología diferenciada por método de pago (más preciso técnicamente). Trade-off: se pierde especificidad técnica. Decisión: el usuario selecciona "Enviar dinero" y el sistema le presenta los métodos disponibles en un segundo paso. La claridad del usuario pesa más que la precisión del sistema',
          'Saldo disponible como dato primario, no saldo contable — Problema: usuarios intentaban gastar dinero que técnicamente tenían pero no estaba disponible. Alternativa rechazada: mostrar ambos saldos con igual prominencia. Trade-off: usuarios avanzados pierden visibilidad inmediata del saldo contable. Decisión: el 95% de usuarios necesita saber "cuánto puedo gastar", no "cuánto tiene el banco registrado". El saldo contable se muestra en detalle, un nivel abajo',
          'Bloqueo de doble ejecución con feedback explícito — Problema: usuarios tocaban "Confirmar" dos veces porque no recibían feedback del primer tap. Alternativa rechazada: debounce silencioso (ignorar segundo tap sin avisar). Trade-off: el usuario ve un mensaje "Operación en curso" que ocupa espacio. Decisión: el debounce silencioso resuelve el problema técnico pero no el problema de confianza. El usuario necesita saber que el sistema ha registrado su acción',
        ],
      },
      // ── 07. Error Prevention & Edge Cases ──
      {
        label: '07. Error Prevention & Edge Cases',
        title: 'Diseño explícito para fondos insuficientes, fallos de red y duplicados',
        layout: 'image-grid',
        content: 'Cada escenario de error está diseñado con tres capas: prevención (evitar que ocurra), comunicación (explicar qué ha pasado), y recuperación (guiar hacia la solución).\n\nFondos insuficientes: Prevención — el campo de importe muestra el saldo disponible en tiempo real; si el usuario introduce un importe superior, el campo se marca antes de intentar enviar. Comunicación — "No tienes saldo suficiente. Tu saldo disponible es [X]. ¿Quieres enviar [X] en su lugar?" Recuperación — opción de modificar el importe sin salir del flujo.\n\nTransferencia fallida: Prevención — validación de IBAN en tiempo real con formato visual (agrupación de dígitos). Comunicación — mensaje específico: "La transferencia no se ha completado porque [razón concreta]. Tu dinero no se ha movido." Recuperación — botón de reintentar que mantiene todos los datos introducidos.\n\nDoble acción: Prevención — tras el primer tap en "Confirmar", el botón se desactiva y muestra estado "Procesando...". Comunicación — si el usuario intenta interactuar, mensaje: "Tu operación se está procesando. Te confirmaremos en unos segundos." Recuperación — no aplicable; la prevención es total.\n\nConectividad: Prevención — el sistema detecta conexión inestable antes de iniciar la operación y advierte. Comunicación — "Se ha perdido la conexión. Tu operación [se envió / no se envió]. Referencia: [X]." Recuperación — pantalla de verificación de estado accesible desde el historial.',
        highlight: 'La diferencia entre "Ha ocurrido un error" y "La transferencia no se ha completado porque el IBAN no existe. Tu dinero no se ha movido" es la diferencia entre pánico y control.',
        images: ['/assets/projects/imaginbank/fotos/prevenir-errores.png', '/assets/projects/imaginbank/fotos/comunicar-errores-con-claridad.png'],
        captions: ['Antes: error IBAN genérico sin contexto ni ruta de recuperación', 'Antes: notificaciones sin feedback accionable sobre el estado de las operaciones'],
      },
      // ── 08. Trust Design ──
      {
        label: '08. Trust Design',
        title: 'Cómo el producto construye confianza con acciones concretas',
        layout: 'image-grid',
        content: 'La confianza en un producto financiero no se declara — se demuestra en cada interacción. Tres mecanismos concretos:\n\nTransparencia: Cada pantalla de confirmación muestra todos los datos de la operación sin truncar: importe exacto (con céntimos), nombre completo del destinatario (no solo iniciales), IBAN completo (no enmascarado parcialmente), comisiones desglosadas (si aplican), y fecha estimada de recepción. El usuario nunca confirma algo que no puede verificar completamente.\n\nPredecibilidad: El sistema se comporta igual cada vez. El botón de confirmar está siempre en la misma posición. Los mensajes de estado usan siempre el mismo formato. Los colores de estado son consistentes (verde = completado, amarillo = pendiente, rojo = fallido). El usuario no tiene que "reaprender" la app cada vez que la abre.\n\nFeedback inmediato y preciso: Tras cada acción, el sistema responde en menos de 300ms con información específica. No "Operación realizada" sino "Has enviado 150,00 EUR a María García. Referencia: TRF-2021-84729. Llegará antes del 15/03." El nivel de detalle en la confirmación es proporcional al riesgo de la operación.',
        highlight: 'La confianza se construye con tres cosas: mostrar todo, comportarse siempre igual, y responder siempre rápido. No hay atajos.',
        images: ['/assets/projects/imaginbank/fotos/control-y-libertad-del-usuario.png', '/assets/projects/imaginbank/fotos/estetica-y-minimalismo.png'],
        captions: ['Antes: navegación sin salidas claras ni confirmaciones completas', 'Antes: jerarquía visual que compite con la información financiera crítica'],
      },
      // ── 09. Expected Outcomes ──
      {
        label: '09. Expected Outcomes',
        title: 'Resultados esperados: medibles y realistas',
        layout: 'image-grid',
        content: 'Estos no son objetivos aspiracionales. Son mejoras esperadas basadas en los fallos documentados y las soluciones propuestas, con mecanismos de medición claros.\n\nMenos errores del usuario: La validación en tiempo real de IBAN y la confirmación pre-transferencia deberían reducir los errores de transferencia en un 60% estimado. Medición: ratio de transferencias fallidas por error del usuario vs. total de transferencias iniciadas.\n\nCompletación más rápida: La unificación de nomenclatura y la reducción de pasos (de 8 a 4 en transferencias) debería reducir el tiempo medio de completar una transferencia en un 40%. Medición: time-on-task desde inicio del flujo hasta confirmación.\n\nMayor percepción de control: La eliminación de estados ambiguos y el feedback inmediato debería aumentar la percepción de control del usuario. Medición: escala de 1-7 en test post-tarea ("Sabía en todo momento qué estaba pasando con mi dinero").\n\nMayor confianza en el sistema: La transparencia en confirmaciones y la comunicación precisa de errores debería reducir las llamadas a soporte en un 35%. Medición: volumen de llamadas categorizadas como "consulta de estado de operación".',
        images: ['/assets/projects/imaginbank/fotos/mejoras-ux.png'],
        captions: ['Wireframes de mejoras propuestas: jerarquía de datos y feedback de estados'],
      },
      // ── 10. Reflection ──
      {
        label: '10. Reflection',
        title: 'Supuestos no validados, riesgos pendientes y límites',
        layout: 'center',
        content: 'Este rediseño parte de supuestos que necesitan validación con datos reales. Documentarlos es parte del rigor del proceso.',
        bullets: [
          'Supuesto no validado: fricción deliberada aceptable — Asumimos que añadir una pantalla de confirmación pre-transferencia no aumentará el abandono del flujo. Necesita A/B test con usuarios reales. Si el abandono sube más de un 5%, hay que simplificar la confirmación sin eliminarla',
          'Supuesto no validado: terminología unificada — Asumimos que un solo término ("Enviar dinero") es más claro que tres específicos ("Transferir", "Enviar", "Bizum"). Usuarios avanzados podrían preferir la especificidad. Necesita test cualitativo con segmentos de uso intensivo',
          'Primer test: flujo de transferencia completo — Es el flujo de mayor riesgo y mayor frecuencia. Un test de usabilidad con 8-10 usuarios midiendo errores, time-on-task y percepción de control validaría o invalidaría las decisiones más críticas del rediseño',
          'Riesgo pendiente: backend bancario — La máquina de estados propuesta (5 estados explícitos) asume que el backend puede informar de transiciones en tiempo real. Si el sistema bancario solo confirma con delay (minutos u horas), los estados "pending" y "success" podrían generar una falsa sensación de inmediatez. Requiere alineación con ingeniería',
          'Qué se rompe a escala: personalización vs. consistencia — Los principios de consistencia asumen un único flujo de transferencia. Si el producto escala a múltiples tipos de operación (inversiones, préstamos, seguros), mantener un solo patrón de interacción para todo puede ser una restricción excesiva. Este framework necesita evolucionar cuando el producto crezca',
        ],
        highlight: 'Un buen diseño de producto no es el que tiene todas las respuestas — es el que sabe exactamente qué preguntas quedan sin resolver y cuál es el coste de equivocarse.',
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
    description: 'Plataforma de descubrimiento musical que resuelve la fatiga de decisión del streaming: curación humana, zero-friction playback y engagement emocional frente a 100M+ de tracks algorítmicos.',
    longDescription: 'SoloTemazos existe porque el streaming musical tiene un problema de producto, no de catálogo. Spotify tiene 100 millones de canciones. Apple Music, 90 millones. Y sin embargo, los usuarios pasan más tiempo buscando qué escuchar que escuchando. Los algoritmos optimizan para retención (tiempo en plataforma), no para descubrimiento (encontrar algo que te emocione). El resultado es consumo pasivo: playlists de fondo que no generan conexión. SoloTemazos invierte la ecuación: en lugar de más contenido con mejor algoritmo, menos contenido con mejor criterio. Curación humana, reproducción inmediata, y un sistema de interacción diseñado para que el usuario sienta algo — no para que se quede scrolleando.',
    challenge: 'El usuario de streaming musical está atrapado en una paradoja: tiene acceso a toda la música del mundo y no encuentra nada que le emocione. La fatiga de decisión ante catálogos infinitos lleva al consumo pasivo — playlists algorítmicas de fondo que el usuario ni elige ni recuerda. Las plataformas dominantes no tienen incentivos para resolver esto: su modelo de negocio premia el tiempo en plataforma, no la calidad del descubrimiento. SoloTemazos apuesta por lo contrario: que el usuario encuentre algo que le ponga los pelos de punta en menos de 30 segundos.',
    solution: 'Una plataforma que elimina la fricción entre querer escuchar algo bueno y escucharlo. Sin búsquedas, sin filtros, sin parálisis de elección. El usuario abre SoloTemazos y hay música esperándole — seleccionada por humanos, categorizada por emoción y contexto, con reproducción a un solo tap. El sistema de descubrimiento prioriza relevancia emocional sobre volumen, y cada decisión de producto — desde la ausencia de barra de búsqueda en home hasta el reproductor embebido en contexto — está al servicio de un objetivo: reducir el tiempo entre "quiero escuchar algo" y "esto es increíble".',
    results: [
      'Arquitectura de descubrimiento que elimina la parálisis de elección: contenido curado visible desde el primer scroll',
      'Sistema de reproducción zero-friction: del browse al play en un solo tap, sin interrumpir la navegación',
      'Diseño emocional con dark mode funcional que prioriza portadas y contenido multimedia como protagonistas',
      'Mobile-first con 12 pantallas optimizadas para operación con una mano y control de reproductor sin cambio de contexto',
      'Prototipo interactivo validado con flujos completos de descubrimiento, navegación y reproducción',
      'Especificaciones técnicas para implementación con SSG, lazy loading de embeds y Lighthouse 95+',
    ],
    stack: ['Figma', 'React', 'Tailwind CSS', 'Whimsical', 'Miro', 'Google Analytics'],
    cover: '/assets/projects/solotemazos/solotemazos-header.png',
    featured: true,
    brandColor: '#1DB954',
    gridSpan: 3,
    projectMeta: {
      role: 'Senior Product Designer & UX Lead',
      industry: 'Music & Entertainment',
      output: 'Discovery Platform — Product Design & Prototype',
      duration: '8 semanas',
      skills: ['Product Strategy', 'Discovery Systems', 'Engagement Design', 'UX Research', 'Information Architecture', 'Interaction Design', 'Design Systems', 'Mobile-First Design', 'Prototyping', 'Content Strategy'],
    },
    checks: [
      'La fatiga de decisión ante 100M+ de tracks convierte el descubrimiento musical en una tarea, no en un placer',
      'Los algoritmos de recomendación optimizan retención (tiempo en plataforma), no descubrimiento (conexión emocional)',
      'El consumo pasivo domina: los usuarios escuchan playlists de fondo sin elegir ni recordar lo que suena',
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


