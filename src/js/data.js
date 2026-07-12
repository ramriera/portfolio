// ── Ramon Riera — portfolio content ─────────────────────────────

export const projects = [
  {
    title: 'Iberia',
    year: '2023',
    category: 'Design Systems',
    tags: ['Design Tokens', 'Multi-platform'],
    description:
      'Sistema de diseño unificado para el ecosistema digital de Iberia (Web/App) con arquitectura de Design Tokens y gobernanza multi-plataforma.',
    image: '/assets/img/projects/iberia.png',
    accent: '#E62232',
    span: 'wide',
  },
  {
    title: 'Banco Sabadell',
    year: '2022',
    category: 'Design Systems & UX Engineering',
    tags: ['Component Library', 'Governance'],
    description:
      'Creación y documentación técnica del Design System del banco: biblioteca de componentes escalable y proceso de contribución diseño ↔ ingeniería.',
    image: '/assets/img/projects/sabadell.png',
    accent: '#006DFF',
    span: 'tall',
  },
  {
    title: 'Doctori.com',
    year: '2021 — Presente',
    category: 'Design Systems & Product Strategy',
    tags: ['Design Ops', 'Product'],
    description:
      'Liderazgo de Design Operations y del Design System de un comparador de seguros que crece por verticales, escalando el diseño junto a ingeniería.',
    image: '/assets/img/projects/doctori.png',
    accent: '#001A80',
    span: 'wide',
  },
  {
    title: 'Massimo Dutti',
    year: '2025',
    category: 'UX Strategy & Service Design',
    tags: ['E-commerce', 'Conversión'],
    description:
      'Rediseño del flujo “Reserva en Tienda” (Inditex): de 8 pasos a 4, eliminando la fricción que provocaba abandono en un canal omnicanal.',
    image: '/assets/img/projects/massimo-dutti.png',
    accent: '#1a1918',
    span: 'tall',
  },
  {
    title: 'Imaginbank',
    year: '2021',
    category: 'Product Design',
    tags: ['Fintech', 'Mobile'],
    description:
      'Rediseño de banca móvil centrado en un principio: el usuario nunca debe preguntarse “¿se ha movido mi dinero?”. Claridad y confianza en cada paso.',
    image: '/assets/img/projects/imaginbank.png',
    accent: '#FF6200',
    span: 'std',
  },
  {
    title: 'SoloTemazos',
    year: '2024',
    category: 'Frontend & UX Engineering',
    tags: ['Frontend', 'Mobile-First'],
    description:
      'Plataforma de descubrimiento musical que resuelve la fatiga de decisión del streaming: curación humana y reproducción sin fricción.',
    image: '/assets/img/projects/solotemazos.png',
    accent: '#1DB954',
    span: 'std',
  },
];

export const rotatingWords = ['conectan', 'convierten', 'escalan', 'importan', 'perduran', 'funcionan'];

export const skills = [
  'UX Research & Strategy',
  'Product Design',
  'Design Systems & Tokens',
  'Design Operations',
  'Interaction & Prototyping',
  'Service Design',
  'Accesibilidad (WCAG)',
  'Diseño ↔ Ingeniería (handoff)',
];

export const tools = [
  'Figma',
  'FigJam',
  'Tokens Studio',
  'Storybook',
  'Whimsical',
  'Notion',
  'HTML / CSS / JS',
  'Git & GitHub',
  'Adobe CC',
  'IA para diseño',
];

export const disciplines = [
  {
    n: '01',
    title: 'UX Strategy & Research',
    body:
      'Parto siempre de la misma pregunta: qué métrica de negocio se mueve si esta decisión de diseño sale bien. Research, definición de problema y arquitectura de la solución.',
  },
  {
    n: '02',
    title: 'Design Systems & Design Ops',
    body:
      'Design Tokens, librerías de componentes y gobernanza. Escalo procesos de diseño y sincronizo diseño con ingeniería para que el sistema crezca sin fragmentarse.',
  },
  {
    n: '03',
    title: 'Product & Interaction Design',
    body:
      'De wireframe a prototipo interactivo de alta fidelidad. Flujos, microinteracciones y estados que convierten y reducen la fricción end-to-end.',
  },
];

export const process = [
  { n: '01', title: 'Research', body: 'Entiendo usuario, negocio y contexto.' },
  { n: '02', title: 'Analyze', body: 'Identifico dónde se pierde valor.' },
  { n: '03', title: 'Define', body: 'Enmarco el problema y los objetivos.' },
  { n: '04', title: 'Structure', body: 'Arquitectura de información y flujos.' },
  { n: '05', title: 'Wireframe', body: 'Prototipo de baja fidelidad.' },
  { n: '06', title: 'Design', body: 'UI de alta fidelidad y sistema.' },
  { n: '07', title: 'Prototype & Test', body: 'Valido con usuarios reales.' },
  { n: '08', title: 'Build & Refine', body: 'Handoff e iteración con ingeniería.' },
];

export const services = [
  {
    title: 'UX/UI & Product Design',
    body:
      'Del research al prototipo interactivo. Diseño flujos y pantallas orientados a un resultado de negocio medible.',
    points: ['UX Research', 'Flujos & Wireframes', 'UI de alta fidelidad', 'Prototipado & test'],
  },
  {
    title: 'Design Systems & Design Ops',
    body:
      'Construyo y escalo sistemas de diseño: tokens, componentes, documentación y procesos de contribución.',
    points: ['Design Tokens', 'Librería de componentes', 'Documentación', 'Governance'],
  },
  {
    title: 'Estrategia & Consultoría',
    body:
      'Auditoría de producto y acompañamiento estratégico para equipos que necesitan mover métricas concretas.',
    points: ['Auditoría UX', 'Estrategia de producto', 'Optimización de conversión', 'Mentoring'],
  },
];

export const experience = [
  {
    period: '2021 — Presente',
    role: 'UX Lead & Strategic Product Designer',
    org: 'Doctori.com',
    body: 'Lidero la evolución del producto y Design Operations mediante un Design System robusto.',
  },
  {
    period: '2017 — 2021',
    role: 'Junior → Mid UX/UI Designer',
    org: 'JBM',
    body: 'Inicio profesional con proyectos de branding y web design; progresión en 3 años y 7 meses.',
  },
];

export const consulting = [
  {
    period: '2023 — 2024',
    role: 'Product & UI Consultant',
    org: 'Leemons',
    body: 'Definición de producto y UI estratégica para nuevos modelos de negocio en plataforma educativa.',
  },
  {
    period: '2022 — 2023',
    role: 'Design Systems Consultant',
    org: 'Iberia',
    body: 'Arquitectura de Design Tokens y sistema de diseño global para Web y App.',
  },
  {
    period: '2021 — 2022',
    role: 'Design Systems Consultant',
    org: 'Banco Sabadell',
    body: 'Documentación técnica y componentes modulares para banca digital.',
  },
];
