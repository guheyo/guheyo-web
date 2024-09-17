'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { useGroup } from '@/hooks/use-group';
import TextNavbar from '../base/text-navbar';

export default function ProductCategoriesNavbar({
  types,
}: {
  types: string[];
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get('category') || undefined;

  const { group } = useGroup();
  const categories =
    group?.categories.filter((category) => types.includes(category.type)) || [];
  const options = categories.map((category) => ({
    value: category.slug!,
    label: category.name,
  }));

  return (
    <TextNavbar
      options={[
        {
          value: 'all',
          label: '전체',
        },
        ...options,
      ]}
      selectedValue={selectedValue}
      parseNewURL={(value) =>
        parseNewURL({
          searchParamsString: searchParams.toString(),
          pathname,
          paramsToUpdate: [
            {
              name: 'category',
              value,
            },
          ],
        })
      }
      size="medium"
    />
  );
}
