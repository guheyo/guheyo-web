'use client';

import { AuthContext } from '@/components/auth/auth.provider';
import OfferBumpForm from '@/components/offers/offer-bump-form';
import { BumpOfferInput, useFindOfferQuery } from '@/generated/graphql';
import { bumpOffer } from '@/lib/api/offer';
import { validateCooldown } from '@/lib/date/validate-cooldown';
import { BumpFormValues } from '@/lib/offer/offer.interfaces';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { parseOfferTermAlertMessage } from '@/lib/offer/parse-offer-term-alert-message';
import { isPostingLimitExceededError } from '@/lib/post/is-posting-limit-exceeded-error';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import OfferBumpFormLayout from '@/components/offers/offer-bump-form.layout';
import AlertDialog from '@/components/base/alert-dialog';

function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
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

  const handleSubmitValid: SubmitHandler<BumpFormValues> = async (values) => {
    if (!jwtPayload) return;
    if (!validateCooldown(offer.bumpedAt)) return;

    const input: BumpOfferInput = {
      id: values.id,
      offerId: values.id,
      newPrice: values.price,
    };

    try {
      await bumpOffer(input);
      router.back();
    } catch (e: any) {
      if (isPostingLimitExceededError(e.message)) {
        const message = parseOfferTermAlertMessage({
          businessFunction: offer.businessFunction as BusinessFunction,
          categoryName: offer.post.category?.name!,
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
    <OfferBumpFormLayout>
      <OfferBumpForm
        businessFunction={offer.businessFunction as BusinessFunction}
        offerId={offer.id}
        title={offer.post.title}
        price={offer.price}
        thumbnail={offer.post.thumbnail || undefined}
        bumpedAt={offer.bumpedAt}
        handleSubmitValid={handleSubmitValid}
      />
      <AlertDialog open={open} text={alertMessage} handleClose={handleClose} />
    </OfferBumpFormLayout>
  );
}
export default Page;
