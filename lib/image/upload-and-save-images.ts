import { createUserImage } from '../api/user-image';
import parseCreateUserImageInput from './parse-create-user-image-input';
import uploadToS3 from './upload-to-s3';
import { UploadedImage } from './image.interfaces';

const uploadAndSaveImages = async ({
  uploadedImages,
  type,
  refId,
  userId,
}: {
  uploadedImages: UploadedImage[];
  type: string;
  userId: string;
  refId: string;
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
      refId,
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
