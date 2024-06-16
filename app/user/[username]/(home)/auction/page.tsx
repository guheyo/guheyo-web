'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { useFindUserQuery } from '@/generated/graphql';
import { FindAuctionsWhereArgs } from '@/lib/auction/auction.interfaces';
import { getFindAuctionsOrderByArgs } from '@/lib/auction/get-find-auctions-order-by-args';
import { parseAuctionStatus } from '@/lib/auction/parse-auction-status';
import { useSearchParams } from 'next/navigation';

function Page({
  params: { username },
}: {
  params: {
    username: string;
  };
}) {
  const searchParams = useSearchParams();
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
    status: searchParams.get('status'),
  });
  const where: FindAuctionsWhereArgs = {
    userId: user.id,
    status,
  };

  const orderBy = getFindAuctionsOrderByArgs({
    sortOrder: searchParams.get('sort') || undefined,
  });

  return (
    <ThumbnailFeedLayout>
      <AuctionFeed where={where} orderBy={orderBy} distinct={false} />
    </ThumbnailFeedLayout>
  );
}

export default Page;
