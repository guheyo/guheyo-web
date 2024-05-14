import { CreateUserImageInput } from '@/generated/graphql';
import { UserImage } from './image.interfaces';

const parseCreateUserImageInput = ({
  file,
  userImage,
  type,
  refId,
  userId,
  url,
}: {
  file: File;
  userImage: UserImage;
  type: string;
  refId: string;
  userId: string;
  url: string;
}): CreateUserImageInput => ({
  contentType: file.type,
  name: file.name,
  size: file.size,
  id: userImage.id,
  position: userImage.position,
  type,
  refId,
  userId,
  url,
});

export default parseCreateUserImageInput;
