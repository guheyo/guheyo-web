'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { CITIY_NAMES } from '@/lib/community/community.constants';
import { Option } from '@/interfaces/selector.interfaces';
import TextNavbar from '../base/text-navbar';

export default function CommunityTagsNavbar({
  categorySlug,
}: {
  categorySlug: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedValue = searchParams.get('tag') || undefined;

  let options: Option[];
  switch (categorySlug) {
    case 'meetup':
      options = CITIY_NAMES.map((name) => ({
        value: name,
        label: name,
      }));
      options = [
        {
          value: 'all',
          label: '전체',
        },
        ...options,
      ];
      break;
    default:
      options = [];
      break;
  }

  return (
    <TextNavbar
      options={options}
      selectedValue={selectedValue}
      parseNewURL={(value) =>
        parseNewURL({
          searchParamsString: searchParams.toString(),
          pathname,
          paramsToUpdate: [
            {
              name: 'tag',
              value,
            },
          ],
        })
      }
      size="medium"
    />
  );
}
