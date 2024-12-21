/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Moderustic", "serif"],
      },
      keyframes: {
        slideBgIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideBgOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideBgIn: "slideBgIn 0.5s ease-in-out forwards",
        slideBgOut: "slideBgOut 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
