import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://momoking01.github.io/projektarbeitgithub1',
  base: '/projektarbeitgithub1/', // Dies ist der Name deines Repositorys
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/projektarbeitgithub1/'),
    },
  },
});
