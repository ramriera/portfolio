export const siteConfig = {
  name: 'Ramon Riera',
  title: 'Ramon Riera — Senior UX/UI Designer',
  description: 'Diseñador de experiencias de usuario. Especializado en Design Systems, Product Design y Design Operations.',
  url: 'https://ramonriera.design',
  email: 'hello@ramonriera.design',
  logo: {
    dark: 'https://ramonriera.design/wp-content/uploads/2024/12/logo-negro-64x64-2.svg',
    light: 'https://ramonriera.design/wp-content/uploads/2024/12/logo-blanco-64x64-2.svg',
  },
  profilePhoto: 'https://ramonriera.design/wp-content/uploads/2025/01/foto-perfil.png',
  social: {
    linkedin: 'https://linkedin.com/in/ramonrieradepares',
    medium: 'https://medium.com/@ramriera',
    github: 'https://github.com/ramriera',
    dribbble: 'https://dribbble.com/ramriera',
  },
  og: {
    image: '/images/og-image.jpg',
  },
};

export const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre mí', href: '/about' },
  { label: 'Proyectos', href: '/projects' },
  { label: 'Servicios', href: '/services' },
];

export const services = [
  {
    title: 'UX/UI Design',
    description: 'Diseño de interfaces centradas en el usuario, con foco en usabilidad, accesibilidad y estética moderna.',
    icon: 'layout',
  },
  {
    title: 'Design Systems',
    description: 'Creación y mantenimiento de sistemas de diseño escalables que unifican equipos y aceleran el desarrollo.',
    icon: 'layers',
  },
  {
    title: 'Product Design',
    description: 'Diseño de producto end-to-end, desde la investigación y conceptualización hasta la entrega final.',
    icon: 'box',
  },
  {
    title: 'Design Ops',
    description: 'Optimización de flujos de trabajo de diseño, herramientas y procesos para equipos de alto rendimiento.',
    icon: 'settings',
  },
  {
    title: 'Branding Digital',
    description: 'Identidad visual y branding para productos digitales que conectan con su audiencia.',
    icon: 'star',
  },
  {
    title: 'Consultoría UX',
    description: 'Auditorías heurísticas, research y estrategia de diseño para mejorar productos existentes.',
    icon: 'search',
  },
];

export interface CaseSection {
  label: string;
  title: string;
  layout: 'center' | 'left-right' | 'right-left' | 'full-image' | 'image-grid' | 'screens-grid' | 'figma-embed' | 'whimsical-embed';
  figmaUrl?: string;
  embeds?: string[];
  content?: string;
  highlight?: string;
  bullets?: string[];
  images?: string[];
}

export interface ProjectMeta {
  role: string;
  duration: string;
  tools: string[];
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
  gallery: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  projectMeta?: ProjectMeta;
  caseSections?: CaseSection[];
}

export const projects: Project[] = [
  {
    slug: 'movefast-startup-platform',
    title: 'MoveFast',
    client: 'MoveFast',
    year: '2021',
    category: 'UX/UI Design',
    tags: ['UX/UI', 'UX Research', 'Interaction Design', 'Design System'],
    description: 'Diseño de la experiencia de usuario para una app móvil de un fabricante de coches eléctricos que entra en el mercado español, con un servicio innovador de cambio de baterías.',
    longDescription: 'España se sitúa a la cola de Europa en adopción del vehículo eléctrico. El precio, la autonomía limitada y la escasez de infraestructura de recarga frenan a los consumidores. MoveFast nace como respuesta a este problema real: diseñar la experiencia de una app móvil para un fabricante internacional que quiere entrar en el mercado español con una propuesta de valor inexistente en la competencia — el cambio de baterías bajo demanda.',
    challenge: 'Los datos del mercado español son contundentes: las matriculaciones de vehículos eléctricos apenas representan una fracción mínima del total europeo. Según coches.net, las tres barreras principales son la escasez de puntos de carga, el precio elevado frente al vehículo convencional, y la autonomía limitada (muchos modelos por debajo de 300 km). A esto se suman tiempos de carga superiores a 45 minutos. El usuario reconoce las ventajas — menos contaminación, ahorro en combustible, acceso a zonas restringidas — pero las barreras pesan más que los beneficios.',
    solution: 'Tras analizar el mercado y la competencia, se proponen dos conceptos innovadores: un servicio de cambio de batería bajo demanda donde personal de la empresa acude a tu ubicación (10 cambios gratuitos al año para compradores, 59€ cada cambio adicional), y puntos dinámicos de intercambio modulares en ubicaciones estratégicas de la ciudad que cambian semanalmente con posibilidad de reserva anticipada. Ninguna app competidora ofrece este modelo de servicio.',
    results: [
      'UX completa definida en 2 semanas (45 horas)',
      'Prototipo interactivo funcional en Figma',
      'Design system con componentes y variantes',
      'Dos flujos principales validados con wireframes',
    ],
    stack: ['Figma', 'Whimsical', 'Adobe Illustrator', 'Adobe Photoshop', 'Miro', 'Google Forms'],
    cover: 'https://ramonriera.design/wp-content/uploads/2025/01/movefast-header.png',
    gallery: [
      'https://ramonriera.design/wp-content/uploads/2025/01/movefast-header.png',
    ],
    liveUrl: '#',
    featured: true,
    projectMeta: {
      role: 'UX/UI Designer (Research, Visual Design, Interaction Design)',
      duration: '2 semanas (45 horas)',
      tools: ['Figma', 'Whimsical', 'Adobe Illustrator', 'Adobe Photoshop', 'Miro', 'Google Forms'],
      skills: ['Desk research', 'Research questions', 'Idea prioritization', 'Benchmarking', 'Surveys', 'User persona', 'Empathy mapping', 'Journey mapping', 'Wireframes', 'Prototyping', 'Interaction design', 'Design system', 'Variants', 'Components'],
    },
    caseSections: [
      {
        label: '01. Descubrimiento',
        title: '¿Por qué no despega el coche eléctrico en España?',
        layout: 'left-right',
        content: 'El primer paso fue entender el contexto real del mercado. Existen dos tipos principales de vehículos eléctricos: el BEV (100% eléctrico, cero emisiones, motor alimentado por batería recargable) y el PHEV (híbrido enchufable con doble motor combustión + eléctrico, hasta 130 km/h en modo eléctrico con ~40 km de autonomía).\n\nEspaña se sitúa a la cola de Europa en matriculaciones de vehículos eléctricos. Los datos son claros: la cuota de mercado es mínima frente a países como Noruega, Países Bajos o Alemania. La infraestructura de recarga crece, pero no al ritmo necesario para generar confianza en el consumidor.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/movefast-electric-passenger-cars-registrations-spain.png'],
      },
      {
        label: '02. Investigación y Análisis',
        title: 'Los datos del mercado español',
        layout: 'image-grid',
        content: 'Según un estudio de coches.net, los españoles conocen las ventajas del coche eléctrico — reducción de contaminación, ahorro en combustible, menor ruido, acceso sin restricciones a centros urbanos y beneficios fiscales — pero estas no superan las barreras de compra. Las tres razones principales por las que el coche eléctrico no termina de despegar son: escasos puntos de carga en autopistas y ciudades, precio elevado respecto al vehículo convencional, y autonomía limitada que genera "ansiedad de rango" en viajes largos.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-flota-vehiculos-electricos.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-evolucion-esp.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-recharging-points-spain.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/mf-estaciones-de-carga-en-europa-min.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-flota-coches-europa-2020.png',
        ],
      },
      {
        label: '02. Investigación y Análisis',
        title: 'Benchmarking — El hueco que nadie cubre',
        layout: 'left-right',
        content: 'Analicé las principales aplicaciones del sector de recarga eléctrica disponibles en el mercado. Todas compartían funcionalidades similares: mapas interactivos con ubicación de estaciones de carga, filtros por voltaje y tipo de conector, favoritos, perfiles de usuario y pasarelas de pago integradas.\n\nLa mayoría presentaban una usabilidad pobre y un diseño visual poco cuidado — solo Iberdrola destacaba visualmente, pero sufría de rendimiento lento y funcionalidad limitada. Este vacío en el mercado justifica directamente nuestra propuesta de valor.',
        highlight: 'Ninguna de las aplicaciones analizadas ofrecía un servicio de cambio de baterías. MoveFast cubre un vacío crítico en el mercado.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-benchmarking-apps.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-benchmarking.png',
        ],
      },
      {
        label: '03. Definición y Empatía',
        title: 'User Persona — Oriol Vallmajor',
        layout: 'full-image',
        content: 'Para dar forma a la experiencia, creé a Oriol Vallmajor: arquitecto, con ingresos por encima de la media, familiarizado con la tecnología y preocupado por la sostenibilidad. Oriol quiere viajar por España con su familia en un vehículo eléctrico. Es un early adopter dispuesto a invertir en movilidad sostenible, pero la ansiedad por la autonomía y la falta de infraestructura le generan inseguridad real.\n\nSu dolor principal no es técnico — es emocional: la incertidumbre de quedarse sin batería en medio de un viaje familiar. Necesita sentir que tiene el control y que siempre hay una solución cerca.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/movefast-user-persona.png'],
      },
      {
        label: '03. Definición y Empatía',
        title: 'Mapa de empatía',
        layout: 'full-image',
        content: 'A través del mapa de empatía exploré la personalidad, necesidades, deseos y preocupaciones de Oriol. ¿Qué piensa cuando planifica un viaje largo? ¿Qué siente al ver que el punto de carga más cercano está a 80 km? ¿Qué oye de su entorno sobre los coches eléctricos? Los insights revelaron que la barrera principal no es racional sino emocional: la "range anxiety" — el miedo a quedarse tirado — es el factor que más frena la decisión de compra.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/movefast-mapa-empatia.png'],
      },
      {
        label: '03. Definición y Empatía',
        title: 'Customer Journey Map',
        layout: 'full-image',
        content: 'El journey map documentó la experiencia completa de Oriol: desde el momento en que decide comprar un coche eléctrico, pasando por la planificación de su primer viaje largo, hasta el momento crítico en que necesita recargar en ruta. Los picos de frustración se concentran en tres puntos: descubrir que no hay puntos de carga en su ruta habitual, llegar a un punto de carga y encontrarlo ocupado, y la espera de más de 45 minutos durante la recarga. Estos puntos de dolor definen las oportunidades de diseño.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/movefast-costumer-journey.png'],
      },
      {
        label: '04. Ideación y Arquitectura',
        title: 'Flujos de usuario y Wireframes',
        layout: 'whimsical-embed',
        content: 'Se diseñaron dos flujos principales en Whimsical:\n\n1. Cambio de batería a domicilio: El usuario abre la app → selecciona "Cambio a domicilio" → confirma ubicación → elige franja horaria → personal de MoveFast acude con batería cargada → se realiza el intercambio en minutos.\n\n2. Reserva en punto de intercambio dinámico: El usuario consulta el mapa → localiza el punto de intercambio más cercano (que cambia de ubicación semanalmente) → reserva fecha y hora → acude al punto → un operador realiza el cambio.\n\nAdemás de estos flujos principales, se añadieron funcionalidades complementarias no contempladas en el brief inicial: sistema de favoritos, filtros avanzados y notificaciones de nuevas ubicaciones.',
        embeds: [
          'https://whimsical.com/embed/CdxiEyLfhbfFUfhdi1XRcH',
          'https://whimsical.com/embed/TDfQTWmva6ALGvJdkPEE5o',
        ],
      },
      {
        label: '05. Diseño Visual y Prototipado',
        title: 'Prototipo interactivo',
        layout: 'figma-embed',
        content: 'Se desarrolló un prototipo interactivo en Figma con el flujo completo del usuario, desde la pantalla de inicio hasta el proceso completo de reserva. El prototipo incluye animaciones de transición entre pantallas y estados de interacción para simular la experiencia real.',
        figmaUrl: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FfAzRuKJicjcwgMw2u1sYiO%3Fcontent-scaling%3Dfixed%26kind%3Dproto%26node-id%3D531-71%26page-id%3D503%253A268%26scaling%3Dscale-down%26starting-point-node-id%3D582%253A4968',
      },
      {
        label: '05. Diseño Visual y Prototipado',
        title: 'Diseño de interfaces',
        layout: 'screens-grid',
        content: 'Splash screen con animación de entrada del vehículo. Onboarding de 4 pantallas: puntos de carga actualizados, estado de ocupación en tiempo real, puntos de cambio de batería cercanos, y sistema de reserva. Mapa interactivo principal con puntos de carga, talleres de intercambio y opción de solicitar cambio a domicilio. Menú lateral con acceso a vehículos, baterías, pagos y notificaciones. Filtros avanzados por tipo de punto y disponibilidad. Vista de detalle de taller con horarios y disponibilidad. Gestión de favoritos. Flujo completo de reserva con selección de ubicación, fecha, hora y confirmación.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-spinner-2.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-spinner-1.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-inicial-1.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-inicial-2.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-inicial-3.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-inicial-4.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-mapa.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-menu.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-filtros.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-talleres.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-favoritos.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-escoger.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-reserva.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-pantalla-aceptado.png',
        ],
      },
      {
        label: '06. Conclusión',
        title: 'Aprendizajes y Próximos Pasos',
        layout: 'center',
        content: 'Se entregó con éxito la UX completa de la aplicación móvil en 2 semanas, abordando las dos soluciones propuestas: servicio de cambio de batería bajo demanda y puntos de intercambio dinámicos. El diseño incorpora funcionalidades estándar del sector (mapa de puntos de carga, pasarela de pagos, estado de ocupación) al tiempo que introduce un modelo de servicio innovador que ningún competidor ofrece.',
        bullets: [
          'Ampliar el prototipo con pantallas de perfil completo, historial de pagos y gestión detallada de favoritos',
          'Testing con usuarios reales para validar si el servicio a domicilio o los puntos de intercambio generan mayor conversión, y optimizar su jerarquía en la interfaz',
          'Adaptación a versión web responsive para ampliar el acceso desde escritorio',
          'Iteración de accesibilidad: revisión WCAG de contraste, tamaños táctiles, lectores de pantalla y navegación por teclado',
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
    longDescription: 'Vivimos en un mundo con 10 grandes problemáticas identificadas por 15.000 científicos de 184 países: escasez de agua, sobrepesca, crecimiento demográfico, degradación del suelo, contaminación, extinción de especies y escasez alimentaria. A partir de la pregunta "¿Cómo podemos mejorar la calidad de vida de los más desfavorecidos?" nació Global Helping — una plataforma web que conecta personas solidarias con ONGs y causas sociales a través de donaciones, voluntariado y crowdfunding.',
    challenge: 'La investigación inicial reveló un problema inesperado: las ONGs locales carecen de la capacidad y los recursos de comunicación que tienen las grandes organizaciones internacionales. Tras encuestar a 48 personas, el proyecto pivotó de un enfoque generalista ("ayudar a países subdesarrollados") a uno centrado en dar visibilidad a estas organizaciones locales. Además, no existía ninguna plataforma que reuniera donaciones, voluntariado y crowdfunding en un mismo sitio — cada servicio vivía aislado.',
    solution: 'Aplicando Design Thinking end-to-end, diseñé una plataforma web que unifica tres servicios en uno: donar a causas verificadas, apuntarse como voluntario y lanzar campañas de crowdfunding. El diseño se basa en un sistema visual con Design Tokens para garantizar consistencia y escalabilidad, y prioriza la conexión emocional con las causas a través de storytelling visual.',
    results: [
      'UX completa definida en 2 semanas (45 horas)',
      'Prototipo interactivo funcional en Figma con 3 flujos principales',
      'Design system con foundations, tokens y componentes reutilizables',
      'Caso de estudio publicado en Medium',
    ],
    stack: ['Figma', 'Whimsical', 'Adobe Illustrator', 'Adobe Photoshop', 'Miro', 'Google Forms'],
    cover: 'https://ramonriera.design/wp-content/uploads/2025/01/global-helping-header-1120x630.png',
    gallery: [
      'https://ramonriera.design/wp-content/uploads/2025/01/global-helping-header-1120x630.png',
    ],
    liveUrl: '#',
    featured: true,
    projectMeta: {
      role: 'UX/UI Designer (Research, Visual Design, Interaction Design)',
      duration: '2 semanas (45 horas)',
      tools: ['Figma', 'Whimsical', 'Adobe Illustrator', 'Adobe Photoshop', 'Miro', 'Google Forms'],
      skills: ['Desk research', 'Research questions', 'Idea prioritization', 'Benchmarking', 'Surveys', 'User persona', 'Empathy mapping', 'Journey mapping', 'Wireframes', 'Prototyping', 'Interaction design', 'Design system', 'Variants', 'Components'],
    },
    caseSections: [
      {
        label: '01. Descubrimiento',
        title: 'Research Questions y Brainstorming',
        layout: 'left-right',
        content: 'El punto de partida fue un brainstorming amplio para mapear las problemáticas globales y detectar oportunidades de diseño. A partir de ahí, se formularon Research Questions divididas en tres categorías de actores: Usuarios (comportamiento y necesidades de personas solidarias), Productos/Servicios (qué oferta existe y qué falta) e Instituciones (rol y capacidades de ONGs y asociaciones).\n\nEstas preguntas guiaron toda la fase de investigación, evitando sesgos y asegurando que las decisiones de diseño se basaran en datos reales, no en suposiciones.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/gh-brainstorming.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/gh-research-questions.png',
        ],
      },
      {
        label: '01. Descubrimiento',
        title: 'Cuestionarios — El pivote del proyecto',
        layout: 'left-right',
        content: 'Se diseñaron dos cuestionarios en Google Forms, dirigidos a personas con diferentes grados de experiencia en solidaridad y voluntariado. Se recogieron 48 respuestas que revelaron un insight que cambió la dirección del proyecto.\n\nEl enfoque inicial era amplio: "¿Cómo ayudar a países subdesarrollados?" Pero los datos mostraron que el problema real estaba más cerca: las ONGs locales no tienen la capacidad de comunicación ni los recursos de las grandes organizaciones internacionales. El proyecto pivotó hacia darles visibilidad y herramientas.',
        highlight: 'Tras encuestar a 48 personas, el proyecto pivotó: el problema no era la falta de solidaridad, sino la falta de visibilidad de las ONGs locales frente a las internacionales.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/gh-cuestionarios-2.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/gh-cuestionarios-1.png',
        ],
      },
      {
        label: '02. Definición',
        title: 'User Persona y Mapa de empatía',
        layout: 'full-image',
        content: 'Con los datos de los cuestionarios, se construyó un User Persona que representa al usuario objetivo: una persona solidaria, con voluntad de ayudar pero frustrada por la falta de plataformas que le faciliten el proceso. El mapa de empatía profundizó en su personalidad, necesidades, deseos y miedos — revelando que la barrera principal no es la falta de interés, sino la falta de confianza y transparencia en las plataformas existentes.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/gh-user-persona.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/gh-mapa-empatia.png',
        ],
      },
      {
        label: '02. Definición',
        title: 'Customer Journey Map',
        layout: 'full-image',
        content: 'El Customer Journey Map definió el viaje completo del usuario: desde que descubre una causa que le motiva, pasando por la búsqueda de una forma de ayudar, hasta la acción concreta (donar, ser voluntario o contribuir a crowdfunding). Los puntos de mayor fricción se identificaron en la fragmentación de servicios — el usuario tenía que saltar entre múltiples plataformas para encontrar opciones y ninguna le daba seguimiento ni conexión emocional con el impacto de su ayuda.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/gh-customer-journey.png'],
      },
      {
        label: '03. Ideación y Benchmarking',
        title: 'Análisis de competencia',
        layout: 'left-right',
        content: 'Se realizó un benchmarking exhaustivo evaluando servicios, productos, opiniones, valores y marketing de las plataformas existentes en el sector solidario.\n\nEl resultado confirmó la oportunidad: existían plataformas de donaciones, plataformas de voluntariado y plataformas de crowdfunding — pero ninguna reunía los tres servicios en un mismo sitio. El usuario que quería ayudar tenía que navegar entre múltiples webs, cada una con su registro, su interfaz y su lógica. Global Helping nace para resolver esa fragmentación.',
        highlight: 'No existía ninguna plataforma que reuniera donaciones, voluntariado y crowdfunding en un mismo sitio. Global Helping cubre ese vacío.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/gh-benchmarking.png'],
      },
      {
        label: '04. Desarrollo',
        title: 'Foundations y Design Tokens',
        layout: 'left-right',
        content: 'Se definió un sistema de foundations que incluye color, tipografía, iconografía, grid, espaciado, fotografía, animación y formato. La base del sistema son los Design Tokens: variables de diseño reutilizables que garantizan consistencia visual en toda la plataforma.\n\nLas ventajas de trabajar con tokens: mantenimiento más fácil de la consistencia, facilita la toma de decisiones, promueve la escalabilidad, permite la propagación automática de cambios y optimiza recursos del equipo de diseño y desarrollo.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/gh-foundations.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/gh-componentes.png',
        ],
      },
      {
        label: '04. Desarrollo',
        title: 'De Wireframes a componentes',
        layout: 'full-image',
        content: 'El proceso fue de menor a mayor fidelidad: primero wireframes rápidos (esquemas de baja calidad, digitales o a mano) para validar la estructura de información y los flujos principales sin invertir tiempo en detalle visual. Una vez validada la arquitectura, se diseñaron los componentes finales: bloques de texto, iconos, cards, botones, campos de texto, selectores, barras de navegación, tablas y listas — todos construidos como elementos independientes y combinables.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/gh-wireframing.png'],
      },
      {
        label: '05. Solución Final',
        title: 'Prototipo interactivo',
        layout: 'figma-embed',
        content: 'Se desarrolló un prototipo funcional en Figma con tres pantallas principales que demuestran el concepto core: exploración de causas y proyectos, detalle de una causa con opciones de donación/voluntariado/crowdfunding, y el flujo de contribución. El prototipo permite interactuar con la navegación real y validar la propuesta de valor.',
        figmaUrl: 'https://embed.figma.com/proto/ZU6SwljVsA0g9iAHhZ9oDj/Global-Helping?page-id=0%3A1&node-id=340-25451&p=f&viewport=249%2C246%2C0.06&t=ghMETNDpnq6X6hrN-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=340%3A23253&embed-host=share',
      },
      {
        label: '06. Conclusión',
        title: 'Aprendizajes y Próximos Pasos',
        layout: 'center',
        content: 'El mayor aprendizaje fue la importancia de dejarse guiar por los datos: las encuestas cambiaron completamente la dirección del proyecto. La investigación reveló que el problema no era la falta de solidaridad, sino la fragmentación de servicios y la invisibilidad de las ONGs locales. Global Helping resuelve ambos problemas en una única plataforma.',
        bullets: [
          'Traducción multi-idioma para ampliar el alcance a comunidades internacionales',
          'Sección de actualizaciones de proyectos para dar seguimiento al impacto de las donaciones',
          'Mapa interactivo del mundo con proyectos cercanos a la ubicación del usuario',
          'Fichas individuales de cada proyecto con datos de contacto de la ONG responsable',
          'Compartir en redes sociales y email para viralizar causas',
          'Diseño responsive con 5 breakpoints para cobertura total de dispositivos',
          'API pública para que ONGs integren la plataforma directamente en sus webs',
        ],
      },
    ],
  },
  {
    slug: 'banco-sabadell-design-system',
    title: 'Design System Banco Sabadell',
    client: 'Banco Sabadell',
    year: '2022',
    category: 'Design System',
    tags: ['Design System', 'UI Kit', 'Documentation', 'Banking'],
    description: 'Sistema de diseño completo para una de las principales entidades bancarias de España, unificando la experiencia digital en todas las plataformas.',
    longDescription: 'Lideré la creación e implementación de un sistema de diseño integral para Banco Sabadell, abarcando componentes UI, tokens de diseño, guías de accesibilidad y documentación extensiva. El sistema sirve a más de 15 equipos de producto y ha estandarizado la experiencia en web, app y canales internos.',
    challenge: 'Múltiples equipos trabajaban con estilos inconsistentes, generando deuda de diseño y fricción en el desarrollo. No existía una fuente única de verdad para componentes ni patrones de interacción.',
    solution: 'Diseñé un sistema modular basado en tokens de diseño con Figma, documentado en Zeroheight y sincronizado con Storybook para desarrollo. Implementé governance y workflows de contribución.',
    results: [
      'Reducción del 40% en tiempo de diseño de nuevas features',
      'Consistencia visual del 95% entre plataformas',
      '+200 componentes documentados y versionados',
      'Adoptado por 15 equipos de producto',
    ],
    stack: ['Figma', 'Zeroheight', 'Storybook', 'Tokens Studio', 'React'],
    cover: 'https://ramonriera.design/wp-content/uploads/2025/05/banc-sabadell-header-1120x630.png',
    gallery: [
      'https://ramonriera.design/wp-content/uploads/2025/05/banc-sabadell-header-1120x630.png',
    ],
    liveUrl: '#',
    featured: true,
  },
  {
    slug: 'imaginbank-digital-banking',
    title: 'Imaginbank Digital Banking',
    client: 'Imaginbank',
    year: '2022',
    category: 'Product Design',
    tags: ['Product Design', 'Banking', 'Mobile', 'FinTech'],
    description: 'Diseño de la experiencia digital del banco móvil de CaixaBank, enfocado en una audiencia joven y digital-first.',
    longDescription: 'Colaboré en el diseño del ecosistema digital de Imaginbank, el banco 100% móvil de CaixaBank. El proyecto abarcó desde flujos de onboarding hasta funcionalidades avanzadas de gestión financiera personal, siempre con foco en simplicidad y engagement.',
    challenge: 'Crear una experiencia bancaria que rompiera con los patrones tradicionales y conectara con usuarios jóvenes acostumbrados a apps de consumo, no bancarias.',
    solution: 'Diseñé una interfaz fresca y dinámica con micro-interacciones, gamificación sutil en ahorro y una navegación simplificada que priorizaba las acciones más frecuentes.',
    results: [
      'Onboarding completado un 55% más rápido',
      'Engagement diario incrementado un 30%',
      'App rating de 4.7/5 en stores',
      'Reducción de soporte un 25%',
    ],
    stack: ['Figma', 'Principle', 'Lottie', 'Storybook', 'React Native'],
    cover: 'https://ramonriera.design/wp-content/uploads/2025/04/Imaginbank-header-1120x630.png',
    gallery: [
      'https://ramonriera.design/wp-content/uploads/2025/04/Imaginbank-header-1120x630.png',
    ],
    liveUrl: '#',
    featured: true,
  },
  {
    slug: 'iberia-flight-experience',
    title: 'Iberia Flight Experience',
    client: 'Iberia',
    year: '2023',
    category: 'Product Design',
    tags: ['Product Design', 'UX Research', 'Aviation', 'Mobile'],
    description: 'Rediseño de la experiencia digital de vuelo para la aerolínea insignia de España, mejorando el journey completo del pasajero.',
    longDescription: 'Proyecto integral de rediseño de la experiencia digital de Iberia, desde la reserva hasta el post-vuelo. Trabajé en la optimización del flujo de check-in, selección de asientos, gestión de equipaje y la experiencia de embarque digital.',
    challenge: 'La experiencia digital existente presentaba altas tasas de abandono en el proceso de reserva y check-in, con una navegación confusa y flujos innecesariamente complejos.',
    solution: 'Conduje investigación con usuarios reales, mapeo de journeys y testing de prototipos iterativos. Rediseñé los flujos críticos con foco en reducir fricción y tiempos de completación.',
    results: [
      'Reducción del 35% en abandono de reservas',
      'Incremento del 50% en check-in digital',
      'NPS mejorado en 22 puntos',
      'Tiempo medio de reserva reducido un 28%',
    ],
    stack: ['Figma', 'Principle', 'Maze', 'Hotjar', 'Swift UI'],
    cover: 'https://ramonriera.design/wp-content/uploads/2025/04/Iberia-header-1120x630.png',
    gallery: [
      'https://ramonriera.design/wp-content/uploads/2025/04/Iberia-header-1120x630.png',
    ],
    liveUrl: '#',
    featured: true,
  },
  {
    slug: 'doctori-health-platform',
    title: 'Doctori Health Platform',
    client: 'Doctori',
    year: '2024',
    category: 'UX/UI Design',
    tags: ['UX/UI', 'Health Tech', 'SaaS', 'Design System'],
    description: 'Plataforma de salud digital que conecta pacientes con profesionales médicos, con una experiencia fluida y accesible.',
    longDescription: 'Como Senior UX/UI Designer en Doctori, lideré el diseño de la plataforma completa de telemedicina. Desde el onboarding de pacientes y médicos hasta la gestión de consultas, recetas digitales y seguimiento de tratamientos.',
    challenge: 'Crear una experiencia accesible y confiable para un público diverso, incluyendo usuarios mayores con baja alfabetización digital, manteniendo la complejidad necesaria para profesionales médicos.',
    solution: 'Implementé un enfoque de diseño inclusivo con múltiples rondas de testing con usuarios reales. Creé un design system específico para health tech con componentes accesibles AA/AAA.',
    results: [
      'Onboarding completado en menos de 2 minutos',
      'Score de accesibilidad WCAG 2.1 AA',
      '+50,000 consultas digitales facilitadas',
      'Retención de usuarios del 78% al mes 3',
    ],
    stack: ['Figma', 'React', 'Storybook', 'Zeroheight', 'Hotjar'],
    cover: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop',
    ],
    liveUrl: '#',
    featured: true,
  },
  {
    slug: 'solotemazos-music-platform',
    title: 'Solotemazos Music Platform',
    client: 'Solotemazos',
    year: '2021',
    category: 'Design System',
    tags: ['Design System', 'Music', 'Entertainment', 'Mobile First'],
    description: 'Design system y rediseño de plataforma musical con foco en la experiencia de descubrimiento y reproducción de contenido.',
    longDescription: 'Creación del design system completo para Solotemazos, una plataforma de música y entretenimiento. El proyecto incluyó la definición de la identidad visual digital, componentes reutilizables y patrones de interacción específicos para contenido multimedia.',
    challenge: 'La plataforma carecía de consistencia visual y los flujos de descubrimiento de contenido eran poco intuitivos, generando baja retención y engagement.',
    solution: 'Diseñé un sistema visual vibrante y dinámico, con componentes optimizados para contenido multimedia. Implementé patrones de descubrimiento basados en comportamiento del usuario.',
    results: [
      'Engagement incrementado un 65%',
      'Tiempo de sesión aumentado en 40%',
      'Design system con +120 componentes',
      'Consistencia cross-platform del 90%',
    ],
    stack: ['Figma', 'Lottie', 'Storybook', 'React Native', 'Node.js'],
    cover: 'https://ramonriera.design/wp-content/uploads/2025/01/solotemazos-header-1120x630.png',
    gallery: [
      'https://ramonriera.design/wp-content/uploads/2025/01/solotemazos-header-1120x630.png',
    ],
    liveUrl: '#',
    featured: false,
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
    cover: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop',
  },
  {
    slug: 'design-thinking-en-la-practica',
    title: 'Design Thinking en la Práctica',
    excerpt: 'Cómo aplicar Design Thinking más allá de la teoría. Casos reales y frameworks adaptados al contexto español.',
    date: '2024-10-08',
    readTime: '6 min',
    tags: ['Design Thinking', 'Metodología'],
    cover: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=500&fit=crop',
  },
  {
    slug: 'de-disenador-a-design-ops',
    title: 'De Diseñador a Design Ops',
    excerpt: 'Mi transición hacia Design Operations y por qué creo que es el futuro de los equipos de diseño.',
    date: '2024-09-20',
    readTime: '10 min',
    tags: ['Design Ops', 'Carrera'],
    cover: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
  },
  {
    slug: 'accesibilidad-no-es-opcional',
    title: 'Accesibilidad No Es Opcional',
    excerpt: 'Por qué la accesibilidad debería ser el punto de partida, no un afterthought. Guía práctica para diseñadores.',
    date: '2024-08-12',
    readTime: '7 min',
    tags: ['Accesibilidad', 'UX'],
    cover: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop',
  },
];

