export interface FindDealsWhereArgs {
  groupId?: string;

  productCategoryId?: string;

  status?: string;

  createdAt?: {
    gt: Date;
  };
}

export interface FindDealsOrderByArgs {
  price?: 'asc' | 'desc';

  createdAt?: 'asc' | 'desc';
}

export interface FindOffersWhereArgs extends FindDealsWhereArgs {
  sellerId?: string;
}

export interface FindDemandsWhereArgs extends FindDealsWhereArgs {
  buyerId?: string;
}

export interface FindSwapsWhereArgs extends FindDealsWhereArgs {
  proposerId?: string;
}
