module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-html",
    "stylelint-config-astro"
  ],
  rules: {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "selector-pseudo-class-no-unknown": true,
    "no-descending-specificity": null
  },
  overrides: [
    {
      files: ["*.astro", "**/*.astro"],
      customSyntax: "postcss-html" // Stelle sicher, dass es ein STRING ist
    },
  ],
};
