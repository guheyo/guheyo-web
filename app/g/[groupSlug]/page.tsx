'use client';

import GroupHome from '@/components/groups/group-home';

export interface Props {
  params: {
    groupSlug: string;
  };
}

function Page({ params: { groupSlug } }: Props) {
  return <GroupHome />;
}

export default Page;
