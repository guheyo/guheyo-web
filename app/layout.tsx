import './globals.css';
import { Noto_Sans_KR } from 'next/font/google';
import Script from 'next/script';
import { Providers } from './providers';
import Navbar from './components/base/navbar';

const notoSansKr = Noto_Sans_KR({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto-sans-kr',
});

export const metadata = {
  title: '구해요',
  description: '같은 취미를 공유하는 멤버들과 거래해요',
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
        <link rel="icon" href="/guheyo-logo.ico" sizes="any" />
        <meta
          property="og:image"
          content="https://guheyo.s3.ap-northeast-2.amazonaws.com/meta/guheyo-logo.png"
        />
        <meta property="og:alt" content="guheyo Logo" />
        <meta property="og:type" content="image/png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
      </head>
      <body className={`${notoSansKr.className} text-main`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
