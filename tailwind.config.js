/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        quote: "28px",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
    },
  },

  plugins: [],
};