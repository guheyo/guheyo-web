'use client';

import SwapFeed from '@/components/swaps/swap-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useJwtUser } from '@/hooks/use-jwt-user';
import { FindSwapsWhereArgs } from '@/interfaces/deal.interfaces';

function MySwapsPage() {
  const jwtUser = useJwtUser();
  const status = useDealStatus();
  const where: FindSwapsWhereArgs = {
    proposerId: jwtUser?.id,
    status: status || undefined,
  };
  return <SwapFeed where={where} />;
}

export default MySwapsPage;
