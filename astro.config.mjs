import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://momoking01.github.io/projektarbeitgithub1',
  base: '/projektarbeitgithub1/',
  output: 'static',  // Statische HTML-Dateien für GitHub Pages
  build: {
    format: 'directory', // Erzwingt, dass Seiten in Verzeichnissen gespeichert werden
  },
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/projektarbeitgithub1/'),
    },
  },
});
