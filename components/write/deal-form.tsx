'use client';

import {
  FieldPath,
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { useGroup } from '@/hooks/use-group';
import { MouseEventHandler, useContext, useEffect } from 'react';
import { findDefaultProductCategory } from '@/lib/group/find-default-product-category';
import {
  DEAL_AUTO_SAVE_INTERVAL_MS,
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
import parseCreateDealInput from '@/lib/deal/parse-create-deal-input';
import createDeal from '@/lib/deal/create-deal';
import { deleteUserImage } from '@/lib/api/user-image';
import { useParams, useRouter } from 'next/navigation';
import secureLocalStorage from 'react-secure-storage';
import { parseTempDealFormKey } from '@/lib/deal/parse-temp-deal-form-key';
import { parseGroupMarketLink } from '@/lib/deal/parse-group-market-link';
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
import DiscordLoginDialog from '../auth/discord-login-dialog';

export default function DealForm() {
  const { group } = useGroup();
  const { user } = useContext(AuthContext);
  const device = useDeviceDetect();
  const params = useParams();
  const groupSlug = params.groupSlug as string;
  const router = useRouter();

  const { handleSubmit, control, watch, setValue, reset } =
    useForm<DealFormValues>({
      defaultValues: {
        id: '',
        images: [],
        name0: '',
        dealType: 'offer',
        categoryId: '',
        price: undefined,
        description: '',
      },
    });

  const { remove } = useFieldArray({
    control,
    name: 'images',
  });

  const dealId = watch('id');
  const images = watch('images');
  const dealType = watch('dealType');
  const categoryId = watch('categoryId');

  useEffect(() => {
    if (!user || !groupSlug) return;

    const key = parseTempDealFormKey({
      username: user.username,
      groupSlug,
    });

    const tempValues = secureLocalStorage.getItem(key) as DealFormValues | null;
    if (!tempValues) {
      const newId = uuid4();
      setValue('id', newId);
    } else {
      reset(tempValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, groupSlug]);

  useEffect(() => {
    if (!user || !dealId) return;

    if (!categoryId)
      setValue(
        'categoryId',
        findDefaultProductCategory(group?.productCategories)?.id || '',
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, dealId, group?.productCategories]);

  const updateValues = () => {
    if (!user || !dealId || !groupSlug) return;

    const key = parseTempDealFormKey({
      username: user.username,
      groupSlug,
    });
    const tempValues = secureLocalStorage.getItem(key) as DealFormValues | null;
    const currentValues = watch();
    const notChanged =
      JSON.stringify(tempValues) === JSON.stringify(currentValues);
    if (!notChanged) {
      secureLocalStorage.setItem(key, currentValues);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateValues, DEAL_AUTO_SAVE_INTERVAL_MS);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, dealId, groupSlug]);

  if (!group) return <div />;

  const onSubmit: SubmitHandler<DealFormValues> = async (data) => {
    if (!user) return;

    const input = parseCreateDealInput({
      dealFormValues: data,
      groupId: group.id,
      userId: user.id,
      device,
    });

    await createDeal({
      dealType,
      createDealInput: input,
    });

    const key = parseTempDealFormKey({
      username: user.username,
      groupSlug,
    });
    secureLocalStorage.removeItem(key);

    router.push(
      `${parseGroupMarketLink({
        groupSlug,
        dealType,
      })}`,
    );
  };

  const onError: SubmitErrorHandler<DealFormValues> = (errors, event) => {
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

  const onChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      e.target.name as FieldPath<DealFormValues>,
      parseInt(e.target.value, 10),
    );
  };

  const onClickImagePreview = async (position: number) => {
    const imageId = images.find((image) => image.position === position)?.id;
    if (!imageId) return;

    await deleteUserImage(imageId);
    remove(position);
  };

  const handleAuthorization: MouseEventHandler = (e) => {
    // Do nothing
  };

  const handleUnAuthorization: MouseEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(onSubmit, onError)}
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
          onChange: onChangeFileInput,
        }}
        inputProps={{
          multiple: true,
          hidden: true,
        }}
      />

      <ImagePreviews
        images={images}
        previewsProp={{
          onClick: onClickImagePreview,
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
          onChange: onChangeNumberInput,
        }}
        textFieldProps={{
          type: 'number',
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
      <div className={DEFAULT_SUBMIT_BUTTON_STYLE}>
        <DiscordLoginDialog
          name={DEAL_SUBMIT_BUTTON_NAME}
          onAuthorization={handleAuthorization}
          onUnAuthorization={handleUnAuthorization}
        />
      </div>
    </form>
  );
}
