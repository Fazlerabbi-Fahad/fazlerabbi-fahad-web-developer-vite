/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#",
        secondary: "#750310",
        bgSecond: "#171A1E",
        textColor: "#D9D9D9",
      },
    },
  },
  plugins: [require("daisyui")],
};
