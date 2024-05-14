import { CategoryResponse } from '@/generated/graphql';

export const findDefaultCategory = (
  categories: CategoryResponse[] | undefined,
) => categories?.at(0);
