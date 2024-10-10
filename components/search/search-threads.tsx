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
      placeholder="어떤 스레드를 찾고 있나요?"
      options={POST_SEARCH_OPTIONS}
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
