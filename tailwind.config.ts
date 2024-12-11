/** @type {import('tailwindcss').Config} */
/* eslint-disable import/no-extraneous-dependencies */
import colors from 'tailwindcss/colors';
import typography from '@tailwindcss/typography';

const tailwindConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
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
      'magenta-200': '#f28ac2',
      'magenta-300': '#f073b6',
      'magenta-400': '#ed5caa',
      'magenta-500': '#eb459e',
      'magenta-600': '#e92e92',
      'magenta-700': '#e41986',
      'magenta-800': '#cd1678',
      'light-200': '#f2f3ed',
      'dark-100': '#C6CBD2',
      'dark-200': '#7f838e', // icon-gray
      'dark-400': '#404146', // clicked-post
      'dark-500': '#323338', // channel-bg
      'dark-600': '#2c2d30', // category-bg
      'dark-700': '#292a2e', // forum-bg
      'dark-800': '#1e1f22', // leftbar-bg
      'blurple-200': '#9fa6f8',
      'blurple-300': '#8791f6',
      'blurple-400': '#707bf4',
      'blurple-500': '#5865F2',
      'blurple-600': '#404ff0',
      'blurple-700': '#2939ee',
      'blurple-800': '#1225eb',
      ...colors,
    },
  },
  plugins: [typography],
};

export default tailwindConfig;
