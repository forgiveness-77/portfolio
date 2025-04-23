const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(37, 153, 218)",
        dark: "rgb(9, 13, 16)",
        gradient1: "rgb(21,185,185)",
        gradient2 :"rgb(60,29,255)",
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
