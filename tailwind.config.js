/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.njk'],
  theme: {
    fontFamily: {
      sans: 'PP Neue Montreal, sans-serif',
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
      colors: {
        black: '#1A1A1A',
        red: '#FF3F00',
        gray: '#CCCCCC',
      },
      borderColor: {
        DEFAULT: '#484848',
      },
      dropShadow: {
        external: '0px 1em 0px #FFFFFF',
      },
    },
  },
};
