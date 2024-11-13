'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { MouseEventHandler, useEffect } from 'react';
import {
  DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
  DEFAULT_INPUT_TEXT_COLOR,
} from '@/lib/input/input.colors';
import {
  getInputTextFontSize,
  getInputTextMinWidth,
} from '@/lib/input/input.props';
import { IMAGE_UPLOAD_REQUIRED_MESSAGE } from '@/lib/image/image.constants';
import { v4 as uuid4 } from 'uuid';
import secureLocalStorage from 'react-secure-storage';
import uploadAndSaveImages from '@/lib/image/upload-and-save-images';
import { GroupFormValues } from '@/lib/group/group.interfaces';
import parseUploadedImage from '@/lib/image/parse-uploaded-user-image';
import {
  POST_EDIT_SUBMIT_BUTTON_NAME,
  POST_WRITE_SUBMIT_BUTTON_NAME,
} from '@/lib/post/post.constants';
import {
  GROUP,
  GROUP_AUTO_SAVE_INTERVAL_MS,
} from '@/lib/group/group.constants';
import TextInput from '../inputs/text-input';
import {
  DEFAULT_LABEL_STYLE,
  STICKY_SUBMIT_BUTTON_STYLE,
  MOBILE_FILE_INPUT_LABEL_STYLE,
  DEFAULT_DESCRIPTION_STYLE,
} from '../../lib/input/input.styles';
import ImagesInput from '../inputs/images-input';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';
import TagsInput from '../inputs/tags-input';
import ImagePreviews from '../images/image.previews';

export default function GroupForm({
  localStorageKey,
  userId,
  prevFormValues,
  handleSubmitValid,
  onClickImagePreviewCallback,
}: {
  localStorageKey: string;
  userId?: string;
  prevFormValues?: GroupFormValues;
  handleSubmitValid: SubmitHandler<GroupFormValues>;
  onClickImagePreviewCallback: (imageId: string) => void;
}) {
  const device = useDeviceDetect();

  const { handleSubmit, control, watch, setValue, reset } =
    useForm<GroupFormValues>({
      defaultValues: {
        id: undefined,
        name: undefined,
        slug: undefined,
        categoryNames: [],
        categoryName: undefined,
        description: undefined,
        image: undefined,
      },
    });

  const groupId = watch('id');
  const image = watch('image');
  const categoryNames = watch('categoryNames');

  // Init GroupFormValues
  useEffect(() => {
    if (groupId || !userId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as GroupFormValues | null;
    if (tempValues) {
      reset(tempValues);
    } else if (prevFormValues) {
      reset(prevFormValues);
    } else {
      const newId = uuid4();
      setValue('id', newId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId, userId, prevFormValues]);

  const updateValues = () => {
    if (!groupId || !userId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as GroupFormValues | null;
    const currentValues = watch();
    const notChanged =
      JSON.stringify(tempValues) === JSON.stringify(currentValues);
    if (!notChanged) {
      secureLocalStorage.setItem(localStorageKey, currentValues);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateValues, GROUP_AUTO_SAVE_INTERVAL_MS);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupId, userId, localStorageKey]);

  const handleChangeFileInput = async (files: FileList | null) => {
    if (!files) return;
    if (!userId) return;

    const file = files.item(0);
    if (!file) return;

    const uploadedImage = parseUploadedImage({
      file,
    });

    const userImages = await uploadAndSaveImages({
      uploadedImages: [uploadedImage],
      type: GROUP,
      refId: groupId,
    });

    setValue('image', userImages[0]);
  };

  const handleClickImagePreview = async (position: number) => {
    if (!image) return;

    await onClickImagePreviewCallback(image.id);
    setValue('image', undefined);
  };

  const handleSubmitError: SubmitErrorHandler<GroupFormValues> = (
    errors,
    event,
  ) => {
    // TODO
  };

  const handleAuthorization: MouseEventHandler = (e) => {
    // Do nothing
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  const handleAddTag = (tag: string) => {
    if (!categoryNames || !categoryNames.includes(tag)) {
      setValue('categoryNames', [...(categoryNames || []), tag]);
    }
  };

  return (
    <form
      className="flex flex-col gap-8 w-full"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <TextInput
        name="name"
        control={control}
        rules={{ required: '그룹 이름을 입력해 주세요' }}
        textInputProps={{
          label: {
            name: '그룹 이름',
            style: DEFAULT_LABEL_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: '키보드',
          InputProps: {
            sx: {
              color: DEFAULT_INPUT_TEXT_COLOR,
              borderRadius: 2,
              fontSize: getInputTextFontSize(device),
              backgroundColor: DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
              fontWeight: 600,
              minWidth: getInputTextMinWidth(device),
            },
          },
        }}
      />
      <ImagesInput
        name="image"
        control={control}
        rules={{
          required: IMAGE_UPLOAD_REQUIRED_MESSAGE,
        }}
        imagesInputProps={{
          label: {
            name: '아이콘',
            style: MOBILE_FILE_INPUT_LABEL_STYLE,
          },
          icon: {
            fontSize: 'large',
          },
          onChange: handleChangeFileInput,
        }}
        inputProps={{
          multiple: true,
          hidden: true,
        }}
      />
      <ImagePreviews
        images={image ? [image] : []}
        previewsProp={{
          onClick: handleClickImagePreview,
        }}
      />
      <TagsInput
        name="categoryName"
        control={control}
        textInputProps={{
          label: {
            name: '카테고리',
            style: DEFAULT_LABEL_STYLE,
          },
          description: {
            name: '쉼표 또는 엔터를 입력하여 카테고리를 등록할 수 있어요',
            style: DEFAULT_DESCRIPTION_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: '커스텀, 키캡, 아티산',
          InputProps: {
            sx: {
              color: DEFAULT_INPUT_TEXT_COLOR,
              borderRadius: 2,
              fontSize: getInputTextFontSize(device),
              backgroundColor: DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
              fontWeight: 600,
              minWidth: getInputTextMinWidth(device),
            },
          },
          multiline: true,
          minRows: 1,
        }}
        onTagAdd={handleAddTag}
      />
      <TextInput
        name="description"
        control={control}
        textInputProps={{
          label: {
            name: '설명',
            style: DEFAULT_LABEL_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: '그룹을 간략하게 설명해 주세요',
          InputProps: {
            sx: {
              color: DEFAULT_INPUT_TEXT_COLOR,
              borderRadius: 2,
              fontSize: getInputTextFontSize(device),
              backgroundColor: DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
              fontWeight: 600,
              minWidth: getInputTextMinWidth(device),
            },
          },
          multiline: true,
          minRows: 5,
        }}
      />
      {prevFormValues ? (
        <div className={STICKY_SUBMIT_BUTTON_STYLE}>
          <DiscordLoginDialogButton
            name={POST_EDIT_SUBMIT_BUTTON_NAME}
            onAuthorization={handleAuthorization}
            onUnAuthorization={handleUnAuthorization}
          />
        </div>
      ) : (
        <div className={STICKY_SUBMIT_BUTTON_STYLE}>
          <DiscordLoginDialogButton
            name={POST_WRITE_SUBMIT_BUTTON_NAME}
            onAuthorization={handleAuthorization}
            onUnAuthorization={handleUnAuthorization}
          />
        </div>
      )}
    </form>
  );
}
