import { ReactNode } from 'react';

export async function generateMetadata() {
  return {
    title: `커뮤니티 | 구해요`,
    Description: `브랜드 커뮤니티`,
  };
}

function Layout({ children }: { children: ReactNode }) {
  return children;
}

export default Layout;
