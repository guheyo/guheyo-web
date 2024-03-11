import { SortOrder } from '@/types/sort.types';

export interface FindDealsWhereArgs {
  groupId?: string;

  productCategoryId?: string;

  status?: string;

  bumpedAt?: {
    gt: string;
  };
}

export interface FindDealsOrderByArgs {
  price?: SortOrder;

  bumpedAt?: SortOrder;
}

export interface FindOffersWhereArgs extends FindDealsWhereArgs {
  sellerId?: string;
}

export interface FindDemandsWhereArgs extends FindDealsWhereArgs {
  buyerId?: string;
}

export interface FindSwapsWhereArgs extends FindDealsWhereArgs {
  proposerId?: string;
}
