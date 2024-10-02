'use client';

import { usePathname } from 'next/navigation';
import { POST_SEARCH_OPTIONS } from '@/lib/post/post.constants';
import { parseBusinessFunctionLabel } from '@/lib/offer/parse-business-function-label';
import { BusinessFunction } from '@/lib/offer/offer.types';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import OfferSelectors from '../selectors/offer-selectors';
import OfferFeed from '../offers/offer-feed';
import SearchContainer from './search-container';
import MarketChannelNavbar from '../market/market-channel-navbar';

export default function SearchOffers() {
  const pathname = usePathname();
  const businessFunction = (pathname.split('/').at(-1) ||
    'sell') as BusinessFunction;

  const where = {
    businessFunction,
    status: undefined,
  };
  const orderBy = {
    createdAt: 'desc',
  };

  return (
    <SearchContainer
      placeholder={`어떤 ${parseBusinessFunctionLabel({
        businessFunction,
      })}글을 찾고 있나요?`}
      options={POST_SEARCH_OPTIONS}
      channels={<MarketChannelNavbar />}
      categories={<ProductCategoriesNavbar types={['product', 'service']} />}
      selectors={
        <>
          <div />
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
