'use client';

import { ReactNode, Suspense } from 'react';
import GroupProfileSidebarItems from '@/components/groups/group-profile-sidebar-items';
import MannerTagsNavbar from '@/components/user-review/manner-tags-navbar';
import UserReviewHomeLink from './user-review-home-link';

interface Props {
  children: ReactNode;
}

function HomeUserReviewFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="pt-0 pb-2 px-3 md:px-1 w-fit">
        <UserReviewHomeLink />
      </div>
      <div className="flex flex-row gap-2 md:gap-6 py-2 mb-0 mx-3 md:mx-1">
        <GroupProfileSidebarItems
          paddingX={0}
          paddingY={0}
          pathFormatter={(slug) => `/g/${slug}/review`}
        />
      </div>
      <div className="px-2.5 md:px-1">
        <Suspense>
          <MannerTagsNavbar />
        </Suspense>
      </div>
      <div className="grid gap-2 grid-cols-1">{children}</div>
    </div>
  );
}

export default HomeUserReviewFeedLayout;
