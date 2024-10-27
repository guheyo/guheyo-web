import { ReactNode } from 'react';

export async function generateMetadata() {
  return {
    title: `브랜드 | 구해요`,
    Description: `브랜드 랭킹`,
  };
}

function Layout({ children }: { children: ReactNode }) {
  return children;
}

export default Layout;
