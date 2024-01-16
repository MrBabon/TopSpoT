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
      backgroundColor: {
        'rgba': 'rgba(5, 26, 36, 0.8)',
      },
      backgroundImage: {
        'banner-home': "linear-gradient(rgba(0,0,0,0.15),rgba(0,0,0,0.15)),url('../../assets/images/photos/iStock-1216520737.jpg')",
      },
    },
  },
  plugins: [],
}

