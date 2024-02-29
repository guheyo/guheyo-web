'use client';

import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import SearchInput from './search-input';
import GroupProfiles from '../groups/group-profiles';
import { DEBOUNCE } from './search.constants';

export default function SearchGroups() {
  const [text, setText] = useState('');
  const [keyword] = useDebounce(text, DEBOUNCE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  return (
    <div className="grid gap-8 w-fit">
      <SearchInput
        text={text}
        setText={setText}
        placeholder="어떤 그룹을 찾고 있나요?"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <GroupProfiles keyword={keyword} />
    </div>
  );
}
