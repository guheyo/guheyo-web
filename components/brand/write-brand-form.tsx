'use client';

import { SubmitHandler } from 'react-hook-form';
import { deleteUserImage } from '@/lib/api/user-image';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import { BrandFormValues } from '@/lib/brand/brand.interfaces';
import { createBrand, findBrandPreview } from '@/lib/api/brand';
import { updateCacheWithNewBrand } from '@/lib/apollo/cache/brand';
import { AuthContext } from '../auth/auth.provider';
import { parseTempBrandFormKey } from '../../lib/brand/parse-temp-brand-form-key';
import BrandForm from './brand-form';
import BgDialog from '../base/bg-dialog';

export default function WriteBrandForm() {
  const { jwtPayload } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [alertMessage] = useState('');
  const router = useRouter();
  const localStorageKey = parseTempBrandFormKey({
    userId: jwtPayload?.id || 'ghost',
  });

  const handleSubmitValid: SubmitHandler<BrandFormValues> = async (values) => {
    if (!jwtPayload) return;
    if (!values.image) return;
    if (values.groupIds.length === 0) return;

    secureLocalStorage.removeItem(localStorageKey);

    try {
      await createBrand({
        id: values.id,
        name: values.name,
        slug: values.slug,
        description: values.description,
        logo: values.image.url,
        groupIds: values.groupIds,
        categoryIds: values.categoryIds,
        links: values.links.filter((link) => link.url),
      });

      const { data } = await findBrandPreview(values.id);
      if (data.findBrandPreview) updateCacheWithNewBrand(data.findBrandPreview);

      router.push('/brand');
    } catch (e: any) {
      // do nothing
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
      <BrandForm
        localStorageKey={localStorageKey}
        userId={jwtPayload?.id}
        handleSubmitValid={handleSubmitValid}
        onClickImagePreviewCallback={handleOnClickImagePreviewCallback}
      />
      <BgDialog
        open={open}
        title="안내"
        content={alertMessage}
        closeButtonName="확인"
        onClose={handleClose}
      />
    </>
  );
}
