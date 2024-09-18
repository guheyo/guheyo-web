'use client';

import MemberHomeFeedLayout from '@/components/member/member-home-feed.layout';
import UserFeed from '@/components/users/user-feed';
import { FindUsersOrderByInput } from '@/generated/graphql';
import { Suspense } from 'react';

function Page() {
  const where = {};
  const orderBy: FindUsersOrderByInput = {
    createdAt: 'asc',
  };
  return (
    <Suspense>
      <MemberHomeFeedLayout showCategories={false} showSelectors>
        <UserFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </MemberHomeFeedLayout>
    </Suspense>
  );
}

export default Page;
