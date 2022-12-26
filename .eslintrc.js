module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-unused-vars": "off",
    "react/jsx-key": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "no-unneeded-ternary": "off",
  },
};
