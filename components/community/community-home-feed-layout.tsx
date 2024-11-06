'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import CommunityHomeLink from './community-home-link';
import CommunityCategoriesNavbar from './community-categories-navbar';
import CommunitySelectors from './community-selectors';
import CommunityMoreLink from './community-more-link';

interface Props {
  children: ReactNode;
  hideGroupProfileNavbarItems?: boolean;
  showCategories: boolean;
  showTags: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function CommunityHomeFeedLayout({
  children,
  hideGroupProfileNavbarItems,
  showCategories,
  showTags,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<CommunityHomeLink />}
      path={hideGroupProfileNavbarItems ? undefined : 'community'}
      categories={showCategories ? <CommunityCategoriesNavbar /> : undefined}
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            <CommunitySelectors />
          </>
        )
      }
      moreLink={showMoreLink && <CommunityMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default CommunityHomeFeedLayout;
