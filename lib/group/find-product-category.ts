import { ProductCategoryResponse } from '@/generated/graphql';

export const findProductCategory = (
  productCategories: ProductCategoryResponse[] | undefined,
  slug: string | null,
) => productCategories?.find((category) => category.slug === slug);
