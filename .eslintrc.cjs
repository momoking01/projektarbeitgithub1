module.exports = {
  extends: [
    "plugin:astro/recommended", // Verwendet die empfohlene Konfiguration von eslint-plugin-astro
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        extraFileExtensions: [".astro"],
      },
      rules: {
        // Astro-spezifische Regeln hinzufügen oder überschreiben:
        "astro/no-conflict-set-directives": "error",
        "astro/no-unused-define-vars-in-style": "error",
        // Beispiel: "astro/no-set-html-directive": "error"
      },
    },
    {
      files: ["**/*.astro/*.js", "*.astro/*.js"],
      env: {
        browser: true,
        es2020: true,
      },
      parserOptions: {
        sourceType: "module",
      },
      rules: {
        // Regel für .js Dateien in Astro-Komponenten
        "prettier/prettier": "off", // Deaktiviert Prettier
        // Beispiel: "no-unused-vars": "error"
      },
    },
    {
      files: ["**/*.astro/*.ts", "*.astro/*.ts"],
      env: {
        browser: true,
        es2020: true,
      },
      
      rules: {
        // Regel für .ts Dateien in Astro-Komponenten
        "prettier/prettier": "off", // Deaktiviert Prettier
      },
    },
  ],
};
