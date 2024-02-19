'use client';

import DemandPreview from '@/components/demands/demand-preview';
import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteDemandFeed } from '@/hooks/use-infinite-demand-feed';

function DemandFeed({ categoryId }: { categoryId: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { loading, data } = useInfiniteDemandFeed({
    ref,
    categoryId,
    take: 15,
  });

  if (loading) return <Mocks length={12} height={32} color="bg-dark-400" />;
  if (!data?.findDemands) return <div>null</div>;

  const { edges } = data.findDemands;

  return (
    <>
      {edges.map((edge) => (
        <div className="col-span-1" key={edge.node.id}>
          <DemandPreview demand={edge.node} />
        </div>
      ))}
      <div ref={ref} />
    </>
  );
}

export default DemandFeed;
