'use client';

import Link from 'next/link';
import { OfferStatus } from '@/lib/offer/offer.types';
import { parseOfferDetailLink } from '@/lib/offer/parse-offer-detail-link';
import { OfferPreviewResponse } from '@/generated/graphql';
import PostPreviewTitle from '../posts/post-preview-title';
import OfferMenu from './offer-menu';
import PostAddons from '../posts/post-addons';
import OfferPreviewPrice from './offer-preview-price';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferTextPreview({ offer }: Props) {
  return (
    <div className="relative overflow-hidden line-break bg-dark-400 px-4 md:px-5 rounded-lg">
      <Link
        href={parseOfferDetailLink({
          slug: offer.post.slug!,
        })}
        className="w-full text-start"
      >
        <div className="grid grid-cols-1 gap-0">
          <div className="flex flex-row justify-between items-center pt-4">
            <div className="w-fit">
              <PostPreviewTitle title={offer.post.title} />
            </div>
            <div className="h-8">
              <OfferMenu
                offerId={offer.id}
                postId={offer.post.id}
                offerStatus={offer.status as OfferStatus}
                userId={offer.post.user.id}
                privateOnly
                reportCount={offer.post.reportCount}
                reportCommentCount={offer.post.reportCommentCount}
                archivedAt={offer.post.archivedAt}
              />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center pb-4">
            <OfferPreviewPrice
              offerStatus={offer.status as OfferStatus}
              totalPrice={offer.totalPrice}
            />
            <div className="absolute bottom-4 right-4 md:right-5">
              <PostAddons
                createdAt={offer.bumpedAt}
                reportCount={offer.post.reportCount}
                reportCommentCount={offer.post.reportCommentCount}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
