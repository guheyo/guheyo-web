import { ReactNode } from 'react';
import AdSense from '../adsense/ad-sense';

export async function generateMetadata() {
  return {
    title: `커뮤니티 | 구해요`,
    Description: `브랜드 커뮤니티`,
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
