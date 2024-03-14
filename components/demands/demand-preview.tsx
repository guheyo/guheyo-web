'use client';

import { DemandPreviewFragment } from '@/generated/graphql';
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
      name={demand.name}
      price={demand.price}
      bumpedAt={demand.bumpedAt}
      username={demand.buyer.username}
      slug={demand.slug!}
      reports={demand.reports}
    />
  );
}
