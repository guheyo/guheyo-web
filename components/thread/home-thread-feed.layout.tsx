'use client';

import { ReactNode } from 'react';
import GroupProfileSidebarItems from '@/components/groups/group-profile-sidebar-items';
import ThreadHomeLink from './thread-home-link';

interface Props {
  children: ReactNode;
}

function HomeThreadFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="pt-0 pb-2 px-3 md:px-1 w-fit">
        <ThreadHomeLink />
      </div>
      <div className="flex flex-row gap-2 md:gap-6 py-2 mb-6 mx-3 md:mx-1">
        <GroupProfileSidebarItems
          paddingX={0}
          paddingY={0}
          pathFormatter={(slug) => `/g/${slug}/thread`}
        />
      </div>
      <div className="grid gap-2 grid-cols-1">{children}</div>
    </div>
  );
}

export default HomeThreadFeedLayout;
