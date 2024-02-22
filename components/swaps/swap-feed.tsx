'use client';

import SwapThumbnailPreview from '@/components/swaps/swap-thumbnail-preview';
import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteSwapFeed } from '@/hooks/use-infinite-swap-feed';

function SwapFeed({
  categoryId,
  proposerId,
  status,
  keyword,
}: {
  categoryId?: string;
  proposerId?: string;
  status?: string;
  keyword?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { loading, data } = useInfiniteSwapFeed({
    ref,
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
        <div className="col-span-1" key={edge.node.id}>
          <SwapThumbnailPreview swap={edge.node} />
        </div>
      ))}
      <div ref={ref} />
    </>
  );
}

export default SwapFeed;
