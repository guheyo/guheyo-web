'use client';

import UserReviewForm from '@/components/user-review/user-review-form';
import { useFindAuctionQuery, useFindTagsQuery } from '@/generated/graphql';

export default function Page({
  params: { userId, auctionId },
}: {
  params: {
    userId: string;
    auctionId: string;
  };
}) {
  const { data: auctionData, loading: auctionLoading } = useFindAuctionQuery({
    variables: {
      id: auctionId,
    },
    fetchPolicy: 'cache-and-network',
  });

  const { data: tagsData, loading: tagsLoading } = useFindTagsQuery();

  const auction = auctionData?.findAuction;
  const tags = tagsData?.findTags;

  if (auctionLoading || tagsLoading) return <div />;
  if (!auction || !tags) return <div />;

  return (
    <UserReviewForm
      targetType="auction"
      targetId={auctionId}
      groupId={auction.post.group.id}
      title={auction.post.title}
      reviewedUserId={userId}
      tags={tags}
    />
  );
}
