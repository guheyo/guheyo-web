'use client';

import { useGroup } from '@/hooks/use-group';
import UserReviewPreview from './user-review-preview';
import { Mocks } from '../mock/mock';
import { useInfiniteUserReviewFeed } from '@/hooks/use-infinite-user-review-feed';
import UserReviewHomeFeedLayout from './user-review-home-feed.layout';

export default function UserReviewHome() {
  const { group } = useGroup();
  const { loading, data } = useInfiniteUserReviewFeed({
    where: {
      groupId: group?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 3,
  });

  if (loading) return <Mocks length={12} height={72} color="bg-dark-400" />;
  if (!data?.findUserReviewPreviews) return <div />;
  const { edges } = data.findUserReviewPreviews;

  return (
      <UserReviewHomeFeedLayout
        hideGroupProfileNavbar
        showCategories={false}
        showTags={false}
        showSelectors={false}
        showMoreLink
      >
      {edges.map((edge) => (
        <UserReviewPreview
          key={edge.node.id}
          userReview={edge.node}
          displayGroup={!group || group.name === 'root'}
        />
      ))}
    </UserReviewHomeFeedLayout>
  );
}
