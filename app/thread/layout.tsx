import { ReactNode } from 'react';
import AdSense from '../adsense/ad-sense';

export async function generateMetadata() {
  return {
    title: `게시판 | 구해요`,
    Description: `게시판`,
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
