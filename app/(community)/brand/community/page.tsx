'use client';

import BrandHomeFeedLayout from '@/components/brand/brand-home-feed.layout';
import ThreadFeed from '@/components/thread/thread-feed';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <BrandHomeFeedLayout
        postPreviewType="listview"
        showChannels
        showTabs
        showCategories={false}
        showSelectors
        showMoreLink={false}
      >
        <ThreadFeed
          defaultWhere={{}}
          defaultOrderBy={{}}
          type="listview"
          showInput
        />
      </BrandHomeFeedLayout>
    </Suspense>
  );
}
