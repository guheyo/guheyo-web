'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { useFindUserQuery } from '@/generated/graphql';
import { FindAuctionsWhereArgs } from '@/lib/auction/auction.interfaces';
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

  const where: FindAuctionsWhereArgs = {
    userId: user.id,
    status: undefined,
  };
  const orderBy = undefined;
  const distinct = false;

  return (
    <Suspense>
      <ThumbnailFeedLayout>
        <AuctionFeed
          defaultWhere={where}
          defaultSortOrder={orderBy}
          defaultDistinct={distinct}
        />
      </ThumbnailFeedLayout>
    </Suspense>
  );
}

export default Page;
