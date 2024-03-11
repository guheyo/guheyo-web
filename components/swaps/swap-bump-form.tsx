'use client';

import { BumpSwapInput, useFindSwapQuery } from '@/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { v4 as uuid4 } from 'uuid';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import { bumpSwap } from '@/lib/api/swap';
import { parseSwapName } from '@/lib/swap/parse-swap-name';
import DealBumpForm from '../deals/deal-bump-form';

export default function SwapBumpForm({ slug }: { slug: string }) {
  const { loading, data } = useFindSwapQuery({
    variables: {
      slug: decodeURI(slug),
    },
  });
  const swap = data?.findSwap;

  if (loading) return <div />;
  if (!swap) return <div />;

  const submitValidCallback: SubmitHandler<DealBumpValues> = async (values) => {
    const input: BumpSwapInput = {
      id: uuid4(),
      swapId: values.dealId,
      buyerId: values.userId,
      newPrice: values.price,
    };

    await bumpSwap(input);
  };

  return (
    <DealBumpForm
      dealType="swap"
      dealId={swap.id}
      dealName={parseSwapName({ name0: swap.name0, name1: swap.name1 })}
      groupSlug={swap.group.slug!}
      price={swap.price}
      thumbnail={swap.images[0]}
      submitValidCallback={submitValidCallback}
    />
  );
}
