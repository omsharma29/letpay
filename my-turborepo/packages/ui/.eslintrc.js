/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react-internal.js"],
  parser: "@typescript-eslint/parser", // Default parser for TypeScript
  parserOptions: {
    project: "./tsconfig.lint.json",
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ["tailwind.config.js"], // Ensure tailwind.config.js is treated as a JS file
      parser: "espree", // Use the default JavaScript parser for tailwind.config.js
      rules: {
        // Disable rules that don't make sense for tailwind.config.js
        "@typescript-eslint/no-var-requires": "off",
        "no-undef": "off",
      },
    },
  ],
};
