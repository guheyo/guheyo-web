'use client';

import GbHomeFeedLayout from '@/components/gb/gb-home-feed.layout';
import ThreadFeed from '@/components/thread/thread-feed';
import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';
import { SortOrder } from '@/types/sort.types';
import { Suspense } from 'react';

export default function Page() {
  const where: FindThreadPreviewsWhereInput = {
    categoryType: 'gb',
  };
  const orderBy: FindThreadPreviewsOrderByInput = {
    createdAt: 'desc' as SortOrder,
  };

  return (
    <Suspense>
      <GbHomeFeedLayout
        showCategories
        showTags
        showSelectors
        showMoreLink={false}
      >
        <ThreadFeed
          type="listview"
          defaultWhere={where}
          defaultOrderBy={orderBy}
          showInput
        />
      </GbHomeFeedLayout>
    </Suspense>
  );
}
