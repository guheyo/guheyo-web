'use client';

import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';
import { parseThreadCategoryTypeLabel } from '@/lib/thread/parse-thread-category-type-label';
import { POST_SEARCH_OPTIONS } from '@/lib/post/post.constants';
import CommunityCategoriesNavbar from '../community/community-categories-navbar';
import ThreadFeed from '../thread/thread-feed';
import SearchContainer from './search-container';
import GbCategoriesNavbar from '../gb/gb-categories-navbar';

export default function SearchThreads({
  categoryType,
}: {
  categoryType: string;
}) {
  const where: FindThreadPreviewsWhereInput = {
    categoryType,
  };
  const orderBy: FindThreadPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <SearchContainer
      placeholder={`어떤 ${parseThreadCategoryTypeLabel({
        categoryType,
      })}를 찾고 있나요?`}
      options={POST_SEARCH_OPTIONS}
      categories={
        categoryType === 'gb' ? (
          <GbCategoriesNavbar />
        ) : (
          <CommunityCategoriesNavbar />
        )
      }
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
