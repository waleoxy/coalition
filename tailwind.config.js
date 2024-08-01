/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      maxWidth: {
        "screen-2xl": "1500px",
      },
      fontFamily: {
        custom: ['"Manrope"', '"DM Serif Display"', "sans-serif"],
        boxSizing: {
          "padding-box": "padding-box",
        },
      },

      colors: {
        border: { DEFAULT: "hsl(var(--border))" },
        black: {
          DEFAULT: "#000000",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
      },
    },
  },
  plugins: [],
};
