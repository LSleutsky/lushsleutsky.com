import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  {
    files: ["**/*.{ts,tsx,js}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier: prettierPlugin
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "prettier/prettier": "error",
      "jsx-quotes": ["error", "prefer-double"],
      "no-duplicate-case": "error",
      "no-dupe-keys": "error",
      "no-empty": "error",
      "prefer-const": "error",
      "react/jsx-no-undef": "error",
      "react/jsx-sort-props": [
        "error",
        {
          callbacksLast: true,
          ignoreCase: true,
          reservedFirst: true,
          shorthandFirst: true
        }
      ]
    }
  },
  prettierConfig,
  {
    ignores: ["node_modules/", "dist/", "public/"]
  }
);
