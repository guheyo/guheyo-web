import { SortOrder } from '@/types/sort.types';

export interface FindReportsWhereArgs {
  type?: string;

  offerId?: string;

  demandId?: string;

  swapId?: string;

  status?: string;

  createdAt?: {
    gt: string;
  };
}

export interface FindReportsOrderByArgs {
  createdAt?: SortOrder;
}
