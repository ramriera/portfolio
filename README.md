# Ramon Riera — Portfolio

Portfolio profesional de **Ramon Riera**, UX Lead. Construido con **Astro** y **TailwindCSS**. Diseño minimalista con modo dual (diseño / código), case studies detallados y optimizado para performance.

## Tech Stack

- [Astro](https://astro.build/) — Framework web estático
- [TailwindCSS](https://tailwindcss.com/) — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) — Tipado estático
- Desplegable en [Vercel](https://vercel.com/)

## Inicio rápido

```bash
npm install
npm run dev       # Servidor de desarrollo
npm run build     # Build para producción
npm run preview   # Preview del build
```

## Estructura del proyecto

```
/
├── public/
│   └── assets/
│       └── shared/              # Imágenes de proyectos (por carpeta)
├── src/
│   ├── components/
│   │   ├── Navbar.astro         # Navegación con toggle Code Mode
│   │   ├── Footer.astro         # Footer del sitio
│   │   ├── HeroSection.astro    # Hero con carrusel de palabras
│   │   ├── AboutSection.astro   # Sección "Sobre mí" en Home
│   │   ├── ProjectCard.astro    # Tarjeta de proyecto en grid
│   │   ├── WordsCarousel.astro  # Carrusel rotativo de palabras
│   │   ├── CodeModeToggle.astro # Toggle diseño ↔ código
│   │   ├── SystemConsole.astro  # Consola de sistema (code mode)
│   │   ├── OptImage.astro       # Imagen optimizada con srcset
│   │   └── Tag.astro            # Tag/chip reutilizable
│   ├── layouts/
│   │   └── BaseLayout.astro     # Layout base con SEO
│   ├── pages/
│   │   ├── index.astro          # Home
│   │   ├── about.astro          # Sobre mí
│   │   ├── 404.astro            # Página 404
│   │   └── projects/
│   │       ├── index.astro      # Listado con filtros por categoría
│   │       └── [slug].astro     # Case study individual
│   ├── styles/
│   │   └── global.css           # Estilos globales, code mode, animaciones
│   └── utils/
│       └── data.ts              # Datos centralizados (proyectos, config, etc.)
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Características principales

### Code Mode

El portfolio tiene un modo dual activable desde el Navbar:

- **Modo diseño** (default) — Interfaz limpia, tipografía Inter/Space Grotesk, colores cálidos
- **Modo código** — Estética terminal: fondo oscuro, tipografía monospace (JetBrains Mono), CTAs con estilo `$ comando`, iconos con border-radius reducido, colores verdes/ámbar

El toggle añade/quita la clase `code-mode` en el `<body>`, y todos los estilos se aplican vía `.code-mode` en CSS.

### Case Studies

7 proyectos con case studies detallados, cada uno con secciones configurables:

| Proyecto | Cliente | Tipo |
|----------|---------|------|
| Massimo Dutti | Inditex | UX Strategy & E-commerce |
| MoveFast | Startup | Product Design |
| Global Helping | ONG | Trust & Service Design |
| Banc Sabadell | Banco Sabadell | Design System |
| ImaginBank | CaixaBank | Digital Banking |
| Iberia | Iberia | Flight Experience |
| SoloTemazos | Plataforma musical | Music Platform |

Cada case study soporta secciones con:
- Texto con markdown (bold, listas)
- Imágenes individuales y galerías multi-imagen
- Layouts: `full-width`, `side-by-side`, `grid`, `vertical-pair`
- Diagramas Mermaid renderizados en SVG
- Checks/highlights de resultados

### WordsCarousel

Componente de carrusel que rota palabras con animación CSS:
- En **Hero**: "Diseño experiencias digitales que [importan/conectan/inspiran/...]"
- En **Projects heading**: mismo efecto
- Intervalo configurable (default 3s)

### Responsive

- Mobile-first con breakpoints: `sm` (640), `md` (768), `lg` (1024), `xl` (1280)
- Hero con `min-h-[85svh]` y grid `minmax(0, 1fr)` para evitar overflow
- Headings con `clamp()` para escalado fluido
- Stats: horizontal en mobile, columna lateral en xl

### Otras

- Animaciones de scroll con Intersection Observer (`data-reveal`)
- SEO completo (meta tags, Open Graph, sitemap)
- Imágenes optimizadas con `<picture>` y formatos WebP/AVIF
- Filtrado de proyectos por categoría
- Página 404 personalizada

## Cómo personalizar

### Datos

Edita `src/utils/data.ts`:

- **`siteConfig`** — Nombre, email, redes sociales, URL
- **`navLinks`** — Enlaces de navegación
- **`projects`** — Proyectos del portfolio (ver tipo `Project`)
- **`services`** — Servicios ofrecidos
- **`skills`** — Habilidades y herramientas
- **`testimonials`** — Testimonios

### Proyectos

```typescript
{
  slug: 'mi-proyecto',
  title: 'Mi Proyecto',
  client: 'Cliente',
  year: '2024',
  category: 'UX/UI Design',
  tags: ['UX', 'UI'],
  description: '...',
  longDescription: '...',
  challenge: '...',
  solution: '...',
  results: ['...'],
  stack: ['Figma'],
  cover: '/assets/shared/proyecto/cover.png',
  brandColor: '#D97757',
  featured: true,
  gridSpan: 3,               // 3 = ancho completo, 2 = medio
  gallery: ['/assets/...'],   // Galería opcional
  projectMeta: {              // Metadata del sidebar
    role: 'Product Designer',
    industry: 'E-commerce',
    output: 'Responsive web',
    duration: '6 meses',
    skills: ['UX Research', 'UI Design'],
  },
  caseSections: [             // Secciones del case study
    {
      type: 'text',
      title: 'Contexto',
      content: 'Texto con **bold** y listas...',
    },
    {
      type: 'image',
      title: 'Resultado',
      images: [{ src: '/assets/...', alt: '...' }],
      layout: 'full-width',
    },
  ],
}
```

### Colores

Edita `tailwind.config.mjs`:

- **`primary`** — Color principal (default: `#D97757`, terracota cálido)
- **`dark`** — Escala de grises para texto

## Deploy

```bash
npx vercel
```

O conecta el repositorio en [vercel.com](https://vercel.com/) — detecta Astro automáticamente.

## Licencia

MIT
