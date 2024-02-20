'use client';

import OfferFeed from '@/components/offers/offer-feed';
import { useJwtUser } from '@/hooks/use-jwt-user';

function MyOffersPage() {
  const jwtUser = useJwtUser();
  return <OfferFeed sellerId={jwtUser?.id} />;
}

export default MyOffersPage;
