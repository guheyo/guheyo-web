'use client';

import { useFindSwapQuery } from '@/generated/graphql';
import DealDetail from '../deals/deal-detail';

export default function SwapDetail({ slug }: { slug: string }) {
  const { loading, data } = useFindSwapQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });

  if (loading) return <div />;
  if (!data?.findSwap) return <div />;
  const swap = data.findSwap;

  return (
    <DealDetail
      dealType="offer"
      id={swap.id}
      name0={swap.name0}
      name1={swap.name1}
      slug={swap.slug!}
      price={swap.price}
      description={swap.description0}
      bumpedAt={swap.bumpedAt}
      author={swap.proposer}
      images={swap.images}
      reports={swap.reports}
    />
  )
}
