'use client';

import SwapFeed from '@/components/swaps/swap-feed';

export interface SwapsPageProps {
  params: {
    groupSlug: string;
  };
}

function SwapsPage({ params: { groupSlug } }: SwapsPageProps) {
  return <SwapFeed type="thumbnail" />;
}

export default SwapsPage;
