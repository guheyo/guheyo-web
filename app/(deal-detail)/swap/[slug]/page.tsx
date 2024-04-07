'use client';

import SwapDetail from '@/components/swaps/swap-detail';

function SwapPage({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return <SwapDetail slug={slug} />;
}

export default SwapPage;
