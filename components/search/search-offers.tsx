'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { POST_SEARCH_OPTIONS } from '@/lib/post/post.constants';
import { parseBusinessFunctionLabel } from '@/lib/offer/parse-business-function-label';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { josa } from 'es-hangul';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import OfferSelectors from '../selectors/offer-selectors';
import OfferFeed from '../offers/offer-feed';
import SearchContainer from './search-container';
import MarketChannelNavbar from '../market/market-channel-navbar';

export default function SearchOffers() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const businessFunction = (pathname.split('/').at(-1) ||
    'sell') as BusinessFunction;
  const groupSlug = searchParams.get('group');

  const where = {
    businessFunction,
    status: undefined,
  };
  const orderBy = {
    createdAt: 'desc',
  };

  return (
    <SearchContainer
      placeholder={`어떤 ${josa(
        parseBusinessFunctionLabel({
          businessFunction,
        }),
        '을/를',
      )} 찾고 있나요?`}
      options={POST_SEARCH_OPTIONS}
      channels={<MarketChannelNavbar />}
      categories={
        groupSlug && <ProductCategoriesNavbar types={['product', 'service']} />
      }
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
