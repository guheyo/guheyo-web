'use client';

import DemandFeed from '@/components/demands/demand-feed';
import { useJwtUser } from '@/hooks/use-jwt-user';

function MyDemandsPage() {
  const jwtUser = useJwtUser();
  return <DemandFeed buyerId={jwtUser?.id} />;
}

export default MyDemandsPage;
