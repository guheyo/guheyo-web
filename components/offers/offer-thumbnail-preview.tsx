'use client';

import Link from 'next/link';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { OfferPreviewResponse } from '@/generated/graphql';
import { BusinessFunction, OfferStatus } from '@/lib/offer/offer.types';
import { parseOfferDetailLink } from '@/lib/offer/parse-offer-detail-link';
import Thumbnail from '../base/thumbnail';
import PostPreviewTitle from '../posts/post-preview-title';
import OfferMenu from './offer-menu';
import OfferPreviewPrice from './offer-preview-price';
import PostAddons from '../posts/post-addons';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferThumbnailPreview({ offer }: Props) {
  return (
    <div className="relative overflow-hidden line-break bg-dark-400 py-3 pl-3 md:p-3 rounded-lg">
      <Link
        href={parseOfferDetailLink({
          businessFunction: offer.businessFunction as BusinessFunction,
          slug: offer.post.slug!,
        })}
        className="flex flex-row w-full md:flex-col text-start"
      >
        {offer.post.thumbnail && (
          <div className="flex relative w-[38.5%] md:w-fit">
            <Thumbnail url={offer.post.thumbnail} name={offer.post.title} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ChatBubbleOvalLeftIcon
                color="white"
                fill="white"
                className="opacity-0 group-hover:opacity-100 w-8 h-8 md:w-9 md:h-9"
              />
            </div>
          </div>
        )}
        <div className="w-[61.5%] md:w-full px-4 md:px-2">
          <div className="flex flex-row justify-between items-center pt-2">
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
          <div className="flex flex-row justify-between items-center pb-1">
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
