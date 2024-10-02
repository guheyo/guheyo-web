'use client';

import { POST_SEARCH_OPTIONS } from '@/lib/post/post.constants';
import { useSearchParams } from 'next/navigation';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import AuctionSelectors from '../auction/auction-selectors';
import AuctionFeed from '../auction/auction-feed';
import SearchContainer from './search-container';
import MarketChannelNavbar from '../market/market-channel-navbar';

export default function SearchAuctions() {
  const searchParams = useSearchParams();
  const groupSlug = searchParams.get('group');

  return (
    <SearchContainer
      placeholder="어떤 경매를 찾고 있나요?"
      options={POST_SEARCH_OPTIONS}
      categories={
        groupSlug && <ProductCategoriesNavbar types={['product', 'service']} />
      }
      channels={<MarketChannelNavbar />}
      selectors={
        <>
          <div />
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
