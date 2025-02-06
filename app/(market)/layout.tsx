import { ReactNode } from 'react';
import AdSense from '../adsense/ad-sense';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <AdSense />
      {children}
    </>
  );
}
