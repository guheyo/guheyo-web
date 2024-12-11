import { ReactNode } from 'react';

export const metadata = {
  title: '그룹 생성 | 구해요',
  description: '그룹을 만들어 보세요',
};

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return children;
}

export default Layout;
