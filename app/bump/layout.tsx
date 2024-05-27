import { ReactNode } from 'react';

export const metadata = {
  title: '끌어올리기 | 구해요',
  description: '24시간 마다 1번씩 거래글을 끌어올릴 수 있어요',
};

function Layout({ children }: { children: ReactNode }) {
  return <div className="px-2 md:px-0">{children}</div>;
}

export default Layout;
