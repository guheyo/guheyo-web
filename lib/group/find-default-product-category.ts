import { ProductCategoryResponse } from '@/generated/graphql';

export const findDefaultProductCategory = (
  productCategories: ProductCategoryResponse[] | undefined,
) => productCategories?.at(0);
