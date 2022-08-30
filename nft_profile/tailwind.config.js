/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Lato: "'Lato', sans-serif",
      },
      colors: {
        bgButton: "#ffffff",
        txtColor: "#EFF6FF",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
