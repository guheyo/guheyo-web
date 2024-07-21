'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import SearchInput from './search-input';
import GroupProfiles from '../groups/group-profiles';
import { DEBOUNCE } from './search.constants';
import InfoFeedLayout from '../info/info-feed-layout';

export default function SearchGroups({
  placeholder,
  generateLink,
}: {
  placeholder: string;
  generateLink?: (slug: string) => string;
}) {
  const { text, setText } = useSearchQuery(DEBOUNCE);

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
        placeholder={placeholder}
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <InfoFeedLayout>
        <GroupProfiles generateLink={generateLink} />
      </InfoFeedLayout>
    </div>
  );
}
