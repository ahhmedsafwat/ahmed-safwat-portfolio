/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: {
    files: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
    ],
  },
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        anton: "Anton SC",
        noto: "Noto Sans",
        pangaia: "pangaia",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        cards: "hsl(var(--cards))",
      },
      screens: {
        small: "426px",
      },
    },
  },
};
