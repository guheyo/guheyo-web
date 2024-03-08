'use client';

import { SubmitHandler } from 'react-hook-form';
import { DealFormValues } from '@/lib/deal/deal.interfaces';
import parseCreateDealInput from '@/lib/deal/parse-create-deal-input';
import createDeal from '@/lib/deal/create-deal';
import { deleteUserImage } from '@/lib/api/user-image';
import DealForm from './deal-form';

export default function WriteDealForm() {
  const handleOnSubmitCallback: SubmitHandler<DealFormValues> = async (
    data,
  ) => {
    const input = parseCreateDealInput({
      dealFormValues: data,
    });

    await createDeal({
      dealType: data.dealType,
      createDealInput: input,
    });
  };

  const handleOnClickImagePreviewCallback = async (imageId: string) => {
    await deleteUserImage(imageId);
  };

  return (
    <DealForm
      onSubmitCallback={handleOnSubmitCallback}
      onClickImagePreviewCallback={handleOnClickImagePreviewCallback}
    />
  );
}
