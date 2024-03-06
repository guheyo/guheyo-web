'use client';

import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { useGroup } from '@/hooks/use-group';
import { useContext, useEffect } from 'react';
import { findDefaultProductCategory } from '@/lib/group/find-default-product-category';
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
import {
  IMAGE_UPLOAD_LABEL_NAME,
  IMAGE_UPLOAD_REQUIRED_MESSAGE,
} from '@/lib/image/image.constants';
import { v4 as uuid4 } from 'uuid';
import uploadAndSaveImages from '@/lib/image/upload-and-save-images';
import parseUploadedImages from '@/lib/image/parse-uploaded-user-images';
import {
  SWAP_NAME0_LABEL_NAME,
  SWAP_NAME0_PLACEHOLDER,
  SWAP_NAME0_REQUIRED_MESSAGE,
  SWAP_NAME1_LABEL_NAME,
  SWAP_NAME1_PLACEHOLDER,
  SWAP_NAME1_REQUIRED_MESSAGE,
} from '@/lib/swap/swap.constants';
import { DealFormValues } from '@/lib/deal/deal.interfaces';
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
import { AuthContext } from '../auth/auth.provider';

export default function OfferForm() {
  const { group } = useGroup();
  const dealId = uuid4();
  const { user } = useContext(AuthContext);
  const device = useDeviceDetect();

  const { handleSubmit, control, watch, setValue } = useForm<DealFormValues>({
    defaultValues: {
      id: dealId,
      images: [],
      name0: '',
      dealType: 'offer',
      categoryId: '',
      price: 0,
      description: '',
    },
  });

  const images = watch('images');
  const dealType = watch('dealType');
  const categoryId = watch('categoryId');

  useEffect(() => {
    setValue(
      'categoryId',
      findDefaultProductCategory(group?.productCategories)?.id || '',
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group?.id]);

  if (!group) return <div />;

  const onSubmit: SubmitHandler<DealFormValues> = async (data) => {
    // TODO
  };

  const onError: SubmitErrorHandler<DealFormValues> = (error) => {
    // TODO
  };

  const onChangeFileInput = async (files: FileList | null) => {
    if (!files) return;
    if (!user) return;

    const uploadedImages = parseUploadedImages({
      files,
      offset: images.length,
    });

    const userImages = await uploadAndSaveImages({
      uploadedImages,
      type: 'offer',
      userId: user.id,
      dealId,
      device,
    });

    userImages.map((userImage) =>
      setValue(`images.${userImage.position}`, userImage),
    );
  };

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <ImagesInput
        name="images"
        control={control}
        rules={{ required: IMAGE_UPLOAD_REQUIRED_MESSAGE }}
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

      <ImagePreviews images={images} />

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

      <button type="submit" className={DEFAULT_SUBMIT_BUTTON_STYLE}>
        {DEAL_SUBMIT_BUTTON_NAME}
      </button>
    </form>
  );
}
