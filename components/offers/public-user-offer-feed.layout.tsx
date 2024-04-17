'use client';

import { ReactNode } from 'react';
import OfferBusinessFunctionsNavbar from './offer-business-functions-navbar';

interface Props {
  children: ReactNode;
}

function PublicUserOfferFeedLayout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col justify-start pb-4">
        <OfferBusinessFunctionsNavbar />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default PublicUserOfferFeedLayout;
