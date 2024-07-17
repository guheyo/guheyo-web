'use client';

import { ReactNode } from 'react';
import CommunityHomeLink from './community-home-link';
import CommunityCategoriesNavbar from '../thread/community-categories-navbar';
import HomeFeedLayout from '../home/home-feed.layout';

interface Props {
  children: ReactNode;
}

function CommunityHomeFeedLayout({ children }: Props) {
  return (
    <HomeFeedLayout
      homeLink={<CommunityHomeLink />}
      path="community"
      selectors={<CommunityCategoriesNavbar />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default CommunityHomeFeedLayout;
