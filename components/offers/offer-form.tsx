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
import {
  OFFER,
  OFFER_AUTO_SAVE_INTERVAL_MS,
  OFFER_CATEGORY_LABEL_NAME,
  OFFER_DESCRIPTION_LABEL_NAME,
  OFFER_DESCRIPTION_REQUIRED_MESSAGE,
  OFFER_IMAGE_UPLOAD_LABEL_NAME,
  OFFER_NAME,
  OFFER_NAME_PLACEHOLDER,
  OFFER_NAME_REQUIRED_MESSAGE,
  OFFER_PRICE_REQUIRED_MESSAGE,
  OFFER_TYPE_LABEL_NAME,
} from '@/lib/offer/offer.constants';
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
import {
  SWAP_NAME0_LABEL_NAME,
  SWAP_NAME0_PLACEHOLDER,
  SWAP_NAME0_REQUIRED_MESSAGE,
  SWAP_NAME1_LABEL_NAME,
  SWAP_NAME1_PLACEHOLDER,
  SWAP_NAME1_REQUIRED_MESSAGE,
} from '@/lib/swap/swap.constants';
import secureLocalStorage from 'react-secure-storage';
import parseUploadedImages from '@/lib/image/parse-uploaded-user-images';
import uploadAndSaveImages from '@/lib/image/upload-and-save-images';
import { GroupResponse } from '@/generated/graphql';
import {
  SHIPPING_COST_LABEL_NAME,
  SHIPPING_FREE,
  SHIPPING_TYPE_LABEL_NAME,
  SHIPPING_TYPE_OPTIONS,
} from '@/lib/shipping/shipping.constants';
import { OfferFormValues } from '@/lib/offer/offer.interfaces';
import { findDefaultCategory } from '@/lib/group/find-default-category';
import { parseBusinessFunctionButtonOptions } from '@/lib/offer/parse-offer-options';
import { parseOfferPriceName } from '@/lib/offer/parse-offer-price-name';
import { parseOfferContentPlaceholder } from '@/lib/offer/parse-offer-content-placeholder';
import { filterCategories } from '@/lib/group/filter-categories';
import {
  POST_EDIT_SUBMIT_BUTTON_NAME,
  POST_WRITE_SUBMIT_BUTTON_NAME,
} from '@/lib/post/post.constants';
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
import DiscordLoginDialogButton from '../auth/discord-login-dialog-button';
import BrandAutocomplete from '../brand/brand-autocomplete';

export default function OfferForm({
  localStorageKey,
  userId,
  group,
  prevFormValues,
  handleSubmitValid,
  onClickImagePreviewCallback,
}: {
  localStorageKey: string;
  userId?: string;
  group: GroupResponse;
  prevFormValues?: OfferFormValues;
  handleSubmitValid: SubmitHandler<OfferFormValues>;
  onClickImagePreviewCallback: (imageId: string) => void;
}) {
  const device = useDeviceDetect();
  const categories = filterCategories({
    types: ['product', 'service'],
    categories: group.categories,
  });

  const { handleSubmit, control, watch, setValue, reset } =
    useForm<OfferFormValues>({
      defaultValues: {
        id: '',
        groupId: group.id,
        images: [],
        title: undefined,
        content: undefined,
        name0: undefined,
        name1: undefined,
        businessFunction: 'sell',
        categoryId: '',
        brandId: undefined,
        price: undefined,
        shippingCost: 0,
        shippingType: SHIPPING_FREE,
      },
    });

  const { remove } = useFieldArray({
    control,
    name: 'images',
  });

  const offerId = watch('id');
  const images = watch('images');
  const businessFunction = watch('businessFunction');
  const categoryId = watch('categoryId');
  const brandId = watch('brandId');
  const shippingType = watch('shippingType');

  // Init OfferFormValues
  useEffect(() => {
    if (offerId || !userId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as OfferFormValues | null;
    if (tempValues) {
      reset(tempValues);
    } else if (prevFormValues) {
      reset(prevFormValues);
    } else {
      setValue('groupId', group.id);
      const newId = uuid4();
      setValue('id', newId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerId, userId, prevFormValues]);

  // Init default categoryId
  useEffect(() => {
    if (!categoryId)
      setValue('categoryId', findDefaultCategory(categories)?.id || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories]);

  const updateValues = () => {
    if (!offerId || !userId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as OfferFormValues | null;
    const currentValues = watch();
    const notChanged =
      JSON.stringify(tempValues) === JSON.stringify(currentValues);
    if (!notChanged) {
      secureLocalStorage.setItem(localStorageKey, currentValues);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateValues, OFFER_AUTO_SAVE_INTERVAL_MS);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offerId, userId, localStorageKey]);

  if (!group) return <div />;

  const handleChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      e.target.name as FieldPath<OfferFormValues>,
      parseInt(e.target.value, 10),
    );
  };

  const handleChangeFileInput = async (files: FileList | null) => {
    if (!files) return;
    if (!userId) return;

    const uploadedImages = parseUploadedImages({
      files,
      offset: images.length,
    });

    const userImages = await uploadAndSaveImages({
      uploadedImages,
      type: OFFER,
      refId: offerId,
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

  const handleBrandSelect = (id: string) => {
    setValue('brandId', id);
  };

  const handleSubmitError: SubmitErrorHandler<OfferFormValues> = (
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

  const handleWheel: WheelEventHandler = (e) => {
    (e.target as HTMLElement).blur();
  };

  return (
    <form
      className="flex flex-col gap-8 w-full"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <ImagesInput
        name="images"
        control={control}
        rules={{
          required:
            businessFunction === 'buy' ? false : IMAGE_UPLOAD_REQUIRED_MESSAGE,
        }}
        imagesInputProps={{
          label: {
            name: OFFER_IMAGE_UPLOAD_LABEL_NAME,
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
      {businessFunction !== 'swap' ? (
        <TextInput
          name="name0"
          control={control}
          rules={{ required: OFFER_NAME_REQUIRED_MESSAGE }}
          textInputProps={{
            label: {
              name: OFFER_NAME,
              style: DEFAULT_LABEL_STYLE,
            },
          }}
          textFieldProps={{
            variant: 'outlined',
            placeholder: OFFER_NAME_PLACEHOLDER,
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
              }
            }}
          />
        </>
      )}
      <ButtonInputs
        name="businessFunction"
        control={control}
        rules={{ required: true }}
        buttonInputsProps={{
          options: parseBusinessFunctionButtonOptions({
            businessFunction,
            multiple: !prevFormValues,
          }),
          label: {
            name: OFFER_TYPE_LABEL_NAME,
            style: DEFAULT_LABEL_STYLE,
          },
          button: {
            defaultStyle: DEFAULT_INPUT_BUTTON_STYLE,
            selectedStyle: SELECTED_INPUT_BUTTON_STYLE,
          },
        }}
      />
      <ButtonInputs
        name="categoryId"
        control={control}
        rules={{ required: true }}
        buttonInputsProps={{
          options: categories.map((category) => ({
            value: category.id,
            label: category.name,
            selected: categoryId === category.id,
          })),
          label: {
            name: OFFER_CATEGORY_LABEL_NAME,
            style: DEFAULT_LABEL_STYLE,
          },
          button: {
            defaultStyle: DEFAULT_INPUT_BUTTON_STYLE,
            selectedStyle: SELECTED_INPUT_BUTTON_STYLE,
          },
        }}
      />
      <div className="flex flex-col gap-2">
        <div className={DEFAULT_LABEL_STYLE}>브랜드</div>
        <BrandAutocomplete
          groupId={group.id}
          handleClick={handleBrandSelect}
          selectedId={brandId}
        />
      </div>
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
            required: OFFER_PRICE_REQUIRED_MESSAGE,
            pattern: {
              value: /^\d+$/,
              message: OFFER_PRICE_REQUIRED_MESSAGE,
            },
            min: 0,
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
          required: OFFER_PRICE_REQUIRED_MESSAGE,
          pattern: {
            value: /^\d+$/,
            message: OFFER_PRICE_REQUIRED_MESSAGE,
          },
          min: 0,
        }}
        textInputProps={{
          label: {
            name: parseOfferPriceName(businessFunction),
            style: DEFAULT_LABEL_STYLE,
          },
          onChange: handleChangeNumberInput,
        }}
        textFieldProps={{
          type: 'number',
          variant: 'outlined',
          placeholder: parseOfferPriceName(businessFunction),
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
        name="content"
        control={control}
        rules={{ required: OFFER_DESCRIPTION_REQUIRED_MESSAGE }}
        textInputProps={{
          label: {
            name: OFFER_DESCRIPTION_LABEL_NAME,
            style: DEFAULT_LABEL_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: parseOfferContentPlaceholder({
            businessFunction,
            categories,
            categoryId,
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
