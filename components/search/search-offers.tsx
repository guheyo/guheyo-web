'use client';

import { BusinessFunction } from '@/lib/offer/offer.types';
import { useSearchParams } from 'next/navigation';
import { POST_SEARCH_OPTIONS } from '@/lib/post/post.constants';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import OfferSelectors from '../selectors/offer-selectors';
import OfferFeed from '../offers/offer-feed';
import BusinessFunctionQueryUpdater from '../offers/business-function-query-updater';
import SearchContainer from './search-container';

export default function SearchOffers() {
  const searchParams = useSearchParams();
  const businessFunction =
    (searchParams.get('businessFunction') as BusinessFunction) || 'sell';

  const where = {
    businessFunction,
    status: undefined,
  };
  const orderBy = {
    createdAt: 'desc',
  };

  return (
    <SearchContainer
      placeholder="어떤 제품을 찾고 있나요?"
      options={POST_SEARCH_OPTIONS}
      categories={<ProductCategoriesNavbar types={['product', 'service']} />}
      selectors={
        <>
          <BusinessFunctionQueryUpdater defaultBusinessFunction="sell" />
          <OfferSelectors />
        </>
      }
      Feed={OfferFeed}
      feedProps={{
        type: 'listview',
        defaultWhere: where,
        defaultOrderBy: orderBy,
        defaultDistinct: true,
      }}
    />
  );
}
