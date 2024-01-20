'use client';

import SwapDetail from '@/components/swaps/swap-detail';
import { useFindSwapQuery } from '@/generated/graphql';

function SwapPage({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  const { loading, error, data } = useFindSwapQuery({
    variables: {
      slug,
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (!data?.findSwap) return <div>null</div>;

  return <SwapDetail swap={data.findSwap} />;
}

export default SwapPage;
