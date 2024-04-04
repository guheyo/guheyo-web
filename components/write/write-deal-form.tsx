'use client';

import { SubmitHandler } from 'react-hook-form';
import { DealFormValues } from '@/lib/deal/deal.interfaces';
import parseCreateDealInput from '@/lib/deal/parse-create-deal-input';
import createDeal from '@/lib/deal/create-deal';
import { deleteUserImage } from '@/lib/api/user-image';
import { GroupResponse } from '@/generated/graphql';
import { useContext, useState } from 'react';
import { parseTempDealFormKey } from '@/lib/deal/parse-temp-deal-form-key';
import { useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import { findDealCount } from '@/lib/api/deal';
import { validateDealTerm } from '@/lib/deal/validate-deal-term';
import { findProductCategory } from '@/lib/group/find-product-category';
import { parseDealTermAlertMessage } from '@/lib/deal/parse-deal-term-alert-message';
import { DAY_HOURS } from '@/lib/date/date.constants';
import DealForm from './deal-form';
import { AuthContext } from '../auth/auth.provider';
import AlertDialog from '../base/alert-dialog';

export default function WriteDealForm({ group }: { group: GroupResponse }) {
  const { jwtPayload } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const router = useRouter();
  const localStorageKey = parseTempDealFormKey({
    userId: jwtPayload?.id || 'ghost',
    groupSlug: group.slug,
  });

  const handleSubmitValid: SubmitHandler<DealFormValues> = async (values) => {
    if (!jwtPayload) return;

    const count = await findDealCount({
      dealType: values.dealType,
      authorId: jwtPayload.id,
      productCategoryId: values.productCategoryId,
      fromHours: DAY_HOURS,
    });
    if (!validateDealTerm(count)) {
      const category = findProductCategory(group.productCategories, {
        id: values.productCategoryId,
      });
      if (!category) return;

      const message = parseDealTermAlertMessage({
        dealType: values.dealType,
        productCategoryName: category?.name,
      });
      setAlertMessage(message);
      setOpen(true);
      return;
    }
    const input = parseCreateDealInput({
      authorId: jwtPayload.id,
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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <DealForm
        localStorageKey={localStorageKey}
        authorId={jwtPayload?.id}
        group={group}
        handleSubmitValid={handleSubmitValid}
        onClickImagePreviewCallback={handleOnClickImagePreviewCallback}
      />
      <AlertDialog open={open} text={alertMessage} handleClose={handleClose} />
    </>
  );
}
