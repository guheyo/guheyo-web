'use client';

import { useInfiniteThreadAndReviewFeed } from '@/hooks/use-infinite-thread-and-reviews-feed';
import { useRef } from 'react';
import CommunityHomeFeedLayout from './community-home-feed.layout';
import ThreadPreview from '../thread/thread-preview';
import UserReviewPreview from '../user-review/user-review-preview';
import { Mocks } from '../mock/mock';

export default function CommunityHome() {
  const ref = useRef<HTMLDivElement>(null);
  const { loading, items } = useInfiniteThreadAndReviewFeed({
    ref,
    type: undefined,
    take: 3,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;

  return (
    <CommunityHomeFeedLayout
      showCategories={false}
      showTags={false}
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
                isInGroup={false}
              />
            );
          case 'UserReviewPreviewResponseEdge':
            return (
              <UserReviewPreview
                key={item.node.id}
                userReview={item.node}
                isInGroup={false}
              />
            );
          default:
            return <div key={item.node.id} />;
        }
      })}
    </CommunityHomeFeedLayout>
  );
}
