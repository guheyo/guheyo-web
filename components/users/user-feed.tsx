'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteUsers } from '@/hooks/use-infinite-users';
import {
  FindUsersOrderByInput,
  FindUsersWhereInput,
} from '@/generated/graphql';
import UserPreview from './user-preview';

function UserFeed({
  defaultWhere,
  defaultOrderBy,
  keyword,
}: {
  defaultWhere: FindUsersWhereInput;
  defaultOrderBy?: FindUsersOrderByInput;
  keyword?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { loading, data } = useInfiniteUsers({
    ref,
    where: defaultWhere,
    orderBy: {
      createdAt: defaultOrderBy?.createdAt || 'asc',
    },
    keyword,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findUsers) return <div />;

  const { edges } = data.findUsers;
  return (
    <>
      {edges.map((edge) => (
        <UserPreview
          key={edge.node.id}
          username={edge.node.username}
          avatarURL={edge.node.avatarURL}
          about={edge.node.about}
        />
      ))}
      <div ref={ref} />
    </>
  );
}

export default UserFeed;
