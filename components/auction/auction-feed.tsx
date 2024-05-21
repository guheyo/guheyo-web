'use client';

import { useEffect, useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useGroup } from '@/hooks/use-group';
import { useSearchParams } from 'next/navigation';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import { findCategory } from '@/lib/group/find-category';
import {
  FindAuctionsOrderByArgs,
  FindAuctionsWhereArgs,
} from '@/lib/auction/auction.interfaces';
import { useInfiniteAuctionFeed } from '@/hooks/use-infinite-auction-feed';
import AuctionPreview from './auction-preview';

function AuctionFeed({
  where,
  orderBy,
  keyword,
  distinct,
}: {
  where: FindAuctionsWhereArgs;
  orderBy?: FindAuctionsOrderByArgs;
  keyword?: string;
  distinct: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const period = searchParams.get('period');
  const category = findCategory(group?.categories, {
    slug: categorySlug,
  });

  useEffect(() => {}, [searchParams]);

  const { loading, data } = useInfiniteAuctionFeed({
    ref,
    where: {
      groupId: group?.id,
      categoryId: category?.id,
      status: where.status,
      userId: where?.userId,
      createdAt: period
        ? {
            gt: convertPeriodToDateString(period),
          }
        : undefined,
    },
    orderBy: {
      createdAt: orderBy?.createdAt || 'desc',
      currentBidPrice: orderBy?.currentBidPrice,
    },
    keyword,
    distinct,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findAuctionPreviews) return <div />;

  const edges = data.findAuctionPreviews.edges.filter((edge) =>
    where.status ? edge.node.status === where.status : true,
  );

  return (
    <>
      {edges.map((edge) => (
        <div key={edge.node.id} className="flex flex-col gap-0">
          <AuctionPreview auction={edge.node} />
        </div>
      ))}
      <div ref={ref} />
    </>
  );
}

export default AuctionFeed;
