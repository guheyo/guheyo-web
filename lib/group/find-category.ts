import { CategoryResponse } from '@/generated/graphql';

export const findCategory = (
  categories: CategoryResponse[] | undefined,
  where: {
    slug?: string | null;
    id?: string | null;
  },
) => {
  if (where.slug)
    return categories?.find((category) => category.slug === where.slug);
  if (where.id) return categories?.find((category) => category.id === where.id);
  return undefined;
};
