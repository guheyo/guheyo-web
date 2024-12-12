'use client';

import UserReviewForm from '@/components/user-review/user-review-form';
import { useFindOfferQuery, useFindTagsQuery } from '@/generated/graphql';
import { use } from 'react';

export default function Page({
  params,
}: {
  params: Promise<{ userId: string; offerId: string }>;
}) {
  const { userId, offerId } = use(params);
  const { data: offerData, loading: offerLoading } = useFindOfferQuery({
    variables: {
      id: offerId,
    },
    fetchPolicy: 'cache-and-network',
  });

  const { data: tagsData, loading: tagsLoading } = useFindTagsQuery();

  const offer = offerData?.findOffer;
  const tags = tagsData?.findTags;

  if (offerLoading || tagsLoading) return <div />;
  if (!offer || !tags) return <div />;

  return (
    <UserReviewForm
      targetType="offer"
      targetId={offerId}
      groupId={offer.post.group.id}
      title={offer.post.title}
      reviewedUserId={userId}
      tags={tags}
    />
  );
}
