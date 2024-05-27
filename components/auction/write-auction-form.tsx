'use client';

import { SubmitHandler } from 'react-hook-form';
import { deleteUserImage } from '@/lib/api/user-image';
import { GroupResponse } from '@/generated/graphql';
import { useContext } from 'react';
import { parseTempOfferFormKey } from '@/lib/offer/parse-temp-offer-form-key';
import { useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import { createAuction } from '@/lib/api/auction';
import { AuctionFormValues } from '@/lib/auction/auction.types';
import { AuthContext } from '../auth/auth.provider';
import parseCreateAuctionInput from '../../lib/auction/parse-create-auction-input';
import AuctionForm from './auction-form';

export default function WriteAuctionForm({ group }: { group: GroupResponse }) {
  const { jwtPayload } = useContext(AuthContext);
  const router = useRouter();
  const localStorageKey = parseTempOfferFormKey({
    userId: jwtPayload?.id || 'ghost',
    groupSlug: group.slug,
  });

  const handleSubmitValid: SubmitHandler<AuctionFormValues> = async (
    values,
  ) => {
    if (!jwtPayload) return;

    secureLocalStorage.removeItem(localStorageKey);
    const input = parseCreateAuctionInput({
      auctionFormValues: values,
    });
    await createAuction(input);
    router.back();
  };

  const handleOnClickImagePreviewCallback = async (imageId: string) => {
    await deleteUserImage(imageId);
  };

  return (
    <AuctionForm
      localStorageKey={localStorageKey}
      userId={jwtPayload?.id}
      group={group}
      handleSubmitValid={handleSubmitValid}
      onClickImagePreviewCallback={handleOnClickImagePreviewCallback}
    />
  );
}
