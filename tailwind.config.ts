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
      'star-300': '#D65C95',
      'star-400': '#D24B8A',
      'star-500': '#CB337B',
      'star-600': '#C43176',
      'star-700': '#B42D6C',
      'light-200': '#f2f3ed',
      'dark-200': '#7f838e', // icon-gray
      'dark-400': '#404146', // clicked-post
      'dark-500': '#323338', // channel-bg
      'dark-600': '#2c2d30', // category-bg
      'dark-700': '#292a2e', // forum-bg
      'dark-800': '#1e1f22', // leftbar-bg
      ...colors,
    },
  },
  plugins: [],
};
