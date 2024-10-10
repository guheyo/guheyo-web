'use client';

import GroupHome from '@/components/groups/group-home';
import { Suspense } from 'react';

export interface Props {
  params: {
    groupSlug: string;
  };
}

function Page({ params: { groupSlug } }: Props) {
  return (
    <Suspense>
      <GroupHome />
    </Suspense>
  );
}

export default Page;
