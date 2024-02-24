'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div className="flex px-2 pb-2 pt-4 md:pt-6 justify-center">{children}</div>
  );
}

export default Layout;
