'use client';

import { SortOrder } from '@/types/sort.types';
import CommunityCategoriesNavbar from '../thread/community-categories-navbar';
import ThreadAndReviewFeed from '../community/thread-and-review-feed';
import SearchContainer from './search-container';

export default function SearchThreadsAndReviews() {
  const where = {};
  const orderBy = {
    createdAt: 'desc' as SortOrder,
  };

  return (
    <SearchContainer
      placeholder="어떤 게시글을 찾고 있나요?"
      categories={<CommunityCategoriesNavbar />}
      Feed={ThreadAndReviewFeed}
      feedProps={{
        type: 'listview',
        defaultWhere: where,
        defaultOrderBy: orderBy,
        defaultDistinct: false,
      }}
    />
  );
}
