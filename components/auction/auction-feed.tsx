'use client';

import { useEffect, useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import { useSearchParams } from 'next/navigation';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import { findCategory } from '@/lib/group/find-category';
import { FindAuctionsWhereArgs } from '@/lib/auction/auction.interfaces';
import { useInfiniteAuctionFeed } from '@/hooks/use-infinite-auction-feed';
import { parseAuctionStatus } from '@/lib/auction/parse-auction-status';
import { getFindAuctionsOrderByArgs } from '@/lib/auction/get-find-auctions-order-by-args';
import AuctionPreview from './auction-preview';

function AuctionFeed({
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
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const status = parseAuctionStatus({
    status: searchParams.get('status') || defaultWhere.status,
  });
  const period = searchParams.get('period');
  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });

  const orderBy = getFindAuctionsOrderByArgs({
    sortOrder: searchParams.get('sort') || defaultSortOrder,
  });

  const distinct =
    searchParams.get('distinct') === null
      ? defaultDistinct
      : searchParams.get('distinct') !== 'false';

  useEffect(() => {}, [searchParams]);

  const { loading, data } = useInfiniteAuctionFeed({
    ref,
    where: {
      groupId: group?.id,
      categoryId: category?.id,
      status,
      userId: defaultWhere.userId,
      createdAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
    },
    orderBy: {
      createdAt: orderBy?.createdAt,
      extendedEndDate: orderBy?.extendedEndDate,
      currentBidPrice: orderBy?.currentBidPrice,
    },
    keyword,
    distinct,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findAuctionPreviews) return <div />;

  const edges = data.findAuctionPreviews.edges.filter((edge) =>
    status ? edge.node.status === status : true,
  );

  return (
    <>
      {edges.map((edge) => (
        <div key={edge.node.id} className="flex flex-col gap-0">
          <AuctionPreview auction={edge.node} isInGroup={!!group} />
        </div>
      ))}
      <div ref={ref} />
    </>
  );
}

export default AuctionFeed;
