'use client';

import OfferFeed from '@/components/offers/offer-feed';
import { useJwtUser } from '@/hooks/use-jwt-user';
import { FindOffersWhereArgs } from '@/interfaces/deal.interfaces';

function MyOffersPage() {
  const jwtUser = useJwtUser();
  const where: FindOffersWhereArgs = {
    sellerId: jwtUser?.id,
  };
  return <OfferFeed where={where} type="thumbnail" />;
}

export default MyOffersPage;
