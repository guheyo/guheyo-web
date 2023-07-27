/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '720px',
      lg: '980px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    container: {
      center: true,
    },
    colors: {
      mainBg: 'rgba(41, 47, 51, 1.0)', // 메인 배경 (Background) - Hex: #292f33
      subBg: 'rgba(47, 49, 54, 1.0)', // 서브 배경(Cards, Header, Button 등) - Hex: #2F3136
      text: 'rgba(220, 221, 222, 1.0)', // 텍스트 - Hex: #DCDDDE
      subText: 'rgba(114, 118, 125, 1.0)', // 서브 텍스트 - Hex: #72767d
      linkText: 'rgba(114, 137, 218, 1.0)', // 링크 텍스트 - Hex: #7289da
      highlightText: 'rgba(114, 137, 218, 1.0)', // 하이라이트 텍스트 - Hex: #7289da
      onSaleColor: 'rgba(67, 181, 129, 1.0)', // 판매중 - Hex: #43b581
      bookingProgress: 'rgba(250, 166, 26, 1.0)', // 예약중 - Hex: #faa61a
      salesCompleted: 'rgba(116, 127, 141, 1.0)', // 판매 완료 - Hex: #747f8d
      notification: 'rgba(240, 71, 71, 1.0)', // 멘션 및 알림 컬러 - Hex: #f04747
    },
  },
  plugins: [],
});
