'use client';

import OfferFeed from '@/components/offers/offer-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useJwtUser } from '@/hooks/use-jwt-user';

function MyOffersPage() {
  const jwtUser = useJwtUser();
  const status = useDealStatus();
  return <OfferFeed sellerId={jwtUser?.id} status={status!} type="thumbnail" />;
}

export default MyOffersPage;
