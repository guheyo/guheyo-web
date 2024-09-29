'use client';

import UserReviewFeed from '@/components/user-review/user-review-feed';
import UserReviewHomeFeedLayout from '@/components/user-review/user-review-home-feed.layout';
import { SortOrder } from '@/types/sort.types';
import { Suspense } from 'react';

export default function Page() {
  const where = {};
  const orderBy = {
    createdAt: 'desc' as SortOrder,
  };

  return (
    <Suspense>
      <UserReviewHomeFeedLayout
        showChannels={false}
        showCategories
        showTags
        showSelectors
        showMoreLink={false}
      >
        <UserReviewFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </UserReviewHomeFeedLayout>
    </Suspense>
  );
}
