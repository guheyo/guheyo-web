'use client';

import GroupProfileSidebarItems from '@/components/groups/group-profile-sidebar-items';
import MemberHomeLink from '@/components/member/member-home-link';
import MemberRolesNavbar from '@/components/member/member-roles-navbar';
import { ReactNode, Suspense } from 'react';

interface Props {
  children: ReactNode;
}

function HomeMemberFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="pt-0 pb-2 px-3 md:px-1 w-fit">
        <MemberHomeLink />
      </div>
      <div className="flex flex-row gap-2 md:gap-6 py-2 mb-6 mx-3 md:mx-1">
        <GroupProfileSidebarItems
          paddingX={0}
          paddingY={0}
          pathFormatter={(slug) => `/g/${slug}/member`}
        />
      </div>
      <div className="px-2.5 md:px-1">
        <Suspense>
          <MemberRolesNavbar />
        </Suspense>
      </div>
      <div className="grid gap-2 grid-cols-1">{children}</div>
    </div>
  );
}

export default HomeMemberFeedLayout;
