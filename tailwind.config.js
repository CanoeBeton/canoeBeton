/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'header': '3px 3px rgb(0 0 0 / 0.4)'
      },
      backgroundColor: {
        'beton' : '#f5f8fa'
      }
    },
  },
  plugins: [],
}
