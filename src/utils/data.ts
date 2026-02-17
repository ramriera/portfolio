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
  layout: 'center' | 'left-right' | 'right-left' | 'full-image' | 'image-grid' | 'screens-grid' | 'figma-embed';
  figmaUrl?: string;
  content?: string;
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
    description: 'Definición de la experiencia de usuario para una aplicación móvil de un fabricante internacional de coches eléctricos que quiere entrar en el mercado español.',
    longDescription: 'MoveFast es una solución que busca mejorar la calidad de vida de las personas a través de la movilidad eléctrica. El proyecto se centra en diseñar la experiencia de usuario de una app móvil para un fabricante internacional de coches eléctricos que quiere entrar en el mercado español, ofreciendo un servicio innovador de cambio de baterías bajo demanda y puntos de intercambio dinámicos.',
    challenge: 'Tres barreras principales dificultan la adopción del vehículo eléctrico en España: la baja autonomía de los vehículos (muchos por debajo de los 300 km), la insuficiente red de puntos de recarga, y los tiempos de carga extendidos (más de 45 minutos de media).',
    solution: 'Se proponen dos conceptos innovadores entregados a través de una app móvil: un servicio de cambio de batería bajo demanda (10 cambios gratuitos anuales, 59€ el cambio adicional) y puntos dinámicos de intercambio de baterías modulares en ubicaciones estratégicas de la ciudad (cambian semanalmente con posibilidad de reserva anticipada).',
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
        label: 'Descubrimiento',
        title: 'Desk Research — Tipos de vehículos',
        layout: 'left-right',
        content: 'BEV (Battery Electric Vehicle): 100% eléctrico, cero emisiones, motor alimentado por batería, requiere carga de red.\n\nPHEV (Plug-in Hybrid Electric Vehicle): Sistema de doble motor (combustión + eléctrico), máximo 130 km/h solo con eléctrico, ~40 km de autonomía eléctrica, capacidad de carga externa.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/movefast-electric-passenger-cars-registrations-spain.png'],
      },
      {
        label: 'Investigación',
        title: 'Contexto del mercado español',
        layout: 'image-grid',
        content: 'España se sitúa a la cola entre las naciones europeas en adopción del vehículo eléctrico. La tendencia de crecimiento es visible pero no se acelera lo suficiente. Las principales barreras de compra son: escasez de puntos de carga, precio del vehículo y autonomía limitada.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-flota-vehiculos-electricos.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-evolucion-esp.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-recharging-points-spain.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/mf-estaciones-de-carga-en-europa-min.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-flota-coches-europa-2020.png',
        ],
      },
      {
        label: 'Análisis',
        title: 'Benchmarking',
        layout: 'left-right',
        content: 'Se analizaron las aplicaciones competidoras del mercado. Las funcionalidades comunes incluyen mapas interactivos con ubicaciones de estaciones de carga, filtros de voltaje, y funcionalidad de guardar favoritos. Sin embargo, ninguna dispone del servicio de cambio de baterías ni de un punto para poder cambiar la batería. La mayoría de aplicaciones priorizan los mapas interactivos pero presentan pobre usabilidad y diseño estético.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-benchmarking-apps.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/movefast-benchmarking.png',
        ],
      },
      {
        label: 'Definición',
        title: 'User Persona — Oriol Vallmajor',
        layout: 'full-image',
        content: 'Oriol es arquitecto con ingresos por encima de la media. Su objetivo principal es viajar por España con su familia en un vehículo eléctrico. Busca transporte sostenible y fiable. Representa el perfil demográfico de clase media-alta que puede permitirse un vehículo eléctrico.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/movefast-user-persona.png'],
      },
      {
        label: 'Empatía',
        title: 'Mapa de empatía',
        layout: 'full-image',
        content: 'Se identificaron los puntos de dolor principales del usuario: ansiedad por la autonomía, falta de infraestructura de carga, y la necesidad de planificar rutas con antelación. Los objetivos del usuario se centran en realizar viajes familiares largos de forma fiable.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/movefast-mapa-empatia.png'],
      },
      {
        label: 'Journey',
        title: 'Customer Journey Map',
        layout: 'full-image',
        content: 'Se documentaron los puntos de contacto revelando la fricción existente: desde la planificación inicial de la ruta hasta la completación de la carga. Los picos de frustración se identificaron en relación con la escasez de la red de carga, amplificados por el déficit de infraestructura en el contexto español.',
        images: ['https://ramonriera.design/wp-content/uploads/2025/01/movefast-costumer-journey.png'],
      },
      {
        label: 'Arquitectura',
        title: 'Flowchart y Wireframes',
        layout: 'center',
        content: 'Se mapearon dos flujos principales del usuario a través de Whimsical: la solicitud de cambio de batería bajo demanda y la reserva en un punto de intercambio dinámico. Además, se diseñaron wireframes de las tres pantallas principales (interfaz principal, punto de intercambio y selección de fecha/hora) para validar la estructura antes de pasar al diseño visual.',
      },
      {
        label: 'Solución',
        title: 'Prototipo interactivo',
        layout: 'figma-embed',
        content: 'Se desarrolló un prototipo interactivo en Figma con el flujo completo del usuario desde la pantalla de inicio hasta el proceso completo de reserva. El prototipo incluye animaciones de transición y estados de interacción.',
        figmaUrl: 'https://embed.figma.com/proto/ZU6SwljVsA0g9iAHhZ9oDj/Global-Helping?page-id=0%3A1&node-id=340-25451&p=f&viewport=249%2C246%2C0.06&t=ghMETNDpnq6X6hrN-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=340%3A23253&embed-host=share',
      },
      {
        label: 'Pantallas',
        title: 'Diseño de interfaces',
        layout: 'screens-grid',
        content: 'La aplicación incluye splash screen animado, onboarding de 4 pantallas explicando las funcionalidades, pantalla principal con mapa interactivo, sistema de filtros, favoritos, reserva de puntos de intercambio, solicitud de cambio de batería a domicilio, y perfil con información del vehículo y opciones de pago.',
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
        label: 'Conclusiones',
        title: 'Conclusiones y futuribles',
        layout: 'center',
        content: 'Se entregó con éxito la UX de la aplicación móvil abordando las dos soluciones propuestas: servicio de batería bajo demanda y reserva de puntos de intercambio dinámicos. El diseño incorpora funcionalidades estándar del sector (integración de pagos, estado de ocupación) al tiempo que introduce un modelo de servicio innovador ausente en la competencia.',
        bullets: [
          'Desarrollo de pantallas adicionales: perfil, pagos, gestión de favoritos',
          'Testing con usuarios para determinar la jerarquía óptima de funcionalidades',
          'Adaptación a aplicación web responsive',
          'Mejoras de accesibilidad en las interfaces existentes',
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
  {
    slug: 'global-helping-social-impact',
    title: 'Global Helping Social Platform',
    client: 'Global Helping',
    year: '2021',
    category: 'Design Thinking',
    tags: ['Design Thinking', 'Social Impact', 'NGO', 'UX Research'],
    description: 'Plataforma de impacto social diseñada con metodología Design Thinking para conectar voluntarios con organizaciones que necesitan ayuda.',
    longDescription: 'Proyecto pro-bono utilizando Design Thinking para crear una plataforma que conecta voluntarios con ONGs y causas sociales. Desde la fase de empatía hasta la validación con usuarios reales, el proceso completo fue documentado como caso de estudio.',
    challenge: 'Las plataformas existentes de voluntariado eran frías y burocráticas. Los voluntarios potenciales perdían motivación antes de completar el registro y encontrar oportunidades relevantes.',
    solution: 'Aplicando Design Thinking, diseñé una experiencia centrada en la conexión emocional con las causas. Gamificación sutil, matching inteligente y storytelling visual para motivar la acción.',
    results: [
      'Tasa de registro completado del 82%',
      'Matching voluntario-causa con 90% de relevancia',
      'Retención de voluntarios activos del 65%',
      'Caso de estudio publicado en Medium',
    ],
    stack: ['Figma', 'Miro', 'Maze', 'Notion', 'Webflow'],
    cover: 'https://ramonriera.design/wp-content/uploads/2025/01/global-helping-header-1120x630.png',
    gallery: [
      'https://ramonriera.design/wp-content/uploads/2025/01/global-helping-header-1120x630.png',
    ],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
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

