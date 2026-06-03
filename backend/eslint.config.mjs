// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import prettier from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  {
    ignores: ["dist", "node_modules"],
  },

  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  prettier,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },

      sourceType: "module",
    },

    rules: {
      "@typescript-eslint/no-explicit-any": "off",

      "@typescript-eslint/no-unused-vars": "warn",

      "@typescript-eslint/ban-ts-comment": "off",

      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
          singleQuote: false,
        },
      ],
    },
  },
);
