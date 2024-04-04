'use client';

import { BumpOfferInput, useFindOfferQuery } from '@/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { bumpOffer } from '@/lib/api/offer';
import { DealBumpValues } from '@/lib/deal/deal.interfaces';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { validateCooldown } from '@/lib/date/validate-cooldown';
import { parseDealTermAlertMessage } from '@/lib/deal/parse-deal-term-alert-message';
import { isPostingLimitExceededError } from '@/lib/deal/is-posting-limit-exceeded-error';
import DealBumpForm from '../deals/deal-bump-form';
import { AuthContext } from '../auth/auth.provider';
import AlertDialog from '../base/alert-dialog';

export default function OfferBumpForm({ id }: { id: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const { jwtPayload } = useContext(AuthContext);
  const { loading, data } = useFindOfferQuery({
    variables: {
      id,
    },
    fetchPolicy: 'cache-and-network',
  });
  const offer = data?.findOffer;

  if (loading) return <div />;
  if (!offer) return <div />;

  const handleSubmitValid: SubmitHandler<DealBumpValues> = async (values) => {
    if (!jwtPayload) return;
    if (!validateCooldown(offer.bumpedAt)) return;

    const input: BumpOfferInput = {
      id: values.id,
      offerId: values.dealId,
      sellerId: jwtPayload.id,
      newPrice: values.price,
    };

    try {
      await bumpOffer(input);
      router.back();
    } catch (e: any) {
      if (isPostingLimitExceededError(e.message)) {
        const message = parseDealTermAlertMessage({
          dealType: 'offer',
          productCategoryName: offer.productCategory.name,
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
        dealType="offer"
        dealId={offer.id}
        dealName={offer.name}
        price={offer.price}
        thumbnail={offer.images[0]}
        bumpedAt={offer.bumpedAt}
        handleSubmitValid={handleSubmitValid}
      />
      <AlertDialog open={open} text={alertMessage} handleClose={handleClose} />
    </>
  );
}
