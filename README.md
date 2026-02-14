# Ramon Riera — Portfolio

Portfolio profesional construido con **Astro** y **TailwindCSS**. Diseño moderno, minimalista, con animaciones suaves, optimizado para performance y SEO.

## Tech Stack

- [Astro](https://astro.build/) — Framework web estático
- [TailwindCSS](https://tailwindcss.com/) — Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) — Tipado estático
- Desplegable en [Vercel](https://vercel.com/)

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## Estructura del proyecto

```
/
├── public/
│   ├── images/           # Imágenes estáticas
│   ├── favicon.svg       # Favicon
│   └── robots.txt        # Configuración SEO
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── HeroSection.astro
│   │   ├── AboutSection.astro
│   │   ├── ProjectCard.astro
│   │   ├── Gallery.astro
│   │   ├── ContactForm.astro
│   │   ├── ThemeToggle.astro
│   │   ├── AnimatedSection.astro
│   │   └── Tag.astro
│   ├── layouts/
│   │   └── BaseLayout.astro  # Layout base con SEO
│   ├── pages/
│   │   ├── index.astro        # Home
│   │   ├── about.astro        # Sobre mí
│   │   ├── services.astro     # Servicios
│   │   ├── contact.astro      # Contacto
│   │   ├── lab.astro          # Experimentos
│   │   ├── 404.astro          # Página 404
│   │   ├── projects/
│   │   │   ├── index.astro    # Listado de proyectos
│   │   │   └── [slug].astro   # Proyecto individual
│   │   ├── blog/
│   │   │   └── index.astro    # Blog
│   │   └── legal/
│   │       ├── privacy.astro  # Privacidad
│   │       └── cookies.astro  # Cookies
│   ├── styles/
│   │   └── global.css         # Estilos globales + Tailwind
│   └── utils/
│       └── data.ts            # Datos centralizados
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── vercel.json
└── package.json
```

## Cómo personalizar el contenido

### Datos generales

Edita `src/utils/data.ts` para cambiar:

- **`siteConfig`** — Nombre, email, redes sociales, URL del sitio
- **`navLinks`** — Enlaces de navegación
- **`services`** — Servicios ofrecidos
- **`skills`** — Habilidades y herramientas
- **`testimonials`** — Testimonios de clientes
- **`projects`** — Proyectos del portfolio
- **`blogPosts`** — Artículos del blog
- **`labExperiments`** — Experimentos del lab

### Proyectos

Cada proyecto en `data.ts` incluye:

```typescript
{
  slug: 'mi-proyecto',       // URL amigable
  title: 'Mi Proyecto',      // Título
  client: 'Cliente',         // Nombre del cliente
  year: '2024',              // Año
  category: 'UX/UI Design',  // Categoría
  tags: ['UX', 'UI'],        // Tags
  description: '...',        // Descripción corta
  longDescription: '...',    // Descripción larga
  challenge: '...',          // El reto
  solution: '...',           // La solución
  results: ['...'],          // Resultados
  stack: ['Figma'],          // Herramientas usadas
  cover: 'url',              // Imagen de portada
  gallery: ['url1', 'url2'], // Galería de imágenes
  liveUrl: 'https://...',    // URL del proyecto
  githubUrl: 'https://...',  // URL de GitHub
  featured: true,            // Destacar en Home
}
```

### Colores

Edita `tailwind.config.mjs` para cambiar la paleta:

- **`primary`** — Color principal (default: #f15105)
- **`dark`** — Escala de grises

### Imágenes

Coloca imágenes en `public/images/` y referéncialas desde los datos.

## Deploy en Vercel

1. Conecta tu repositorio en [vercel.com](https://vercel.com/)
2. Vercel detectará automáticamente la configuración de Astro
3. El build se ejecuta con `npm run build`
4. Output en la carpeta `dist/`

O usa la CLI:

```bash
npx vercel
```

## Características

- Diseño responsive (mobile-first)
- Modo oscuro automático (sistema) y manual
- Animaciones de scroll con Intersection Observer
- SEO completo (meta tags, Open Graph, sitemap)
- Performance optimizada (static site, lazy loading)
- Filtrado de proyectos por categoría
- Galería de imágenes interactiva
- Formulario de contacto
- Página 404 personalizada
- Páginas legales (privacidad, cookies)

## Licencia

MIT
