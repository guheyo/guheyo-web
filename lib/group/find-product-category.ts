import { ProductCategoryResponse } from '@/generated/graphql';

export const findProductCategory = (
  productCategories: ProductCategoryResponse[] | undefined,
  where: {
    slug?: string | null;
    id?: string | null;
  },
) => {
  if (where.slug)
    return productCategories?.find((category) => category.slug === where.slug);
  if (where.id)
    return productCategories?.find((category) => category.id === where.id);
  return undefined;
};
