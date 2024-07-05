'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { BusinessFunction } from '@/lib/offer/offer.types';
import BusinessFunctionSelector from './business-function-selector';

function BusinessFunctionQueryUpdater() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const businessFunction =
    (searchParams.get('businessFunction') as BusinessFunction) || 'sell';

  const handleBusinessFunctionChange = (
    selectedBusinessFunction: BusinessFunction,
  ): void => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('businessFunction', selectedBusinessFunction);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <BusinessFunctionSelector
      onChange={handleBusinessFunctionChange}
      businessFunction={businessFunction}
    />
  );
}

export default BusinessFunctionQueryUpdater;
