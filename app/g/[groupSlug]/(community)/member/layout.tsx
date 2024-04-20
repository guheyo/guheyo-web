import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="grid gap-1 grid-cols-1 pt-4 md:pt-6 mx-2 md:mx-0">
      {children}
    </div>
  );
}

export default Layout;
