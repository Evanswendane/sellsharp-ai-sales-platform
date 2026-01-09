/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22c55e",
        primaryDark: "#16a34a",
        bg: "#f8fafc",
        textDark: "#0f172a",
        textLight: "#475569",
        border: "#e2e8f0",
        midnight: "#1c3a4b",
      },
    },
  },
  plugins: [],
};
