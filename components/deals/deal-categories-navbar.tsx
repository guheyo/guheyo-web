'use client';

import { usePathname } from 'next/navigation';
import { DEAL_OPTIONS } from '@/lib/deal/deal.constants';
import TextNavbar from '../base/text-navbar';

export default function DealCategoriesNavbar() {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);

  return (
    <TextNavbar
      options={DEAL_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="medium"
    />
  );
}
