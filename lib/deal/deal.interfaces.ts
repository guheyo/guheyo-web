import { UserImage } from '../image/image.interfaces';
import { ShippingType } from '../shipping/shipping.types';
import { Deal } from './deal.types';

export type DealFormValues = {
  id: string;
  groupId: string;
  images: UserImage[];
  name0: string;
  name1?: string;
  dealType: Deal;
  productCategoryId: string;
  price: number;
  shippingCost: number;
  shippingType: ShippingType;
  description?: string;
  source: string;
};

export type DealBumpValues = {
  id: string;
  dealId: string;
  price: number;
};

export type DealReportValues = {
  id: string;
  dealId: string;
  position: number;
  title: string;
  content?: string;
};
