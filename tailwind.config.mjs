/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf6f3',
          100: '#fceae2',
          200: '#f9d5c5',
          300: '#f4b89d',
          400: '#ec9372',
          500: '#D97757',
          600: '#c4613f',
          700: '#a34d32',
          800: '#86412d',
          900: '#6f3828',
        },
        dark: {
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e8e4dd',
          300: '#d4cfc5',
          400: '#a8a196',
          500: '#7c766c',
          600: '#5c574f',
          700: '#403d38',
          800: '#2a2825',
          900: '#1a1918',
          950: '#141413',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'doctori-pulse': 'doctoriPulse 2s ease-in-out infinite',
      },
      keyframes: {
        doctoriPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(217, 119, 87, 0.4)' },
          '50%': { boxShadow: '0 0 0 6px rgba(217, 119, 87, 0)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
};
