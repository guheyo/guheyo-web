'use client';

import SearchContainer from './search-container';
import BrandFeed from '../brand/brand-feed';

export default function SearchBrands() {
  const where = {};
  const orderBy = {};

  return (
    <SearchContainer
      placeholder="어떤 브랜드를 찾고 있나요?"
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
