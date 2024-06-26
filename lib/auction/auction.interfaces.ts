import { SortOrder } from '@/types/sort.types';

export interface FindAuctionsWhereArgs {
  // post
  groupId?: string;

  categoryId?: string;

  userId?: string;

  status?: string;

  createdAt?: {
    gt: string;
  };
}

export interface FindAuctionsOrderByArgs {
  createdAt?: SortOrder;

  extendedEndDate?: SortOrder;

  currentBidPrice?: SortOrder;
}

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
