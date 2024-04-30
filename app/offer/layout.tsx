import { ReactNode } from 'react';

function Layout({ children }: { children: ReactNode }) {
  return <div className="pt-0 md:pt-0 mx-auto max-w-2xl">{children}</div>;
}

export default Layout;
