/** @type {import('tailwindcss').Config} */

const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  darkMode: 'class',
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
      spacing: {
        'discord-1': '4px', // 디스코드의 기본 마진 및 패딩 간격
        'discord-2': '8px', // 디스코드에서 더 넓은 마진 및 패딩에 사용
        'discord-3': '16px', // 디스코드에서 더 넓은 마진 및 패딩에 사용
      },
      fontSize: {
        'discord-small': '0.8rem', // 디스코드의 작은 텍스트 크기
        'discord-base': '1rem', // 디스코드의 기본 텍스트 크기
        'discord-large': '1.25rem', // 디스코드의 큰 텍스트 크기
      },
      fontWeight: {
        'discord-normal': 400, // 디스코드의 기본 텍스트 두께
        'discord-bold': 700, // 디스코드의 볼드 텍스트 두께
      },
      letterSpacing: {
        'discord-wide': '0.01em', // 디스코드의 기본 문자 간격
      },
      transitionProperty: {
        'discord-standard':
          'background-color, border-color, color, fill, stroke', // 디스코드의 표준 전환 속성
      },
      transitionDuration: {
        'discord-quick': '0.1s', // 디스코드의 빠른 전환 시간
        'discord-normal': '0.2s', // 디스코드의 기본 전환 시간
      },
      transitionTimingFunction: {
        'discord-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', // 디스코드의 기본 전환 타이밍 함수
      },
    },
    borderRadius: {
      'discord-sm': '3px', // 작은 요소 (예: 버튼, 입력 필드 등)
      'discord-md': '5px', // 중간 크기의 요소 (예: 카드, 작은 모달 등)
      'discord-lg': '10px', // 큰 요소 (예: 대형 모달, 패널 등)
    },
    lineHeight: {
      'extra-loose': '2.2',
    },
    boxShadow: {
      'discord-card': '0 2px 10px 0 rgba(0, 0, 0, 0.2)', // 카드 스타일에 적용할 그림자
    },
    colors: {
      // 다크모드
      dark: {
        discordMainBg: 'rgba(41, 47, 51, 1.0)', // 메인 배경 (Background) - Hex: #292f33
        discordSubBg: 'rgba(47, 49, 54, 1.0)', // 서브 배경(Cards, Header, Button 등) - Hex: #2F3136
        discordText: 'rgba(220, 221, 222, 1.0)', // 일반 텍스트 - Hex: #DCDDDE
        discordSubText: 'rgba(114, 118, 125, 1.0)', // 서브 텍스트 - Hex: #72767d
        discordLinkText: 'rgba(114, 137, 218, 1.0)', // 링크 텍스트 - Hex: #7289da
        discordHighlightText: 'rgba(114, 137, 218, 1.0)', // 하이라이트 텍스트 - Hex: #7289da
        discordOnSaleColor: 'rgba(67, 181, 129, 1.0)', // 판매중 - Hex: #43b581
        discordBookingProgress: 'rgba(250, 166, 26, 1.0)', // 예약중 - Hex: #faa61a
        discordSalesCompleted: 'rgba(116, 127, 141, 1.0)', // 판매 완료 - Hex: #747f8d
        discordNotification: 'rgba(240, 71, 71, 1.0)', // 멘션 및 알림 컬러 - Hex: #f04747
      },
      // 라이트모드
      light: {
        discordMainBg: '#FFFFFF', // 메인 배경 (Background) - Hex: #FFFFFF
        discordSubBg: '#F9F9F9', // 서브 배경(Cards, Header, Button 등) - Hex: #F9F9F9
        discordText: '#333333', // 일반 텍스트 - Hex: #333333
        discordSubText: '#777777', // 서브 텍스트 - Hex: #777777
        discordLinkText: '#007BFF', // 링크 텍스트 - Hex: #007BFF
        discordHighlightText: '#007BFF', // 하이라이트 텍스트 - Hex: #007BFF
        discordOnSaleColor: '#28A745', // 판매중 - Hex: #28A745
        discordBookingProgress: '#FFC107', // 예약중 - Hex: #FFC107
        discordSalesCompleted: '#6C757D', // 판매 완료 - Hex: #6C757D
        discordNotification: '#DC3545', // 알림 색상 - Hex: #DC3545
      },
    },
  },
  plugins: [],
});
