'use client';

import { useContext, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mocks } from '@/components/mock/mock';
import {
  FindAuthorsOrderByInput,
  FindAuthorsWhereInput,
} from '@/generated/graphql';
import { useInfiniteAuthors } from '@/hooks/use-infinite-authors';
import NewbiePreview from './newbie-preview';
import { AuthContext } from '../auth/auth.provider';

function NewbieFeed({
  defaultWhere,
  defaultOrderBy,
}: {
  defaultWhere: FindAuthorsWhereInput;
  defaultOrderBy?: FindAuthorsOrderByInput;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;
  const { loading: authLoading } = useContext(AuthContext);

  const { loading, data } = useInfiniteAuthors({
    ref,
    where: {
      ...defaultWhere,
    },
    orderBy: {
      createdAt: defaultOrderBy?.createdAt || 'desc',
    },
    keyword,
    target,
    take: 12,
    skip: authLoading,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findAuthors) return <div />;

  const { edges } = data.findAuthors;
  return (
    <>
      {edges.map((edge) => (
        <NewbiePreview
          key={edge.node.id}
          userId={edge.node.id}
          username={edge.node.username}
          avatarURL={edge.node.avatarURL}
          about={edge.node.about}
          createdAt={edge.node.createdAt}
          socialAccounts={edge.node.socialAccounts}
        />
      ))}
      <div ref={ref} />
    </>
  );
}

export default NewbieFeed;
