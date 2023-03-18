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
      screens: {
        'sm': '700px',
        'md': '700px',
        'lg': '700px',
        'xl': '700px',
        '2xl': '700px',
      },
    },
  },
};
