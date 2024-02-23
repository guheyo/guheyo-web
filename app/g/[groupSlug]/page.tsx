'use client';

import { redirect } from 'next/navigation';
import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';

export interface Props {
  params: {
    groupSlug: string;
  };
}

function Page({ params: { groupSlug } }: Props) {
  const group = useReactiveVar(groupVar);
  if (!group) return <div />;

  return redirect(`${groupSlug}/market/offers`);
}

export default Page;
