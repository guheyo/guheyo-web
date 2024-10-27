import { ReactNode } from 'react';

export async function generateMetadata() {
  return {
    title: `거래후기 | 구해요`,
    Description: `거래후기`,
  };
}

function Layout({ children }: { children: ReactNode }) {
  return children;
}

export default Layout;
