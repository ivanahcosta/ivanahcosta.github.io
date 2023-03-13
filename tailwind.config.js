/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,md}', './src/**/*.svg'],
  theme: {
    fontFamily: {
      sans: 'Lausanne, sans-serif',
      serif: 'SchmalfetteCP, serif',
    },
    container: {
      center: true,
    },
  },
};
