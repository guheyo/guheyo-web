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
  title: 'WTB.KR',
  description: '우리들의 커스텀 키보드 장터',
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
        <link rel="icon" href="/wtb-logo.ico" sizes="any" />
        <meta
          property="og:image"
          content="https://wtb-kr.s3.ap-northeast-2.amazonaws.com/meta/wtb-logo-square.png"
        />
        <meta property="og:alt" content="WTB.KR Logo" />
        <meta property="og:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
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
