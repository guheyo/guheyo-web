'use client';

import UserReviewFeed from '@/components/user-review/user-review-feed';
import {
  FindUserReviewPreviewsOrderByInput,
  FindUserReviewPreviewsWhereInput,
  useFindUserQuery,
} from '@/generated/graphql';
import { use } from 'react';

function Page({
  params,
}: {
  params: Promise<{
    username: string;
  }>;
}) {
  const { username } = use(params);
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

  const where: FindUserReviewPreviewsWhereInput = {
    userId: user.id,
  };
  const orderBy: FindUserReviewPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return <UserReviewFeed defaultWhere={where} defaultOrderBy={orderBy} />;
}

export default Page;
