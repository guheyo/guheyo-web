'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteSwapFeed } from '@/hooks/use-infinite-swap-feed';
import SwapPreview from '@/components/swaps/swap-preview-preview';

function SwapFeed({
  groupId,
  categoryId,
  proposerId,
  status,
  keyword,
}: {
  groupId?: string;
  categoryId?: string;
  proposerId?: string;
  status?: string;
  keyword?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { loading, data } = useInfiniteSwapFeed({
    ref,
    groupId,
    categoryId,
    proposerId,
    status,
    keyword,
    take: 12,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findSwapPreviews) return <div />;

  const { edges } = data.findSwapPreviews;
  return (
    <>
      {edges.map((edge) => (
        <SwapPreview key={edge.node.id} swap={edge.node} type="thumbnail" />
      ))}
      <div ref={ref} />
    </>
  );
}

export default SwapFeed;
