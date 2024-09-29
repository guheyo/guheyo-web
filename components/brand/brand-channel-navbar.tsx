'use client';

import { usePathname } from 'next/navigation';
import { BRAND_CHANNEL_OPTIONS } from '@/lib/brand/brand.constants';
import TextNavbar from '../base/text-navbar';

export default function BrandChannelNavbar() {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);

  return (
    <TextNavbar
      options={BRAND_CHANNEL_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="medium"
    />
  );
}
