/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,md}', './src/**/*.svg'],
  theme: {
    fontFamily: {
      sans: 'Neue, sans-serif',
      serif: 'Instrument Serif, serif',
      noto: 'Noto, sans-serif',
    },
    container: {
      center: true,
      padding: {
        'DEFAULT': '1.5rem',
        'sm': '1.5rem',
        'lg': '2.5rem',
        'xl': '2.5rem',
        '2xl': '2.5rem',
      },
    },
    extend: {
      borderColor: {
        DEFAULT: 'rgb(255 255 255 / 0.2)',
      },
    },
  },
};
