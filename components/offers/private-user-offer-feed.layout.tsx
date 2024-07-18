'use client';

import { ReactNode } from 'react';
import { PRIVATE_USER_OFFER_STATUS_OPTIONS } from '@/lib/offer/offer.constants';
import OfferStatusNavbar from './offer-status-navbar';

interface Props {
  children: ReactNode;
}

function PrivateUserofferFeedLayout({ children }: Props) {
  return (
    <>
      <div className="pb-4">
        <OfferStatusNavbar options={PRIVATE_USER_OFFER_STATUS_OPTIONS} />
      </div>
      {children}
    </>
  );
}

export default PrivateUserofferFeedLayout;
