'use client';

import UserReviewFeed from '@/components/user-review/user-review-feed';
import { useFindUserQuery } from '@/generated/graphql';
import {
  FindUserReviewsOrderByArgs,
  FindUserReviewsWhereArgs,
} from '@/interfaces/user-review.interfaces';

function Page({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

  const where: FindUserReviewsWhereArgs = {
    userId: user.id,
  };
  const orderBy: FindUserReviewsOrderByArgs = {
    createdAt: 'desc',
  };

  return <UserReviewFeed type="text" where={where} orderBy={orderBy} />;
}

export default Page;
