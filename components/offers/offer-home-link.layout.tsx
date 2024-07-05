'use client';

import { BusinessFunction } from '@/lib/offer/offer.types';
import Link from 'next/link';
import React from 'react';

function OfferHomeLinkLayout({
  children,
  businessFunction,
}: {
  children: React.ReactNode;
  businessFunction: BusinessFunction;
}) {
  return (
    <Link href={`/${businessFunction}`}>
      <div className="flex flex-row gap-4 items-center text-gray-200 text-base md:text-lg font-semibold pt-4 pb-2">
        {children}
      </div>
    </Link>
  );
}

export default OfferHomeLinkLayout;
