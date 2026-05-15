import js from "@eslint/js";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import vueConfig from "@vue/eslint-config-typescript";
import configPrettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  ...vueConfig(),
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: typescriptParser,
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        process: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      vue,
    },
    rules: {
      // Vue 规则
      "vue/multi-word-component-names": "off",
      "vue/no-unused-vars": "error",
      "vue/no-multiple-template-root": "off",
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "never",
            normal: "always",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: { max: 3 },
          multiline: { max: 1 },
        },
      ],
      "vue/html-indent": ["error", 2],
      "vue/script-indent": ["error", 2],
      "vue/component-definition-name-casing": ["error", "PascalCase"],
      "vue/component-name-in-template-casing": ["error", "PascalCase"],
      "vue/prop-name-casing": ["error", "camelCase"],
      "vue/attribute-hyphenation": ["error", "always"],
      "vue/v-on-event-hyphenation": ["error", "always"],

      // TypeScript 规则
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-var-requires": "error",

      // 通用规则
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-unused-vars": "off", // 使用 TypeScript 版本
      "prefer-const": "error",
      "no-var": "error",
      "object-shorthand": "error",
      "prefer-template": "error",
      "template-curly-spacing": "error",
      "arrow-spacing": "error",
      "comma-dangle": ["error", "never"],
      indent: ["error", 2],
      quotes: ["error", "single"],
      semi: ["error", "never"],
      "eol-last": "error",
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": ["error", { max: 1 }],
      "space-before-function-paren": ["error", "always"],
      "keyword-spacing": "error",
      "space-infix-ops": "error",
      "comma-spacing": "error",
      "brace-style": ["error", "1tbs"],
      curly: ["error", "all"],
      eqeqeq: ["error", "always"],
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-script-url": "error",
    },
  },
  {
    files: ["**/*.vue"],
    rules: {
      // Vue 文件特定规则
      indent: "off", // 使用 vue/script-indent
      "vue/script-indent": ["error", 2, { baseIndent: 0 }],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // TypeScript 文件特定规则
      "no-undef": "off", // TypeScript 会处理这个
    },
  },
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "*.min.js",
      "coverage/**",
      ".nuxt/**",
      ".output/**",
      "unpackage/**",
      ".stylelintrc.cjs",
      "**/**.d.ts",
    ],
  },
  configPrettier,
];
