/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightCyan: "hsl(193, 38%, 86%)",
      neonGreen: "hsl(150, 100%, 66%)",
      grayishBlue: "hsl(217, 19%, 38%)",
      darkGrayishBlue: "hsl(217, 19%, 24%)",
      darkBlue: "hsl(218, 23%, 16%)",
    },
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    fontSize: {
      qouteFontSize: "28px",
    },
    boxShadow: {
      buttonShadow: "0 0px 25px 0px hsl(150, 100%, 66%)",
    },
    extend: {},
  },
  plugins: [],
};
