'use client';

import { SubmitHandler } from 'react-hook-form';
import { DealFormValues } from '@/lib/deal/deal.interfaces';
import { deleteUserImage } from '@/lib/api/user-image';
import { parseUpdateDealInputFromFormValues } from '@/lib/deal/parse-update-deal-input';
import { useFindGroupQuery } from '@/generated/graphql';
import { updateDeal } from '@/lib/api/deal';
import { useContext } from 'react';
import { parseTempDealFormKey } from '@/lib/deal/parse-temp-deal-form-key';
import { useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import DealForm from './deal-form';
import { AuthContext } from '../auth/auth.provider';

export default function EditDealForm({
  prevFormValues,
}: {
  prevFormValues: DealFormValues;
}) {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const { loading, data } = useFindGroupQuery({
    variables: {
      id: prevFormValues.groupId,
    },
  });

  const localStorageKey = parseTempDealFormKey({
    userId: user?.id || 'ghost',
    prevDealId: prevFormValues.id,
  });

  const handleSubmitValid: SubmitHandler<DealFormValues> = async (values) => {
    if (!user) return;

    const input = parseUpdateDealInputFromFormValues({
      authorId: user.id,
      dealFormValues: values,
    });
    await updateDeal({
      dealType: values.dealType,
      updateDealInput: input,
    });

    secureLocalStorage.removeItem(localStorageKey);
    router.back();
  };

  const handleOnClickImagePreviewCallback = async (imageId: string) => {
    await deleteUserImage(imageId);
  };

  if (loading) return <div />;
  if (!data?.findGroup) return <div />;

  return (
    <DealForm
      localStorageKey={localStorageKey}
      authorId={user?.id}
      group={data.findGroup}
      prevFormValues={prevFormValues}
      handleSubmitValid={handleSubmitValid}
      onClickImagePreviewCallback={handleOnClickImagePreviewCallback}
    />
  );
}
