'use client';

import DemandFeed from '@/components/demands/demand-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useJwtUser } from '@/hooks/use-jwt-user';

function MyDemandsPage() {
  const jwtUser = useJwtUser();
  const status = useDealStatus();
  return <DemandFeed buyerId={jwtUser?.id} status={status!} />;
}

export default MyDemandsPage;
