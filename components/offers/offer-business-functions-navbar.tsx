'use client';

import { usePathname } from 'next/navigation';
import { OFFER_OPTIONS } from '@/lib/offer/offer.constants';
import TextNavbar from '../base/text-navbar';

export default function OfferBusinessFunctionsNavbar() {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);

  return (
    <TextNavbar
      options={OFFER_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="medium"
    />
  );
}
