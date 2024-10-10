'use client';

import { BrandPreviewResponse } from '@/generated/graphql';
import { useInfiniteBrands } from '@/hooks/use-infinite-brands';
import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useGroup } from '@/hooks/use-group';
import { getFindBrandsOrderByArgs } from '@/lib/brand/get-find-brands-order-by-args';
import { PostPreviewType } from '@/lib/post/post.types';
import BrandPreview from './brand-preview';

export default function BrandFeed({ type }: { type: PostPreviewType }) {
  const ref = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const followed = [null, 'all'].includes(searchParams.get('followed'))
    ? undefined
    : searchParams.get('followed') === 'true';
  const orderBy = getFindBrandsOrderByArgs({
    sortOrder: searchParams.get('sort') || 'follower',
  });
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;
  const { group } = useGroup();

  const { loading, data } = useInfiniteBrands({
    ref,
    where: {
      groupId: group?.id,
      followed,
    },
    orderBy,
    keyword,
    target,
    take: 12,
  });
  if (loading) return <div />;
  if (!data?.findBrands) return <div />;

  const { edges } = data.findBrands;
  return (
    <>
      {edges.map((edge) => (
        <BrandPreview
          type={type}
          brand={edge.node as BrandPreviewResponse}
          key={edge.cursor}
          displayGroup={!group || group.name === 'root'}
        />
      ))}
      <div ref={ref} />
    </>
  );
}
