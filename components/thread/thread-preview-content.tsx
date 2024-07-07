'use client';

import { ThreadPreviewResponse } from '@/generated/graphql';
import Thumbnail from '../base/thumbnail';
import PostPreviewTitle from '../posts/post-preview-title';
import PostPreviewContent from '../posts/post-preview-content';

interface Props {
  thread: ThreadPreviewResponse;
}

export default function ThreadPreviewContent({ thread }: Props) {
  return (
    <div className="grid grid-cols-12 gap-1 items-start justify-between gap-4">
      <div className="col-span-9 flex flex-col gap-1">
        <PostPreviewTitle title={thread.post.title} />
        {thread.content && <PostPreviewContent content={thread.content} />}
      </div>
      <div className="col-span-3 flex justify-end">
        {thread.post.thumbnail && (
          <Thumbnail
            url={thread.post.thumbnail}
            name={thread.post.title}
            thumbnailSize="small"
          />
        )}
      </div>
    </div>
  );
}
