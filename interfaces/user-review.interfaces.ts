import { SortOrder } from '@/types/sort.types';

export interface FindUserReviewsWhereArgs {
  // post
  groupId?: string;

  userId?: string;

  tagType?: string;

  // user review
  reviewedUserId?: string;

  status?: string;
}

export interface FindUserReviewsOrderByArgs {
  createdAt?: SortOrder;
}
