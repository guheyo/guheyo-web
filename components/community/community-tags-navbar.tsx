'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { CITIY_NAMES } from '@/lib/community/community.constants';
import TagsNavbar from '../base/tags-navbar';

export default function CommunityTagsNavbar({
  categorySlug,
}: {
  categorySlug: string;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag') || undefined;

  let tags: string[];
  switch (categorySlug) {
    case 'meetup':
      tags = CITIY_NAMES;
      break;
    default:
      tags = [];
      break;
  }

  return (
    <TagsNavbar
      tags={tags}
      selectedValue={selectedTag}
      parseNewURL={(value) =>
        parseNewURL({
          searchParamsString: searchParams.toString(),
          pathname,
          paramsToUpdate: [
            {
              name: 'tag',
              value: value === '전체' ? undefined : value,
            },
          ],
        })
      }
      size="medium"
    />
  );
}
