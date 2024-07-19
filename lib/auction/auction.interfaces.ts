import { SortOrder } from '@/types/sort.types';

export interface FindAuctionInteractionItemsWhereArgs {
  auctionId?: string;

  postId?: string;

  userId?: string;

  status?: string;

  view?: string;
}

export interface FindAuctionInteractionItemsOrderByArgs {
  createdAt?: SortOrder;
}

export interface FindBiddersWhereInput {
  auctionId: string;
}

export interface FindBiddersOrderByInput {
  createdAt?: SortOrder;
}
