'use client';

import TextFeedLayout from '@/components/posts/text-feed.layout';
import UserFeed from '@/components/users/user-feed';
import { FindUsersOrderByArgs } from '@/interfaces/user.interfaces';

function Page() {
  const where = {};
  const orderBy: FindUsersOrderByArgs = {
    createdAt: 'asc',
  };
  return (
    <TextFeedLayout>
      <UserFeed where={where} orderBy={orderBy} />
    </TextFeedLayout>
  );
}

export default Page;
