'use client';

import CommunityHomeFeedLayout from '@/components/community/community-home-feed.layout';
import UserReviewFeed from '@/components/user-review/user-review-feed';
import { SortOrder } from '@/types/sort.types';
import { Suspense } from 'react';

export default function Page() {
  const where = {};
  const orderBy = {
    createdAt: 'desc' as SortOrder,
  };

  return (
    <Suspense>
      <CommunityHomeFeedLayout
        communityChannelType="review"
        showChannels
        showCategories={false}
        showTags
        showSelectors
        showMoreLink={false}
      >
        <UserReviewFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </CommunityHomeFeedLayout>
    </Suspense>
  );
}
