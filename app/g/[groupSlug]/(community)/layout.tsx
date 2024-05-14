import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <div className="pb-4 md:pb-6 mx-2 md:mx-0">{children}</div>;
}

export default Layout;
