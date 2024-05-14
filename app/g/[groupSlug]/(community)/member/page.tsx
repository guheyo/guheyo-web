'use client';

import UserFeed from '@/components/users/user-feed';
import { FindUsersOrderByArgs } from '@/interfaces/user.interfaces';

function Page() {
  const where = {};
  const orderBy: FindUsersOrderByArgs = {
    createdAt: 'asc',
  };
  return <UserFeed where={where} orderBy={orderBy} />;
}

export default Page;
