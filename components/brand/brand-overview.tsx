'use client';

import { Suspense } from 'react';
import { useInfiniteBrands } from '@/hooks/use-infinite-brands';
import { useGroup } from '@/hooks/use-group';
import { Mocks } from '../mock/mock';
import BrandHomeFeedLayout from './brand-home-feed.layout';
import BrandPreview from './brand-preview';

export default function BrandOverview() {
  const { group } = useGroup();
  const { loading, data } = useInfiniteBrands({
    where: {
      groupId: group?.id,
    },
    orderBy: {
      follower: 'desc',
    },
    take: 4,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findBrands) return <div />;

  const brands = data.findBrands.edges.map((edge) => edge.node);

  return (
    <Suspense>
      <BrandHomeFeedLayout
        postPreviewType="thumbnail"
        hideGroupProfileSidebarItems
        showChannels={false}
        showCategories={false}
        showSelectors={false}
        showMoreLink
      >
        {brands.map((brand) => (
          <BrandPreview
            type="thumbnail"
            brand={brand}
            key={brand.id}
            displayGroup
          />
        ))}
      </BrandHomeFeedLayout>
    </Suspense>
  );
}
