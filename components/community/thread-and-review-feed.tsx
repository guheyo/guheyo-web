'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import {
  FindThreadPreviewsWhereInput,
  FindUserReviewPreviewsWhereInput,
} from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import { useSearchParams } from 'next/navigation';
import { findCategory } from '@/lib/group/find-category';
import { useInfiniteThreadAndReviewFeed } from '@/hooks/use-infinite-thread-and-reviews-feed';
import { SortOrder } from '@/types/sort.types';
import ThreadPreview from '../thread/thread-preview';
import UserReviewPreview from '../user-review/user-review-preview';

function ThreadAndReviewFeed({
  defaultWhere,
  defaultOrderBy,
  type,
}: {
  defaultWhere: FindThreadPreviewsWhereInput & FindUserReviewPreviewsWhereInput;
  defaultOrderBy?: { createdAt: SortOrder };
  type: PostPreviewType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup('root');
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const tagName = searchParams.get('tag');

  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });
  const tagType = searchParams.get('tagType') || defaultWhere.tagType;
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { loading, items } = useInfiniteThreadAndReviewFeed({
    ref,
    type: categorySlug
      ? categorySlug === 'review'
        ? 'review'
        : 'thread'
      : undefined,
    where: {
      groupId: group?.slug !== 'root' ? group?.id : undefined,
      userId: defaultWhere.userId,
      categoryId: category?.id,
      tagType,
      tagNames: tagName ? [tagName] : undefined,
      reviewedUserId: defaultWhere.reviewedUserId,
    },
    orderBy: {
      createdAt: (defaultOrderBy?.createdAt || 'desc') as SortOrder,
    },
    keyword,
    target,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;

  return (
    <>
      {items.map((item) => {
        switch (item.__typename) {
          case 'ThreadPreviewResponseEdge':
            return (
              <ThreadPreview
                key={item.node.id}
                type={type}
                thread={item.node}
                isInGroup={!!group}
              />
            );
          case 'UserReviewPreviewResponseEdge':
            return (
              <UserReviewPreview
                key={item.node.id}
                userReview={item.node}
                isInGroup={!!group}
              />
            );
          default:
            return <div key={item.node.id} />;
        }
      })}
      <div ref={ref} />
    </>
  );
}

export default ThreadAndReviewFeed;
