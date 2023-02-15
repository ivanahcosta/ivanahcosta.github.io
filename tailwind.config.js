/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,md}', './src/**/*.svg'],
  theme: {
    fontFamily: {
      sans: 'Circular Book',
      serif: 'Cabinet Grotesk Regular',
    },
    container: {
      center: true,
    },
    extend: {},
  },
};
