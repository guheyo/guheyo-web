import { CreateUserImageInput } from '@/generated/graphql';
import { UserImage } from './image.interfaces';

const parseCreateUserImageInput = ({
  file,
  userImage,
  type,
  refId,
  url,
}: {
  file: File;
  userImage: UserImage;
  type: string;
  refId: string;
  url: string;
}): CreateUserImageInput => ({
  contentType: file.type,
  size: file.size,
  id: userImage.id,
  position: userImage.position,
  type,
  refId,
  url,
});

export default parseCreateUserImageInput;
