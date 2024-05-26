'use client';

import AuctionDetailContainer from '@/components/auction/auction-detail-container';
import { useFindAuctionQuery } from '@/generated/graphql';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { data, loading } = useFindAuctionQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findAuction) return <div />;

  const auction = data.findAuction;
  return <AuctionDetailContainer auction={auction} />;
}

export default Page;
