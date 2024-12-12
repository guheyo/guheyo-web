'use client';

import GroupHome from '@/components/groups/group-home';
import { Suspense } from 'react';

export interface Props {
  params: Promise<{
    groupSlug: string;
  }>;
}

function Page({ params }: Props) {
  return (
    <Suspense>
      <GroupHome />
    </Suspense>
  );
}

export default Page;
