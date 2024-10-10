'use client';

import Link from 'next/link';
import { UserReviewPreviewResponse } from '@/generated/graphql';
import { parseUserReviewDetailLink } from '@/lib/user-review/parse-user-review-detail-link';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import UserReviewPreviewHeader from './user-review-preview-header';
import UserReviewPreviewFooter from './user-review-preview-footer';
import UserReviewPreviewContent from './user-review-preview-content';
import GroupNameLink from '../groups/group-name-link';

interface Props {
  userReview: UserReviewPreviewResponse;
  displayGroup: boolean;
}

export default function UserReviewPreview({ userReview, displayGroup }: Props) {
  const { group } = userReview.post;
  return (
    <div className="relative overflow-hidden bg-dark-400 px-4 py-4 rounded-lg">
      <Link
        href={parseUserReviewDetailLink({
          slug: userReview.post.slug!,
        })}
        className="w-full text-start"
      >
        <div className="grid grid-cols-1 gap-2">
          {displayGroup && (
            <div className="w-fit">
              <GroupNameLink
                name={group.name}
                href={parseChannelLink({
                  groupSlug: group.slug!,
                  channelSlug: 'review',
                })}
              />
            </div>
          )}
          <UserReviewPreviewHeader userReview={userReview} />
          <UserReviewPreviewContent userReview={userReview} />
          <UserReviewPreviewFooter userReview={userReview} />
        </div>
      </Link>
    </div>
  );
}
