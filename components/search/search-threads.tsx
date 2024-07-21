'use client';

import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';
import CommunityCategoriesNavbar from '../thread/community-categories-navbar';
import ThreadFeed from '../thread/thread-feed';
import SearchContainer from './search-container';

export default function SearchThreads() {
  const where: FindThreadPreviewsWhereInput = {};
  const orderBy: FindThreadPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <SearchContainer
      placeholder="어떤 스레드를 찾고 있나요?"
      categories={<CommunityCategoriesNavbar />}
      Feed={ThreadFeed}
      feedProps={{
        type: 'listview',
        defaultWhere: where,
        defaultOrderBy: orderBy,
        defaultDistinct: false,
      }}
    />
  );
}
