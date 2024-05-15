'use client';

import { ReactNode } from 'react';
import MannerTagsNavbar from '@/components/user-review/manner-tags-navbar';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <div className="px-2.5 md:px-1">
        <MannerTagsNavbar />
      </div>
      <div className="grid gap-2 grid-cols-1">{children}</div>
    </div>
  );
}

export default Layout;
