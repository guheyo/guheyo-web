'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { UserReviewResponse } from '@/generated/graphql';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import PostDetailTitle from '../posts/post-detail-name';
import UserReviewTags from './user-review-tags';
import PostCreatedAt from '../posts/post-created-at';

export default function UserReviewDetailMain({
  userReview,
}: {
  userReview: UserReviewResponse;
}) {
  const device = useDeviceDetect();

  return (
    <>
      <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <UserProfileRedirectButton
            user={userReview.post.user}
            displayAvatar
            displayUsername
            fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
          />
          <PostCreatedAt createdAt={userReview.createdAt} />
        </div>
        {/* <div className="h-8">
          UserReviewMenu
        </div> */}
      </div>
      <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
        <PostDetailTitle title={`${userReview.post.title} 거래 후기`} />
        <div className="flex flex-row gap-2">
          <UserReviewTags
            tags={userReview.post.tags}
            rating={userReview.rating}
          />
        </div>
      </div>
      <div className="pt-8 text-base md:text-base md:h-fit overflow-y-auto pb-20">
        {userReview.content && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {userReview.content}
          </ReactMarkdown>
        )}
      </div>
    </>
  );
}
