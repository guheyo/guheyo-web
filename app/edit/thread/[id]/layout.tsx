import { ReactNode } from 'react';

export const metadata = {
  title: '포스트 수정 | 구해요',
  description: '포스트를 수정해 보세요',
};

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <div className="w-full px-2 md:px-0">{children}</div>;
}

export default Layout;
