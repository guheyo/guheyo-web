'use client';

import CommunityCategoriesNavbar from '@/components/thread/community-categories-navbar';
import CommunityTypePathUpdater from '@/components/community/community-type-path-updater';
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
      <div className="pb-2">
        <CommunityTypePathUpdater />
      </div>
      <div className="grid gap-2 grid-cols-1">{children}</div>
    </div>
  );
}

export default Layout;
