'use client';

import { redirect } from 'next/navigation';
import { guildVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';

export interface Props {
  params: {
    guildSlug: string;
  };
}

function Page({ params: { guildSlug } }: Props) {
  const guild = useReactiveVar(guildVar);
  if (!guild) return <div>null</div>;

  const defaultCategorySlug = guild?.productCategories[0].slug;
  return redirect(`${guildSlug}/market/offers/${defaultCategorySlug}`);
}

export default Page;
