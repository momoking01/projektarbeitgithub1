module.exports = {
  extends: [
    'stylelint-config-html', // Standard HTML-Regeln
    'stylelint-config-astro' // Astro-spezifische Regeln
  ],
  rules: {
    'block-no-empty': true, // Verbietet leere CSS-Blöcke
    'color-no-invalid-hex': true, // Verbietet ungültige Hex-Farbwerte
    'selector-pseudo-class-no-unknown': true, // Verbietet unbekannte CSS-Pseudo-Klassen
  }
};
