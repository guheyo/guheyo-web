import { UserImage } from '../image/image.interfaces';

export type ProductFormValues = {
  id: string;
  name: string;
  description?: string;
  groupId?: string;
  categoryId?: string;
  brandId?: string;
  images: UserImage[];
};
