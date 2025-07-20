/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'custom': '1025px', 
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
};
