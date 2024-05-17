'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import {
  AuthorResponse,
  OfferPreviewResponse,
  PostPreviewWithoutUserResponse,
} from '@/generated/graphql';
import { ShippingType } from '@/lib/shipping/shipping.types';
import { OfferStatus } from '@/lib/offer/offer.types';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import OfferDetailPrice from './offer-detail-price';
import OfferDetailName from './offer-detail-name';
import OfferShippingCost from './offer-shipping-cost';
import RecentVersionLink from '../version/recent-version-link';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import PostDetailAddons from '../posts/post-detail-addons';

export default function OfferVersionDetailMain({
  versionCreatedAt,
  user,
  post,
  offer,
}: {
  versionCreatedAt: Date;
  user: AuthorResponse;
  post: PostPreviewWithoutUserResponse;
  offer: OfferPreviewResponse;
}) {
  const device = useDeviceDetect();

  return (
    <>
      <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <UserProfileRedirectButton
            user={user}
            displayAvatar
            displayUsername
            fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
        <RecentVersionLink
          versionCreatedAt={versionCreatedAt}
          slug={post.slug!}
        />
        <OfferDetailName
          offerStatus={offer.status as OfferStatus}
          name0={offer.name0!}
          name1={offer.name1}
        />
        <div className="grid grid-cols-1 gap-0 items-center">
          <OfferDetailPrice price={offer.price} />
          <OfferShippingCost
            shippingCost={offer.shippingCost}
            shippingType={offer.shippingType as ShippingType}
          />
        </div>
      </div>
      <div className="pt-8 text-sm md:text-base md:h-fit overflow-y-auto">
        {offer.content && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {offer.content}
          </ReactMarkdown>
        )}
      </div>
      <div className="pt-8 text-base md:text-lg text-gray-300 font-bold">
        <PostDetailAddons />
      </div>
    </>
  );
}
