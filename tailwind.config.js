/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,md}', './src/**/*.svg'],
  theme: {
    fontFamily: {
      sans: 'Arial, Circular Book',
      serif: 'Georgia, Cabinet Grotesk Regular',
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '1rem',
        'sm': '2rem',
        'lg': '0rem',
        'xl': '0rem',
        '2xl': '0rem',
      },
    },
    extend: {},
  },
};
