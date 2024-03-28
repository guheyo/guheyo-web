import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return <div className="pt-0 md:pt-12 pb-12 px-2 md:px-0">{children}</div>;
}

export default Layout;
