import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex flex-col gap-8 max-w-xl w-full">
      <div className="text-base md:text-lg text-light-200 font-bold px-2 md:px-0">
        내 소개
      </div>
      {children}
    </div>
  );
}

export default Layout;
