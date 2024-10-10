'use client';

import { usePathname } from 'next/navigation';
import { MARKET_CHANNEL_OPTIONS } from '@/lib/market/market.constants';
import TextNavbar from '../base/text-navbar';

export default function MarketChannelNavbar() {
  const pathname = usePathname();
  const selectedValue = pathname.split('/').at(-1);

  return (
    <TextNavbar
      options={MARKET_CHANNEL_OPTIONS}
      selectedValue={selectedValue}
      parseNewURL={(value) => value}
      size="medium"
    />
  );
}
