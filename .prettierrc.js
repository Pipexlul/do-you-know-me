/** @type {import("prettier").Config} */
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  tailwindFunctions: ["cx", "cn"],
  tailwindAttributes: [],
  plugins: ["prettier-plugin-tailwindcss"],
};
