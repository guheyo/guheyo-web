import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/base/navbar';
import { Providers } from './providers';

const notoSansKr = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata = {
  title: '구해요',
  description: '하드코어 취미 장터 구해요',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-TWPX7X0128" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TWPX7X0128');
          `}
        </Script>
        <link rel="icon" href="/star.ico" sizes="any" />
        <meta property="og:image" content="star-bg-white.png" />
        <meta property="og:alt" content="guheyo Logo" />
        <meta property="og:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </head>
      <body className={`${notoSansKr.className} text-dark-200 bg-dark-500`}>
        <Providers>
          <Navbar />
          <div className="max-w-5xl mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
