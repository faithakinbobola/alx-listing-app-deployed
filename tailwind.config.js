/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['var(--font-quicksand)', 'sans-serif']
      },
      colors: {
        primary: '#34967C',
        shimmer: '#FFFFFF',
        secondary: '#161117',
        accent: '#222222'
      }
    },
  },
  plugins: [],
}
