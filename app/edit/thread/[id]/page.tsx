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
      defaultMode="update"
      user={thread.post.user}
      threadId={thread.id}
      defaultGroupId={thread.post.group.id}
      defaultCategoryId={thread.post.category?.id}
      categoryTypes={
        thread.post.category?.type ? [thread.post.category.type] : undefined
      }
      defaultBrandId=""
      defaultContent={thread.content || undefined}
      defaultImages={thread.post.images}
    />
  );
}
