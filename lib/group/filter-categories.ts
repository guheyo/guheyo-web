import { CategoryResponse } from '@/generated/graphql';

export const filterCategories = ({
  types,
  categories,
}: {
  types?: string[];
  categories: CategoryResponse[];
}) =>
  types
    ? categories?.filter((category) => types.includes(category.type))
    : categories;
