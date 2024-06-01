'use client';

import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { useRouter, useSearchParams } from 'next/navigation';
import SearchInput from './search-input';
import ProductSearchResults from './product-search-results';
import CategoriesNavbar from '../categories/categories-navbar';
import OfferSelectors from '../selectors/offer-selectors';
import { DEBOUNCE } from './search.constants';

export default function SearchProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [text, setText] = useState('');
  const [keyword] = useDebounce(text, DEBOUNCE);

  // Fetch query parameters from URL
  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setText(query);
    }
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (keyword) {
      params.set('q', keyword);
    } else {
      params.delete('q');
    }
    router.replace(`?${params.toString()}`);
  }, [keyword, router, searchParams]);

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
        <CategoriesNavbar hideSelector />
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
