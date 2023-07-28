'use client';

import React, { useCallback, useRef } from 'react';
import { Auction } from 'prisma';
import { useAppSelector } from '@/redux/hooks';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getAuctions, Auctions } from '@/app/lib/api/auctions';
import { useInfiniteScroll } from '@/app/hooks/use-infinite-scroll';
import AuctionPreview from './auction-preview';

function AuctionPreviews({
  auctions,
  type,
  cols,
}: {
  auctions: Auctions[] | undefined;
  type: string;
  cols: number;
}) {
  if (!auctions) return null;
  return (
    <>
      {auctions.map((group) => (
        <React.Fragment key={group.cursor}>
          {group.auctions.map((auction: Auction) => (
            <div className="col-span-1" key={auction.id}>
              <AuctionPreview type={type} auction={auction} cols={cols} />
            </div>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}

export default function Feed() {
  const categoryId = useAppSelector(
    (state) => state.categoriesSlice.categoryId,
  );
  const type = useAppSelector((state) => state.postsSlice.type);
  const cols = useAppSelector((state) => state.postsSlice.cols);

  const { data, fetchNextPage, hasNextPage, status } = useInfiniteQuery(
    ['auctions', categoryId, type],
    {
      queryFn: async ({ pageParam = '' }) =>
        getAuctions(categoryId ?? '', type, pageParam),
      getNextPageParam: (lastPage, allPages) => lastPage.cursor,
    },
  );

  const ref = useRef<HTMLDivElement>(null);
  const fetchNext = useCallback(() => {
    if (!hasNextPage) return;
    fetchNextPage();
  }, [hasNextPage, fetchNextPage]);

  useInfiniteScroll(ref, fetchNext);

  if (status === 'loading') {
    return (
      <div className="grid gap-4 md:gap-8 lg:gap-12 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start">
        <div />
      </div>
    );
  }
  if (status === 'error') return <p>Error ...</p>;

  return (
    <>
      <div
        className={`grid gap-4 md:gap-8 lg:gap-12 ${
          cols === 1 ? 'grid-cols-1' : 'grid-cols-2'
        } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start`}
      >
        <AuctionPreviews auctions={data.pages} type={type} cols={cols} />
      </div>
      <div ref={ref} />
    </>
  );
}
