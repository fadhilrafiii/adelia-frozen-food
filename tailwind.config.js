/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '350px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    colors: {
      grey: '#636363',
      white: '#fff',
      black: '#000',
      'light-grey': '#D9D9D9',
      'lighter-grey': '#F8F9FA',
    },
    fontFamily: {
      primary: ['var(--primary-font)', ...fontFamily.serif],
      secondary: ['var(--secondary-font)', 'Arial', ...fontFamily.sans],
    },
    border: {
      DEFAULT: '1px',
      '05': '0.5px',
    },
  },
  plugins: [],
};
