'use client';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';
import { useDeviceDetect } from '@/hooks/use-device-detect';
import { OfferResponse } from '@/generated/graphql';
import { OfferStatus } from '@/lib/offer/offer.types';
import { ShippingType } from '@/lib/shipping/shipping.types';
import ReportsLink from '../reports/reports-link';
import UserProfileRedirectButton from '../users/user-profile-redirect-button';
import PostDetailDate from '../posts/post-detail-date';
import OfferMenu from './offer-menu';
import OfferDetailName from './offer-detail-name';
import OfferDetailPrice from './offer-detail-price';
import OfferShippingCost from './offer-shipping-cost';

export default function OfferDetailMain({ offer }: { offer: OfferResponse }) {
  const device = useDeviceDetect();

  return (
    <>
      <div className="flex flex-row gap-2 md:gap-3 text-sm md:text-base items-start justify-between">
        <div className="flex flex-row items-center gap-2">
          <UserProfileRedirectButton
            user={offer.post.user}
            displayAvatar
            displayUsername
            fontSize={device === 'mobile' ? 'text-base' : 'text-lg'}
          />
          <PostDetailDate date={offer.bumpedAt} />
        </div>
        <div className="h-8">
          <OfferMenu
            offerId={offer.id}
            postId={offer.post.id}
            offerStatus={offer.status as OfferStatus}
            userId={offer.post.user.id}
            archivedAt={offer.post.archivedAt}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:gap-4 mt-4 md:mt-6">
        {offer.post.reportCount > 0 && (
          <ReportsLink reportCount={offer.post.reportCount} />
        )}
        <OfferDetailName
          offerStatus={offer.status as OfferStatus}
          name0={offer.name0!}
          name1={offer.name1 || undefined}
        />
        <div className="grid grid-cols-1 gap-0 items-center">
          <OfferDetailPrice price={offer.price} />
          <OfferShippingCost
            shippingCost={offer.shippingCost}
            shippingType={offer.shippingType as ShippingType}
          />
        </div>
      </div>
      <div className="pt-8 text-sm md:text-base md:h-fit overflow-y-auto text-dark-100">
        {offer.content && (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {offer.content}
          </ReactMarkdown>
        )}
      </div>
    </>
  );
}
