import { Device } from '@/hooks/use-device-detect';
import { CreateUserImageInput } from '@/generated/graphql';
import { UserImage } from './image.interfaces';

const parseCreateUserImageInput = ({
  file,
  userImage,
  type,
  userId,
  refId,
  device,
  url,
}: {
  file: File;
  userImage: UserImage;
  type: string;
  userId: string;
  refId: string;
  device: Device;
  url: string;
}): CreateUserImageInput => ({
  contentType: file.type,
  name: file.name,
  size: file.size,
  id: userImage.id,
  position: userImage.position,
  type,
  userId,
  refId,
  source: device as string,
  url,
});

export default parseCreateUserImageInput;
