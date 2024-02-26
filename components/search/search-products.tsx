'use client';

import { useState } from 'react';
import SearchInput from './search-input';
import ProductSearchResults from './product-search-results';
import CategoriesNavbar from '../categories/categories-navbar';
import DealSelectors from '../selectors/deal-selectors';

export default function SearchProducts() {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  return (
    <div className="grid w-fit">
      <SearchInput
        value={value}
        setValue={setValue}
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
        <ProductSearchResults keyword={value} />
      </div>
    </div>
  );
}
