'use client';

import { useFindSwapQuery } from '@/generated/graphql';
import { DealStatus } from '@/lib/deal/deal.types';
import DealDetail from '../deals/deal-detail';

export default function SwapDetail({ slug }: { slug: string }) {
  const { loading, data } = useFindSwapQuery({
    variables: {
      slug: decodeURI(slug),
    },
    fetchPolicy: 'network-only',
  });

  if (loading) return <div />;
  if (!data?.findSwap) return <div />;
  const swap = data.findSwap;

  return (
    <DealDetail
      id={swap.id}
      dealType="swap"
      dealStatus={swap.status as DealStatus}
      name0={swap.name0}
      name1={swap.name1}
      slug={swap.slug!}
      price={swap.price}
      shippingCost={swap.shippingCost}
      shippingType={swap.shippingType}
      description={swap.description0}
      bumpedAt={swap.bumpedAt}
      author={swap.proposer}
      images={swap.images}
      reportCount={swap.reportCount}
      reportCommentCount={swap.reportCommentCount}
    />
  );
}
