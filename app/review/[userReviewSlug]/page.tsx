'use client';

import CommentFeed from '@/components/comments/comment-feed';
import PostDetailAddons from '@/components/posts/post-detail-addons';
import UserReviewDetail from '@/components/user-review/user-review-detail';
import {
  FindCommentsOrderByInput,
  FindCommentsWhereInput,
  useFindUserReviewQuery,
} from '@/generated/graphql';

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

  const where: FindCommentsWhereInput = {
    postId: userReview.post.id,
  };
  const orderBy: FindCommentsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <div className="flex flex-col gap-4">
      <UserReviewDetail userReview={userReview} />
      <div className="pt-14 px-4 md:px-0 text-base md:text-lg text-gray-300 font-bold">
        <PostDetailAddons commentCount={userReview.post.commentCount || 0} />
      </div>
      <div className="px-4 md:px-0">
        <CommentFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </div>
    </div>
  );
}

export default Page;
