'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { useFindUserQuery } from '@/generated/graphql';
import { FindAuctionsWhereArgs } from '@/lib/auction/auction.interfaces';
import { getFindAuctionsOrderByArgs } from '@/lib/auction/get-find-auctions-order-by-args';
import { parseAuctionStatus } from '@/lib/auction/parse-auction-status';
import { Suspense } from 'react';

function Page({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const { loading, data } = useFindUserQuery({
    variables: {
      username,
    },
    fetchPolicy: 'cache-first',
  });
  const user = data?.findUser;

  if (loading) return <div />;
  if (!user) return <div />;

  const status = parseAuctionStatus({
    status: null,
  });
  const where: FindAuctionsWhereArgs = {
    userId: user.id,
    status,
  };

  const orderBy = getFindAuctionsOrderByArgs({
    sortOrder: undefined,
  });

  return (
    <Suspense>
      <ThumbnailFeedLayout>
        <AuctionFeed where={where} orderBy={orderBy} distinct={false} />
      </ThumbnailFeedLayout>
    </Suspense>
  );
}

export default Page;
