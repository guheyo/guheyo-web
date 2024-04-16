'use client';

import { ReactNode } from 'react';
import { PRIVATE_USER_OFFER_STATUS_OPTIONS } from '@/lib/offer/offer.constants';
import OfferBusinessFunctionsNavbar from './offer-business-functions-navbar';
import OfferStatusNavbar from './offer-status-navbar';

interface Props {
  children: ReactNode;
}

function PrivateUserofferFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col justify-start pb-4">
        <OfferBusinessFunctionsNavbar />
        <OfferStatusNavbar options={PRIVATE_USER_OFFER_STATUS_OPTIONS} />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default PrivateUserofferFeedLayout;
