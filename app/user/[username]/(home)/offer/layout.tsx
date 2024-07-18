'use client';

import OfferBusinessFunctionsNavbar from '@/components/offers/offer-business-functions-navbar';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <div>
      <div className="flex flex-col justify-start">
        <OfferBusinessFunctionsNavbar />
      </div>
      <div className="grid gap-1 grid-cols-1">{children}</div>
    </div>
  );
}

export default Layout;
