'use client';

import { useSearchQuery } from '@/lib/search/use-search-query';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { useState } from 'react';
import SearchInput from './search-input';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import OfferSelectors from '../selectors/offer-selectors';
import { DEBOUNCE } from './search.constants';
import OfferFeed from '../offers/offer-feed';
import BusinessFunctionSelector from '../offers/business-function-selector';
import TextFeedLayout from '../posts/text-feed.layout';

export default function SearchProducts() {
  const { text, setText, keyword } = useSearchQuery(DEBOUNCE);
  const [businessFunction, setBusinessFunction] =
    useState<BusinessFunction>('sell');

  const where = {
    businessFunction,
    status: undefined,
  };
  const distinct = true;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    // Do nothing
  };

  const handleBusinessFunctionChange = (
    selectedBusinessFunction: BusinessFunction,
  ): void => {
    setBusinessFunction(selectedBusinessFunction);
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
        <ProductCategoriesNavbar types={['product', 'service']} hideSelector />
      </div>
      <div className="pt-4 flex flex-row justify-between">
        <BusinessFunctionSelector
          onChange={handleBusinessFunctionChange}
          businessFunction={businessFunction}
        />
        <OfferSelectors />
      </div>
      <div className="pt-4">
        <TextFeedLayout>
          <OfferFeed
            type="listview"
            defaultWhere={where}
            defaultDistinct={distinct}
            keyword={keyword}
          />
        </TextFeedLayout>
      </div>
    </div>
  );
}
