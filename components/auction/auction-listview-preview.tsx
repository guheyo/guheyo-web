'use client';

import Link from 'next/link';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { AuctionPreviewResponse } from '@/generated/graphql';
import { parseAuctionDetailLink } from '@/lib/auction/parse-auction-detail-link';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import Thumbnail from '../base/thumbnail';
import AuctionPreviewHeader from './auction-preview-header';
import AuctionPreviewFooter from './auction-preview-footer';
import GroupNameLink from '../groups/group-name-link';
import AuctionPreviewCenter from './auction-preview-center';

interface Props {
  auction: AuctionPreviewResponse;
  displayGroup: boolean;
}

export default function AuctionListViewPreview({
  auction,
  displayGroup,
}: Props) {
  const { group } = auction.post;
  return (
    <div className="relative overflow-hidden bg-dark-400 py-3 rounded-lg">
      <Link
        href={parseAuctionDetailLink({
          slug: auction.post.slug!,
        })}
        className="flex flex-row w-full text-start"
      >
        <div className="w-[75%] md:w-[80%] pl-4">
          <div className="flex flex-col gap-1">
            {displayGroup && (
              <div className="w-fit">
                <GroupNameLink
                  name={group.name}
                  href={parseChannelLink({
                    groupSlug: group.slug!,
                    channelSlug: 'auction',
                  })}
                />
              </div>
            )}
            <AuctionPreviewHeader auction={auction} />
            <AuctionPreviewCenter auction={auction} />
            <AuctionPreviewFooter auction={auction} />
          </div>
        </div>
        {auction.post.thumbnail && (
          <div className="flex relative w-[25%] md:w-[20%] mr-4 md:mr-4 justify-end">
            <Thumbnail
              url={auction.post.thumbnail}
              name={auction.post.title}
              thumbnailSize="small"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ChatBubbleOvalLeftIcon
                color="white"
                fill="white"
                className="opacity-0 group-hover:opacity-100 w-8 h-8 md:w-9 md:h-9"
              />
            </div>
          </div>
        )}
      </Link>
    </div>
  );
}
