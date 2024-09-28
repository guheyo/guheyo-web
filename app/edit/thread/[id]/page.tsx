'use client';

import ThreadCardContainer from '@/components/thread/thread-card-container';
import { useFindThreadQuery } from '@/generated/graphql';

export default function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { data, loading } = useFindThreadQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findThread) return <div />;

  const thread = data.findThread;
  return (
    <ThreadCardContainer
      user={thread.post.user}
      defaultGroupId={thread.post.group.id}
      categoryTypes={['community']}
      defaultBrandId=""
    />
  );
}
