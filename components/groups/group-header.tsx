'use client';

import { useGroup } from '@/hooks/use-group';
import GroupHeaderItem from './group-header-item';

export default function GroupHeader({ slug }: { slug: string }) {
  const { loading, group } = useGroup();

  if (loading) return <div />;
  if (!group) return <div />;

  return <GroupHeaderItem name={group.name} icon={group.icon} />;
}
