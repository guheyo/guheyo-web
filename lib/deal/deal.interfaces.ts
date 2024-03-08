import { UserImage } from '../image/image.interfaces';
import { Deal } from './deal.types';

export type DealFormValues = {
  id: string;
  userId: string;
  groupId: string;
  images: UserImage[];
  name0: string;
  name1?: string;
  dealType: Deal;
  categoryId: string;
  price: number;
  description?: string;
  source: string;
};
