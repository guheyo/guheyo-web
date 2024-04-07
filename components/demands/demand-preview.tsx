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
      dealId={demand.id}
      dealType="demand"
      dealStatus={demand.status as DealStatus}
      authorId={demand.buyer.id}
      type={type}
      name={truncateText(demand.name, 45)}
      totalPrice={demand.totalPrice}
      bumpedAt={demand.bumpedAt}
      slug={demand.slug!}
      reportCount={demand.reportCount}
      reportCommentCount={demand.reportCommentCount}
      isHidden={demand.isHidden}
    />
  );
}
