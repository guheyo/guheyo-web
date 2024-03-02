'use client';

import DemandFeed from '@/components/demands/demand-feed';
import { useJwtUser } from '@/hooks/use-jwt-user';
import { FindDemandsWhereArgs } from '@/interfaces/deal.interfaces';

function MyDemandsPage() {
  const jwtUser = useJwtUser();
  const where: FindDemandsWhereArgs = {
    buyerId: jwtUser?.id,
  };
  return <DemandFeed where={where} type="text" />;
}

export default MyDemandsPage;
