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
  layout: 'center' | 'left-right' | 'right-left' | 'full-image' | 'image-grid' | 'screens-grid' | 'figma-embed' | 'whimsical-embed' | 'web-embed';
  figmaUrl?: string;
  embedUrl?: string;
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
      skills: ['UX Research', 'Benchmarking', 'User Persona', 'Journey Mapping', 'Prototyping', 'Design System'],
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
        layout: 'image-grid',
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
      skills: ['Design Thinking', 'Surveys', 'User Persona', 'Journey Mapping', 'Design Tokens', 'Prototyping'],
    },
    caseSections: [
      {
        label: '01. Descubrimiento',
        title: 'Research Questions y Brainstorming',
        layout: 'image-grid',
        content: 'El punto de partida fue un brainstorming amplio para mapear las problemáticas globales y detectar oportunidades de diseño. A partir de ahí, se formularon Research Questions divididas en tres categorías de actores: Usuarios (comportamiento y necesidades de personas solidarias), Productos/Servicios (qué oferta existe y qué falta) e Instituciones (rol y capacidades de ONGs y asociaciones).\n\nEstas preguntas guiaron toda la fase de investigación, evitando sesgos y asegurando que las decisiones de diseño se basaran en datos reales, no en suposiciones.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/gh-brainstorming.png',
          'https://ramonriera.design/wp-content/uploads/2025/01/gh-research-questions.png',
        ],
      },
      {
        label: '01. Descubrimiento',
        title: 'Cuestionarios — El pivote del proyecto',
        layout: 'image-grid',
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
        layout: 'image-grid',
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
        layout: 'image-grid',
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
    title: 'Imaginbank — Auditoría UX',
    client: 'CaixaBank (Imaginbank)',
    year: '2021',
    category: 'UX Audit',
    tags: ['Auditoría Heurística', 'Usabilidad', 'Nielsen', 'Banking', 'Mobile'],
    description: 'Auditoría de usabilidad de la app móvil de Imaginbank (CaixaBank) aplicando las 10 Heurísticas de Jakob Nielsen para identificar oportunidades de mejora en la experiencia de usuario.',
    longDescription: 'Imaginbank es el banco 100% digital de CaixaBank, lanzado en 2016 para operar exclusivamente en dispositivos móviles. Su misión: captar al público joven y nativo digital con servicios financieros ágiles y sin sucursales. Sin embargo, el mercado ha cambiado radicalmente desde su lanzamiento — neobancos como Revolut, N26 y Bnext han redefinido las expectativas de la Gen Z con interfaces limpias, onboardings de 5 minutos y experiencias que se sienten más como apps de consumo que como banca.',
    challenge: 'Como parte de un ejercicio de evaluación experta, realicé un análisis heurístico de la aplicación móvil de Imaginbank con el objetivo de identificar oportunidades de mejora en su experiencia de usuario. A través de los principios de usabilidad de Nielsen, examiné la interfaz y los flujos clave desde una perspectiva crítica, prestando especial atención a aspectos como la visibilidad del estado del sistema, la consistencia, el control del usuario y la prevención de errores.',
    solution: 'Durante el análisis surgieron hallazgos significativos relacionados con la nomenclatura de ciertas funciones, la falta de flexibilidad en la navegación y la visibilidad limitada de opciones secundarias. Además, se identificaron puntos de mejora en los mensajes de error y en la retroalimentación de acciones críticas. Este caso práctico resume los principales problemas detectados y propone recomendaciones concretas para optimizar la experiencia, con especial énfasis en accesibilidad cognitiva, claridad de los flujos y soporte contextual.',
    results: [
      'Auditoría completa en 5 horas con metodología Nielsen',
      'Identificados 12+ fallos de usabilidad categorizados por severidad',
      'Propuestas de mejora priorizadas por impacto en el usuario',
      'Documento de recomendaciones entregado al equipo de producto',
    ],
    stack: ['Figma', 'Chrome'],
    cover: 'https://ramonriera.design/wp-content/uploads/2025/04/Imaginbank-header-1120x630.png',
    gallery: [
      'https://ramonriera.design/wp-content/uploads/2025/04/Imaginbank-header-1120x630.png',
    ],
    liveUrl: '#',
    featured: true,
    projectMeta: {
      role: 'UX Consultant',
      duration: '5 horas',
      tools: ['Figma', 'Chrome'],
      skills: ['Análisis Heurístico', 'Usabilidad', 'Accesibilidad', 'UX Research', 'Comunicación UX', 'Benchmarking'],
    },
    caseSections: [
      {
        label: '01. Contexto',
        title: 'Un banco digital que compite con neobancos',
        layout: 'center',
        content: 'Imaginbank nació en 2016 como la apuesta de CaixaBank por captar al público joven y nativo digital. Banco 100% móvil, sin sucursales, con servicios financieros diseñados para operar exclusivamente desde el smartphone. La propuesta era clara: competir con los neobancos que estaban redefiniendo la banca.\n\nPero el mercado evolucionó más rápido que el producto. Revolut, N26 y Bnext elevaron el estándar con onboardings de 5 minutos, interfaces ultra-limpias y experiencias que se sienten más como apps de consumo que como banca tradicional. La Gen Z espera ese nivel de calidad — y Imaginbank necesitaba entender por qué no conectaba con ellos a pesar de ser un producto digital-first.',
      },
      {
        label: '01. Contexto',
        title: 'Objetivo y metodología',
        layout: 'image-grid',
        content: 'El objetivo fue realizar una evaluación experta (heuristic evaluation) de la app de Imaginbank utilizando las 10 Heurísticas de Jakob Nielsen como marco de análisis.\n\nNo se trataba de rediseñar, sino de diagnosticar: examinar cada flujo clave de la aplicación, documentar los problemas de usabilidad con capturas anotadas y proponer recomendaciones priorizadas por severidad e impacto. Se prestó especial atención a la visibilidad del estado del sistema, la consistencia, el control del usuario y la prevención de errores.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-1.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-2.png',
        ],
      },
      {
        label: '02. Análisis Heurístico',
        title: 'H1 — Visibilidad del estado del sistema',
        layout: 'right-left',
        content: 'El sistema debe mantener al usuario informado en todo momento sobre lo que está ocurriendo, mediante feedback apropiado y en un tiempo razonable.\n\nEn Imaginbank se detectaron carencias significativas: la app no proporcionaba feedback visual suficiente al realizar acciones críticas como transferencias o pagos. El usuario no siempre sabía si una operación estaba en proceso, se había completado o había fallado — generando incertidumbre y desconfianza en momentos donde la claridad es esencial.',
        highlight: 'La falta de feedback en acciones financieras críticas compromete la confianza del usuario en los momentos donde más la necesita.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-3.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-4.png',
        ],
      },
      {
        label: '02. Análisis Heurístico',
        title: 'H4 — Consistencia y estándares',
        layout: 'right-left',
        content: 'Los usuarios no deberían tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.\n\nEl análisis reveló inconsistencias en la nomenclatura de funciones: las mismas acciones recibían nombres diferentes según la sección de la app. La iconografía no seguía un lenguaje visual coherente y algunos patrones de interacción variaban entre pantallas similares. Para un público joven acostumbrado a apps de consumo ultra-consistentes (Instagram, Spotify, Revolut), estas fricciones son especialmente evidentes.',
        highlight: 'La nomenclatura inconsistente entre secciones genera confusión cognitiva — el usuario tiene que "reaprender" la interfaz en cada pantalla.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-5.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-6.png',
        ],
      },
      {
        label: '02. Análisis Heurístico',
        title: 'H3 — Control y libertad del usuario',
        layout: 'right-left',
        content: 'Los usuarios necesitan una "salida de emergencia" clara para abandonar estados no deseados sin tener que pasar por un proceso extenso.\n\nLa navegación de Imaginbank presentaba una rigidez notable: la falta de flexibilidad impedía al usuario deshacer acciones, volver atrás de forma intuitiva o acceder a opciones secundarias sin recorrer múltiples pantallas. Las opciones secundarias quedaban enterradas en submenús, obligando al usuario a memorizar dónde encontrar funcionalidades que deberían estar accesibles contextualmente.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-7.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-8.png',
        ],
      },
      {
        label: '02. Análisis Heurístico',
        title: 'H5 / H9 — Prevención de errores y recuperación',
        layout: 'right-left',
        content: 'Un diseño cuidadoso que prevenga errores es mejor que buenos mensajes de error. Y cuando los errores ocurren, el sistema debe expresarlos en lenguaje claro y ofrecer una solución constructiva.\n\nEn Imaginbank, los mensajes de error eran genéricos y no orientaban al usuario hacia la solución. En operaciones financieras — donde un error puede tener consecuencias económicas reales — la app no ofrecía confirmaciones claras, pasos de verificación ni mecanismos de "undo" que son estándar en neobancos competidores.',
        highlight: 'Los mensajes de error genéricos en operaciones financieras no solo frustran — erosionan activamente la confianza en la plataforma.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-9.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-10.png',
        ],
      },
      {
        label: '02. Análisis Heurístico',
        title: 'H8 — Diseño estético y minimalista',
        layout: 'right-left',
        content: 'Cada unidad extra de información compite con las unidades relevantes y disminuye su visibilidad relativa.\n\nAunque la estética general de Imaginbank era limpia y cuidaba la presentación de información financiera, se detectaron áreas donde la jerarquía visual era confusa y elementos decorativos competían con la información funcional. La priorización visual de las acciones más frecuentes del usuario joven no era óptima — funcionalidades como Bizum o transferencias rápidas no tenían la prominencia que su frecuencia de uso justifica.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-11.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-12.png',
        ],
      },
      {
        label: '03. Definición y Empatía',
        title: 'El usuario joven — perfil y frustraciones',
        layout: 'image-grid',
        content: 'El target de Imaginbank es claro: jóvenes de 18-30 años, nativos digitales, usuarios intensivos de apps de consumo que esperan la misma calidad de experiencia en su app bancaria.\n\nSu frustración nace de una interfaz que no habla su lenguaje: nomenclatura bancaria tradicional en lugar de términos directos, flujos que requieren demasiados pasos para acciones simples, y una experiencia que se siente como "la app del banco de mis padres" en lugar de una herramienta financiera moderna. La brecha entre expectativas (definidas por Revolut, N26) y realidad (Imaginbank) es lo que genera abandono.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-13.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-14.png',
        ],
      },
      {
        label: '03. Definición y Empatía',
        title: 'Puntos de fricción en el journey',
        layout: 'full-image',
        content: 'El journey del usuario con Imaginbank revela tres momentos críticos: el onboarding (demasiado largo y con terminología bancaria), la primera transferencia (sin feedback claro ni confirmación visual), y la gestión de tarjetas (opciones enterradas en submenús).\n\nEstos puntos de fricción coinciden directamente con las heurísticas incumplidas: falta de visibilidad (H1), navegación rígida (H3) y prevención de errores insuficiente (H5). La frustración acumulada en estas micro-interacciones es lo que lleva al usuario a probar alternativas donde estas acciones se resuelven en 2-3 taps.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-15.png',
        ],
      },
      {
        label: '04. Propuestas de Mejora',
        title: 'Recomendaciones priorizadas',
        layout: 'center',
        content: 'Basándome en la severidad y el impacto de cada hallazgo, las propuestas de mejora se organizaron en tres niveles de prioridad:',
        bullets: [
          'Crítico — Rediseñar el sistema de feedback de acciones financieras: confirmaciones visuales claras, estados de progreso y mensajes de error constructivos que guíen al usuario hacia la solución',
          'Alto — Unificar la nomenclatura en toda la app: lenguaje consistente, directo y alineado con el vocabulario del usuario joven, eliminando jerga bancaria innecesaria',
          'Alto — Flexibilizar la navegación: accesos directos a acciones frecuentes (Bizum, transferencias), "deshacer" accesible y opciones secundarias visibles sin explorar submenús',
          'Medio — Optimizar la jerarquía visual: priorizar las 3-4 acciones más frecuentes en la pantalla principal, reducir el ruido visual y aplicar progressive disclosure',
        ],
      },
      {
        label: '04. Propuestas de Mejora',
        title: 'Cambios arquitectónicos y visuales',
        layout: 'image-grid',
        content: 'Las mejoras propuestas abarcan tanto la arquitectura de información como el diseño visual. A nivel arquitectónico: simplificación de la navegación principal a 4-5 secciones claras, accesos directos contextuales y reducción de la profundidad de los flujos más frecuentes. A nivel visual: sistema de feedback con micro-interacciones, jerarquía tipográfica revisada para priorizar la información financiera clave, y un lenguaje visual más cercano al estándar de los neobancos.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-16.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/imaginbank-17.png',
        ],
      },
    ],
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
    title: 'SoloTemazos — Music Platform',
    client: 'SoloTemazos',
    year: '2024',
    category: 'Frontend & UX Engineering',
    tags: ['React/Astro', 'Tailwind CSS', 'API Integration', 'UX/UI Design', 'Performance Optimization', 'Product Strategy'],
    description: 'Plataforma de descubrimiento musical y curación de contenido centrada en la experiencia de usuario y el rendimiento.',
    longDescription: 'SoloTemazos nace como respuesta a la saturación de algoritmos en plataformas de streaming. Mientras Spotify, Apple Music o YouTube Music priorizan la retención mediante loops algorítmicos, SoloTemazos apuesta por una curación más humana y directa: contenido seleccionado a mano, categorizado por estado de ánimo y contexto, con una interfaz que elimina la fricción entre descubrir y escuchar. El proyecto es un ejercicio completo de UX Engineering — desde la estrategia de producto y el prototipado, hasta el diseño visual y la implementación técnica en producción.',
    challenge: 'El mercado del streaming musical está dominado por plataformas con recursos ilimitados. Competir en catálogo es imposible. La oportunidad está en la experiencia: los usuarios sufren "fatiga de decisión" ante millones de canciones y playlists generadas por IA. SoloTemazos necesitaba ofrecer un descubrimiento de un solo clic — abrir la plataforma, ver lo que hay, escuchar. Sin búsquedas complejas, sin algoritmos opacos, sin frustración.',
    solution: 'Se diseñó y desarrolló una plataforma web completa partiendo de una estrategia de producto clara (Lean Canvas, User Personas, KPIs), pasando por wireframes y prototipos iterativos, hasta una implementación técnica optimizada con arquitectura estática (Astro), lazy loading de reproductores, integración con APIs multimedia y una estética dark mode que evoca la cultura de club. Cada decisión — de negocio, de diseño, de código — está al servicio de una sola cosa: que el usuario descubra música sin fricción.',
    results: [
      'Tiempo de carga inferior a 1 segundo (Lighthouse 95+)',
      'Integración completa con API de YouTube y embeds multimedia',
      'Arquitectura estática con Astro — 0ms de TTFB en CDN',
      'Librería de +500 artículos musicales curados editorialmente',
      'Comunidad activa con sistema de comentarios integrado (Disqus)',
      'SEO optimizado — posicionamiento orgánico en nichos musicales',
    ],
    stack: ['Astro', 'React', 'Tailwind CSS', 'HTML5', 'jQuery', 'YouTube API', 'Disqus', 'Cloudflare', 'Google Analytics'],
    cover: 'https://ramonriera.design/wp-content/uploads/2025/01/solotemazos-header-1120x630.png',
    gallery: [
      'https://ramonriera.design/wp-content/uploads/2025/01/solotemazos-header-1120x630.png',
    ],
    liveUrl: 'https://solotemazos.com',
    featured: false,
    projectMeta: {
      role: 'UX Engineer & Product Owner (Estrategia, Diseño, Desarrollo, Marketing)',
      duration: 'Proyecto continuo (2024–presente)',
      tools: ['Astro', 'React', 'Tailwind CSS', 'Figma', 'Google Analytics', 'Cloudflare', 'Disqus'],
      skills: ['React/Astro', 'Tailwind CSS', 'API Integration', 'UX/UI Design', 'Performance Optimization', 'Product Strategy'],
    },
    caseSections: [
      // ── Estrategia de Producto ──
      {
        label: 'Estrategia de Producto',
        title: 'Lean Canvas — El modelo de negocio',
        layout: 'center',
        content: 'Antes de escribir una sola línea de código, se definió el modelo de negocio con un Lean Canvas. La propuesta de valor es clara: acceso instantáneo a música curada por humanos, frente a los algoritmos opacos de las grandes plataformas. El modelo de ingresos es híbrido — contenido gratuito con publicidad contextual para el usuario casual, y una experiencia premium sin interrupciones para el suscriptor comprometido.\n\nEl segmento de clientes se divide en dos arquetipos fundamentales: el que busca descubrir (el "Oyente Descubridor") y el que quiere compartir y validar su gusto musical (el "Curador Musical"). Ambos coexisten en el ecosistema y se retroalimentan — el contenido curado atrae al descubridor, y la comunidad retiene al curador.',
        bullets: [
          'Propuesta de valor: Curación humana vs. algoritmos — descubrimiento genuino de un solo clic',
          'Fuentes de ingresos: Modelo híbrido Free (con anuncios contextuales) + Premium (suscripción sin interrupciones)',
          'Canales: SEO orgánico, redes sociales musicales, marketing de contenidos, newsletters',
          'Ventaja competitiva: Velocidad de carga (<1s), editorial humana, nicho no cubierto por grandes plataformas',
        ],
      },
      {
        label: 'Estrategia de Producto',
        title: 'User Personas — ¿Para quién diseñamos?',
        layout: 'center',
        content: 'Se definieron dos arquetipos principales para guiar todas las decisiones de diseño y desarrollo:\n\n"El Oyente Descubridor" — Tiene entre 22 y 35 años, está cansado de escuchar siempre lo mismo en Spotify. Abre SoloTemazos cuando quiere sorprenderse. Su motivación es emocional: busca esa canción que le ponga los pelos de punta. Su frustración principal es la parálisis ante demasiadas opciones.\n\n"El Curador Musical" — Tiene entre 25 y 40 años, es DJ, melómano o simplemente alguien con un gusto musical muy definido. Quiere un espacio donde su criterio sea visible y valorado. Su motivación es social: compartir descubrimientos y construir reputación en un nicho. Su frustración es que las plataformas mainstream invisibilizan el criterio humano.',
        highlight: 'El "Oyente Descubridor" no quiere elegir entre millones de canciones — quiere que alguien de confianza le diga "escucha esto". El "Curador Musical" quiere que su criterio tenga un escenario.',
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
        title: 'La fatiga del algoritmo — Análisis del consumo musical actual',
        layout: 'center',
        content: 'El punto de partida fue una observación respaldada por datos: las plataformas de streaming ofrecen más de 100 millones de canciones, pero cada vez es más difícil descubrir música nueva que realmente conecte. Los algoritmos de recomendación tienden a crear burbujas de contenido similar — el usuario termina escuchando variaciones de lo mismo, atrapado en un loop de familiaridad.\n\nLa investigación reveló un patrón claro: los usuarios más activos musicalmente (los que asisten a conciertos, compran vinilo, siguen sellos discográficos) desconfían de los algoritmos. Prefieren las recomendaciones de personas reales — amigos, DJs, blogs especializados. SoloTemazos se posiciona exactamente en ese hueco: curación editorial con alma humana, presentada con la velocidad y accesibilidad de una plataforma digital moderna.',
        highlight: 'El 67% de los oyentes activos prefiere descubrir música a través de personas de confianza antes que por algoritmos. La oportunidad no está en competir con Spotify en catálogo, sino en experiencia de descubrimiento.',
      },
      {
        label: '01. Descubrimiento',
        title: 'Identidad visual — Logo y marca',
        layout: 'image-grid',
        content: 'La identidad de SoloTemazos necesitaba funcionar en dos contextos opuestos: sobre fondos oscuros (la plataforma) y sobre fondos claros (redes sociales, compartidos). Se diseñaron dos versiones del logo — negativa y positiva — manteniendo la legibilidad y el reconocimiento en cualquier entorno.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-logo-BLK.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-logo-WHT.png',
        ],
      },
      // ── 02. Definición (Prototipado y Wireframes) ──
      {
        label: '02. Definición',
        title: 'De los insights a los wireframes',
        layout: 'center',
        content: 'Los insights de la fase de descubrimiento se tradujeron en wireframes de baja y media fidelidad. La estructura de la plataforma se diseñó para priorizar tres principios:\n\n1. Contenido visible inmediatamente — Sin pantallas de bienvenida, sin onboarding, sin pasos previos. El usuario aterriza y ya hay música esperándole.\n\n2. Jerarquía visual clara — Las portadas y los reproductores son los protagonistas. La navegación, las categorías y los elementos auxiliares ocupan un segundo plano funcional.\n\n3. Reproductor no intrusivo — El reproductor embebido (YouTube/Soundcloud) se integra en el flujo de lectura sin interrumpir el scroll. El usuario puede explorar mientras escucha.',
        bullets: [
          'Wireframes de baja fidelidad para validar estructura y jerarquía de información',
          'Prototipos de media fidelidad para testear flujos de navegación y disposición del reproductor',
          'Iteración basada en feedback: el reproductor pasó de posición fija (footer) a embebido en contexto',
          'Decisión clave: eliminar la barra de búsqueda en homepage — el descubrimiento es editorial, no por demanda',
        ],
      },
      {
        label: '02. Definición',
        title: 'Wireframes — Arquitectura de la información',
        layout: 'full-image',
        content: 'Los wireframes permitieron validar la estructura antes de invertir tiempo en diseño visual. El foco estaba en la disposición de los bloques de contenido: ¿dónde va el reproductor respecto al texto? ¿Cómo se navega entre categorías sin perder el contexto de lo que se está escuchando? Estos bocetos fueron la base para todas las decisiones de UI posteriores.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-wireframing.png',
        ],
      },
      {
        label: '02. Definición',
        title: 'Sistema de grids — Estructura responsive',
        layout: 'image-grid',
        content: 'Se definió un sistema de grids que garantiza la coherencia visual en todas las resoluciones. La estructura principal usa un grid de 12 columnas con variaciones de 2 y 3 columnas para las tarjetas de contenido, asegurando que la experiencia de descubrimiento funcione tanto en desktop como en móvil.',
        highlight: 'Eliminar la búsqueda de la homepage fue contraintuitivo, pero alineaba el producto con su propuesta de valor: si vienes a SoloTemazos, déjate llevar. La curación es el producto.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-grid-1.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-grid-2.png',
        ],
      },
      // ── 03. Diseño Visual ──
      {
        label: '03. Diseño Visual',
        title: 'Dark mode y la estética del "Diseño Invisible"',
        layout: 'right-left',
        content: 'La interfaz de SoloTemazos utiliza un dark mode nativo que no es solo una decisión estética — es funcional. En una plataforma de contenido multimedia, el fondo oscuro reduce la fatiga visual durante sesiones largas y hace que las portadas de los artistas y los vídeos sean los verdaderos protagonistas.\n\nLos colores vibrantes (acentos en tonos cálidos y neón) se reservan exclusivamente para elementos interactivos y categorías, creando un sistema visual que evoca la cultura de club y música electrónica sin distraer del contenido. Es un caso de "Diseño Invisible": la interfaz desaparece para que la música ocupe todo el espacio.',
        highlight: 'La mejor interfaz es la que no notas. En SoloTemazos, cada elemento visual existe para servir al contenido, nunca para decorar. La usabilidad manda sobre el adorno — es la diferencia entre un diseño que impresiona y un diseño que funciona.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-color.png',
        ],
      },
      {
        label: '03. Diseño Visual',
        title: 'Tipografía y espaciado — El ritmo visual',
        layout: 'image-grid',
        content: 'La tipografía es limpia y neutral, con pesos que crean jerarquía sin recurrir a adornos. El sistema de espaciado define márgenes y paddings consistentes que permiten que cada artículo respire, evitando la sensación de sobrecarga que caracteriza a muchas plataformas de contenido. Juntos, tipografía y espaciado crean el ritmo visual que guía al usuario a través del contenido.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-typography.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-spacing.png',
        ],
      },
      {
        label: '03. Diseño Visual',
        title: 'Sistema de componentes — Tarjetas de contenido',
        layout: 'image-grid',
        content: 'Cada tipo de contenido tiene su propia tarjeta diseñada para comunicar la información esencial de un vistazo. La tarjeta de canción prioriza la portada y el artista; la de noticias, el titular y la imagen destacada; la de ranking, la posición y la tendencia. Todas comparten el mismo lenguaje visual pero están optimizadas para su función específica — simplificando el acceso al reproductor para cumplir con la premisa de descubrimiento en un solo clic.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-card-song.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-card-noticia.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-card-ranking.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-card-festival.png',
        ],
      },
      {
        label: '03. Diseño Visual',
        title: 'Variantes del componente Song — Adaptación al contexto',
        layout: 'image-grid',
        content: 'La tarjeta de canción es el componente más utilizado de la plataforma y necesitaba adaptarse a múltiples contextos: vista de lista, vista de grid, vista destacada y vista compacta. Se diseñaron tres variantes que comparten la misma base pero adaptan su densidad de información según el espacio disponible y la jerarquía dentro de la página.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-card-song-2.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-card-song-3.png',
        ],
      },
      {
        label: '03. Diseño Visual',
        title: 'Navegación y barra de navegación',
        layout: 'left-right',
        content: 'La navegación se diseñó para ser omnipresente pero no intrusiva. La barra de navegación agrupa las secciones principales (Canciones, Noticias, Rankings, Festivales, Discos) con iconografía clara y labels concisos. En mobile, la navegación inferior permite acceso directo con el pulgar a las secciones más frecuentes.\n\nEl menú expandido ofrece acceso a todas las categorías y funciones secundarias, manteniendo la consistencia visual del dark mode y priorizando la legibilidad.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-card-navigation-bar.png',
        ],
      },
      {
        label: '03. Diseño Visual',
        title: 'Pantallas principales — Alta fidelidad',
        layout: 'image-grid',
        content: 'Las pantallas de alta fidelidad muestran el resultado final del proceso de diseño. La vista de festivales permite descubrir eventos musicales con información clave visible desde la tarjeta; la vista de lista presenta las canciones en un formato editorial que invita al scroll vertical. Cada pantalla respeta el principio de "contenido primero" — la música y las imágenes dominan el espacio, mientras la interfaz se mantiene en segundo plano funcional.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-festivals.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-lista.png',
        ],
      },
      {
        label: '03. Diseño Visual',
        title: 'Menú y listas de reproducción',
        layout: 'image-grid',
        content: 'El menú principal despliega todas las secciones de la plataforma con una jerarquía visual clara. Las listas de reproducción se presentan en un formato que prioriza la portada del artista y permite reproducir directamente desde la vista de lista, eliminando pasos intermedios entre descubrir y escuchar.',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-menu.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-lista-2.png',
        ],
      },
      {
        label: '03. Diseño Visual',
        title: 'Diseño mobile — Todas las pantallas',
        layout: 'screens-grid',
        content: 'La experiencia mobile se diseñó como first-class citizen, no como adaptación del desktop. Cada pantalla está optimizada para el uso con una sola mano: navegación inferior, acciones principales al alcance del pulgar, y reproductores que se pueden controlar sin interrumpir el flujo de navegación. A continuación, todas las pantallas del sistema en su versión mobile:',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-principal.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-reproductor.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-charts.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-noticias.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-noticias-principal.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-discos.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-discos-kygo.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-festivales.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-festivales-tomorrowland.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-lista.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-lista-levels.png',
          'https://ramonriera.design/wp-content/uploads/2025/04/solotemazos-mobile-logo.png',
        ],
      },
      // ── 04. Desarrollo e Implementación ──
      {
        label: '04. Desarrollo e Implementación',
        title: 'Stack tecnológico — UX Engineering en producción',
        layout: 'center',
        content: 'Cada decisión técnica en SoloTemazos está tomada desde la perspectiva del usuario, no del desarrollador. La arquitectura combina herramientas modernas con soluciones probadas:\n\nAstro como framework principal, generando HTML estático en build time para alcanzar 0ms de TTFB en CDN (Cloudflare Pages). React se usa exclusivamente para componentes interactivos — Islands Architecture que envía JavaScript solo donde hay interactividad real.\n\nHTML5 Audio Players y jQuery para compatibilidad máxima con reproductores embebidos, garantizando que la experiencia de audio funcione en cualquier dispositivo y navegador sin dependencias pesadas.\n\nDisqus integrado como sistema de comentarios, creando una capa de comunidad que permite a los "Curadores Musicales" interactuar y compartir opiniones directamente en cada artículo.\n\nSEO optimizado desde la estructura: meta tags dinámicos, Open Graph para compartir en redes sociales, sitemap generado automáticamente, y URLs semánticas que posicionan orgánicamente en búsquedas de nicho musical.',
        bullets: [
          'Astro (SSG) — HTML estático, 0ms TTFB, Lighthouse Performance 95+',
          'React (Islands Architecture) — JavaScript mínimo, solo donde hay interactividad real',
          'HTML5 Audio + jQuery — Reproductores compatibles con cualquier dispositivo y navegador',
          'Disqus — Comunidad integrada con moderación y feedback en cada artículo',
          'Lazy loading agresivo — iframes de YouTube/Soundcloud solo se cargan cuando entran en viewport',
          'Imágenes optimizadas (WebP/AVIF) — Responsive srcsets generados en build time',
          'SEO técnico — Meta tags dinámicos, Open Graph, sitemap automático, URLs semánticas',
          'Cloudflare Pages — Deploy automático, distribución global en edge, SSL incluido',
        ],
      },
      {
        label: '04. Desarrollo e Implementación',
        title: 'Arquitectura y decisiones de rendimiento',
        layout: 'full-image',
        content: 'La arquitectura se diseñó con un principio claro: la velocidad percibida es la velocidad real. No importa cuántos milisegundos tarde el servidor si el usuario percibe la carga como instantánea. Para eso se implementaron tres estrategias complementarias: pre-fetching de rutas en hover (la siguiente página ya está cargando antes de que el usuario haga clic), lazy loading de reproductores (los iframes pesados no bloquean el render inicial), y Above the Fold optimizado (el contenido visible sin scroll se prioriza en el Critical Rendering Path).',
        images: [
          'https://ramonriera.design/wp-content/uploads/2025/01/solotemazos-header-1120x630.png',
        ],
      },
      // ── 05. Solución Final y Resultados ──
      {
        label: '05. Solución Final',
        title: 'La plataforma en producción — Acceso directo',
        layout: 'web-embed',
        embedUrl: 'https://solotemazos.com',
        content: 'SoloTemazos está en producción y accesible públicamente. A diferencia de los otros proyectos del portfolio donde el entregable es un prototipo o un design system, aquí el producto está vivo — con usuarios reales, métricas reales e iteraciones continuas basadas en datos de Google Analytics.\n\nAbajo puedes interactuar directamente con la plataforma. Navega, explora el contenido, reproduce música — es la mejor forma de evaluar el trabajo.',
      },
      {
        label: '05. Solución Final',
        title: 'Métricas de impacto y crecimiento',
        layout: 'center',
        content: 'SoloTemazos demuestra que un producto puede competir en experiencia cuando no puede competir en recursos. La plataforma ha crecido orgánicamente desde su lanzamiento, con resultados que validan tanto las decisiones de producto como las técnicas:',
        bullets: [
          'Librería de +500 artículos musicales curados editorialmente — crecimiento sostenido mensual',
          'Gestión integral de contenidos: redacción, categorización, SEO on-page y scheduling de publicaciones',
          'Marketing en redes sociales: estrategia de distribución en Instagram, Twitter/X y newsletters',
          'Comunidad activa: sistema de comentarios con ratio de interacción superior al 5% de visitantes',
          'Optimización de carga a <1 segundo — validado con Lighthouse y WebPageTest',
          'Integración completa con APIs de YouTube y Soundcloud para la librería multimedia',
          'Posicionamiento SEO orgánico en nichos musicales específicos sin inversión en SEM',
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

