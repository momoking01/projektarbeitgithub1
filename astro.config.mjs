import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://momoking01.github.io/projektarbeitgithub1/',
  base: '/projektarbeitgithub1/', // Basis-Pfad für dein Projekt
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/projektarbeitgithub1/'),
    },
  },
// Weitere Konfigurationen...
});