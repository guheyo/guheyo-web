'use client';

import { useGroup } from '@/hooks/use-group';
import { useInfiniteThreadFeed } from '@/hooks/use-infinite-thread-feed';
import ThreadPreview from '../thread/thread-preview';
import { Mocks } from '../mock/mock';
import InfoHomeFeedLayout from './info-home-feed-layout';

export default function InfoHome() {
  const { group } = useGroup();
  const { loading, data } = useInfiniteThreadFeed({
    where: {
      groupId: group?.id,
      categoryType: 'community',
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 3,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findThreadPreviews) return <div />;

  const { edges } = data.findThreadPreviews;
  return (
    <InfoHomeFeedLayout
      hideGroupProfileNavbar
      showCategories={false}
      showTags={false}
      showSelectors={false}
      showMoreLink
    >
      {edges.map((thread) => (
        <ThreadPreview
          key={thread.node.id}
          type="listview"
          thread={thread.node}
          displayGroup
        />
      ))}
    </InfoHomeFeedLayout>
  );
}
