'use client';

import { SubmitHandler } from 'react-hook-form';
import { deleteUserImage } from '@/lib/api/user-image';
import { GroupResponse } from '@/generated/graphql';
import { useContext, useState } from 'react';
import { parseTempAuctionFormKey } from '@/lib/auction/parse-temp-auction-form-key';
import { useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import { createAuction, findAuctionPreview } from '@/lib/api/auction';
import { AuctionFormValues } from '@/lib/auction/auction.types';
import { parseAuctionAlertMessage } from '@/lib/auction/parse-auction-alert-message';
import { updateCacheWithNewAuction } from '@/lib/apollo/cache/auction';
import { AuthContext } from '../auth/auth.provider';
import parseCreateAuctionInput from '../../lib/auction/parse-create-auction-input';
import AuctionForm from './auction-form';
import AlertDialog from '../base/alert-dialog';

export default function WriteAuctionForm({ group }: { group: GroupResponse }) {
  const { jwtPayload } = useContext(AuthContext);
  const router = useRouter();
  const localStorageKey = parseTempAuctionFormKey({
    userId: jwtPayload?.id || 'ghost',
    groupSlug: group.slug,
  });
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmitValid: SubmitHandler<AuctionFormValues> = async (
    values,
  ) => {
    if (!jwtPayload) return;

    secureLocalStorage.removeItem(localStorageKey);
    const input = parseCreateAuctionInput({
      auctionFormValues: values,
    });

    try {
      await createAuction(input);

      const { data } = await findAuctionPreview(input.id);
      if (data.findAuctionPreview)
        updateCacheWithNewAuction(data.findAuctionPreview);

      router.push('/auction');
    } catch (e: any) {
      const message = parseAuctionAlertMessage(e.message);
      setAlertMessage(message);
      setOpen(true);
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
      <AuctionForm
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
