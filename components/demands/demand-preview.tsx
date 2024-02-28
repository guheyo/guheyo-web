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
      deal="demands"
      type={type}
      name={demand.name}
      price={demand.price}
      createdAt={demand.createdAt}
      username={demand.buyer.username}
      slug={demand.slug!}
    />
  );
}
