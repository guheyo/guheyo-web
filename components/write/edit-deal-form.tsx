'use client';

import { SubmitHandler } from 'react-hook-form';
import { DealFormValues } from '@/lib/deal/deal.interfaces';
import { deleteUserImage } from '@/lib/api/user-image';
import parseUpdateDealInput from '@/lib/deal/parse-update-deal-input';
import updateDeal from '@/lib/deal/update-deal';
import { useFindGroupQuery } from '@/generated/graphql';
import DealForm from './deal-form';

export default function EditDealForm({
  prevFormValues,
}: {
  prevFormValues: DealFormValues;
}) {
  const { loading, data } = useFindGroupQuery({
    variables: {
      id: prevFormValues.groupId,
    },
  });

  const handleOnSubmitCallback: SubmitHandler<DealFormValues> = async (
    values,
  ) => {
    const input = parseUpdateDealInput({
      dealFormValues: values,
    });

    await updateDeal({
      dealType: values.dealType,
      updateDealInput: input,
    });
  };

  const handleOnClickImagePreviewCallback = async (imageId: string) => {
    await deleteUserImage(imageId);
  };

  if (loading) return <div />;
  if (!data?.findGroup) return <div />;

  return (
    <DealForm
      group={data.findGroup}
      prevFormValues={prevFormValues}
      onSubmitCallback={handleOnSubmitCallback}
      onClickImagePreviewCallback={handleOnClickImagePreviewCallback}
    />
  );
}
