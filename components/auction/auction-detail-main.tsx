'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { AuctionResponse } from '@/generated/graphql';
import { AuctionStatus } from '@/lib/auction/auction.types';
import ReportsLink from '../reports/reports-link';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import AuctionDetailName from './auction-detail-name';
import AuctionDetailPrice from './auction-detail-price';
import AuctionCountdown from './auction-count-down';
import PostDetailDate from '../posts/post-detail-date';
import AuctionBidCount from './auction-bid-count';
import AuctionCommentCount from './auction-comment-count';
import AuctionDetailAddons from './auction-detail-addons';

export default function AuctionDetailMain({
  auction,
}: {
  auction: AuctionResponse;
}) {
  const device = useDeviceDetect();

  return (
    <>
      <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-start justify-between">
        <div className="flex flex-row items-center gap-2">
          <UserProfileRedirectButton
            user={auction.post.user}
            displayAvatar
            displayUsername
            fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
          />
          <PostDetailDate date={auction.createdAt} />
        </div>
        <div className="h-8">{/* AuctionMenu */}</div>
      </div>
      <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
        {auction.post.reportCount > 0 && (
          <ReportsLink reportCount={auction.post.reportCount} />
        )}
        <AuctionDetailName
          auctionStatus={auction.status as AuctionStatus}
          title={auction.post.title}
        />
        <div className="grid grid-cols-2 md:grid-cols-4 items-center justify-items-center bg-zinc-600 rounded-lg p-3 text-sm md:text-base">
          <AuctionCountdown targetDate={auction.extendedEndDate} />
          <AuctionDetailPrice
            auctionStatus={auction.status as AuctionStatus}
            currentBidPrice={auction.currentBidPrice}
          />
          <div className="hidden md:flex">
            <AuctionBidCount bidCount={auction.bids.length} />
          </div>
          <div className="hidden md:flex">
            <AuctionCommentCount
              commentCount={auction.post.commentCount || 0}
            />
          </div>
        </div>
      </div>
      <div className="pt-8 text-sm md:text-base md:h-fit overflow-y-auto text-dark-100">
        {auction.content && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {auction.content}
          </ReactMarkdown>
        )}
      </div>
      <div className="pt-14 text-base md:text-lg text-gray-300 font-bold">
        <AuctionDetailAddons
          bidCount={auction.bids.length}
          commentCount={auction.post.commentCount || 0}
        />
      </div>
    </>
  );
}
