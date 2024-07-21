'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import { useInfiniteUserReviewFeed } from '@/hooks/use-infinite-user-review-feed';
import { useSearchParams } from 'next/navigation';
import {
  FindUserReviewPreviewsOrderByInput,
  FindUserReviewPreviewsWhereInput,
} from '@/generated/graphql';
import UserReviewPreview from './user-review-preview';

function UserReviewFeed({
  defaultWhere,
  defaultOrderBy,
}: {
  defaultWhere: FindUserReviewPreviewsWhereInput;
  defaultOrderBy?: FindUserReviewPreviewsOrderByInput;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const tagType = searchParams.get('tagType') || defaultWhere.tagType;
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { loading, data } = useInfiniteUserReviewFeed({
    ref,
    where: {
      groupId: group?.id,
      userId: defaultWhere.userId,
      tagType,
      reviewedUserId: defaultWhere.reviewedUserId,
    },
    orderBy: {
      createdAt: defaultOrderBy?.createdAt || 'desc',
    },
    keyword,
    target,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findUserReviewPreviews) return <div />;

  const { edges } = data.findUserReviewPreviews;

  return (
    <>
      {edges.map((edge) => (
        <UserReviewPreview
          key={edge.node.id}
          userReview={edge.node}
          isInGroup={!!group}
        />
      ))}
      <div ref={ref} />
    </>
  );
}

export default UserReviewFeed;
