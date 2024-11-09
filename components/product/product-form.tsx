'use client';

import {
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
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
import { ProductFormValues } from '@/lib/product/product.interfaces';
import {
  POST_EDIT_SUBMIT_BUTTON_NAME,
  POST_WRITE_SUBMIT_BUTTON_NAME,
} from '@/lib/post/post.constants';
import parseUploadedImages from '@/lib/image/parse-uploaded-user-images';
import {
  PRODUCT,
  PRODUCT_AUTO_SAVE_INTERVAL_MS,
} from '@/lib/product/product.constants';
import TextInput from '../inputs/text-input';
import {
  DEFAULT_LABEL_STYLE,
  STICKY_SUBMIT_BUTTON_STYLE,
  MOBILE_FILE_INPUT_LABEL_STYLE,
} from '../../lib/input/input.styles';
import ImagesInput from '../inputs/images-input';
import ImagePreviews from '../images/image.previews';
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';
import BrandAutocomplete from '../brand/brand-autocomplete';
import GroupAutocomplete from '../groups/group-autocomplete';
import CategoryAutocomplete from '../categories/category-autocomplete';

export default function ProductForm({
  localStorageKey,
  userId,
  prevFormValues,
  handleSubmitValid,
  onClickImagePreviewCallback,
}: {
  localStorageKey: string;
  userId?: string;
  prevFormValues?: ProductFormValues;
  handleSubmitValid: SubmitHandler<ProductFormValues>;
  onClickImagePreviewCallback: (imageId: string) => void;
}) {
  const device = useDeviceDetect();

  const { handleSubmit, control, watch, setValue, reset } =
    useForm<ProductFormValues>({
      defaultValues: {
        id: '',
        name: '',
        description: '',
        groupId: undefined,
        categoryId: undefined,
        brandId: undefined,
        images: [],
      },
    });

  const { remove } = useFieldArray({
    control,
    name: 'images',
  });

  const productId = watch('id');
  const groupId = watch('groupId');
  const categoryId = watch('categoryId');
  const brandId = watch('brandId');
  const images = watch('images');

  // Init ProductFormValues
  useEffect(() => {
    if (productId || !userId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as ProductFormValues | null;
    if (tempValues) {
      reset(tempValues);
    } else if (prevFormValues) {
      reset(prevFormValues);
    } else {
      const newId = uuid4();
      setValue('id', newId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, userId, prevFormValues]);

  const updateValues = () => {
    if (!productId || !userId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as ProductFormValues | null;
    const currentValues = watch();
    const notChanged =
      JSON.stringify(tempValues) === JSON.stringify(currentValues);
    if (!notChanged) {
      secureLocalStorage.setItem(localStorageKey, currentValues);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateValues, PRODUCT_AUTO_SAVE_INTERVAL_MS);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, userId, localStorageKey]);

  const handleChangeFileInput = async (files: FileList | null) => {
    if (!files) return;
    if (!userId) return;

    const uploadedImages = parseUploadedImages({
      files,
      offset: images.length,
    });

    const userImages = await uploadAndSaveImages({
      uploadedImages,
      type: PRODUCT,
      refId: productId,
    });

    userImages.map((userImage) =>
      setValue(`images.${userImage.position}`, userImage),
    );
  };

  const handleClickImagePreview = async (position: number) => {
    const imageId = images.find((image) => image.position === position)?.id;
    if (!imageId) return;

    await onClickImagePreviewCallback(imageId);

    remove(position);
  };

  const handleGroupSelect = (id: string) => {
    setValue('groupId', id);
  };

  const handleCategorySelect = (id: string) => {
    setValue('categoryId', id);
  };

  const handleBrandSelect = (id?: string) => {
    setValue('brandId', id);
  };

  const handleSubmitError: SubmitErrorHandler<ProductFormValues> = (
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
        rules={{ required: '제품 이름을 입력해 주세요' }}
        textInputProps={{
          label: {
            name: '제품 이름',
            style: DEFAULT_LABEL_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: '356 CL',
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
        name="images"
        control={control}
        rules={{
          required: IMAGE_UPLOAD_REQUIRED_MESSAGE,
        }}
        imagesInputProps={{
          label: {
            name: '이미지 업로드',
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
        images={images}
        previewsProp={{
          onClick: handleClickImagePreview,
        }}
      />

      <div className="flex flex-col gap-2">
        <div className={DEFAULT_LABEL_STYLE}>그룹</div>
        <GroupAutocomplete
          handleClick={handleGroupSelect}
          defaultWhere={{
            groupIds: undefined,
            brandIds: undefined,
          }}
          selectedId={groupId}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className={DEFAULT_LABEL_STYLE}>카테고리</div>
        <CategoryAutocomplete
          groupId={groupId}
          categoryTypes={['product']}
          handleClick={handleCategorySelect}
          selectedId={categoryId}
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className={DEFAULT_LABEL_STYLE}>브랜드</div>
        <BrandAutocomplete
          groupId={groupId}
          handleClick={handleBrandSelect}
          selectedId={brandId}
        />
      </div>

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
