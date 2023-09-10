'useClient';

import { useMemo } from 'react';
import Feed from '@/app/components/posts/feed';
import { CategoryPageProps } from '../../market/[categoryName]/page';

// dummy data
const categories = [
  { id: 'auction', name: '경매' },
  { id: 'auction-schedule', name: '경매일정' },
];

function AuctionPage({
  params: { guildName, categoryName },
}: CategoryPageProps) {
  const currentCategory = useMemo(
    () => categories?.find((c) => encodeURIComponent(c.name) === categoryName),
    [categoryName],
  );

  return <Feed categoryId={currentCategory!.id} />;
}

export default AuctionPage;
