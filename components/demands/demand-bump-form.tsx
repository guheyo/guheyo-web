'use client';

import { BumpDemandInput, useFindDemandQuery } from '@/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import { bumpDemand } from '@/lib/api/demand';
import { useContext, useState } from 'react';
import { validateBump } from '@/lib/deal/validate-bump';
import { useRouter } from 'next/navigation';
import { isPostingLimitExceededError } from '@/lib/deal/is-posting-limit-exceeded-error';
import { parseDealTermAlertMessage } from '@/lib/deal/parse-deal-term-alert-message';
import DealBumpForm from '../deals/deal-bump-form';
import { AuthContext } from '../auth/auth.provider';
import AlertDialog from '../base/alert-dialog';

export default function DemandBumpForm({ id }: { id: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const { jwtPayload } = useContext(AuthContext);
  const { loading, data } = useFindDemandQuery({
    variables: {
      id,
    },
    nextFetchPolicy: 'cache-and-network',
  });
  const demand = data?.findDemand;

  if (loading) return <div />;
  if (!demand) return <div />;

  const handleSubmitValid: SubmitHandler<DealBumpValues> = async (values) => {
    if (!jwtPayload) return;
    if (!validateBump(demand.bumpedAt)) return;

    const input: BumpDemandInput = {
      id: values.id,
      demandId: values.dealId,
      buyerId: jwtPayload.id,
      newPrice: values.price,
    };

    try {
      await bumpDemand(input);
      router.back();
    } catch (e: any) {
      if (isPostingLimitExceededError(e.message)) {
        const message = parseDealTermAlertMessage({
          dealType: 'demand',
          productCategoryName: demand.productCategory.name,
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
        dealType="demand"
        dealId={demand.id}
        dealName={demand.name}
        price={demand.price}
        thumbnail={demand.images[0]}
        bumpedAt={demand.bumpedAt}
        handleSubmitValid={handleSubmitValid}
      />
      <AlertDialog open={open} text={alertMessage} handleClose={handleClose} />
    </>
  );
}
