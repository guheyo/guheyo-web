'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { useGroup } from '@/hooks/use-group';
import { useEffect } from 'react';
import { findDefaultProductCategory } from '@/lib/group/find-default-product-category';
import { Deal } from '@/lib/deal/deal.types';
import {
  DEAL_CATEGORY_LABEL_NAME,
  DEAL_DESCRIPTION_LABEL_NAME,
  DEAL_DESCRIPTION_REQUIRED_MESSAGE,
  DEAL_NAME,
  DEAL_NAME_PLACEHOLDER,
  DEAL_NAME_REQUIRED_MESSAGE,
  DEAL_OPTIONS,
  DEAL_PRICE_LABEL_NAME,
  DEAL_PRICE_PLACEHOLDER,
  DEAL_PRICE_REQUIRED_MESSAGE,
  DEAL_SUBMIT_BUTTON_NAME,
  DEAL_TYPE_LABEL_NAME,
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
import _ from 'lodash';
import { IMAGE_UPLOAD_LABEL_NAME } from '@/lib/image/image.constants';
import TextInput from '../inputs/text-input';
import ButtonInputs from '../inputs/button-inputs';
import {
  DEFAULT_INPUT_BUTTON_STYLE,
  DEFAULT_LABEL_STYLE,
  DEFAULT_SUBMIT_BUTTON_STYLE,
  MOBILE_FILE_INPUT_LABEL_STYLE,
  SELECTED_INPUT_BUTTON_STYLE,
} from '../../lib/input/input.styles';
import ImagesInput from '../inputs/images-input';
import ImagePreviews from '../images/image.previews';
import { UploadedUserImage } from '../images/image.interfaces';

type FormValues = {
  images: UploadedUserImage[];
  name: string;
  dealType: Deal;
  categoryId: string;
  price: number;
  description: string;
};

export default function OfferForm() {
  const { group } = useGroup();
  const { handleSubmit, control, watch, setValue } = useForm<FormValues>({
    defaultValues: {
      images: [],
      name: '',
      dealType: 'offer',
      categoryId: '',
      price: 0,
      description: '',
    },
  });
  const images = watch('images');
  const dealType = watch('dealType');
  const categoryId = watch('categoryId');
  const device = useDeviceDetect();

  useEffect(() => {
    setValue(
      'categoryId',
      findDefaultProductCategory(group?.productCategories)?.id || '',
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group?.id]);

  if (!group) return <div />;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO
  };

  const onError: SubmitErrorHandler<FormValues> = (error) => {
    // TODO
  };

  const onChangeFileInput = (files: FileList | null) => {
    if (!files) return;
    _.map(files, (file) => {
      setValue(`images.${images.length}`, {
        file,
        info: {
          type: dealType,
          userId: '',
        },
      });
    });
  };

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <ImagesInput
        name="images"
        control={control}
        imagesInputProps={{
          label: {
            name: IMAGE_UPLOAD_LABEL_NAME,
            style: MOBILE_FILE_INPUT_LABEL_STYLE,
          },
          icon: {
            fontSize: 'large',
          },
          onChange: onChangeFileInput,
        }}
        inputProps={{
          multiple: true,
          hidden: true,
        }}
      />

      <ImagePreviews uploadedImages={images} />

      <TextInput
        name="name"
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

      <ButtonInputs
        name="dealType"
        control={control}
        rules={{ required: true }}
        buttonInputsProps={{
          options: DEAL_OPTIONS.map((option) => ({
            ...option,
            selected: dealType === option.value,
          })),
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
        name="categoryId"
        control={control}
        rules={{ required: true }}
        buttonInputsProps={{
          options: group.productCategories.map((category) => ({
            value: category.id,
            label: category.name,
            selected: categoryId === category.id,
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
            name: DEAL_PRICE_LABEL_NAME,
            style: DEFAULT_LABEL_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder: DEAL_PRICE_PLACEHOLDER,
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
            categoryId,
          }),
          InputProps: {
            sx: {
              color: DEFAULT_INPUT_TEXT_COLOR,
              borderRadius: 2,
              fontSize: '16px',
              backgroundColor: DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
              fontWeight: 600,
              minWidth: getInputTextMinWidth(device),
            },
          },
          multiline: true,
          minRows: 10,
        }}
      />

      <button type="submit" className={DEFAULT_SUBMIT_BUTTON_STYLE}>
        {DEAL_SUBMIT_BUTTON_NAME}
      </button>
    </form>
  );
}
