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
  OFFER,
  OFFER_AUTO_SAVE_INTERVAL_MS,
  OFFER_CATEGORY_LABEL_NAME,
  OFFER_DESCRIPTION_LABEL_NAME,
  OFFER_DESCRIPTION_REQUIRED_MESSAGE,
  OFFER_EDIT_SUBMIT_BUTTON_NAME,
  OFFER_IMAGE_UPLOAD_LABEL_NAME,
  OFFER_NAME,
  OFFER_NAME_PLACEHOLDER,
  OFFER_NAME_REQUIRED_MESSAGE,
  OFFER_WRITE_SUBMIT_BUTTON_NAME,
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
import secureLocalStorage from 'react-secure-storage';
import parseUploadedImages from '@/lib/image/parse-uploaded-user-images';
import uploadAndSaveImages from '@/lib/image/upload-and-save-images';
import { GroupResponse } from '@/generated/graphql';
import { SHIPPING_FREE } from '@/lib/shipping/shipping.constants';
import { findDefaultCategory } from '@/lib/group/find-default-category';
import { parseAuctionContentPlaceholder } from '@/lib/auction/parse-auction-content-placeholder';
import { parseAuctionDurationButtonOptions } from '@/lib/auction/parse-auction-duration-options';
import { AUCTION_DURATION_LABEL_NAME } from '@/lib/auction/auction.constants';
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
import { AuctionFormValues } from './auction.interfaces';

export default function AuctionForm({
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
  prevFormValues?: AuctionFormValues;
  handleSubmitValid: SubmitHandler<AuctionFormValues>;
  onClickImagePreviewCallback: (imageId: string) => void;
}) {
  const device = useDeviceDetect();

  const { handleSubmit, control, watch, setValue, reset } =
    useForm<AuctionFormValues>({
      defaultValues: {
        id: '',
        createdAt: undefined,
        duration: undefined,
        groupId: group.id,
        images: [],
        title: undefined,
        content: undefined,
        categoryId: '',
        shippingCost: 0,
        shippingType: SHIPPING_FREE,
      },
    });

  const { remove } = useFieldArray({
    control,
    name: 'images',
  });

  const auctionId = watch('id');
  const duration = watch('duration');
  const images = watch('images');
  const categoryId = watch('categoryId');

  // Init AuctionFormValues
  useEffect(() => {
    if (auctionId || !userId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as AuctionFormValues | null;

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
  }, [auctionId, userId, prevFormValues]);

  // Init default categoryId
  useEffect(() => {
    if (!categoryId)
      setValue('categoryId', findDefaultCategory(group.categories)?.id || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group.categories]);

  const updateValues = () => {
    if (!auctionId || !userId) return;

    const tempValues = secureLocalStorage.getItem(
      localStorageKey,
    ) as AuctionFormValues | null;
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
  }, [auctionId, userId, localStorageKey]);

  if (!group) return <div />;

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
      refId: auctionId,
      userId,
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

  const handleSubmitError: SubmitErrorHandler<AuctionFormValues> = (
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
      className="flex flex-col gap-8"
      onSubmit={handleSubmit(handleSubmitValid, handleSubmitError)}
    >
      <ImagesInput
        name="images"
        control={control}
        rules={{
          required: IMAGE_UPLOAD_REQUIRED_MESSAGE,
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

      <TextInput
        name="title"
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

      <ButtonInputs
        name="duration"
        control={control}
        rules={{ required: true }}
        buttonInputsProps={{
          options: parseAuctionDurationButtonOptions({
            selectedDuration: duration,
          }),
          label: {
            name: AUCTION_DURATION_LABEL_NAME,
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
          options: group.categories.map((category) => ({
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
          placeholder: parseAuctionContentPlaceholder({
            categories: group.categories,
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
          <DiscordLoginDialog
            name={OFFER_EDIT_SUBMIT_BUTTON_NAME}
            onAuthorization={handleAuthorization}
            onUnAuthorization={handleUnAuthorization}
          />
        </div>
      ) : (
        <div className={STICKY_SUBMIT_BUTTON_STYLE}>
          <DiscordLoginDialog
            name={OFFER_WRITE_SUBMIT_BUTTON_NAME}
            onAuthorization={handleAuthorization}
            onUnAuthorization={handleUnAuthorization}
          />
        </div>
      )}
    </form>
  );
}
