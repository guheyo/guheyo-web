import { ReactNode } from 'react';

export async function generateMetadata() {
  return {
    title: `판매 | 구해요`,
    Description: `장터에서 멤버들과 거래해요`,
  };
}

function Layout({ children }: { children: ReactNode }) {
  return children;
}

export default Layout;
