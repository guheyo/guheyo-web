'use client';

import { BumpSwapInput, useFindSwapQuery } from '@/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import { bumpSwap } from '@/lib/api/swap';
import { parseSwapName } from '@/lib/swap/parse-swap-name';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { validateBump } from '@/lib/deal/validate-bump';
import { AuthContext } from '../auth/auth.provider';
import DealBumpForm from '../deals/deal-bump-form';

export default function SwapBumpForm({ id }: { id: string }) {
  const router = useRouter();
  const { jwtPayload } = useContext(AuthContext);
  const { loading, data } = useFindSwapQuery({
    variables: {
      id,
    },
  });
  const swap = data?.findSwap;

  if (loading) return <div />;
  if (!swap) return <div />;

  const handleSubmitValid: SubmitHandler<DealBumpValues> = async (values) => {
    if (!jwtPayload) return;
    if (!validateBump(swap.bumpedAt)) return;

    const input: BumpSwapInput = {
      id: values.id,
      swapId: values.dealId,
      proposerId: jwtPayload.id,
      newPrice: values.price,
    };
    await bumpSwap(input);
    router.back();
  };

  return (
    <DealBumpForm
      dealType="swap"
      dealId={swap.id}
      dealName={parseSwapName({ name0: swap.name0, name1: swap.name1 })}
      price={swap.price}
      thumbnail={swap.images[0]}
      bumpedAt={swap.bumpedAt}
      handleSubmitValid={handleSubmitValid}
    />
  );
}
