'use client';

import { ThreadPreviewResponse } from '@/generated/graphql';
import PostCreatedAt from '../posts/post-created-at';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

interface Props {
  thread: ThreadPreviewResponse;
}

export default function ThreadPreviewHeader({ thread }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-1 md:gap-2">
        <UserProfileRedirectButton
          user={thread.post.user}
          displayAvatar
          displayUsername
          fontSize="text-xs"
        />
        <PostCreatedAt createdAt={thread.createdAt} />
      </div>
      <div className="h-4 mt-[-10px]">{/* TODO: ThreadMenu */}</div>
    </div>
  );
}
