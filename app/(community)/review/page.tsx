'use client';

import UserReviewFeed from '@/components/user-review/user-review-feed';
import {
  FindUserReviewsOrderByArgs,
  FindUserReviewsWhereArgs,
} from '@/interfaces/user-review.interfaces';
import HomeUserReviewFeedLayout from '@/lib/user-review/home-user-review-feed.layout';
import { Suspense } from 'react';

export default function Page() {
  const where: FindUserReviewsWhereArgs = {};
  const orderBy: FindUserReviewsOrderByArgs = {
    createdAt: 'desc',
  };

  return (
    <div className="mx-2 md:mx-0">
      <HomeUserReviewFeedLayout showSelector>
        <Suspense>
          <UserReviewFeed defaultWhere={where} defaultOrderBy={orderBy} />
        </Suspense>
      </HomeUserReviewFeedLayout>
    </div>
  );
}
