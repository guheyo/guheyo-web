'use client';

import MemberHomeFeedLayout from '@/components/member/member-home-feed.layout';
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
      <MemberHomeFeedLayout showCategories={false} showSelectors>
        <NewbieFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </MemberHomeFeedLayout>
    </Suspense>
  );
}

export default Page;
