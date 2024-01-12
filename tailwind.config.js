/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'Topspot-black': '#222621',
        'Topspot-purple': '#5E2865',
        'Topspot-mauve': '#625482',
        'Topspot-gray': '#637095',
        'Topspot-blue': '#5271FF',
      },
      backgroundImage: {
        'banner-home': "url('https://res.cloudinary.com/dilp6xqmb/image/upload/v1701768624/Banner_home.jpg')",
      },
    },
  },
  plugins: [],
}

