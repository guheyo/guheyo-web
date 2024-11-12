'use client';

import { SubmitHandler } from 'react-hook-form';
import { deleteUserImage } from '@/lib/api/user-image';
import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import { createGroup } from '@/lib/api/group';
import { GroupFormValues } from '@/lib/group/group.interfaces';
import { parseTempGroupFormKey } from '@/lib/group/parse-temp-group-form-key';
import { AuthContext } from '../auth/auth.provider';
import BgDialog from '../base/bg-dialog';
import GroupForm from './group-form';

export default function WriteGroupForm() {
  const { jwtPayload } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [alertMessage] = useState('');
  const router = useRouter();
  const localStorageKey = parseTempGroupFormKey({
    userId: jwtPayload?.id || 'ghost',
  });

  const handleSubmitValid: SubmitHandler<GroupFormValues> = async (values) => {
    if (!jwtPayload) return;
    if (!values.image) return;

    secureLocalStorage.removeItem(localStorageKey);

    try {
      await createGroup({
        id: values.id,
        name: values.name,
        slug: values.name,
        description: values.description,
        icon: values.image.url,
      });

      router.push('/');
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
      <GroupForm
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
