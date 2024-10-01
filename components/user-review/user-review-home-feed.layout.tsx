'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import MannerTagsNavbar from './manner-tags-navbar';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import CommunityMoreLink from '../community/community-more-link';
import UserReviewSelectors from './user-review-selectors';
import UserReviewHomeLink from './user-review-home-link';

interface Props {
  children: ReactNode;
  hideGroupProfileSidebarItems?: boolean;
  showCategories: boolean;
  showTags: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function UserReviewHomeFeedLayout({
  children,
  hideGroupProfileSidebarItems,
  showCategories,
  showTags,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<UserReviewHomeLink />}
      path={hideGroupProfileSidebarItems ? undefined : 'review'}
      tags={showTags ? <MannerTagsNavbar /> : undefined}
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            <UserReviewSelectors />
          </>
        )
      }
      moreLink={showMoreLink && <CommunityMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default UserReviewHomeFeedLayout;
