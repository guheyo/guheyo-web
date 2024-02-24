'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { groupVar } from '@/lib/apollo/cache';
import SearchInput from './search-input';
import ProductSearchResults from './product-search-results';
import CategoriesNavbar from '../categories/categories-navbar';
import DealStatusSelector from '../deals/deal-status-selector';

export default function SearchProducts() {
  const [value, setValue] = useState('');
  const group = groupVar();
  const searchParams = useSearchParams();
  const categorySlug = searchParams.get('category');

  const category = group?.productCategories.find(
    (c) => c.slug === categorySlug,
  );

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
      <div className="flex justify-end pb-2">
        <DealStatusSelector />
      </div>
      <div className="pt-4">
        <ProductSearchResults
          groupId={group?.id}
          categoryId={category?.id}
          keyword={value}
        />
      </div>
    </div>
  );
}
