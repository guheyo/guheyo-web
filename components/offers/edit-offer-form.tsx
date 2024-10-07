'use client';

import { SubmitHandler } from 'react-hook-form';
import { OfferFormValues } from '@/lib/offer/offer.interfaces';
import { deleteUserImage } from '@/lib/api/user-image';
import { useFindGroupQuery } from '@/generated/graphql';
import { useContext } from 'react';
import { parseTempOfferFormKey } from '@/lib/offer/parse-temp-offer-form-key';
import { useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import { findOfferPreview, updateOffer } from '@/lib/api/offer';
import parseUpdateOfferInput from '@/lib/offer/parse-update-offer-input';
import { parseMarketLink } from '@/lib/offer/parse-market-link';
import { AuthContext } from '../auth/auth.provider';
import OfferForm from './offer-form';

export default function EditOfferForm({
  prevFormValues,
}: {
  prevFormValues: OfferFormValues;
}) {
  const { jwtPayload } = useContext(AuthContext);
  const router = useRouter();
  const { loading, data } = useFindGroupQuery({
    variables: {
      id: prevFormValues.groupId,
    },
  });

  const localStorageKey = parseTempOfferFormKey({
    userId: jwtPayload?.id || 'ghost',
    offerId: prevFormValues.id,
  });

  const handleSubmitValid: SubmitHandler<OfferFormValues> = async (values) => {
    if (!jwtPayload) return;

    secureLocalStorage.removeItem(localStorageKey);
    const input = parseUpdateOfferInput({
      offerFormValues: values,
    });
    await updateOffer(input);

    await findOfferPreview(input.id);

    router.push(
      parseMarketLink({
        groupSlug: data?.findGroup?.slug,
        businessFunction: prevFormValues.businessFunction,
      }),
    );
  };

  const handleOnClickImagePreviewCallback = async (imageId: string) => {
    await deleteUserImage(imageId);
  };

  if (loading) return <div />;
  if (!data?.findGroup) return <div />;

  return (
    <OfferForm
      localStorageKey={localStorageKey}
      userId={jwtPayload?.id}
      group={data.findGroup}
      prevFormValues={prevFormValues}
      handleSubmitValid={handleSubmitValid}
      onClickImagePreviewCallback={handleOnClickImagePreviewCallback}
    />
  );
}
