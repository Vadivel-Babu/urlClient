/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyen: "var(--cyan)",
        customWhite: "var( --custom-white)",
        grey: "var( --custom-gray)",
        darkblue: "var(--custom-darkblue)",
        deepblue: "var(--custom-deepDarkblue)",
        lightblack: "var(--custom-lightblack)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
