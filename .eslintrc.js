import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

export default {
  languageOptions: {
    globals: globals.browser,
    ecmaVersion: 2021,
    sourceType: "module"
  },
  extends: [
    pluginJs.configs.recommended,
    ...fixupConfigRules(pluginReactConfig)
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
