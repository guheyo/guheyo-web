'use client';

import { ArticlePreviewResponse } from '@/generated/graphql';
import { truncateText } from '@/lib/text/truncate-text';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import Thumbnail from '../base/thumbnail';

interface Props {
  article: ArticlePreviewResponse;
}

export default function ArticlePreviewContent({ article }: Props) {
  const device = useDeviceDetect();

  return (
    <div className="grid grid-cols-12 gap-1 items-start justify-between gap-4">
      <div className="col-span-9 flex flex-col gap-1 text-xs md:text-sm ">
        <div className="text-gray-300">
          {truncateText(article.post.title, device === 'mobile' ? 25 : 40)}
        </div>
        {article.content && (
          <div className="text-dark-200">
            {truncateText(article.content, device === 'mobile' ? 25 : 40)}
          </div>
        )}
      </div>
      <div className="col-span-3 flex justify-end">
        {article.post.thumbnail && (
          <Thumbnail
            url={article.post.thumbnail}
            name={article.post.title}
            thumbnailSize="small"
          />
        )}
      </div>
    </div>
  );
}
