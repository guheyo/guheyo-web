'use client';

import { BumpSwapInput, useFindSwapQuery } from '@/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import { bumpSwap } from '@/lib/api/swap';
import { parseSwapName } from '@/lib/swap/parse-swap-name';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { validateBump } from '@/lib/deal/validate-bump';
import { isPostingLimitExceededError } from '@/lib/deal/is-posting-limit-exceeded-error';
import { parseDealTermAlertMessage } from '@/lib/deal/parse-deal-term-alert-message';
import { AuthContext } from '../auth/auth.provider';
import DealBumpForm from '../deals/deal-bump-form';
import AlertDialog from '../base/alert-dialog';

export default function SwapBumpForm({ id }: { id: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
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

    try {
      await bumpSwap(input);
      router.back();
    } catch (e: any) {
      if (isPostingLimitExceededError(e.message)) {
        const message = parseDealTermAlertMessage({
          dealType: 'swap',
          productCategoryName: swap.productCategory.name,
        });
        setAlertMessage(message);
        setOpen(true);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DealBumpForm
        dealType="swap"
        dealId={swap.id}
        dealName={parseSwapName({ name0: swap.name0, name1: swap.name1 })}
        price={swap.price}
        thumbnail={swap.images[0]}
        bumpedAt={swap.bumpedAt}
        handleSubmitValid={handleSubmitValid}
      />
      <AlertDialog open={open} text={alertMessage} handleClose={handleClose} />
    </>
  );
}
