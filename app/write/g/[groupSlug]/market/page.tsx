'use client';

import WriteDealForm from '@/components/write/write-deal-form';
import { useGroup } from '@/hooks/use-group';

export default function Page() {
  const { group } = useGroup();
  if (!group) return <div />;

  return <WriteDealForm group={group} />;
}
