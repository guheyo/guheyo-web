'use client';

import { ThreadPreviewResponse } from '@/generated/graphql';
import { truncateText } from '@/lib/text/truncate-text';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import Thumbnail from '../base/thumbnail';
import PostPreviewTitle from '../posts/post-preview-title';

interface Props {
  thread: ThreadPreviewResponse;
}

export default function ThreadPreviewContent({ thread }: Props) {
  const device = useDeviceDetect();

  return (
    <div className="grid grid-cols-12 gap-1 items-start justify-between gap-4">
      <div className="col-span-9 flex flex-col gap-1">
        <PostPreviewTitle title={thread.post.title} />
        {thread.content && (
          <div className="text-xs md:text-sm text-dark-200">
            {truncateText(thread.content, device === 'mobile' ? 25 : 40)}
          </div>
        )}
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
