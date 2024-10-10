'use client';

import { parseUrlSegments } from '@/lib/group/parse-url-segments';
import { usePathname } from 'next/navigation';
import BrandSortOrderSelector from './brand-sort-order-selector';
import PeriodSelector from '../selectors/period-selector';

export default function BrandSelectors() {
  const pathname = usePathname();
  const { channelSlug } = parseUrlSegments(pathname);

  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      {channelSlug === 'brand' && <BrandSortOrderSelector />}
      {channelSlug === 'community' && <PeriodSelector />}
    </div>
  );
}
