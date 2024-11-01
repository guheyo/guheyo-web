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
      defaultCategoryTypes={
        thread.post.category?.type ? [thread.post.category.type] : undefined
      }
      defaultBrandId={
        thread.post.brands.length > 0 ? thread.post.brands[0].id : undefined
      }
      defaultContent={thread.content || undefined}
      defaultImages={thread.post.images}
    />
  );
}
