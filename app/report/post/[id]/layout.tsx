import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return <div className="px-2 md:px-0">{children}</div>;
}

export default Layout;
