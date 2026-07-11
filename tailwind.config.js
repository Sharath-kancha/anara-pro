/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Manrope", "sans-serif"],
      },

      colors: {
        sage: {
          50: "#F2F5F2",
          100: "#E2E9E4",
          200: "#C4D2C8",
          300: "#9AB1A1",
          400: "#789686",
          500: "#5F7D69",
          600: "#4E6856",
          700: "#3F5446",
        },

        ivory: {
          100: "#F8F5EF",
        },

        gold: {
          500: "#C7A76C",
        },

        ink: "#222222",
      },

      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.04)",
        lift: "0 18px 50px -20px rgba(95,125,105,0.30)",
      },
    },
  },

  plugins: [],
};