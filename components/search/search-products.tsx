'use client';

import { useState } from 'react';
import SearchInput from './search-input';
import ProductSearchResults from './product-search-results';

export default function SearchProducts() {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  return (
    <div className="grid gap-8 w-fit">
      <SearchInput
        value={value}
        setValue={setValue}
        placeholder="어떤 제품을 구해요?"
        handleKeyDown={handleKeyDown}
        handleChange={handleChange}
      />
      <ProductSearchResults keyword={value} />
    </div>
  );
}
