/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'extra-night-blue': '#000032',
        'extra-light-night-blue': '#060442',
        'night-blue': '#243757',
        'light-night-blue': '#3a5f6f',
        'light-beige': '#dad5b7',
        'night-beige': '#c2b79b',
        'light-brown': '#665e52'
      }
    },

  },
  plugins: [],
}