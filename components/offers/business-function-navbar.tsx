'use client';

import { usePathname } from 'next/navigation';
import { BUSINESS_FUNCTION_OPTIONS } from '@/lib/offer/offer.constants';
import TextNavbar from '../base/text-navbar';

export default function BusinessFunctionNavbar() {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);

  return (
    <TextNavbar
      options={BUSINESS_FUNCTION_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="medium"
    />
  );
}
