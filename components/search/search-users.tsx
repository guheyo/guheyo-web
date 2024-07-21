'use client';

import { FindUsersOrderByInput } from '@/generated/graphql';
import UserFeed from '../users/user-feed';
import MemberRolesNavbar from '../member/member-roles-navbar';
import SearchContainer from './search-container';

export default function SearchUsers() {
  const where = {};
  const orderBy: FindUsersOrderByInput = {
    createdAt: 'asc',
  };

  return (
    <SearchContainer
      placeholder="어떤 멤버를 찾고 있나요?"
      categories={<MemberRolesNavbar />}
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
