'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';
import { useInfiniteThreadFeed } from '@/hooks/use-infinite-thread-feed';
import { PostPreviewType } from '@/lib/post/post.types';
import { useSearchParams } from 'next/navigation';
import { findCategory } from '@/lib/group/find-category';
import ThreadPreview from './thread-preview';

function ThreadFeed({
  defaultWhere,
  defaultOrderBy,
  type,
}: {
  defaultWhere: FindThreadPreviewsWhereInput;
  defaultOrderBy?: FindThreadPreviewsOrderByInput;
  type: PostPreviewType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup('root');
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });

  const { loading, data } = useInfiniteThreadFeed({
    ref,
    where: {
      groupId: group?.slug !== 'root' ? group?.id : undefined,
      userId: defaultWhere.userId,
      categoryId: category?.id,
      categoryType: defaultWhere.categoryType,
    },
    orderBy: {
      createdAt: defaultOrderBy?.createdAt || 'desc',
    },
    keyword,
    target,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findThreadPreviews) return <div />;

  const { edges } = data.findThreadPreviews;

  return (
    <>
      {edges.map((edge) => (
        <ThreadPreview
          key={edge.node.id}
          type={type}
          thread={edge.node}
          isInGroup={!!group}
        />
      ))}
      <div ref={ref} />
    </>
  );
}

export default ThreadFeed;
