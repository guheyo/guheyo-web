'use client';

import { UserReviewPreviewResponse } from '@/generated/graphql';
import PostAddons from '../posts/post-addons';

interface Props {
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreviewFooter({ userReview }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-row gap-2 items-center">
        {userReview.post.tags.map((tag) => (
          <div
            key={tag.id}
            className={`rounded px-1 py-0.5 text-xs md:text-sm ${
              userReview.rating === 1
                ? 'bg-rose-800 text-light-200'
                : 'bg-green-800 text-light-200'
            }`}
          >
            {tag.name}
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 right-4 md:right-5">
        <PostAddons
          createdAt={userReview.createdAt}
          reportCount={userReview.post.reportCount}
          reportCommentCount={userReview.post.reportCommentCount}
        />
      </div>
    </div>
  );
}
