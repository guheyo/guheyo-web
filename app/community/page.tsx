'use client';

import BrandHomeFeedLayout from '@/components/brand/brand-home-feed.layout';
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
      <BrandHomeFeedLayout
        postPreviewType="listview"
        showChannels
        showCategories={false}
        showSelectors
        showMoreLink={false}
      >
        <ThreadFeed
          type="listview"
          defaultWhere={where}
          defaultOrderBy={orderBy}
          showInput
        />
      </BrandHomeFeedLayout>
    </Suspense>
  );
}
