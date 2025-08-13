'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '../home/home-feed.layout';
import MannerTagsNavbar from './manner-tags-navbar';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import UserReviewSelectors from './user-review-selectors';
import UserReviewHomeLink from './user-review-home-link';
import UserReviewMoreLink from './user-review-more-link';

interface Props {
  children: ReactNode;
  hideGroupProfileNavbar?: boolean;
  showCategories: boolean;
  showTags: boolean;
  showSelectors: boolean;
  showMoreLink: boolean;
}

function UserReviewHomeFeedLayout({
  children,
  hideGroupProfileNavbar,
  showCategories,
  showTags,
  showSelectors,
  showMoreLink,
}: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<UserReviewHomeLink />}
      path={hideGroupProfileNavbar ? undefined : 'review'}
      tags={showTags ? <MannerTagsNavbar /> : undefined}
      selectors={
        showSelectors && (
          <>
            <FollowFilterClickButton />
            <UserReviewSelectors />
          </>
        )
      }
      moreLink={showMoreLink && <UserReviewMoreLink />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default UserReviewHomeFeedLayout;
