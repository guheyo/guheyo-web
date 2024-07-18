'use client';

import { ReactNode } from 'react';
import OfferHomeFeedLayout from '@/components/offers/offer-home-feed.layout';
import { OffersPageProps } from './page';

interface Props extends OffersPageProps {
  children: ReactNode;
}

function Layout({ params, children }: Props) {
  return (
    <OfferHomeFeedLayout businessFunction={params.businessFunction}>
      {children}
    </OfferHomeFeedLayout>
  );
}

export default Layout;
