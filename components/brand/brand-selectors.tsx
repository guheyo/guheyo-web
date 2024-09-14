'use client';

import BrandSortOrderSelector from './brand-sort-order-selector';

export default function BrandSelectors() {
  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      <BrandSortOrderSelector />
    </div>
  );
}
