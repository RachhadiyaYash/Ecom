/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D9488', // Custom teal background color
        whiteText: '#FFFFFF', // Custom white text color
      },
    },
  },
  plugins: [],
}
