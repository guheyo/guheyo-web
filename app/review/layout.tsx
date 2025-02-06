import { ReactNode } from 'react';
import AdSense from '../adsense/ad-sense';

export async function generateMetadata() {
  return {
    title: `거래후기 | 구해요`,
    Description: `거래후기`,
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
