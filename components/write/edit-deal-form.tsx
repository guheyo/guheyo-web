'use client';

import { SubmitHandler } from 'react-hook-form';
import { DealFormValues } from '@/lib/deal/deal.interfaces';
import { deleteUserImage } from '@/lib/api/user-image';
import parseUpdateDealInput from '@/lib/deal/parse-update-deal-input';
import updateDeal from '@/lib/deal/update-deal';
import DealForm from './deal-form';

export default function EditDealForm({
  prevFormValues,
}: {
  prevFormValues: DealFormValues;
}) {
  const handleOnSubmitCallback: SubmitHandler<DealFormValues> = async (
    data,
  ) => {
    const input = parseUpdateDealInput({
      dealFormValues: data,
    });

    await updateDeal({
      dealType: data.dealType,
      updateDealInput: input,
    });
  };

  const handleOnClickImagePreviewCallback = async (imageId: string) => {
    await deleteUserImage(imageId);
  };

  return (
    <DealForm
      prevFormValues={prevFormValues}
      onSubmitCallback={handleOnSubmitCallback}
      onClickImagePreviewCallback={handleOnClickImagePreviewCallback}
    />
  );
}
