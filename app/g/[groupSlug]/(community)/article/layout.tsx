'use client';

import CommunityCategoriesNavbar from '@/components/article/community-categories-navbar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <div className="px-2.5 md:px-1">
        <CommunityCategoriesNavbar />
      </div>
      <div className="grid gap-2 grid-cols-1">{children}</div>
    </div>
  );
}

export default Layout;
