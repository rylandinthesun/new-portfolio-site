/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", "sans-serif"],
        mono: ["Rubik Mono One", "monospace"]
      }
    }
  },
  plugins: [require("daisyui")],
  darkMode: "class"
};
