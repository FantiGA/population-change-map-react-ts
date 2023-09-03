/*
 * @Author: fantiga
 * @Date: 2023-08-26 18:34:38
 * @LastEditTime: 2023-09-03 12:44:25
 * @LastEditors: fantiga
 * @FilePath: /population-change-map-react-ts/.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  // extends: Specify extended configuration, support rule coverage and aggregation
  extends: [
    "eslint:recommended",
    "plugin:jest-dom/recommended"
  ],
  overrides: [],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // plugins: Configure those plugins we want Linting rules
  plugins: ["jest-dom"],
  rules: {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "double"
    ],
    "semi": [
      "error",
      "always"
    ],
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
  }
};
