'use client';

import { OfferPreviewResponse } from '@/generated/graphql';
import { BusinessFunction, OfferStatus } from '@/lib/offer/offer.types';
import { parseChannelLink } from '@/lib/channel/parse-channel-link';
import OfferMenu from './offer-menu';
import PostCreatedAt from '../posts/post-created-at';
import GroupNameLink from '../groups/group-name-link';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferCredditBar({ offer }: Props) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row gap-2 items-center">
        <GroupNameLink
          name={offer.post.group.name}
          href={parseChannelLink({
            groupSlug: offer.post.group.slug!,
            channelSlug: offer.businessFunction,
          })}
        />
        <PostCreatedAt createdAt={offer.bumpedAt} />
      </div>
      <div className="h-4 mt-[-22px]">
        <OfferMenu
          offerId={offer.id}
          postId={offer.post.id}
          offerStatus={offer.status as OfferStatus}
          businessFunction={offer.businessFunction as BusinessFunction}
          userId={offer.post.user.id}
          privateOnly
          archivedAt={offer.post.archivedAt}
        />
      </div>
    </div>
  );
}
