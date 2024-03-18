import { SortOrder } from '@/types/sort.types';

export interface FindReportsWhereArgs {
  type?: string;

  refId?: string;

  status?: string;

  createdAt?: {
    gt: string;
  };
}

export interface FindReportsOrderByArgs {
  createdAt?: SortOrder;
}
