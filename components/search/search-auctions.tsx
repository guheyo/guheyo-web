'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import SearchInput from './search-input';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import { DEBOUNCE } from './search.constants';
import AuctionSelectors from '../auction/auction-selectors';
import AuctionFeed from '../auction/auction-feed';
import ThumbnailFeedLayout from '../posts/thumbnail-feed.layout';

export default function SearchAuctions({ isInGroup }: { isInGroup: boolean }) {
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
        placeholder="어떤 경매를 찾고 있나요?"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      {isInGroup && (
        <div className="pt-4 mx-2.5 md:mx-1">
          <ProductCategoriesNavbar types={['product']} hideSelector />
        </div>
      )}
      <div className="pt-4">
        <AuctionSelectors />
      </div>
      <div className="pt-4">
        <ThumbnailFeedLayout>
          <AuctionFeed
            defaultWhere={where}
            defaultSortOrder={sortOrder}
            keyword={keyword}
            defaultDistinct={distinct}
          />
        </ThumbnailFeedLayout>
      </div>
    </div>
  );
}
