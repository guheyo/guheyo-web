'use client';

import Link from 'next/link';
import { UserReviewPreviewResponse } from '@/generated/graphql';
import { parseUserReviewDetailLink } from '@/lib/user-review/parse-user-review-detail-link';
import UserReviewPreviewHeader from './user-review-preview-header';
import UserReviewPreviewFooter from './user-review-preview-footer';
import UserReviewPreviewContent from './user-review-preview-content';

interface Props {
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreview({ userReview }: Props) {
  return (
    <div className="relative overflow-hidden bg-dark-400 px-4 md:px-5 rounded-lg">
      <Link
        href={parseUserReviewDetailLink({
          slug: userReview.post.slug!,
        })}
        className="w-full text-start"
      >
        <div className="grid grid-cols-1 gap-2 pt-4 pb-4">
          <UserReviewPreviewHeader userReview={userReview} />
          <UserReviewPreviewContent userReview={userReview} />
          <UserReviewPreviewFooter userReview={userReview} />
        </div>
      </Link>
    </div>
  );
}
