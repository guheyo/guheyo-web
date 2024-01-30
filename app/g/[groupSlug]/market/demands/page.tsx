'use client';

import { redirect } from 'next/navigation';
import { groupVar } from '@/lib/apollo/cache';
import { useReactiveVar } from '@apollo/client';

function Page() {
  const group = useReactiveVar(groupVar);
  if (!group) return <div>null</div>;

  const defaultCategorySlug = group?.productCategories[0].slug;
  return redirect(`demands/${defaultCategorySlug}`);
}

export default Page;
