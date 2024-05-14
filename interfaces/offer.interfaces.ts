import { BusinessFunction } from '@/lib/offer/offer.types';
import { SortOrder } from '@/types/sort.types';

export interface FindOffersWhereArgs {
  // post
  groupId?: string;

  categoryId?: string;

  userId?: string;

  isArchived?: boolean;

  // offer
  businessFunction?: BusinessFunction;

  status?: string;

  bumpedAt?: {
    gt: string;
  };
}

export interface FindOffersOrderByArgs {
  price?: SortOrder;

  bumpedAt?: SortOrder;
}
