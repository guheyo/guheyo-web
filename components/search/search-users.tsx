'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import { FindUsersOrderByArgs } from '@/interfaces/user.interfaces';
import { parseNewURL } from '@/lib/query-string/parse-new-url';
import { usePathname, useSearchParams } from 'next/navigation';
import SearchInput from './search-input';
import { DEBOUNCE } from './search.constants';
import UserFeed from '../users/user-feed';
import TextFeedLayout from '../posts/text-feed.layout';
import MemberRolesNavbar from '../member/member-roles-navbar';
import GroupProfileSidebarItems from '../groups/group-profile-sidebar-items';

export default function SearchUsers() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { text, setText, keyword } = useSearchQuery(DEBOUNCE);

  const where = {};
  const orderBy: FindUsersOrderByArgs = {
    createdAt: 'asc',
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  return (
    <div className="grid w-full">
      <SearchInput
        text={text}
        setText={setText}
        placeholder="어떤 멤버를 찾고 있나요?"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <div className="flex flex-row gap-2 md:gap-6 pt-4 mx-3 md:mx-1">
        <GroupProfileSidebarItems
          paddingX={0}
          paddingY={0}
          pathFormatter={(slug) =>
            parseNewURL({
              searchParamsString: searchParams.toString(),
              pathname,
              paramsToUpdate: [
                {
                  name: 'group',
                  value: slug,
                },
              ],
            })
          }
        />
      </div>
      <div className="pt-4 mx-2.5 md:mx-1">
        <MemberRolesNavbar />
      </div>
      <TextFeedLayout>
        <UserFeed
          defaultWhere={where}
          defaultOrderBy={orderBy}
          keyword={keyword}
        />
      </TextFeedLayout>
    </div>
  );
}
