'use client';

import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import SearchInput from './search-input';
import ProductSearchResults from './product-search-results';
import CategoriesNavbar from '../categories/categories-navbar';
import DealSelectors from '../selectors/deal-selectors';
import { DEBOUNCE } from './search.constants';

export default function SearchProducts() {
  const [text, setText] = useState('');
  const [keyword] = useDebounce(text, DEBOUNCE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  return (
    <div className="grid w-fit">
      <SearchInput
        text={text}
        setText={setText}
        placeholder="어떤 제품을 찾고 있나요?"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <div className="pt-4">
        <CategoriesNavbar hideSelector />
      </div>
      <div className="pt-4">
        <DealSelectors />
      </div>
      <div className="pt-4">
        <ProductSearchResults keyword={keyword} />
      </div>
    </div>
  );
}
