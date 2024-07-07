'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import {
  FindUserReviewsOrderByArgs,
  FindUserReviewsWhereArgs,
} from '@/interfaces/user-review.interfaces';
import { useInfiniteUserReviewFeed } from '@/hooks/use-infinite-user-review-feed';
import { useSearchParams } from 'next/navigation';
import UserReviewPreview from './user-review-preview';

function UserReviewFeed({
  defaultWhere,
  defaultOrderBy,
  keyword,
}: {
  defaultWhere: FindUserReviewsWhereArgs;
  defaultOrderBy?: FindUserReviewsOrderByArgs;
  keyword?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const tagType = searchParams.get('tagType') || defaultWhere.tagType;
  const status = defaultWhere.status || undefined;

  const { loading, data } = useInfiniteUserReviewFeed({
    ref,
    where: {
      groupId: defaultWhere.groupId || group?.id,
      userId: defaultWhere.userId,
      tagType,
      reviewedUserId: defaultWhere.reviewedUserId,
    },
    orderBy: {
      createdAt: defaultOrderBy?.createdAt || 'desc',
    },
    keyword,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findUserReviewPreviews) return <div />;

  const edges = data.findUserReviewPreviews.edges.filter((edge) =>
    status ? edge.node.status === status : true,
  );

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
