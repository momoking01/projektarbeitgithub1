import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://momoking01.github.io',
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/projektarbeitgithub1/'),
    },
  },

});