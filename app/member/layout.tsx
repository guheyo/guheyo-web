import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <div className="mx-2 md:mx-0">{children}</div>;
}

export default Layout;
