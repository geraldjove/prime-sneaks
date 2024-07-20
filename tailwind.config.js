/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        sm: "0.750rem",
        base: "1rem",
        xl: "1.333rem",
        "2xl": "1.777rem",
        "3xl": "2.369rem",
        "4xl": "3.158rem",
        "5xl": "4.210rem",
      },
      fontFamily: {
        heading: "Inter",
        body: "Inter",
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
      colors: {
        text: "#0f1115",
        background: "#f3f4f7",
        primary: "#0055ff",
        secondary: "#7d7d7d",
        accent: "#648bd3",
      },
    },
    fontFamily: {
      sans: ["Roboto", "cursive"],
    },
  },
  plugins: [],
};
