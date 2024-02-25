'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteDemandFeed } from '@/hooks/use-infinite-demand-feed';
import DemandPreview from '@/components/demands/demand-preview';
import {
  FindDemandsWhereArgs,
  FindDealsOrderByArgs,
} from '@/interfaces/deal.interfaces';
import { useGroup } from '@/hooks/use-group';
import { useProductCategory } from '@/hooks/use-product-category';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useDistinct } from '@/hooks/use-distinct';

function DemandFeed({
  where,
  orderBy,
  keyword,
  type,
}: {
  where?: FindDemandsWhereArgs;
  orderBy?: FindDealsOrderByArgs;
  keyword?: string;
  type: 'text' | 'thumbnail';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const category = useProductCategory();
  const status = useDealStatus();
  const distinct = useDistinct();

  const { loading, data } = useInfiniteDemandFeed({
    ref,
    where: {
      groupId: group?.id,
      productCategoryId: category?.id,
      status: status || undefined,
      buyerId: where?.buyerId,
    },
    orderBy: {
      createdAt: orderBy?.createdAt || 'desc',
      price: orderBy?.price,
    },
    keyword,
    distinct,
    take: 15,
  });

  if (loading) return <Mocks length={12} height={32} color="bg-dark-400" />;
  if (!data?.findDemandPreviews) return <div />;

  const { edges } = data.findDemandPreviews;
  return (
    <>
      {edges.map((edge) => (
        <DemandPreview key={edge.node.id} demand={edge.node} type={type} />
      ))}
      <div ref={ref} />
    </>
  );
}

export default DemandFeed;
