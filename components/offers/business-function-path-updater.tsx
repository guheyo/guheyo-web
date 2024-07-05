'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { BusinessFunction } from '@/lib/offer/offer.types';
import BusinessFunctionSelector from './business-function-selector';

function BusinessFunctionPathUpdater() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const businessFunction = pathname.split('/').at(-1) as BusinessFunction;

  const handleBusinessFunctionChange = (
    selectedBusinessFunction: BusinessFunction,
  ): void => {
    const params = new URLSearchParams(searchParams.toString());
    const segments = pathname.split('/');
    segments[segments.length - 1] = selectedBusinessFunction;
    const newURL = segments.join('/');

    router.push(`${newURL}?${params.toString()}`);
  };

  return (
    <BusinessFunctionSelector
      onChange={handleBusinessFunctionChange}
      businessFunction={businessFunction}
    />
  );
}

export default BusinessFunctionPathUpdater;
