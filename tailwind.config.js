/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true
      },
      borderRadius: {
        xl: '10px'
      },
      fontSize: {
        '2xs': '10px'
      },
      colors: {
        app: {
          primary: '#467AFF'
        }
      }
    }
  },
  important: '#tw-root',
  plugins: []
};
