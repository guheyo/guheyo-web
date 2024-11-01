'use client';

import MemberHomeLink from '@/components/member/member-home-link';
import MemberRolesNavbar from '@/components/member/member-roles-navbar';
import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import UserSelectors from '../users/user-selectors';

interface Props {
  children: ReactNode;
  showCategories: boolean;
  showSelectors: boolean;
}

function MemberHomeFeedLayout({
  children,
  showCategories,
  showSelectors,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<MemberHomeLink />}
      path="member"
      categories={showCategories && <MemberRolesNavbar />}
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            <UserSelectors />
          </>
        )
      }
    >
      {children}
    </HomeFeedLayout>
  );
}

export default MemberHomeFeedLayout;
