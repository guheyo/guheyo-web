'use client';

import SwapFeed from '@/components/swaps/swap-feed';
import { useJwtUser } from '@/hooks/use-jwt-user';
import { FindSwapsWhereArgs } from '@/interfaces/deal.interfaces';

function MySwapsPage() {
  const jwtUser = useJwtUser();
  const where: FindSwapsWhereArgs = {
    proposerId: jwtUser?.id,
  };
  return <SwapFeed where={where} type="thumbnail" />;
}

export default MySwapsPage;
