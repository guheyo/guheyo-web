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
import { useSearchParams } from 'next/navigation';
import { findProductCategory } from '@/lib/group/find-product-category';
import { convertPeriodToDateString } from '@/lib/date/date.converter';
import { parseDealStatus } from '@/lib/deal/parse-deal-status';

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
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const status = parseDealStatus({
    status: searchParams.get('status'),
    filterByAuthor: !!where?.buyerId,
  });
  const distinct = searchParams.get('distinct') !== 'false';
  const period = searchParams.get('period');
  const category = findProductCategory(group?.productCategories, {
    slug: categorySlug,
  });
  const from = convertPeriodToDateString(period);

  const { loading, data } = useInfiniteDemandFeed({
    ref,
    where: {
      groupId: group?.id,
      productCategoryId: category?.id,
      status,
      buyerId: where?.buyerId,
      bumpedAt: {
        gt: from,
      },
    },
    orderBy: {
      bumpedAt: orderBy?.bumpedAt || 'desc',
      price: orderBy?.price,
    },
    keyword,
    distinct,
    take: 15,
  });

  if (loading) return <Mocks length={12} height={32} color="bg-dark-400" />;
  if (!data?.findDemandPreviews) return <div />;

  const edges = data.findDemandPreviews.edges.filter((edge) =>
    status ? edge.node.status === status : true,
  );
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
