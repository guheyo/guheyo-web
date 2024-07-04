'use client';

import { SelectChangeEvent } from '@mui/material';
import React from 'react';
import { OFFER_OPTIONS } from '@/lib/offer/offer.constants';
import { BusinessFunction } from '@/lib/offer/offer.types';
import BaseSelector from '../selectors/base-selector';

export default function BusinessFunctionSelector({
  onChange,
  businessFunction,
}: {
  onChange: (businessFunction: BusinessFunction) => void;
  businessFunction: BusinessFunction;
}) {
  const handleChange = (e: SelectChangeEvent) => {
    const selectedBusinessFunction = e.target.value as BusinessFunction;
    onChange(selectedBusinessFunction);
  };

  return (
    <BaseSelector
      name="offer"
      selectedValue={businessFunction}
      options={OFFER_OPTIONS}
      inputClassName="className: 'px-3 py-2 text-xs md:text-base"
      handleChange={handleChange}
    />
  );
}
