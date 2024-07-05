'use client';

import SearchAuctions from '@/components/search/search-auctions';
import { BusinessFunction } from '@/lib/offer/offer.types';
import { useSearchParams } from 'next/navigation';
import SearchOffers from './search-offers';

export default function SearchProducts({ isInGroup }: { isInGroup: boolean }) {
  const searchParams = useSearchParams();
  const businessFunction =
    (searchParams.get('businessFunction') as BusinessFunction) || 'auction';

  if (businessFunction === 'auction')
    return <SearchAuctions isInGroup={isInGroup} />;
  return <SearchOffers />;
}
