'use client';

import { SwapPreviewFragment } from '@/generated/graphql';
import { DealStatus } from '@/lib/deal/deal.types';
import SwapName from './swap-name';
import DealPreview from '../deals/deal-preview';

interface Props {
  swap: SwapPreviewFragment;
  type: 'text' | 'thumbnail';
}

export default function SwapPreview({ swap, type }: Props) {
  return (
    <DealPreview
      dealId={swap.id}
      deal="swap"
      dealStatus={swap.status as DealStatus}
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
      isHidden={swap.isHidden}
    />
  );
}
