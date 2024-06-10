import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";

const unusedVariable = "This is an unused variable"; // Dies ist eine nicht verwendete Variable
export default [
  { 
    languageOptions: { 
      globals: globals.browser 
    } 
  },
  pluginJs.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  { 
    settings: {
      react: {
        version: 'detect' 
      }
    },
    rules: {
      'no-unused-vars': 'error', 
      "no-undef": "warn",
      
    }
  }
];
