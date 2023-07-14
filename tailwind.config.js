/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,md}', './src/**/*.svg'],
  theme: {
    fontFamily: {
      sans: 'PPNeueBit, sans-serif',
    },
    container: {
      center: true,
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '100%',
        'xl': '100%',
        '2xl': '1920px',
      },
    },
    extend: {
      borderColor: {
        // DEFAULT: 'rgb(0 0 0 / 0.1)',
        DEFAULT: '#fb3f1a',
      },
    },
  },
};
