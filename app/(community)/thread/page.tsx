'use client';

import HomeThreadFeedLayout from '@/components/thread/home-thread-feed.layout';
import ThreadFeed from '@/components/thread/thread-feed';
import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';
import { Suspense } from 'react';

export default function Page() {
  const where: FindThreadPreviewsWhereInput = {};
  const orderBy: FindThreadPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <div className="mx-2 md:mx-0">
      <HomeThreadFeedLayout showSelector>
        <Suspense>
          <ThreadFeed
            type="listview"
            defaultWhere={where}
            defaultOrderBy={orderBy}
          />
        </Suspense>
      </HomeThreadFeedLayout>
    </div>
  );
}
