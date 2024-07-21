'use client';

import { POST_SEARCH_OPTIONS } from '@/lib/post/post.constants';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import AuctionSelectors from '../auction/auction-selectors';
import AuctionFeed from '../auction/auction-feed';
import BusinessFunctionQueryUpdater from '../offers/business-function-query-updater';
import SearchContainer from './search-container';

export default function SearchAuctions() {
  return (
    <SearchContainer
      placeholder="어떤 제품을 찾고 있나요?"
      options={POST_SEARCH_OPTIONS}
      categories={<ProductCategoriesNavbar types={['product', 'service']} />}
      selectors={
        <>
          <BusinessFunctionQueryUpdater defaultBusinessFunction="auction" />
          <AuctionSelectors />
        </>
      }
      Feed={AuctionFeed}
      feedProps={{
        type: 'listview',
        defaultWhere: {},
        defaultOrderBy: undefined,
        defaultDistinct: false,
      }}
    />
  );
}
