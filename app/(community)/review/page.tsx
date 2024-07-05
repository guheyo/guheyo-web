'use client';

import UserReviewFeed from '@/components/user-review/user-review-feed';
import {
  FindUserReviewsOrderByArgs,
  FindUserReviewsWhereArgs,
} from '@/interfaces/user-review.interfaces';
import HomeUserReviewFeedLayout from '@/lib/user-review/home-user-review-feed.layout';

export default function Page() {
  const where: FindUserReviewsWhereArgs = {};
  const orderBy: FindUserReviewsOrderByArgs = {
    createdAt: 'desc',
  };

  return (
    <HomeUserReviewFeedLayout showSelector>
      <UserReviewFeed defaultWhere={where} defaultOrderBy={orderBy} />
    </HomeUserReviewFeedLayout>
  );
}
