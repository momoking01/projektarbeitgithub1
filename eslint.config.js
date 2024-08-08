import eslintPluginAstro from 'eslint-plugin-astro';
export default [
  // add more generic rule sets here, such as:
  // js.config
  ...eslintPluginAstro.configs.all,
  {
    rules: {
      "astro/no-set-html-directive": "error"
    }
  }
];