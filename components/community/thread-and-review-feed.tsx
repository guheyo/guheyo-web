'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import { FindThreadPreviewsWhereInput } from '@/generated/graphql';
import { PostPreviewType } from '@/lib/post/post.types';
import { useSearchParams } from 'next/navigation';
import { findCategory } from '@/lib/group/find-category';
import { useInfiniteThreadAndReviewFeed } from '@/hooks/use-infinite-thread-and-reviews-feed';
import { SortOrder } from '@/types/sort.types';
import { FindUserReviewsWhereArgs } from '@/interfaces/user-review.interfaces';
import ThreadPreview from '../thread/thread-preview';
import UserReviewPreview from '../user-review/user-review-preview';

function ThreadAndReviewFeed({
  defaultWhere,
  defaultOrderBy,
  keyword,
  type,
}: {
  defaultWhere: FindThreadPreviewsWhereInput & FindUserReviewsWhereArgs;
  defaultOrderBy?: { createdAt: SortOrder };
  keyword?: string;
  type: PostPreviewType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');

  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });
  const tagType = searchParams.get('tagType') || defaultWhere.tagType;

  const { loading, items } = useInfiniteThreadAndReviewFeed({
    ref,
    type: categorySlug
      ? categorySlug === 'review'
        ? 'review'
        : 'thread'
      : undefined,
    where: {
      groupId: group?.id,
      userId: defaultWhere.userId,
      categoryId: category?.id,
      tagType,
      reviewedUserId: defaultWhere.reviewedUserId,
    },
    orderBy: {
      createdAt: (defaultOrderBy?.createdAt || 'desc') as SortOrder,
    },
    keyword,
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
