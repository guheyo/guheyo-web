'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import { FindUsersOrderByArgs } from '@/interfaces/user.interfaces';
import SearchInput from './search-input';
import { DEBOUNCE } from './search.constants';
import UserFeed from '../users/user-feed';
import InfoFeedLayout from '../info/info-feed-layout';

export default function SearchUsers() {
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
      <InfoFeedLayout>
        <UserFeed
          defaultWhere={where}
          defaultOrderBy={orderBy}
          keyword={keyword}
        />
      </InfoFeedLayout>
    </div>
  );
}
