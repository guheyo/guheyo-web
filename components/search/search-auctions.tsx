'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import SearchInput from './search-input';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import { DEBOUNCE } from './search.constants';
import AuctionSelectors from '../auction/auction-selectors';
import AuctionFeed from '../auction/auction-feed';
import TextFeedLayout from '../posts/text-feed.layout';
import BusinessFunctionQueryUpdater from '../offers/business-function-query-updater';

export default function SearchAuctions() {
  const { text, setText, keyword } = useSearchQuery(DEBOUNCE);
  const where = {};
  const sortOrder = undefined;
  const distinct = false;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  return (
    <div className="grid max-w-4xl w-full">
      <SearchInput
        text={text}
        setText={setText}
        placeholder="어떤 제품을 찾고 있나요?"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <div className="pt-4 mx-2.5 md:mx-1">
        <ProductCategoriesNavbar types={['product']} />
      </div>
      <div className="pt-4 flex flex-row justify-between">
        <BusinessFunctionQueryUpdater defaultBusinessFunction="auction" />
        <AuctionSelectors />
      </div>
      <div className="pt-4">
        <TextFeedLayout>
          <AuctionFeed
            type="listview"
            defaultWhere={where}
            defaultSortOrder={sortOrder}
            keyword={keyword}
            defaultDistinct={distinct}
          />
        </TextFeedLayout>
      </div>
    </div>
  );
}
