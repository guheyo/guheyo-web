'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <div className="pt-0 md:pt-12">{children}</div>;
}

export default Layout;
