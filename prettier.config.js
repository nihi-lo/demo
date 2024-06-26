/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindFunctions: ["tv"],
  endOfLine: "lf",
  printWidth: 100,
};

export default config;
