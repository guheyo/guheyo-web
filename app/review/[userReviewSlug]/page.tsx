'use client';

import UserReviewDetail from '@/components/user-review/user-review-detail';
import { useFindUserReviewQuery } from '@/generated/graphql';

function Page({
  params: { userReviewSlug },
}: {
  params: {
    userReviewSlug: string;
  };
}) {
  const { data, loading } = useFindUserReviewQuery({
    variables: {
      slug: decodeURI(userReviewSlug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findUserReview) return <div />;
  const userReview = data.findUserReview;

  return <UserReviewDetail userReview={userReview} />;
}

export default Page;
