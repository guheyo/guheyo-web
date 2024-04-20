import { SortOrder } from '@/types/sort.types';

export interface FindUsersWhereArgs {
  userId?: string;
}

export interface FindUsersOrderByArgs {
  createdAt?: SortOrder;
}
