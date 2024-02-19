'use client';

import SwapFeed from '@/components/swaps/swap-feed';
import { useJwtUser } from '@/hooks/use-jwt-user';

function MySwapsPage() {
  const jwtUser = useJwtUser();
  return <SwapFeed proposerId={jwtUser?.id} />;
}

export default MySwapsPage;
