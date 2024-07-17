'use client';

import { ReactNode, Suspense } from 'react';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';

interface Props {
  children: ReactNode;
  homeLink: ReactNode;
  path: string;
  selectors?: ReactNode;
}

function HomeFeedLayout({ children, homeLink, path, selectors }: Props) {
  return (
    <div>
      <div className="pt-0 px-3 md:px-1 w-fit">{homeLink}</div>
      <div className="flex flex-row gap-2 md:gap-6 py-2 mb-6 mx-3 md:mx-1">
        <GroupProfileSidebarItems
          paddingX={0}
          paddingY={0}
          pathFormatter={(slug) => `/g/${slug}/${path}`}
        />
      </div>
      {selectors && (
        <div className="flex justify-between pb-2">
          <Suspense>{selectors}</Suspense>
        </div>
      )}
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default HomeFeedLayout;
