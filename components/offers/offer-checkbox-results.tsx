'use client';

import { useRef } from 'react';
import { Mocks } from '@/components/mock/mock';
import { useInfiniteOfferFeed } from '@/hooks/use-infinite-offer-feed';
import OfferPreview from '@/components/offers/offer-preview';
import { Checkbox } from '@mui/material';
import tailwindConfig from '@/tailwind.config';
import { Control, useController } from 'react-hook-form';
import { CheckboxFormValues } from '@/lib/search/search.types';
import { PostPreviewType } from '@/lib/post/post.types';
import {
  FindOfferPreviewsOrderByInput,
  FindOfferPreviewsWhereInput,
} from '@/generated/graphql';
import { useSearchParams } from 'next/navigation';

const {
  theme: { colors },
} = tailwindConfig;

function OfferCheckboxResults({
  where,
  orderBy,
  type,
  distinct,
  control,
  handleCheckboxClick,
}: {
  where: FindOfferPreviewsWhereInput;
  orderBy?: FindOfferPreviewsOrderByInput;
  type: PostPreviewType;
  distinct: boolean;
  control: Control<CheckboxFormValues>;
  handleCheckboxClick: (seletedId: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { field } = useController({ name: 'selectedIds', control });
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q') || undefined;
  const target = searchParams.get('target') || undefined;

  const { loading, data } = useInfiniteOfferFeed({
    ref,
    where: {
      businessFunction: where.businessFunction,
      status: where.status,
      userId: where.userId,
    },
    orderBy: {
      bumpedAt: orderBy?.bumpedAt || 'desc',
      price: orderBy?.price,
    },
    keyword,
    target,
    distinct,
    take: 12,
  });

  const handleClick = (offerId: string) => {
    handleCheckboxClick(offerId);
  };

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findOfferPreviews) return <div />;

  const edges = data.findOfferPreviews.edges.filter((edge) =>
    where.status ? edge.node.status === where.status : true,
  );

  return (
    <>
      {edges.map((edge) => (
        <div key={edge.node.id} className="flex flex-row">
          <Checkbox
            style={{ color: colors['light-200'] }}
            checked={field.value.includes(edge.node.id)}
            onChange={() => handleClick(edge.node.id)}
          />
          <div className="w-full">
            <OfferPreview offer={edge.node} type={type} displayGroup />
          </div>
        </div>
      ))}
      <div ref={ref} className="h-1" />
    </>
  );
}

export default OfferCheckboxResults;
