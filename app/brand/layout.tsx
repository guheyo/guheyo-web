import { ReactNode } from 'react';
import AdSense from '../adsense/ad-sense';

export async function generateMetadata() {
  return {
    title: `브랜드 | 구해요`,
    Description: `브랜드 랭킹`,
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
