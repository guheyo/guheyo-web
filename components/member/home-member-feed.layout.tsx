'use client';

import MemberHomeLink from '@/components/member/member-home-link';
import MemberRolesNavbar from '@/components/member/member-roles-navbar';
import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';

interface Props {
  children: ReactNode;
}

function HomeMemberFeedLayout({ children }: Props) {
  return (
    <HomeFeedLayout
      homeLink={<MemberHomeLink />}
      path="member"
      selectors={<MemberRolesNavbar />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default HomeMemberFeedLayout;
