'use client';

import { ReactNode } from 'react';
import MannerTagsNavbar from '@/components/user-review/manner-tags-navbar';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <MannerTagsNavbar />
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default Layout;
