'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { FindAuctionsWhereArgs } from '@/lib/auction/auction.interfaces';
import { useInfiniteAuctionFeed } from '@/hooks/use-infinite-auction-feed';
import { getFindAuctionsOrderByArgs } from '@/lib/auction/get-find-auctions-order-by-args';
import AuctionPreview from './auction-preview';
import TextFeedLayout from '../posts/text-feed.layout';
import AuctionMoreLink from './auction-more-link';

function RecentAuctions({
  defaultWhere,
  defaultSortOrder,
  keyword,
  defaultDistinct,
}: {
  defaultWhere: FindAuctionsWhereArgs;
  defaultSortOrder?: string;
  keyword?: string;
  defaultDistinct: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const orderBy = getFindAuctionsOrderByArgs({
    sortOrder: defaultSortOrder || 'ending',
  });
  const distinct = defaultDistinct;

  const { loading, data } = useInfiniteAuctionFeed({
    ref,
    where: {
      groupId: defaultWhere.groupId,
      status: defaultWhere.status,
      userId: defaultWhere.userId,
    },
    orderBy: {
      createdAt: orderBy?.createdAt,
      extendedEndDate: orderBy?.extendedEndDate,
      currentBidPrice: orderBy?.currentBidPrice,
    },
    keyword,
    distinct,
    take: 3,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findAuctionPreviews) return <div />;

  const edges = data.findAuctionPreviews.edges.filter((edge) =>
    defaultWhere.status ? edge.node.status === defaultWhere.status : true,
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between">
        <div className="text-base text-gray-300 font-semibold">
          종료 임박 경매
        </div>
        <div className="text-base text-gray-300 font-semibold">
          <AuctionMoreLink />
        </div>
      </div>
      <TextFeedLayout>
        {edges.map((edge) => (
          <div key={edge.node.id} className="flex flex-col gap-0">
            <AuctionPreview
              type="listview"
              auction={edge.node}
              isInGroup={false}
            />
          </div>
        ))}
      </TextFeedLayout>
    </div>
  );
}

export default RecentAuctions;
