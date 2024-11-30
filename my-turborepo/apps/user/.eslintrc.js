/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // project: "./tsconfig.eslint.json",  // Pointing to the new tsconfig.eslint.json
    tsconfigRootDir: __dirname,
  },
};
