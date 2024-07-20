'use client';

import { ReactNode } from 'react';
import HomeFeedLayout from '@/components/home/home-feed.layout';
import MannerTagsNavbar from '@/components/user-review/manner-tags-navbar';
import UserReviewHomeLink from './user-review-home-link';

interface Props {
  children: ReactNode;
}

function HomeUserReviewFeedLayout({ children }: Props) {
  return (
    <HomeFeedLayout
      postPreviewType="text"
      homeLink={<UserReviewHomeLink />}
      path="review"
      selectors={<MannerTagsNavbar />}
    >
      {children}
    </HomeFeedLayout>
  );
}

export default HomeUserReviewFeedLayout;
