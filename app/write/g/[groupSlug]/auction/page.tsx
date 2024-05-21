'use client';

import WriteAuctionForm from '@/components/auction/write-auction-form';
import { useGroup } from '@/hooks/use-group';

export default function Page() {
  const { group } = useGroup();
  if (!group) return <div />;

  return <WriteAuctionForm group={group} />;
}
