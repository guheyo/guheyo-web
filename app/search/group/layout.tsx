import { ReactNode } from 'react';

export const metadata = {
  title: '그룹 검색 | 구해요',
  description: '구해요에서 관심 그룹을 찾아보세요',
};

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex px-2 pb-2 pt-4 md:pt-6 justify-center">{children}</div>
  );
}

export default Layout;
