'use client';

import { DemandPreviewFragment } from '@/generated/graphql';
import { truncateText } from '@/lib/text/truncate-text';
import { DealStatus } from '@/lib/deal/deal.types';
import DealPreview from '../deals/deal-preview';

interface Props {
  demand: DemandPreviewFragment;
  type: 'text' | 'thumbnail';
}

export default function DemandPreview({ demand, type }: Props) {
  return (
    <DealPreview
      deal="demand"
      dealId={demand.id}
      authorId={demand.buyer.id}
      type={type}
      name={truncateText(demand.name, 45)}
      totalPrice={demand.totalPrice}
      bumpedAt={demand.bumpedAt}
      username={demand.buyer.username}
      slug={demand.slug!}
      reportCount={demand.reportCount}
      reportCommentCount={demand.reportCommentCount}
      status={demand.status as DealStatus}
      hidden={demand.hidden}
    />
  );
}
