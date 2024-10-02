'use client';

import {
  FindThreadPreviewsOrderByInput,
  FindThreadPreviewsWhereInput,
} from '@/generated/graphql';
import { POST_SEARCH_OPTIONS } from '@/lib/post/post.constants';
import ThreadFeed from '../thread/thread-feed';
import SearchContainer from './search-container';
import CommunitySelectors from '../community/community-selectors';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import BrandChannelNavbar from '../brand/brand-channel-navbar';

export default function SearchCommunity() {
  const where: FindThreadPreviewsWhereInput = {
    categoryType: 'community',
  };
  const orderBy: FindThreadPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <SearchContainer
      placeholder="어떤 스레드를 찾고 있나요?"
      options={POST_SEARCH_OPTIONS}
      channels={<BrandChannelNavbar />}
      selectors={
        <>
          <FollowFilterClickButton />
          <CommunitySelectors />
        </>
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
