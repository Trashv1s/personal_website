/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        'bgprimary': '#020617',
        'bgprimary2': '#1f2937',
        'textprimary': '#00ffff',
        'textprimary2': '#4070f4',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

