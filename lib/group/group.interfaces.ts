import { UserImage } from '../image/image.interfaces';

export type GroupFormValues = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  image?: UserImage;
};
