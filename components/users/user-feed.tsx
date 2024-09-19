'use client';

import { useContext, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteUsers } from '@/hooks/use-infinite-users';
import {
  FindUsersOrderByInput,
  FindUsersWhereInput,
} from '@/generated/graphql';
import UserPreview from './user-preview';
import { AuthContext } from '../auth/auth.provider';

function UserFeed({
  defaultWhere,
  defaultOrderBy,
}: {
  defaultWhere: FindUsersWhereInput;
  defaultOrderBy?: FindUsersOrderByInput;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const followed = [null, 'all'].includes(searchParams.get('followed'))
    ? undefined
    : searchParams.get('followed') === 'true';
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;
  const { loading: authLoading } = useContext(AuthContext);

  const { loading, data } = useInfiniteUsers({
    ref,
    where: {
      ...defaultWhere,
      followed,
    },
    orderBy: {
      createdAt: defaultOrderBy?.createdAt || 'asc',
    },
    keyword,
    target,
    take: 12,
    skip: authLoading,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findUsers) return <div />;

  const { edges } = data.findUsers;
  return (
    <>
      {edges.map((edge) => (
        <UserPreview
          key={edge.node.id}
          userId={edge.node.id}
          username={edge.node.username}
          avatarURL={edge.node.avatarURL}
          about={edge.node.about}
          followed={edge.node.followed}
        />
      ))}
      <div ref={ref} />
    </>
  );
}

export default UserFeed;
