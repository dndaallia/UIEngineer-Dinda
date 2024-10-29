/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    container: {
      "center": true,
      "padding": '75px',
    },
    extend: {
      fontFamily: {
        "poppins": "Poppins"
    },
    },
  },
  plugins: [],
}

