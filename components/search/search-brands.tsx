'use client';

import SearchContainer from './search-container';
import BrandFeed from '../brand/brand-feed';
import FollowFilterClickButton from '../follow/follow-filter-click-button';
import BrandSelectors from '../brand/brand-selectors';
import BrandChannelNavbar from '../brand/brand-channel-navbar';

export default function SearchBrands() {
  const where = {};
  const orderBy = {};

  return (
    <SearchContainer
      placeholder="어떤 브랜드를 찾고 있나요?"
      channels={<BrandChannelNavbar />}
      selectors={
        <>
          <FollowFilterClickButton />
          <BrandSelectors />
        </>
      }
      Feed={BrandFeed}
      feedProps={{
        type: 'listview',
        defaultWhere: where,
        defaultOrderBy: orderBy,
        defaultDistinct: false,
      }}
    />
  );
}
