import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex px-2 pb-2 pt-4 md:pt-6 justify-center">
      <div className="flex flex-col gap-8 max-w-xl w-full">
        <div className="text-base md:text-lg text-light-200 font-bold px-2 md:px-0">
          프로필 설정
        </div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
