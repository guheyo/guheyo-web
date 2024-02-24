'use client';

import DemandFeed from '@/components/demands/demand-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useJwtUser } from '@/hooks/use-jwt-user';
import { FindDemandsWhereArgs } from '@/interfaces/deal.interfaces';

function MyDemandsPage() {
  const jwtUser = useJwtUser();
  const status = useDealStatus();
  const where: FindDemandsWhereArgs = {
    buyerId: jwtUser?.id,
    status: status || undefined,
  };
  return <DemandFeed where={where} />;
}

export default MyDemandsPage;
