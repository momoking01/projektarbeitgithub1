import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.all,
  {
    rules: {
      "astro/no-set-html-directive": "error",
      "astro/no-unused-css-selector": "off" // ✅ Deaktiviert die Warnung für ungenutzte CSS-Selektoren
    }
  }
];
