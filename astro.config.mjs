import { defineConfig } from 'astro/config';

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  integrations: [playformInline()],
  site: 'https://momoking1.github.io',
  base: '/projektarbeitgithub1/',
});