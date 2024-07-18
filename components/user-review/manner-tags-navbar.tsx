'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { MANNER_TAG_TYPE_OPTIONS } from '@/lib/user-review/user-review.constants';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { Option } from '@/interfaces/selector.interfaces';
import TextNavbar from '../base/text-navbar';

export default function MannerTagsNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tagType = searchParams.get('tagType');

  return (
    <TextNavbar
      options={MANNER_TAG_TYPE_OPTIONS as Option[]}
      selectedValue={tagType || undefined}
      parseNewURL={(value) =>
        parseNewURL({
          searchParamsString: searchParams.toString(),
          pathname,
          paramsToUpdate: [
            {
              name: 'tagType',
              value,
            },
          ],
        })
      }
      size="medium"
    />
  );
}
