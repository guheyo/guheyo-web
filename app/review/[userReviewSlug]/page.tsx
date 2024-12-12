'use client';

import UserReviewDetailContainer from '@/components/user-review/user-review-detail-container';
import { useFindUserReviewQuery } from '@/generated/graphql';
import { use } from 'react';

function Page({ params }: { params: Promise<{ userReviewSlug: string }> }) {
  const { userReviewSlug } = use(params);
  const { data, loading } = useFindUserReviewQuery({
    variables: {
      slug: decodeURI(userReviewSlug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findUserReview) return <div />;
  const userReview = data.findUserReview;

  return <UserReviewDetailContainer userReview={userReview} />;
}

export default Page;
