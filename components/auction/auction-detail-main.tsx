'use client';

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { AuctionResponse, BidResponse } from '@/generated/graphql';
import { getAuctionStatusFromExtendedEndDate } from '@/lib/auction/get-auction-status-from-extended-end-date';
import ReportsLink from '../reports/reports-link';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import AuctionDetailName from './auction-detail-name';
import PostDetailDate from '../posts/post-detail-date';
import AuctionDetailStickyHeader from './auction-detail-sticky-header';

export default function AuctionDetailMain({
  auction,
  highestBid,
  bidCount,
  commentCount,
}: {
  auction: AuctionResponse;
  highestBid?: BidResponse;
  bidCount: number;
  commentCount: number;
}) {
  const device = useDeviceDetect();
  const status = getAuctionStatusFromExtendedEndDate(auction.extendedEndDate);

  return (
    <>
      <AuctionDetailStickyHeader
        status={status}
        extendedEndDate={auction.extendedEndDate}
        highestBid={highestBid}
        bidCount={bidCount}
        commentCount={commentCount}
        userId={auction.post.user.id}
      />
      <div className="px-4 md:px-0">
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
            auctionStatus={status}
            title={auction.post.title}
          />
        </div>
        <div className="pt-8 text-sm md:text-base md:h-fit overflow-y-auto text-dark-100">
          {auction.content && (
            <Markdown remarkPlugins={[remarkGfm]}>{auction.content}</Markdown>
          )}
        </div>
      </div>
    </>
  );
}
