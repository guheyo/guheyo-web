'use client';

import { ReactNode } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { BusinessFunction } from '@/lib/offer/offer.types';
import OfferSelectors from '../selectors/offer-selectors';
import ProductCategoriesNavbar from '../categories/product-categories-navbar';
import BusinessFunctionSelector from './business-function-selector';

interface Props {
  children: ReactNode;
}

function OfferFeedHomeLayout({ children }: Props) {
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
    <div>
      <div className="mx-2.5 md:mx-1">
        <ProductCategoriesNavbar types={['product', 'service']} />
      </div>
      <div className="flex justify-end pb-2 flex flex-row justify-between">
        <BusinessFunctionSelector
          onChange={handleBusinessFunctionChange}
          businessFunction={businessFunction}
        />
        <OfferSelectors />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default OfferFeedHomeLayout;
