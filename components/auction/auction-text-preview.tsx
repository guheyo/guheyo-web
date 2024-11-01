'use client';

import Link from 'next/link';
import { AuctionPreviewResponse } from '@/generated/graphql';
import { parseAuctionDetailLink } from '@/lib/auction/parse-auction-detail-link';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import AuctionPreviewHeader from './auction-preview-header';
import AuctionPreviewFooter from './auction-preview-footer';
import GroupNameLink from '../groups/group-name-link';
import AuctionPreviewCenter from './auction-preview-center';

interface Props {
  auction: AuctionPreviewResponse;
  displayGroup: boolean;
}

export default function AuctionTextPreview({ auction, displayGroup }: Props) {
  const { group } = auction.post;
  return (
    <div className="relative overflow-hidden bg-dark-400 px-4 md:px-5 py-4 rounded-lg">
      <Link
        href={parseAuctionDetailLink({
          slug: auction.post.slug!,
        })}
        className="w-full text-start"
      >
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
      </Link>
    </div>
  );
}
