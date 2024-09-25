'use client';

import ThreadFeed from '@/components/thread/thread-feed';
import TopicHomeFeedLayout from '@/components/topic/topic-home-feed.layout';
import { SortOrder } from '@/types/sort.types';
import { Suspense } from 'react';

export default function Page() {
  const where = {};
  const orderBy = {
    createdAt: 'desc' as SortOrder,
  };

  return (
    <Suspense>
      <TopicHomeFeedLayout
        showChannels
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
      </TopicHomeFeedLayout>
    </Suspense>
  );
}
