'use client';

import InfoHomeFeedLayout from '@/components/info/info-home-feed-layout';
import ThreadFeed from '@/components/thread/thread-feed';
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
      <InfoHomeFeedLayout
        showCategories={false}
        showTags={false}
        showSelectors
        showMoreLink={false}
      >
        <ThreadFeed
          type="listview"
          defaultWhere={where}
          defaultOrderBy={orderBy}
          showInput
        />
      </InfoHomeFeedLayout>
    </Suspense>
  );
}
