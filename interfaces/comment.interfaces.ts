import { SortOrder } from '@/types/sort.types';

export interface FindCommentsWhereArgs {
  postId?: string;

  userId?: string;
}

export interface FindCommentsOrderByArgs {
  createdAt?: SortOrder;
}
