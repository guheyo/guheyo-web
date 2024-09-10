import { UserImage } from '../image/image.interfaces';

export type BrandFormValues = {
  id: string;
  name: string;
  slug?: string;
  description?: string;
  logo?: string;
  image?: UserImage;
};
