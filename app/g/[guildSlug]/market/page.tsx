'use client';

import { redirect } from 'next/navigation';
import { guildVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';

function Page() {
  const guild = useReactiveVar(guildVar);
  if (!guild) return <div>null</div>;

  const defaultCategorySlug = guild?.productCategories[0].slug;
  return redirect(`market/offers/${defaultCategorySlug}`);
}

export default Page;
