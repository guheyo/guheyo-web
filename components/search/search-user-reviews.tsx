'use client';

import {
  FindUserReviewPreviewsOrderByInput,
  FindUserReviewPreviewsWhereInput,
} from '@/generated/graphql';
import UserReviewFeed from '../user-review/user-review-feed';
import MannerTagsNavbar from '../user-review/manner-tags-navbar';
import SearchContainer from './search-container';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import UserReviewSelectors from '../user-review/user-review-selectors';

export default function SearchUserReviews() {
  const where: FindUserReviewPreviewsWhereInput = {};
  const orderBy: FindUserReviewPreviewsOrderByInput = {
    createdAt: 'desc',
  };

  return (
    <SearchContainer
      placeholder="어떤 거래 후기를 찾고 있나요?"
      categories={<MannerTagsNavbar />}
      selectors={
        <>
          <FollowFilterClickButton />
          <UserReviewSelectors />
        </>
      }
      Feed={UserReviewFeed}
      feedProps={{
        type: 'listview',
        defaultWhere: where,
        defaultOrderBy: orderBy,
        defaultDistinct: false,
      }}
    />
  );
}
