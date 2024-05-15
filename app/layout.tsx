'use client';

import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Navbar from '@/components/base/navbar';
import { GoogleAnalytics } from '@next/third-parties/google';
import GroupSidebar from '@/components/groups/group-sidebar';
import { useRef, useState } from 'react';
import { Providers } from './providers';

const notoSansKr = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const feedRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    if (isMenuOpen && feedRef.current) {
      feedRef.current.focus();
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <html lang="ko">
      <head>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
        <link rel="icon" href="/star/star-bg-purple-rounded.ico" sizes="any" />
        <meta property="og:image" content="/star/star-bg-purple-rounded.png" />
        <meta property="og:alt" content="구해요" />
        <meta property="og:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </head>
      <body
        className={`${notoSansKr.className} text-dark-200 bg-dark-500 line-break pb-6`}
      >
        <Providers>
          <Navbar handleMenuToggle={handleMenuToggle} />
          <GroupSidebar
            isMenuOpen={isMenuOpen}
            handleMenuToggle={handleMenuToggle}
          />
          <div
            ref={feedRef}
            className="max-w-2xl mx-auto pb-0 w-full overflow-x-hidden"
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
