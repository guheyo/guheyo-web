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
      deal="swap"
      dealId={swap.id}
      authorId={swap.proposer.id}
      type={type}
      thumbnail={swap.thumbnail}
      name={<SwapName name0={swap.name0} name1={swap.name1} />}
      totalPrice={swap.totalPrice}
      bumpedAt={swap.bumpedAt}
      username={swap.proposer.username}
      slug={swap.slug!}
      reportCount={swap.reportCount}
      reportCommentCount={swap.reportCommentCount}
    />
  );
}
