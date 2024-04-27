'use client';

import TextFeedLayout from '@/components/posts/text-feed.layout';
import UserReviewFeed from '@/components/user-review/user-review-feed';
import { useGroup } from '@/hooks/use-group';
import {
  FindUserReviewsOrderByArgs,
  FindUserReviewsWhereArgs,
} from '@/interfaces/user-review.interfaces';

export default function Page() {
  const { group, loading } = useGroup();

  if (loading) return <div />;
  if (!group) return <div />;

  const where: FindUserReviewsWhereArgs = {
    groupId: group.id,
  };
  const orderBy: FindUserReviewsOrderByArgs = {
    createdAt: 'asc',
  };

  return (
    <TextFeedLayout>
      <UserReviewFeed type="text" where={where} orderBy={orderBy} />
    </TextFeedLayout>
  );
}
