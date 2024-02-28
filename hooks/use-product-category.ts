import { useQuery } from '@apollo/client';
import { GET_PRODUCT_CATEGORY } from '@/lib/apollo/cache';

export const useProductCategory = (categorySlug: string | null) => {
  const { data } = useQuery(GET_PRODUCT_CATEGORY, {
    variables: {
      slug: categorySlug,
    },
  });
  return data?.productCategory;
};
