'use client';

import { extractGroupAndChannel } from '@/lib/group/extract-group-and-channel';
import { usePathname } from 'next/navigation';
import BrandSortOrderSelector from './brand-sort-order-selector';
import PeriodSelector from '../selectors/period-selector';

export default function BrandSelectors() {
  const pathname = usePathname();
  const { channelSlug } = extractGroupAndChannel(pathname);

  return (
    <div className="flex gap-1 md:gap-2 justify-end">
      {channelSlug === 'brand' && <BrandSortOrderSelector />}
      {channelSlug === 'community' && <PeriodSelector />}
    </div>
  );
}
