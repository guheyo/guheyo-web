'use client';

import { SubmitHandler } from 'react-hook-form';
import { OfferFormValues } from '@/lib/offer/offer.interfaces';
import { deleteUserImage } from '@/lib/api/user-image';
import { GroupResponse } from '@/generated/graphql';
import { useContext, useState } from 'react';
import { parseTempOfferFormKey } from '@/lib/offer/parse-temp-offer-form-key';
import { useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import { findCategory } from '@/lib/group/find-category';
import { parseOfferTermAlertMessage } from '@/lib/offer/parse-offer-term-alert-message';
import { isPostingLimitExceededError } from '@/lib/post/is-posting-limit-exceeded-error';
import parseCreateOfferInput from '@/lib/offer/parse-create-offer-input';
import { createOffer } from '@/lib/api/offer';
import { AuthContext } from '../auth/auth.provider';
import AlertDialog from '../base/alert-dialog';
import OfferForm from './offer-form';

export default function WriteOfferForm({ group }: { group: GroupResponse }) {
  const { jwtPayload } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const router = useRouter();
  const localStorageKey = parseTempOfferFormKey({
    userId: jwtPayload?.id || 'ghost',
    groupSlug: group.slug,
  });

  const handleSubmitValid: SubmitHandler<OfferFormValues> = async (values) => {
    if (!jwtPayload) return;

    secureLocalStorage.removeItem(localStorageKey);
    const input = parseCreateOfferInput({
      offerFormValues: values,
    });

    try {
      await createOffer(input);
      router.back();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (e: any) {
      if (isPostingLimitExceededError(e.message)) {
        const category = findCategory(group.categories, {
          id: values.categoryId,
        });
        if (!category) return;

        const message = parseOfferTermAlertMessage({
          businessFunction: values.businessFunction,
          categoryName: category.name,
        });
        setAlertMessage(message);
        setOpen(true);
      }
    }
  };

  const handleOnClickImagePreviewCallback = async (imageId: string) => {
    await deleteUserImage(imageId);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <OfferForm
        localStorageKey={localStorageKey}
        userId={jwtPayload?.id}
        group={group}
        handleSubmitValid={handleSubmitValid}
        onClickImagePreviewCallback={handleOnClickImagePreviewCallback}
      />
      <AlertDialog open={open} text={alertMessage} handleClose={handleClose} />
    </>
  );
}
