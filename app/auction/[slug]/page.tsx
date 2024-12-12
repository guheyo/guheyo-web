'use client';

import AuctionDetailContainer from '@/components/auction/auction-detail-container';
import { useFindAuctionQuery } from '@/generated/graphql';
import { Suspense, use } from 'react';

function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { data, loading } = useFindAuctionQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <div />;
  if (!data?.findAuction) return <div />;

  const auction = data.findAuction;
  return (
    <Suspense>
      <AuctionDetailContainer auction={auction} />
    </Suspense>
  );
}

export default Page;
