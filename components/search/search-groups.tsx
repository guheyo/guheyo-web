'use client';

import SearchContainer from './search-container';
import GroupProfileFeed from '../groups/group-profile-feed';

export default function SearchGroups({
  placeholder,
  generateLink,
}: {
  placeholder: string;
  generateLink?: (value: string) => string;
}) {
  return (
    <SearchContainer
      placeholder={placeholder}
      Feed={GroupProfileFeed}
      feedProps={{
        type: 'listview',
        defaultWhere: {},
        defaultOrderBy: {},
        defaultDistinct: false,
        generateLink,
        size: 'medium',
      }}
    />
  );
}
