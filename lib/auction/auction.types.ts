import { UserImage } from '../image/image.interfaces';

export type AuctionStatus = 'live' | 'closed';

export type AuctionFormValues = {
  id: string;
  createdAt: Date;
  duration: number;
  groupId: string;
  images: UserImage[];
  title: string;
  content: string;
  categoryId: string;
  status?: string;
  shippingCost: number;
  shippingType: string;
};
