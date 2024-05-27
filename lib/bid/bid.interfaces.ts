import { SortOrder } from '@/types/sort.types';

export interface FindBidsWhereArgs {
  auctionId?: string;

  userId?: string;
}

export interface FindBidsOrderByArgs {
  createdAt?: SortOrder;
}
