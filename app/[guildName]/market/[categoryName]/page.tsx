'use client';

import { useMemo } from 'react';
import Feed from '@/app/components/posts/feed';
import { useGuildCategories } from '@/app/lib/api/guilds';

export interface CategoryPageProps {
  params: {
    guildName: string;
    categoryName: string;
  };
}

function CategoryPage({
  params: { guildName, categoryName },
}: CategoryPageProps) {
  const { data: categories, isLoading } = useGuildCategories(guildName);

  const currentCategory = useMemo(
    () => categories?.find((c) => encodeURIComponent(c.name) === categoryName),
    [categories, categoryName],
  );

  if (isLoading || !currentCategory) return <div>loading</div>;

  return <Feed categoryId={currentCategory.id} />;
}

export default CategoryPage;
