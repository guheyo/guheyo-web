'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return <div className="grid gap-1 grid-cols-1">{children}</div>;
}

export default Layout;
