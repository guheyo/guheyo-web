'use client';

import { useInfiniteThreadAndReviewFeed } from '@/hooks/use-infinite-thread-and-review-feed';
import { useRef } from 'react';
import ThreadPreview from '../thread/thread-preview';
import UserReviewPreview from '../user-review/user-review-preview';
import { Mocks } from '../mock/mock';
import CommunityHomeFeedLayout from './community-home-feed-layout';
import { useGroup } from '@/hooks/use-group';

export default function CommunityHome() {
  const ref = useRef<HTMLDivElement>(null);
  const { group } = useGroup();
  const { loading, items } = useInfiniteThreadAndReviewFeed({
    ref,
    type: undefined,
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

  return (
    <CommunityHomeFeedLayout
      hideGroupProfileSidebarItems
      showCategories={false}
      showTags={false}
      showSelectors={false}
      showMoreLink
    >
      {items.map((item) => {
        switch (item.__typename) {
          case 'ThreadPreviewResponseEdge':
            return (
              <ThreadPreview
                key={item.node.id}
                type="listview"
                thread={item.node}
                displayGroup
              />
            );
          case 'UserReviewPreviewResponseEdge':
            return (
              <UserReviewPreview
                key={item.node.id}
                userReview={item.node}
                displayGroup
              />
            );
          default:
            return <div key={item.node.id} />;
        }
      })}
    </CommunityHomeFeedLayout>
  );
}
