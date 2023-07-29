/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{njk,md}', './src/**/*.svg'],
  theme: {
    fontFamily: {
      neue: 'PP Neue Montreal, sans-serif',
      neuebit: 'PP Neue Bit, sans-serif',
      lausanne: 'Lausanne, sans-serif',
      druk: 'Druk, sans-serif',
      circular: 'Circular, sans-serif',
      sch: 'sch, sans-serif',
      neopixel: 'Neopixel, sans-serif',
      mhtirogla: 'MHTIROGLA, sans-serif',
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
        white: '#CCCCCC',
      },
      borderColor: {
        DEFAULT: 'rgb(255 255 255 / 0.2)',
      },
    },
  },
};
