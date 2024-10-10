'use client';

import { FindUsersOrderByInput } from '@/generated/graphql';
import UserFeed from '../users/user-feed';
import SearchContainer from './search-container';
import FollowFilterClickButton from '../follow/follow-filter-click-button';

export default function SearchUsers() {
  const where = {};
  const orderBy: FindUsersOrderByInput = {
    createdAt: 'asc',
  };

  return (
    <SearchContainer
      placeholder="어떤 멤버를 찾고 있나요?"
      selectors={
        <>
          <FollowFilterClickButton />
          <div />
        </>
      }
      Feed={UserFeed}
      feedProps={{
        type: 'listview',
        defaultWhere: where,
        defaultOrderBy: orderBy,
        defaultDistinct: false,
      }}
    />
  );
}
