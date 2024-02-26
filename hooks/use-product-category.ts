import { useSearchParams } from 'next/navigation';
import { useGroup } from './use-group';

export const useProductCategory = () => {
  const { group } = useGroup();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');
  const category = group?.productCategories.find(
    (c) => c.slug === categorySlug,
  );
  return category;
};
