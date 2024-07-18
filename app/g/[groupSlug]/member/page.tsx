'use client';

import MemberHomeFeedLayout from '@/components/member/member-home-feed.layout';
import UserFeed from '@/components/users/user-feed';
import { FindUsersOrderByArgs } from '@/interfaces/user.interfaces';
import { Suspense } from 'react';

function Page() {
  const where = {};
  const orderBy: FindUsersOrderByArgs = {
    createdAt: 'asc',
  };
  return (
    <Suspense>
      <MemberHomeFeedLayout>
        <UserFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </MemberHomeFeedLayout>
    </Suspense>
  );
}

export default Page;
