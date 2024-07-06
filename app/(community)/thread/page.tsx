'use client';

import HomeThreadFeedLayout from '@/components/thread/home-thread-feed.layout';
import ThreadFeed from '@/components/thread/thread-feed';
import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';

export default function Page() {
  const where: FindThreadPreviewsWhereInput = {};
  const orderBy: FindThreadPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <div className="mx-2 md:mx-0">
      <HomeThreadFeedLayout showSelector>
        <ThreadFeed
          type="listview"
          defaultWhere={where}
          defaultOrderBy={orderBy}
        />
      </HomeThreadFeedLayout>
    </div>
  );
}
