'use client';

import Link from 'next/link';
import { AuctionPreviewResponse } from '@/generated/graphql';
import { parseAuctionDetailLink } from '@/lib/auction/parse-auction-detail-link';
import { parseAuctionLink } from '@/lib/auction/parse-auction-link';
import AuctionPreviewHeader from './auction-preview-header';
import AuctionPreviewFooter from './auction-preview-footer';
import GroupNameLink from '../groups/group-name-link';

interface Props {
  auction: AuctionPreviewResponse;
  isInGroup: boolean;
}

export default function AuctionTextPreview({ auction, isInGroup }: Props) {
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
          {!isInGroup && (
            <div className="w-fit">
              <GroupNameLink
                name={group.name}
                href={parseAuctionLink({ groupSlug: group.slug! })}
              />
            </div>
          )}
          <AuctionPreviewHeader auction={auction} />
          <AuctionPreviewFooter auction={auction} />
        </div>
      </Link>
    </div>
  );
}
