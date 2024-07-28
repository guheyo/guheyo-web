'use client';

import CommentFeed from '@/components/comments/comment-feed';
import PostDetailAddons from '@/components/posts/post-detail-addons';
import UserReviewDetail from '@/components/user-review/user-review-detail';
import {
  FindCommentsOrderByInput,
  FindCommentsWhereInput,
  UserReviewResponse,
} from '@/generated/graphql';
import { useSearchParams } from 'next/navigation';
import CommentSelector from '../comments/comment-selector';

export default function UserReviewDetailContainer({
  userReview,
}: {
  userReview: UserReviewResponse;
}) {
  const searchParams = useSearchParams();
  const view = searchParams.get('view') || 'newest';

  const where: FindCommentsWhereInput = {
    postId: userReview.post.id,
    userId: view === 'writerComment' ? userReview.post.user.id : undefined,
    pinned: view === 'pinned',
  };
  const orderBy: FindCommentsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <div className="flex flex-col gap-4">
      <UserReviewDetail userReview={userReview} />
      <div className="pt-14 px-4 md:px-0 flex flex-row justify-between items-center text-base md:text-lg text-gray-300 font-bold">
        <PostDetailAddons commentCount={userReview.post.commentCount || 0} />
        <CommentSelector />
      </div>
      <div className="px-4 md:px-0">
        <CommentFeed defaultWhere={where} defaultOrderBy={orderBy} />
      </div>
    </div>
  );
}
