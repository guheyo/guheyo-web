/** @type {import('tailwindcss').Config} */
/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        dropdown:
          'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      },
    },
    container: {
      center: true,
    },
    colors: {
      main: '#292f33',
      'light-star': '#D65C95',
      star: '#CB337B',
      'light-white': '#f2f3ed',
      'light-gray': '#8c8f96',
      'light-dark': '#323338', // post
      'semi-dark': '#2c2d30', // middlebar
      dark: '#292a2e', // background
      'deep-dark': '#1e1f22', // sidebar
      ...colors,
    },
  },
  plugins: [],
};
