'use client';

import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';
import { POST_SEARCH_OPTIONS } from '@/lib/post/post.constants';
import ThreadFeed from '../thread/thread-feed';
import SearchContainer from './search-container';
import GbCategoriesNavbar from '../gb/gb-categories-navbar';
import MarketChannelNavbar from '../market/market-channel-navbar';

export default function SearchGbs() {
  const where: FindThreadPreviewsWhereInput = {
    categoryType: 'gb',
  };
  const orderBy: FindThreadPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <SearchContainer
      placeholder="어떤 공동구매를 찾고 있나요?"
      options={POST_SEARCH_OPTIONS}
      channels={<MarketChannelNavbar />}
      categories={<GbCategoriesNavbar />}
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
