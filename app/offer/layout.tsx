import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return <div className="pt-0 md:pt-12">{children}</div>;
}

export default Layout;
