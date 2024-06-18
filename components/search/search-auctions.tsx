'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import { useSearchParams } from 'next/navigation';
import { parseAuctionStatus } from '@/lib/auction/parse-auction-status';
import { getFindAuctionsOrderByArgs } from '@/lib/auction/get-find-auctions-order-by-args';
import SearchInput from './search-input';
import CategoriesNavbar from '../categories/categories-navbar';
import { DEBOUNCE } from './search.constants';
import AuctionSelectors from '../auction/auction-selectors';
import AuctionFeed from '../auction/auction-feed';
import ThumbnailFeedLayout from '../posts/thumbnail-feed.layout';

export default function SearchAuctions({ isInGroup }: { isInGroup: boolean }) {
  const { text, setText, keyword } = useSearchQuery(DEBOUNCE);
  const searchParams = useSearchParams();
  const status = parseAuctionStatus({
    status: searchParams.get('status'),
  });
  const where = {
    status,
  };

  const orderBy = getFindAuctionsOrderByArgs({
    sortOrder: searchParams.get('sort') || undefined,
  });

  const distinct = searchParams.get('distinct') !== 'false';

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
          <CategoriesNavbar hideSelector />
        </div>
      )}
      <div className="pt-4">
        <AuctionSelectors />
      </div>
      <div className="pt-4">
        <ThumbnailFeedLayout>
          <AuctionFeed
            where={where}
            orderBy={orderBy}
            keyword={keyword}
            distinct={distinct}
          />
        </ThumbnailFeedLayout>
      </div>
    </div>
  );
}
