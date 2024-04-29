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
      {children}
    </div>
  );
}

export default Layout;
