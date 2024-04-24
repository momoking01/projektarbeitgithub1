import { defineConfig } from 'astro/config';

import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  integrations: [playformInline()]
});