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
  currentBidPrice?: SortOrder;

  createdAt?: SortOrder;
}

export interface FindAuctionInteractionItemsWhereArgs {
  auctionId?: string;

  postId?: string;

  userId?: string;

  status?: string;

  type?: string;
}

export interface FindAuctionInteractionItemsOrderByArgs {
  createdAt?: SortOrder;
}
