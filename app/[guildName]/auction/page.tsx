'useClient';

import { useMemo } from 'react';
import Feed from '@/app/components/posts/feed';
import { useGuildCategories } from '@/app/lib/api/guilds';
import { CategoryPageProps } from '../market/[categoryName]/page';

function AuctionPage({
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

export default AuctionPage;
