'use client';

import UserFeed from '@/components/users/user-feed';
import { FindUsersOrderByArgs } from '@/interfaces/user.interfaces';

function Page() {
  const where = {};
  const orderBy: FindUsersOrderByArgs = {
    createdAt: 'asc',
  };
  return <UserFeed defaultWhere={where} defaultOrderBy={orderBy} />;
}

export default Page;
