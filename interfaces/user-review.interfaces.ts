import { SortOrder } from '@/types/sort.types';

export interface FindUserReviewsWhereArgs {
  // post
  groupId?: string;

  userId?: string;

  tagType?: string;
}

export interface FindUserReviewsOrderByArgs {
  createdAt?: SortOrder;
}
