import { Device } from '@/hooks/use-device-detect';
import { createUserImage } from '../api/user-image';
import parseCreateUserImageInput from './parse-create-user-image-input';
import uploadToS3 from './upload-to-s3';
import { UploadedImage } from './image.interfaces';

const uploadAndSaveImages = async ({
  uploadedImages,
  type,
  userId,
  dealId,
  device,
}: {
  uploadedImages: UploadedImage[];
  type: string;
  userId: string;
  dealId: string;
  device: Device;
}) => {
  const promises = uploadedImages.map(async (uploadedUserImage) => {
    const url = await uploadToS3({
      file: uploadedUserImage.file,
      type,
      userId,
    });
    const input = parseCreateUserImageInput({
      file: uploadedUserImage.file,
      userImage: uploadedUserImage.userImage,
      type,
      userId,
      refId: dealId,
      device,
      url,
    });
    await createUserImage(input);
    return {
      ...uploadedUserImage.userImage,
      url,
    };
  });
  return Promise.all(promises);
};

export default uploadAndSaveImages;
