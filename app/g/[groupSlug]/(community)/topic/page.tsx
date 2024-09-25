'use client';

import CommunityHomeFeedLayout from '@/components/community/community-home-feed.layout';
import ThreadFeed from '@/components/thread/thread-feed';
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
        communityChannelType="topic"
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
      </CommunityHomeFeedLayout>
    </Suspense>
  );
}
