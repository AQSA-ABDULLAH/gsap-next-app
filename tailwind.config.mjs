/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#171717",
        darkBackground: "#0a0a0a",
        darkForeground: "#ededed",
        crimson: "crimson",
        yellow: "yellow",
        blueviolet: "blueviolet",
        brown: "brown",
        palevioletred: "palevioletred",
        lightseagreen: "lightseagreen",
      },
    },
  },
  plugins: [],
};
