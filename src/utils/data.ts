export const siteConfig = {
  name: 'Ramon Riera',
  title: 'Ramon Riera — Senior UX/UI Designer',
  description: 'Diseñador de experiencias de usuario. Especializado en Design Systems, Product Design y Design Operations.',
  url: 'https://ramonriera.design',
  email: 'hello@ramonriera.design',
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
  { label: 'Lab', href: '/lab' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contacto', href: '/contact' },
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

export const skills = [
  { name: 'Figma', category: 'design' },
  { name: 'Sketch', category: 'design' },
  { name: 'Adobe Creative Suite', category: 'design' },
  { name: 'Framer', category: 'design' },
  { name: 'Principle', category: 'design' },
  { name: 'Design Thinking', category: 'methodology' },
  { name: 'Design Sprint', category: 'methodology' },
  { name: 'Lean UX', category: 'methodology' },
  { name: 'Agile / Scrum', category: 'methodology' },
  { name: 'User Research', category: 'methodology' },
  { name: 'HTML/CSS', category: 'dev' },
  { name: 'JavaScript', category: 'dev' },
  { name: 'React', category: 'dev' },
  { name: 'Astro', category: 'dev' },
  { name: 'Tailwind CSS', category: 'dev' },
  { name: 'Git', category: 'dev' },
  { name: 'Storybook', category: 'tools' },
  { name: 'Zeroheight', category: 'tools' },
  { name: 'Notion', category: 'tools' },
  { name: 'Jira', category: 'tools' },
  { name: 'Miro', category: 'tools' },
  { name: 'Zeplin', category: 'tools' },
];

export const testimonials = [
  {
    name: 'Laura Martínez',
    role: 'Product Manager, Fintech Startup',
    text: 'Ramon transformó completamente nuestra plataforma. Su enfoque en design systems nos permitió escalar el producto de forma consistente y eficiente.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Carlos Fernández',
    role: 'CTO, Health Tech',
    text: 'Su capacidad para entender problemas complejos y traducirlos en interfaces intuitivas es excepcional. Un profesional de primer nivel.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    name: 'Ana García',
    role: 'Head of Design, Banking',
    text: 'La implementación del design system que creó Ramon redujo nuestro tiempo de desarrollo en un 40%. Su trabajo es meticuloso y estratégico.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
];

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
}

export const projects: Project[] = [
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
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=1200&h=800&fit=crop',
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
    cover: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1529074673733-c3d49a2d3bce?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1540339832862-474599807836?w=1200&h=800&fit=crop',
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
      'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=1200&h=800&fit=crop',
    ],
    liveUrl: '#',
    featured: true,
  },
  {
    slug: 'isalud-insurance-redesign',
    title: 'iSalud Corporate Redesign',
    client: 'iSalud Corporate',
    year: '2023',
    category: 'UX/UI Design',
    tags: ['UX/UI', 'Insurance', 'Responsive', 'Conversion'],
    description: 'Rediseño completo del comparador de seguros de salud, optimizando la conversión y simplificando un proceso tradicionalmente complejo.',
    longDescription: 'Proyecto de rediseño del comparador de seguros de salud líder en España. Mi trabajo se centró en simplificar el proceso de comparación, mejorar la presentación de información compleja y optimizar los flujos de conversión.',
    challenge: 'Los usuarios abandonaban el comparador ante la complejidad de las opciones de seguros. La información era densa y difícil de comparar, resultando en bajas tasas de conversión.',
    solution: 'Rediseñé el flujo de comparación con progressive disclosure, filtros inteligentes y visualización comparativa clara. Implementé A/B testing continuo para optimizar cada paso.',
    results: [
      'Incremento del 45% en conversión',
      'Reducción del 60% en tiempo de comparación',
      'Bounce rate reducido en 30%',
      'Satisfacción de usuario 4.6/5',
    ],
    stack: ['Figma', 'Google Optimize', 'Hotjar', 'GA4', 'Vue.js'],
    cover: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1553729459-afe8f2e2882d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
    ],
    liveUrl: '#',
    featured: false,
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
    cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&h=800&fit=crop',
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
    cover: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=800&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=800&fit=crop',
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

export const labExperiments = [
  {
    slug: 'generative-patterns',
    title: 'Generative Patterns',
    description: 'Exploración de patrones generativos con CSS y JavaScript. Arte computacional aplicado a interfaces.',
    cover: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop',
    tags: ['CSS', 'Generative', 'Art'],
  },
  {
    slug: 'micro-interactions',
    title: 'Micro-Interactions Library',
    description: 'Colección de micro-interacciones reutilizables para mejorar la experiencia de usuario.',
    cover: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop',
    tags: ['Animation', 'UX', 'CSS'],
  },
  {
    slug: 'dark-mode-patterns',
    title: 'Dark Mode Patterns',
    description: 'Estudio de patrones y mejores prácticas para implementar modo oscuro en productos digitales.',
    cover: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
    tags: ['Dark Mode', 'UI', 'Research'],
  },
  {
    slug: 'typography-experiments',
    title: 'Typography Experiments',
    description: 'Exploraciones tipográficas con variable fonts y animaciones para web moderna.',
    cover: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tags: ['Typography', 'Variable Fonts', 'CSS'],
  },
];
