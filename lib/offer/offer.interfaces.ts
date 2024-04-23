import { TagResponse } from '@/generated/graphql';
import { UserImage } from '../image/image.interfaces';
import { ShippingType } from '../shipping/shipping.types';
import { BusinessFunction } from './offer.types';

export type OfferFormValues = {
  id: string;
  groupId: string;
  images: UserImage[];
  title: string;
  content: string;
  name0: string;
  name1?: string;
  businessFunction: BusinessFunction;
  categoryId: string;
  price: number;
  shippingCost: number;
  shippingType: ShippingType;
  status?: string;
};

export type BumpFormValues = {
  id: string;
  offerId: string;
  price: number;
};

export type ReportFormValues = {
  id: string;
  position: number;
  reason: string;
  description?: string;
};

export type TagOption = {
  isSelected: boolean;
} & TagResponse;

export type UserReviewFormValues = {
  id: string;
  title: string;
  content?: string;
  tagOptions: TagOption[];
};

export type OfferCheckboxFormValues = {
  offerId: string;
};
