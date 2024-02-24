'use client';

import OfferFeed from '@/components/offers/offer-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useJwtUser } from '@/hooks/use-jwt-user';
import { FindOffersWhereArgs } from '@/interfaces/deal.interfaces';

function MyOffersPage() {
  const jwtUser = useJwtUser();
  const status = useDealStatus();
  const where: FindOffersWhereArgs = {
    sellerId: jwtUser?.id,
    status: status || undefined,
  };
  return <OfferFeed where={where} type="thumbnail" />;
}

export default MyOffersPage;
