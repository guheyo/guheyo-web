import { SortOrder } from '@/types/sort.types';

export interface FindDealsWhereArgs {
  groupId?: string;

  productCategoryId?: string;

  status?: string;

  createdAt?: {
    gt: string;
  };
}

export interface FindDealsOrderByArgs {
  price?: SortOrder;

  createdAt?: SortOrder;
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
