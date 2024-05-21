'use client';

import { AuctionPreviewResponse } from '@/generated/graphql';
import dayjs from 'dayjs';
import PostPreviewTitle from '../posts/post-preview-title';

interface Props {
  auction: AuctionPreviewResponse;
}

export default function AuctionPreviewHeader({ auction }: Props) {
  return (
    <div className="flex flex-row justify-between items-start">
      <div className="flex flex-col md:flex-row gap-1 md:gap-2 md:items-start">
        <div className="flex-1">
          <PostPreviewTitle name0={auction.post.title} />
        </div>
        <div className="text-xs md:text-sm text-gray-500">
          {dayjs(auction.originalEndDate).fromNow()} 종료
        </div>
      </div>
      {/* AuctionMenu */}
    </div>
  );
}
