'use client';

import { SubmitHandler } from 'react-hook-form';
import { deleteUserImage } from '@/lib/api/user-image';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import { ProductFormValues } from '@/lib/product/product.interfaces';
import { parseTempProductFormKey } from '@/lib/product/parse-temp-product-form-key';
import { createProduct, findProductPreview } from '@/lib/api/product';
import { updateCacheWithNewProduct } from '@/lib/apollo/cache/product';
import { AuthContext } from '../auth/auth.provider';
import BgDialog from '../base/bg-dialog';
import ProductForm from './product-form';

export default function WriteProductForm() {
  const { jwtPayload } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [alertMessage] = useState('');
  const router = useRouter();
  const localStorageKey = parseTempProductFormKey({
    userId: jwtPayload?.id || 'ghost',
  });

  const handleSubmitValid: SubmitHandler<ProductFormValues> = async (
    values,
  ) => {
    if (!jwtPayload) return;
    if (!values.groupId || !values.categoryId) return;

    secureLocalStorage.removeItem(localStorageKey);

    try {
      await createProduct({
        id: values.id,
        name: values.name,
        description: values.description,
        groupId: values.groupId,
        categoryId: values.categoryId,
        brandId: values.brandId,
      });

      const { data } = await findProductPreview(values.id);
      if (data.findProductPreview)
        updateCacheWithNewProduct(data.findProductPreview);

      router.push('/product');
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
      <ProductForm
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
