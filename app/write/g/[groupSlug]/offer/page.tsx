'use client';

import WriteOfferForm from '@/components/write/write-offer-form';
import { useGroup } from '@/hooks/use-group';

export default function Page() {
  const { group } = useGroup();
  if (!group) return <div />;

  return <WriteOfferForm group={group} />;
}
