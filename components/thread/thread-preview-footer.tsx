'use client';

import { ThreadPreviewResponse } from '@/generated/graphql';
import PostTags from '../posts/post-tags';
import PostPreviewAddons from '../posts/post-preview-addons';
import PostCategory from '../posts/post-category';

interface Props {
  thread: ThreadPreviewResponse;
}

export default function ThreadPreviewFooter({ thread }: Props) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-row gap-1 md:gap-2 items-center">
        {thread.post.category && (
          <PostCategory category={thread.post.category} />
        )}
        <PostTags tags={thread.post.tags} />
      </div>
      <PostPreviewAddons postCommentCount={thread.post.commentCount} />
    </div>
  );
}
