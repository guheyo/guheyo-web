'use client';

import CommentFeed from '@/components/comments/comment-feed';
import UserReviewDetail from '@/components/user-review/user-review-detail';
import { useFindUserReviewQuery } from '@/generated/graphql';
import {
  FindCommentsOrderByArgs,
  FindCommentsWhereArgs,
} from '@/interfaces/comment.interfaces';

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

  const where: FindCommentsWhereArgs = {
    postId: userReview.post.id,
  };
  const orderBy: FindCommentsOrderByArgs = {
    createdAt: 'desc',
  };

  return (
    <div>
      <UserReviewDetail userReview={userReview} />
      <CommentFeed where={where} orderBy={orderBy} />
    </div>
  );
}

export default Page;
