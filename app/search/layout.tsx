'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex gap-1 pt-2 md:pt-16 justify-center">{children}</div>
  );
}

export default Layout;
