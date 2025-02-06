import { ReactNode } from 'react';
import AdSense from '../adsense/ad-sense';

export async function generateMetadata() {
  return {
    title: `경매 | 구해요`,
    Description: `장터에서 멤버들과 거래해요`,
  };
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdSense />
      {children}
    </>
  );
}

export default Layout;
