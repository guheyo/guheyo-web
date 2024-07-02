'use client';

import { ArticlePreviewResponse } from '@/generated/graphql';
import PostCreatedAt from '../posts/post-created-at';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';

interface Props {
  article: ArticlePreviewResponse;
}

export default function ArticlePreviewHeader({ article }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-1 md:gap-2">
        <UserProfileRedirectButton
          user={article.post.user}
          displayAvatar
          displayUsername
          fontSize="text-xs"
        />
        <PostCreatedAt createdAt={article.createdAt} />
      </div>
      <div className="h-4 mt-[-10px]">{/* TODO: ArticleMenu */}</div>
    </div>
  );
}
