import { ReactNode } from 'react';
import OfferFeedHomeLayout from '@/components/offers/offer-feed-home.layout';
import { OffersPageProps } from './page';

interface Props extends OffersPageProps {
  children: ReactNode;
}

function OffersLayout({ params, children }: Props) {
  return <OfferFeedHomeLayout>{children}</OfferFeedHomeLayout>;
}

export default OffersLayout;
