'use client';

import CommunityHomeFeedLayout from '@/components/community/community-home-feed.layout';
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
      <CommunityHomeFeedLayout>
        <Suspense>
          <ThreadAndReviewFeed
            type="listview"
            defaultWhere={where}
            defaultOrderBy={orderBy}
          />
        </Suspense>
      </CommunityHomeFeedLayout>
    </div>
  );
}
