'use client';

import { UserReviewPreviewResponse } from '@/generated/graphql';
import UserReviewTextPreview from './user-review-text-preview';

interface Props {
  type: 'text' | 'thumbnail';
  userReview: UserReviewPreviewResponse;
}

export default function UserReviewPreview({ type, userReview }: Props) {
  switch (type) {
    case 'text': {
      return <UserReviewTextPreview userReview={userReview} />;
    }
    default: {
      return <div />;
    }
  }
}
