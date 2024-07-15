'use client';

import HomeCommunityFeedLayout from '@/components/community/home-community-feed.layout';
import ThreadAndReviewFeed from '@/components/community/thread-and-review-feed';
import { SortOrder } from '@/types/sort.types';
import { Suspense } from 'react';

export default function Page() {
  const where = {};
  const orderBy = {
    createdAt: 'desc' as SortOrder,
  };

  return (
    <div className="mx-2 md:mx-0">
      <HomeCommunityFeedLayout>
        <Suspense>
          <ThreadAndReviewFeed
            type="listview"
            defaultWhere={where}
            defaultOrderBy={orderBy}
          />
        </Suspense>
      </HomeCommunityFeedLayout>
    </div>
  );
}
