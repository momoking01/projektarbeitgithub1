module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-html",
  ],
  rules: {
    "block-no-empty": true,
    "color-no-invalid-hex": true,
    "selector-pseudo-class-no-unknown": true,
    "no-descending-specificity": null,
  },
  overrides: [
    {
      files: ["*.astro", "**/*.astro"],
      customSyntax: "postcss-html", // Syntax muss ein String sein
    },
  ],
};
