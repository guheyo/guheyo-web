import { ReactNode } from 'react';

export const metadata = {
  title: '포스트 작성 | 구해요',
  description: '포스트를 작성해 보세요',
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
