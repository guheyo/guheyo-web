'use client';

import { useInfiniteThreadFeed } from '@/hooks/use-infinite-thread-feed';
import { useGroup } from '@/hooks/use-group';
import ThreadPreview from '../thread/thread-preview';
import { Mocks } from '../mock/mock';
import GbHomeFeedLayout from './gb-home-feed.layout';

export default function GbHome() {
  const { group } = useGroup();
  const { loading, data } = useInfiniteThreadFeed({
    where: {
      groupId: group?.id,
      categoryType: 'gb',
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 3,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findThreadPreviews) return <div />;

  const threads = data.findThreadPreviews.edges.map((edge) => edge.node);

  return (
    <GbHomeFeedLayout
      hideGroupProfileNavbarItems
      showChannels={false}
      showCategories={false}
      showTags={false}
      showSelectors={false}
      showMoreLink
    >
      {threads.map((thread) => (
        <ThreadPreview
          key={thread.id}
          type="listview"
          thread={thread}
          displayGroup
        />
      ))}
    </GbHomeFeedLayout>
  );
}
