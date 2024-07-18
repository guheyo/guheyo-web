'use client';

import AuctionFeed from '@/components/auction/auction-feed';
import ThumbnailFeedLayout from '@/components/posts/thumbnail-feed.layout';
import { useFindUserQuery } from '@/generated/graphql';
import { FindAuctionsWhereArgs } from '@/lib/auction/auction.interfaces';

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
    <ThumbnailFeedLayout>
      <AuctionFeed
        type="thumbnail"
        defaultWhere={where}
        defaultSortOrder={orderBy}
        defaultDistinct={distinct}
      />
    </ThumbnailFeedLayout>
  );
}

export default Page;
