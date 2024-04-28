import { SortOrder } from '@/types/sort.types';

export interface FindUserReviewsWhereArgs {
  // post
  groupId?: string;

  userId?: string;
}

export interface FindUserReviewsOrderByArgs {
  createdAt?: SortOrder;
}
