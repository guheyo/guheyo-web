import { UserImage } from '../image/image.interfaces';

export type GroupFormValues = {
  id: string;
  name: string;
  slug?: string;
  categoryNames: { name: string }[];
  categoryName?: string;
  description?: string;
  image?: UserImage;
};
