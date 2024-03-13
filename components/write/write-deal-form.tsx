'use client';

import { SubmitHandler } from 'react-hook-form';
import { DealFormValues } from '@/lib/deal/deal.interfaces';
import parseCreateDealInput from '@/lib/deal/parse-create-deal-input';
import createDeal from '@/lib/deal/create-deal';
import { deleteUserImage } from '@/lib/api/user-image';
import { GroupResponse } from '@/generated/graphql';
import { useContext } from 'react';
import { parseTempDealFormKey } from '@/lib/deal/parse-temp-deal-form-key';
import { useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import DealForm from './deal-form';
import { AuthContext } from '../auth/auth.provider';

export default function WriteDealForm({ group }: { group: GroupResponse }) {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  const localStorageKey = parseTempDealFormKey({
    userId: user?.id || 'ghost',
    groupSlug: group.slug,
  });

  const handleSubmitValid: SubmitHandler<DealFormValues> = async (values) => {
    if (!user) return;

    const input = parseCreateDealInput({
      authorId: user.id,
      dealFormValues: values,
    });
    await createDeal({
      dealType: values.dealType,
      createDealInput: input,
    });

    secureLocalStorage.removeItem(localStorageKey);
    router.back();
  };

  const handleOnClickImagePreviewCallback = async (imageId: string) => {
    await deleteUserImage(imageId);
  };

  return (
    <DealForm
      localStorageKey={localStorageKey}
      authorId={user?.id}
      group={group}
      handleSubmitValid={handleSubmitValid}
      onClickImagePreviewCallback={handleOnClickImagePreviewCallback}
    />
  );
}
