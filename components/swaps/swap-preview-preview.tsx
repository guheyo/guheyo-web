'use client';

import { SwapPreviewFragment } from '@/generated/graphql';
import SwapName from './swap-name';
import DealPreview from '../deals/deal-preview';

interface Props {
  swap: SwapPreviewFragment;
  type: 'text' | 'thumbnail';
}

export default function SwapPreview({ swap, type }: Props) {
  return (
    <DealPreview
      deal="swaps"
      type={type}
      thumbnail={swap.thumbnail}
      name={<SwapName name0={swap.name0} name1={swap.name1} />}
      price={swap.price}
      createdAt={swap.createdAt}
      username={swap.proposer.username}
      slug={swap.slug!}
    />
  );
}
