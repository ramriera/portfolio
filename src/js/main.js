import '../scss/main.scss';
import {
  projects,
  rotatingWords,
  skills,
  tools,
  disciplines,
  process,
  services,
  experience,
  consulting,
} from './data.js';

// ── helpers ─────────────────────────────────────────────────────
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const el = (tag, cls, html) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html != null) n.innerHTML = html;
  return n;
};

// ── render: works ───────────────────────────────────────────────
function renderWorks() {
  const grid = $('[data-works]');
  if (!grid) return;
  projects.forEach((p, i) => {
    const card = el('article', `work work--${p.span} reveal`);
    card.dataset.reveal = '';
    card.dataset.revealDelay = String(i % 2);
    card.style.setProperty('--accent', p.accent);
    card.innerHTML = `
      <div class="work__media">
        <img src="${p.image}" alt="${p.title}" loading="lazy" decoding="async" />
      </div>
      <div class="work__info">
        <div class="work__meta">
          <span class="work__cat">${p.category}</span>
          <span class="work__year">${p.year}</span>
        </div>
        <h3 class="work__title">${p.title} <span class="work__arrow" aria-hidden="true">↗</span></h3>
        <p class="work__desc">${p.description}</p>
        <ul class="work__tags">${p.tags.map((t) => `<li>${t}</li>`).join('')}</ul>
      </div>`;
    grid.appendChild(card);
  });
}

// ── render: simple lists ────────────────────────────────────────
function renderLists() {
  const skillsEl = $('[data-skills]');
  if (skillsEl) skills.forEach((s) => skillsEl.appendChild(el('li', 'skills__item', `<span>${s}</span>`)));

  const toolsEl = $('[data-tools]');
  if (toolsEl) tools.forEach((t) => toolsEl.appendChild(el('li', 'tools__item', t)));

  const techEl = $('[data-tech]');
  if (techEl)
    disciplines.forEach((d, i) => {
      const card = el('article', 'tech__card reveal');
      card.dataset.reveal = '';
      card.dataset.revealDelay = String(i);
      card.innerHTML = `<span class="tech__num">${d.n}</span><h3 class="tech__title">${d.title}</h3><p class="tech__body">${d.body}</p>`;
      techEl.appendChild(card);
    });

  const procEl = $('[data-process]');
  if (procEl)
    process.forEach((s, i) => {
      const li = el('li', 'process__step reveal');
      li.dataset.reveal = '';
      li.dataset.revealDelay = String(i % 4);
      li.innerHTML = `<span class="process__num">${s.n}</span><h3 class="process__step-title">${s.title}</h3><p class="process__step-body">${s.body}</p>`;
      procEl.appendChild(li);
    });

  const servEl = $('[data-services]');
  if (servEl)
    services.forEach((s, i) => {
      const card = el('article', 'service reveal');
      card.dataset.reveal = '';
      card.dataset.revealDelay = String(i);
      card.innerHTML = `
        <h3 class="service__title">${s.title}</h3>
        <p class="service__body">${s.body}</p>
        <ul class="service__points">${s.points.map((pt) => `<li>${pt}</li>`).join('')}</ul>`;
      servEl.appendChild(card);
    });

  const buildResume = (sel, items) => {
    const box = $(sel);
    if (!box) return;
    items.forEach((it) => {
      const li = el('li', 'resume__item');
      li.innerHTML = `
        <span class="resume__period">${it.period}</span>
        <div class="resume__meta">
          <h4 class="resume__role">${it.role}</h4>
          <span class="resume__org">${it.org}</span>
          <p class="resume__body">${it.body}</p>
        </div>`;
      box.appendChild(li);
    });
  };
  buildResume('[data-experience]', experience);
  buildResume('[data-consulting]', consulting);
}

// ── hero word rotator ───────────────────────────────────────────
function initRotator() {
  const box = $('[data-rotator]');
  if (!box) return;
  const word = box.querySelector('.hero__rotator-word');
  let i = 0;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;
  setInterval(() => {
    word.classList.add('is-out');
    setTimeout(() => {
      i = (i + 1) % rotatingWords.length;
      word.textContent = rotatingWords[i];
      word.classList.remove('is-out');
    }, 380);
  }, 2600);
}

// ── scroll reveal ───────────────────────────────────────────────
function initReveal() {
  const items = $$('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach((n) => n.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  items.forEach((n) => io.observe(n));
}

// ── nav: shadow on scroll + active link ─────────────────────────
function initNav() {
  const nav = $('[data-nav]');
  const sections = $$('main section[id]');
  const links = $$('.nav__link');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 24);
    let current = '';
    const y = window.scrollY + window.innerHeight * 0.35;
    sections.forEach((s) => {
      if (s.offsetTop <= y) current = s.id;
    });
    links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${current}`));
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// ── mobile menu ─────────────────────────────────────────────────
function initMenu() {
  const toggle = $('[data-menu-toggle]');
  const drawer = $('[data-drawer]');
  if (!toggle || !drawer) return;
  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    drawer.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    if (open) return close();
    toggle.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    drawer.classList.add('is-open');
    document.body.classList.add('no-scroll');
  });
  $$('[data-drawer-link]', drawer).forEach((l) => l.addEventListener('click', close));
}

// ── misc ────────────────────────────────────────────────────────
function initMisc() {
  const y = $('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
}

// ── boot ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderWorks();
  renderLists();
  initRotator();
  initReveal();
  initNav();
  initMenu();
  initMisc();
});
