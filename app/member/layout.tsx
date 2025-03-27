import { ReactNode } from 'react';

export async function generateMetadata() {
  return {
    title: `멤버 | 구해요`,
    Description: `멤버`,
  };
}

function Layout({ children }: { children: ReactNode }) {
  return children;
}

export default Layout;
