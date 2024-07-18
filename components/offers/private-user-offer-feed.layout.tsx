'use client';

import { ReactNode } from 'react';
import { PRIVATE_USER_OFFER_STATUS_OPTIONS } from '@/lib/offer/offer.constants';
import OfferStatusNavbar from './offer-status-navbar';

interface Props {
  children: ReactNode;
}

function PrivateUserofferFeedLayout({ children }: Props) {
  return (
    <div className="grid gap-1 grid-cols-1">
      <OfferStatusNavbar options={PRIVATE_USER_OFFER_STATUS_OPTIONS} />
      {children}
    </div>
  );
}

export default PrivateUserofferFeedLayout;
