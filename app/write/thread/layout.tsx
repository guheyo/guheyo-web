import { ReactNode } from 'react';

export const metadata = {
  title: '게시물 작성 | 구해요',
  description: '게시물을 작성해 보세요',
};

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <div className="w-full px-2 md:px-0">{children}</div>;
}

export default Layout;
