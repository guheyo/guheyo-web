export interface FindDealsWhereArgs {
  groupId?: string;

  productCategoryId?: string;

  sellerId?: string;

  status?: string;

  createdAt?: {
    gt: Date;
  };
}

export interface FindDealsOrderByArgs {
  price?: 'asc' | 'desc';

  createdAt?: 'asc' | 'desc';
}
