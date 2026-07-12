# Ramon Riera — Portfolio

Portfolio personal de **Ramon Riera**, Senior UX/UI & Product Designer.
Sitio de una sola página con secciones de proyectos, sobre mí, skills, enfoque,
proceso, servicios, trayectoria y contacto.

## Stack

- **[Vite](https://vitejs.dev/)** — bundler y dev server
- **SASS/SCSS** — estilos modulares (arquitectura por parciales)
- **JavaScript vanilla (ES modules)** — render de contenido e interacciones
  (marquee, reveal on scroll, rotador del hero, menú móvil, nav activo)
- Sin frameworks de UI: HTML + CSS + JS puro

## Estructura

```
index.html            Marcado de todas las secciones
src/
  js/
    main.js           Bootstrap: render + interacciones
    data.js           Contenido (proyectos, skills, servicios, trayectoria…)
  scss/
    main.scss         Punto de entrada (@use de parciales)
    _variables.scss   Design tokens (color, tipografía, espaciado)
    _base.scss        Reset, layout, botones, reveal, marquee
    _nav.scss  _hero.scss  _works.scss  _about.scss  _sections.scss
public/
  assets/img/         Imágenes de proyectos y foto
  assets/shared/      Logos, OG image
  docs/               CV en PDF
```

## Comandos

```bash
npm install      # instalar dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción → dist/
npm run preview  # previsualizar el build
```

## Despliegue

Configurado para **Vercel** (`vercel.json`, framework `vite`, salida `dist/`).

## Contenido

Para editar proyectos, skills, servicios o trayectoria, modifica los arrays en
`src/js/data.js`. El contenido se renderiza dinámicamente en `index.html`.
