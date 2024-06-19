'use client';

import { redirect } from 'next/navigation';

export interface Props {
  params: {
    groupSlug: string;
  };
}

function Page({ params: { groupSlug } }: Props) {
  return redirect(`/g/${groupSlug}/auction`);
}

export default Page;
