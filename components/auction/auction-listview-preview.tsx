'use client';

import Link from 'next/link';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { AuctionPreviewResponse } from '@/generated/graphql';
import { parseAuctionDetailLink } from '@/lib/auction/parse-auction-detail-link';
import { parseGroupAuctionLink } from '@/lib/auction/parse-group-auction-link';
import Thumbnail from '../base/thumbnail';
import AuctionPreviewHeader from './auction-preview-header';
import AuctionPreviewFooter from './auction-preview-footer';
import GroupNameLink from '../groups/group-name-link';

interface Props {
  auction: AuctionPreviewResponse;
  isInGroup: boolean;
}

export default function AuctionListViewPreview({ auction, isInGroup }: Props) {
  const { group } = auction.post;
  return (
    <div className="relative overflow-hidden bg-dark-400 py-3 pl-3 rounded-lg">
      <Link
        href={parseAuctionDetailLink({
          slug: auction.post.slug!,
        })}
        className="flex flex-row w-full text-start"
      >
        {auction.post.thumbnail && (
          <div className="flex relative w-[25%] md:w-[20%]">
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
        <div className="w-[75%] md:w-[80%] px-4 md:pl-0 md:pr-6">
          <div className="flex flex-col gap-1">
            {!isInGroup && (
              <div className="w-fit">
                <GroupNameLink
                  name={group.name}
                  href={parseGroupAuctionLink({ groupSlug: group.slug! })}
                />
              </div>
            )}
            <AuctionPreviewHeader auction={auction} />
            <AuctionPreviewFooter auction={auction} />
          </div>
        </div>
      </Link>
    </div>
  );
}
