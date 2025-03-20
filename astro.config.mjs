import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

export default defineConfig({
  integrations: [compress()],
  site: 'https://momoking01.github.io/projektarbeitgithub1',
  base: '/projektarbeitgithub1/', 
  vite: {
    define: {
      'import.meta.env.BASE_URL': JSON.stringify('/projektarbeitgithub1/'),
    },
    build: {
      format: 'directory', // ✅ Stellt sicher, dass GitHub Pages keine 404-Fehler hat
      minify: 'terser',    // ✅ Minifiziert JavaScript für bessere Performance
    }
  },
  integrations: [compress({
    css: true,
    html: true,
    js: true,
    svg: true,
    img: true,
    gzip: true,   
    brotli: true  
  })]
});
