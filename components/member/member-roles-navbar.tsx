'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { MEMBER_ROLE_OPTIONS } from '@/lib/user/user.constants';
import { Option } from '@/interfaces/selector.interfaces';
import TextNavbar from '../base/text-navbar';

export default function MemberRolesNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  return (
    <TextNavbar
      options={MEMBER_ROLE_OPTIONS as Option[]}
      selectedValue={role || undefined}
      parseNewURL={(value) =>
        parseNewURL({
          searchParamsString: searchParams.toString(),
          pathname,
          paramsToUpdate: [
            {
              name: 'role',
              value,
            },
          ],
        })
      }
      size="medium"
    />
  );
}
