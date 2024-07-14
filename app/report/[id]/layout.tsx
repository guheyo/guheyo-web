import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return <div className="pb-4">{children}</div>;
}

export default Layout;
