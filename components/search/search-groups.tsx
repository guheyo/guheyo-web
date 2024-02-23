'use client';

import { useState } from 'react';
import SearchInput from './search-input';
import GroupProfiles from '../groups/group-profiles';

export default function SearchGroups() {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  return (
    <div className="grid gap-8 w-fit">
      <SearchInput
        value={value}
        setValue={setValue}
        placeholder="어떤 취미를 좋아해요?"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <GroupProfiles keyword={value} />
    </div>
  );
}
