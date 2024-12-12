import { UserImage } from '../image/image.interfaces';

export type AuctionStatus = 'live' | 'closed';

export type AuctionFormValues = {
  id: string;
  createdAt: Date | null;
  duration: number;
  groupId: string;
  images: UserImage[];
  title: string;
  content: string;
  categoryId: string;
  brandId?: string;
  status?: string;
  shippingCost: number;
  shippingType: string;
};
