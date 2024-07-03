'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import SearchInput from './search-input';
import ProductSearchResults from './product-search-results';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import OfferSelectors from '../selectors/offer-selectors';
import { DEBOUNCE } from './search.constants';

export default function SearchProducts() {
  const { text, setText, keyword } = useSearchQuery(DEBOUNCE);

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
        <ProductCategoriesNavbar hideSelector />
      </div>
      <div className="pt-4">
        <OfferSelectors />
      </div>
      <div className="pt-4">
        <ProductSearchResults keyword={keyword} />
      </div>
    </div>
  );
}
