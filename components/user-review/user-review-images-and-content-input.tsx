'use client';

import { Control, useController, useFieldArray } from 'react-hook-form';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import {
  DEFAULT_INPUT_TEXT_BACKGROUND_COLOR,
  DEFAULT_INPUT_TEXT_COLOR,
} from '@/lib/input/input.colors';
import {
  getInputTextFontSize,
  getInputTextMinWidth,
} from '@/lib/input/input.props';
import { IMAGE_UPLOAD_REQUIRED_MESSAGE } from '@/lib/image/image.constants';
import parseUploadedImages from '@/lib/image/parse-uploaded-user-images';
import uploadAndSaveImages from '@/lib/image/upload-and-save-images';
import { UserReviewFormValues } from '@/lib/offer/offer.interfaces';
import { USER_REVIEW } from '@/lib/user-review/user-review.constants';
import { deleteUserImage } from '@/lib/api/user-image';
import { parseUserReviewContentLabel } from '@/lib/user-review/parse-user-review-content-label';
import { parseUserReviewImagesLabel } from '@/lib/user-review/parse-user-review-images-label';
import TextInput from '../inputs/text-input';
import {
  DEFAULT_LABEL_STYLE,
  MOBILE_FILE_INPUT_LABEL_STYLE,
} from '../../lib/input/input.styles';
import ImagesInput from '../inputs/images-input';
import ImagePreviews from '../images/image.previews';

export default function UserReviewImagesAndContentInput({
  control,
  userId,
}: {
  control: Control<UserReviewFormValues>;
  userId?: string;
}) {
  const device = useDeviceDetect();
  const { fields, update, remove } = useFieldArray({
    control,
    name: 'images',
  });
  const { field: idField } = useController({
    control,
    name: 'id',
  });

  const { field: ratingField } = useController({
    control,
    name: 'rating',
  });

  const handleChangeFileInput = async (files: FileList | null) => {
    if (!files) return;
    if (!userId) return;

    const uploadedImages = parseUploadedImages({
      files,
      offset: fields.length,
    });

    const userImages = await uploadAndSaveImages({
      uploadedImages,
      type: USER_REVIEW,
      refId: idField.value,
      userId,
    });

    userImages.map((userImage) => update(userImage.position, userImage));
  };

  const handleClickImagePreview = async (position: number) => {
    const imageId = fields.find((image) => image.position === position)?.id;
    if (!imageId) return;

    await deleteUserImage(imageId);
    remove(position);
  };

  return (
    <div className="flex flex-col gap-8">
      <ImagesInput
        name="images"
        control={control}
        rules={{
          required:
            ratingField.value === 1
              ? `(필수) ${IMAGE_UPLOAD_REQUIRED_MESSAGE}`
              : false,
        }}
        imagesInputProps={{
          label: {
            name: parseUserReviewImagesLabel({ rating: ratingField.value }),
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
        images={fields}
        previewsProp={{
          onClick: handleClickImagePreview,
        }}
      />

      <TextInput
        name="content"
        control={control}
        rules={{
          required:
            ratingField.value === 1
              ? `(필수) 비매너 후기를 작성해 주세요`
              : false,
        }}
        textInputProps={{
          label: {
            name: parseUserReviewContentLabel({ rating: ratingField.value }),
            style: DEFAULT_LABEL_STYLE,
          },
        }}
        textFieldProps={{
          variant: 'outlined',
          placeholder:
            ratingField.value === 1
              ? '일주일 째 택배 발송을 미루고 있어요'
              : '꼼꼼하게 포장해 주셔서 감사해요',
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
    </div>
  );
}
