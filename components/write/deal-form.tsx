'use client';

import {
  FieldPath,
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { MouseEventHandler, WheelEventHandler, useEffect } from 'react';
import { findDefaultProductCategory } from '@/lib/group/find-default-product-category';
import {
  DEAL_AUTO_SAVE_INTERVAL_MS,
  DEAL_CATEGORY_LABEL_NAME,
  DEAL_DESCRIPTION_LABEL_NAME,
  DEAL_DESCRIPTION_REQUIRED_MESSAGE,
  DEAL_EDIT_SUBMIT_BUTTON_NAME,
  DEAL_NAME,
  DEAL_NAME_PLACEHOLDER,
  DEAL_NAME_REQUIRED_MESSAGE,
  DEAL_PRICE_REQUIRED_MESSAGE,
  DEAL_TYPE_LABEL_NAME,
  DEAL_WRITE_SUBMIT_BUTTON_NAME,
} from '@/lib/deal/deal.constants';
import { parseDealDescriptionPlaceholder } from '@/lib/deal/parse-deal-description-placeholder';
import {
  DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
  DEFAULT_INPUT_TEXT_COLOR,
} from '@/lib/input/input.colors';
import {
  getInputTextFontSize,
  getInputTextMinWidth,
} from '@/lib/input/input.props';
import {
  IMAGE_UPLOAD_LABEL_NAME,
  IMAGE_UPLOAD_REQUIRED_MESSAGE,
} from '@/lib/image/image.constants';
import { v4 as uuid4 } from 'uuid';
import {
  SWAP_NAME0_LABEL_NAME,
  SWAP_NAME0_PLACEHOLDER,
  SWAP_NAME0_REQUIRED_MESSAGE,
  SWAP_NAME1_LABEL_NAME,
  SWAP_NAME1_PLACEHOLDER,
  SWAP_NAME1_REQUIRED_MESSAGE,
} from '@/lib/swap/swap.constants';
import { DealFormValues } from '@/lib/deal/deal.interfaces';
import secureLocalStorage from 'react-secure-storage';
import parseUploadedImages from '@/lib/image/parse-uploaded-user-images';
import uploadAndSaveImages from '@/lib/image/upload-and-save-images';
import { parseDealTypeButtonOptions } from '@/lib/deal/parse-deal-options';
import { GroupResponse } from '@/generated/graphql';
import { parseDealPriceName } from '@/lib/deal/parse-deal-price-name';
import {
  SHIPPING_COST_LABEL_NAME,
  SHIPPING_FREE,
  SHIPPING_TYPE_LABEL_NAME,
  SHIPPING_TYPE_OPTIONS,
} from '@/lib/shipping/shipping.constants';
import TextInput from '../inputs/text-input';
import ButtonInputs from '../inputs/button-inputs';
import {
  DEFAULT_INPUT_BUTTON_STYLE,
  DEFAULT_LABEL_STYLE,
  STICKY_SUBMIT_BUTTON_STYLE,
  MOBILE_FILE_INPUT_LABEL_STYLE,
  SELECTED_INPUT_BUTTON_STYLE,
} from '../../lib/input/input.styles';
import ImagesInput from '../inputs/images-input';
import ImagePreviews from '../images/image.previews';
import DiscordLoginDialog from '../auth/discord-login-dialog';

export default function DealForm({
  localStorageKey,
  authorId,
  group,
  prevFormValues,
  handleSubmitValid,
  onClickImagePreviewCallback,
}: {
  localStorageKey: string;
  authorId?: string;
  group: GroupResponse;
  prevFormValues?: DealFormValues;
  handleSubmitValid: SubmitHandler<DealFormValues>;
  onClickImagePreviewCallback: (imageId: string) => void;
}) {
  const device = useDeviceDetect();

  const { handleSubmit, control, watch, setValue, reset } =
    useForm<DealFormValues>({
      defaultValues: {
        id: '',
        groupId: group.id,
        images: [],
        name0: '',
        dealType: 'offer',
        productCategoryId: '',
        price: undefined,
        shippingCost: 0,
        shippingType: SHIPPING_FREE,
        description: '',
        source: '',
      },
    });

  const { remove } = useFieldArray({
    control,
    name: 'images',
  });

  const dealId = watch('id');
  const images = watch('images');
  const dealType = watch('dealType');
  const productCategoryId = watch('productCategoryId');
  const shippingType = watch('shippingType');

  // Init DealFormValues
  useEffect(() => {
    if (dealId || !authorId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as DealFormValues | null;
    if (tempValues) {
      reset(tempValues);
    } else if (prevFormValues) {
      reset(prevFormValues);
    } else {
      setValue('groupId', group.id);
      setValue('source', device);
      const newId = uuid4();
      setValue('id', newId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealId, authorId, prevFormValues]);

  // Init default productCategoryId
  useEffect(() => {
    if (!productCategoryId)
      setValue(
        'productCategoryId',
        findDefaultProductCategory(group.productCategories)?.id || '',
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group.productCategories]);

  const updateValues = () => {
    if (!dealId || !authorId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as DealFormValues | null;
    const currentValues = watch();
    const notChanged =
      JSON.stringify(tempValues) === JSON.stringify(currentValues);
    if (!notChanged) {
      secureLocalStorage.setItem(localStorageKey, currentValues);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateValues, DEAL_AUTO_SAVE_INTERVAL_MS);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dealId, authorId, localStorageKey]);

  if (!group) return <div />;

  const handleChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      e.target.name as FieldPath<DealFormValues>,
      parseInt(e.target.value, 10),
    );
  };

  const handleChangeFileInput = async (files: FileList | null) => {
    if (!files) return;
    if (!authorId) return;

    const uploadedImages = parseUploadedImages({
      files,
      offset: images.length,
    });

    const userImages = await uploadAndSaveImages({
      uploadedImages,
      type: dealType,
      userId: authorId,
      dealId,
      device,
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

  const handleSubmitError: SubmitErrorHandler<DealFormValues> = (errors, event) => {
    // TODO
  };

  const handleAuthorization: MouseEventHandler = (e) => {
    // Do nothing
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  const handleWheel: WheelEventHandler = (e) => {
    (e.target as HTMLElement).blur();
  };

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <ImagesInput
        name="images"
        control={control}
        rules={{
          required:
            dealType === 'demand' ? false : IMAGE_UPLOAD_REQUIRED_MESSAGE,
        }}
        imagesInputProps={{
          label: {
            name: IMAGE_UPLOAD_LABEL_NAME,
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

      {dealType !== 'swap' ? (
        <TextInput
          name="name0"
          control={control}
          rules={{ required: DEAL_NAME_REQUIRED_MESSAGE }}
          textInputProps={{
            label: {
              name: DEAL_NAME,
              style: DEFAULT_LABEL_STYLE,
            },
          }}
          textFieldProps={{
            variant: 'outlined',
            placeholder: DEAL_NAME_PLACEHOLDER,
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
      ) : (
        <>
          <TextInput
            name="name0"
            control={control}
            rules={{ required: SWAP_NAME0_REQUIRED_MESSAGE }}
            textInputProps={{
              label: {
                name: SWAP_NAME0_LABEL_NAME,
                style: DEFAULT_LABEL_STYLE,
              },
            }}
            textFieldProps={{
              variant: 'outlined',
              placeholder: SWAP_NAME0_PLACEHOLDER,
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
            name="name1"
            control={control}
            rules={{ required: SWAP_NAME1_REQUIRED_MESSAGE }}
            textInputProps={{
              label: {
                name: SWAP_NAME1_LABEL_NAME,
                style: DEFAULT_LABEL_STYLE,
              },
            }}
            textFieldProps={{
              variant: 'outlined',
              placeholder: SWAP_NAME1_PLACEHOLDER,
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
        </>
      )}

      <ButtonInputs
        name="dealType"
        control={control}
        rules={{ required: true }}
        buttonInputsProps={{
          options: parseDealTypeButtonOptions({
            dealType,
            multiple: !prevFormValues,
          }),
          label: {
            name: DEAL_TYPE_LABEL_NAME,
            style: DEFAULT_LABEL_STYLE,
          },
          button: {
            defaultStyle: DEFAULT_INPUT_BUTTON_STYLE,
            selectedStyle: SELECTED_INPUT_BUTTON_STYLE,
          },
        }}
      />

      <ButtonInputs
        name="productCategoryId"
        control={control}
        rules={{ required: true }}
        buttonInputsProps={{
          options: group.productCategories.map((category) => ({
            value: category.id,
            label: category.name,
            selected: productCategoryId === category.id,
          })),
          label: {
            name: DEAL_CATEGORY_LABEL_NAME,
            style: DEFAULT_LABEL_STYLE,
          },
          button: {
            defaultStyle: DEFAULT_INPUT_BUTTON_STYLE,
            selectedStyle: SELECTED_INPUT_BUTTON_STYLE,
          },
        }}
      />

      <ButtonInputs
        name="shippingType"
        control={control}
        rules={{ required: true }}
        buttonInputsProps={{
          options: SHIPPING_TYPE_OPTIONS.map((option) => ({
            ...option,
            selected: shippingType === option.value,
          })),
          label: {
            name: SHIPPING_TYPE_LABEL_NAME,
            style: DEFAULT_LABEL_STYLE,
          },
          button: {
            defaultStyle: DEFAULT_INPUT_BUTTON_STYLE,
            selectedStyle: SELECTED_INPUT_BUTTON_STYLE,
          },
        }}
      />

      {shippingType !== SHIPPING_FREE && (
        <TextInput
          name="shippingCost"
          control={control}
          rules={{
            required: DEAL_PRICE_REQUIRED_MESSAGE,
            pattern: {
              value: /^\d+$/,
              message: DEAL_PRICE_REQUIRED_MESSAGE,
            },
          }}
          textInputProps={{
            label: {
              name: SHIPPING_COST_LABEL_NAME,
              style: DEFAULT_LABEL_STYLE,
            },
            onChange: handleChangeNumberInput,
          }}
          textFieldProps={{
            type: 'number',
            variant: 'outlined',
            placeholder: SHIPPING_COST_LABEL_NAME,
            InputProps: {
              startAdornment: <div className="pr-2">₩</div>,
              sx: {
                color: DEFAULT_INPUT_TEXT_COLOR,
                borderRadius: 2,
                fontSize: getInputTextFontSize(device),
                backgroundColor: DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
                fontWeight: 600,
                minWidth: getInputTextMinWidth(device),
              },
            },
            onWheel: handleWheel,
          }}
        />
      )}

      <TextInput
        name="price"
        control={control}
        rules={{
          required: DEAL_PRICE_REQUIRED_MESSAGE,
          pattern: {
            value: /^\d+$/,
            message: DEAL_PRICE_REQUIRED_MESSAGE,
          },
        }}
        textInputProps={{
          label: {
            name: parseDealPriceName(dealType),
            style: DEFAULT_LABEL_STYLE,
          },
          onChange: handleChangeNumberInput,
        }}
        textFieldProps={{
          type: 'number',
          variant: 'outlined',
          placeholder: parseDealPriceName(dealType),
          InputProps: {
            startAdornment: <div className="pr-2">₩</div>,
            sx: {
              color: DEFAULT_INPUT_TEXT_COLOR,
              borderRadius: 2,
              fontSize: getInputTextFontSize(device),
              backgroundColor: DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
              fontWeight: 600,
              minWidth: getInputTextMinWidth(device),
            },
          },
          onWheel: handleWheel,
        }}
      />

      <TextInput
        name="description"
        control={control}
        rules={{ required: DEAL_DESCRIPTION_REQUIRED_MESSAGE }}
        textInputProps={{
          label: {
            name: DEAL_DESCRIPTION_LABEL_NAME,
            style: DEFAULT_LABEL_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: parseDealDescriptionPlaceholder({
            dealType,
            productCategories: group.productCategories,
            productCategoryId,
          }),
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
          <DiscordLoginDialog
            name={DEAL_EDIT_SUBMIT_BUTTON_NAME}
            onAuthorization={handleAuthorization}
            onUnAuthorization={handleUnAuthorization}
          />
        </div>
      ) : (
        <div className={STICKY_SUBMIT_BUTTON_STYLE}>
          <DiscordLoginDialog
            name={DEAL_WRITE_SUBMIT_BUTTON_NAME}
            onAuthorization={handleAuthorization}
            onUnAuthorization={handleUnAuthorization}
          />
        </div>
      )}
    </form>
  );
}
