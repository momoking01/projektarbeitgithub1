import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/projektarbeitgithub1/', // Basis-Pfad für dein Projekt
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/projektarbeitgithub1/'),
    },
  },
  // Weitere Konfigurationen...
});
