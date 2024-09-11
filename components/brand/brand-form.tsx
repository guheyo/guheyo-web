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
import { BrandFormValues } from '@/lib/brand/brand.interfaces';
import {
  BRAND,
  BRAND_AUTO_SAVE_INTERVAL_MS,
} from '@/lib/brand/brand.constants';
import parseUploadedImage from '@/lib/image/parse-uploaded-user-image';
import {
  POST_EDIT_SUBMIT_BUTTON_NAME,
  POST_WRITE_SUBMIT_BUTTON_NAME,
} from '@/lib/post/post.constants';
import TextInput from '../inputs/text-input';
import {
  DEFAULT_LABEL_STYLE,
  STICKY_SUBMIT_BUTTON_STYLE,
  MOBILE_FILE_INPUT_LABEL_STYLE,
} from '../../lib/input/input.styles';
import ImagesInput from '../inputs/images-input';
import ImagePreviews from '../images/image.previews';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';
import SearchCheckbox from '../search/search-checkbox';
import GroupCheckboxResults from '../groups/group-checkbox-results';

export default function BrandForm({
  localStorageKey,
  userId,
  prevFormValues,
  handleSubmitValid,
  onClickImagePreviewCallback,
}: {
  localStorageKey: string;
  userId?: string;
  prevFormValues?: BrandFormValues;
  handleSubmitValid: SubmitHandler<BrandFormValues>;
  onClickImagePreviewCallback: (imageId: string) => void;
}) {
  const device = useDeviceDetect();

  const { handleSubmit, control, watch, setValue, reset } =
    useForm<BrandFormValues>({
      defaultValues: {
        id: '',
        name: '',
        slug: '',
        description: '',
        logo: '',
        image: undefined,
        groupIds: [],
      },
    });

  const brandId = watch('id');
  const image = watch('image');

  // Init BrandFormValues
  useEffect(() => {
    if (brandId || !userId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as BrandFormValues | null;
    if (tempValues) {
      reset(tempValues);
    } else if (prevFormValues) {
      reset(prevFormValues);
    } else {
      const newId = uuid4();
      setValue('id', newId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandId, userId, prevFormValues]);

  const updateValues = () => {
    if (!brandId || !userId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as BrandFormValues | null;
    const currentValues = watch();
    const notChanged =
      JSON.stringify(tempValues) === JSON.stringify(currentValues);
    if (!notChanged) {
      secureLocalStorage.setItem(localStorageKey, currentValues);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateValues, BRAND_AUTO_SAVE_INTERVAL_MS);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brandId, userId, localStorageKey]);

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
      type: BRAND,
      refId: brandId,
    });

    setValue('image', userImages[0]);
  };

  const handleClickImagePreview = async (position: number) => {
    if (!image) return;

    await onClickImagePreviewCallback(image.id);
    setValue('image', undefined);
  };

  const handleCheckboxClick = (selectedIds: string[]) => {
    setValue('groupIds', selectedIds);
  };

  const handleSubmitError: SubmitErrorHandler<BrandFormValues> = (
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

  return (
    <form
      className="flex flex-col gap-8 w-full"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <TextInput
        name="name"
        control={control}
        rules={{ required: '브랜드 이름을 입력해 주세요' }}
        textInputProps={{
          label: {
            name: '브랜드 이름',
            style: DEFAULT_LABEL_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: '애플',
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
      <TextInput
        name="slug"
        control={control}
        rules={{ required: '브랜드 식별자를 입력해 주세요' }}
        textInputProps={{
          label: {
            name: '브랜드 식별자',
            style: DEFAULT_LABEL_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: 'apple',
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
            name: '로고',
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
      <SearchCheckbox
        defaultSelectedIds={[]}
        placeholder="브랜드의 그룹을 선택해 주세요"
        where={{ userId }}
        type="listview"
        distinct={false}
        CheckboxResults={GroupCheckboxResults}
        handleClick={handleCheckboxClick}
        multiple
        showNextButton={false}
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
          placeholder: '',
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
          minRows: 10,
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
