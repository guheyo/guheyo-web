'use client';

import SwapFeed from '@/components/swaps/swap-feed';
import { useDealStatus } from '@/hooks/use-deal-status';
import { useJwtUser } from '@/hooks/use-jwt-user';

function MySwapsPage() {
  const jwtUser = useJwtUser();
  const status = useDealStatus();
  return <SwapFeed proposerId={jwtUser?.id} status={status!} />;
}

export default MySwapsPage;
