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
    <div className="flex flex-col gap-0 md:gap-0">
      <UserReviewDetail userReview={userReview} />
      <div className="px-4 md:px-2">
        <CommentFeed where={where} orderBy={orderBy} />
      </div>
    </div>
  );
}

export default Page;
