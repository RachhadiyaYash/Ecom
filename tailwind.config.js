/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D9488',
          50: '#E0F2F1',
          100: '#B2DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#0D9488',
          600: '#0C857B',
          700: '#0A6F68',
          800: '#085A55',
          900: '#064540',
        },
        whiteText: '#FFFFFF',
      },
    },
  },
  plugins: [],
}
