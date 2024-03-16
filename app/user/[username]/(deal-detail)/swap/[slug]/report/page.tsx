'use client';

import SwapReport from '@/components/swaps/swap-report';

function Page({
  params: { slug },
}: {
  params: {
    slug: string;
  };
}) {
  return <SwapReport slug={slug} />;
}

export default Page;
