'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteDemandFeed } from '@/hooks/use-infinite-demand-feed';
import DemandPreview from '@/components/demands/demand-preview';
import {
  FindDealsOrderByArgs,
  FindDealsWhereArgs,
} from '@/interfaces/deal.interfaces';

function DemandFeed({
  where,
  orderBy,
  keyword,
}: {
  where?: FindDealsWhereArgs;
  orderBy?: FindDealsOrderByArgs;
  keyword?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { loading, data } = useInfiniteDemandFeed({
    ref,
    where,
    orderBy,
    keyword,
    take: 15,
  });

  if (loading) return <Mocks length={12} height={32} color="bg-dark-400" />;
  if (!data?.findDemandPreviews) return <div />;

  const { edges } = data.findDemandPreviews;
  return (
    <>
      {edges.map((edge) => (
        <DemandPreview key={edge.node.id} demand={edge.node} type="text" />
      ))}
      <div ref={ref} />
    </>
  );
}

export default DemandFeed;
