'use client';

import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      {/* ref type navbar */}
      {children}
    </div>
  );
}

export default Layout;
