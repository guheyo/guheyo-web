'use client';

import NewbieHomeFeedLayout from '@/components/newbie/newbie-home-feed.layout';
import NewbieFeed from '@/components/newbie/newbie-feed';
import { FindUsersOrderByInput } from '@/generated/graphql';
import { Suspense } from 'react';

function Page() {
  const where = {};
  const orderBy: FindUsersOrderByInput = {
    createdAt: 'desc',
  };
  return (
    <Suspense>
      <NewbieHomeFeedLayout
        hideGroupProfileNavbarItems
        showCategories={false}
        showSelectors
      >
        <NewbieFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </NewbieHomeFeedLayout>
    </Suspense>
  );
}

export default Page;
