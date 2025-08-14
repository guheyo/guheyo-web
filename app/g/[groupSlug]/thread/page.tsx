'use client';

import ThreadFeed from '@/components/thread/thread-feed';
import ThreadHomeFeedLayout from '@/components/thread/thread-home-feed-layout';
import { SortOrder } from '@/types/sort.types';
import { Suspense } from 'react';

export default function Page() {
  const where = {
    categoryType: 'community',
  };
  const orderBy = {
    createdAt: 'desc' as SortOrder,
  };

  return (
    <Suspense>
      <ThreadHomeFeedLayout
        showCategories={false}
        showSelectors
        showTags={false}
        showMoreLink={false}
      >
        <ThreadFeed
          type="listview"
          defaultWhere={where}
          defaultOrderBy={orderBy}
          showInput
        />
      </ThreadHomeFeedLayout>
    </Suspense>
  );
}
