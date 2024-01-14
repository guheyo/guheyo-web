'use client';

import SwapDetail from '@/components/swaps/swap-detail';
import { useFindSwapByIdQuery } from '@/generated/graphql';

function SwapPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const { loading, error, data } = useFindSwapByIdQuery({
    variables: {
      id,
    },
  });

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  return <SwapDetail swap={data?.findSwapById!} />;
}

export default SwapPage;
