'use client';

import Link from 'next/link';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { OfferPreviewResponse } from '@/generated/graphql';
import { parseOfferDetailLink } from '@/lib/offer/parse-offer-detail-link';
import Thumbnail from '../base/thumbnail';
import OfferCredditBar from './offer-credit-bar';
import OfferPreviewMain from './offer-preview-main';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferThumbnailPreview({ offer }: Props) {
  return (
    <div className="relative overflow-hidden bg-dark-400 py-3 rounded-lg">
      <Link
        href={parseOfferDetailLink({
          slug: offer.post.slug!,
        })}
        className="flex flex-row w-full md:flex-col text-start"
      >
        {offer.post.thumbnail && (
          <div className="flex relative w-[32%] md:w-fit pl-3 md:px-3">
            <Thumbnail
              url={offer.post.thumbnail}
              name={offer.post.title}
              thumbnailSize="large"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <ChatBubbleOvalLeftIcon
                color="white"
                fill="white"
                className="opacity-0 group-hover:opacity-100 w-8 h-8 md:w-9 md:h-9"
              />
            </div>
          </div>
        )}
        <div className="w-[68%] md:w-full pt-2 flex flex-col gap-1">
          <div className="pl-4 md:pl-5">
            <OfferCredditBar offer={offer} />
          </div>
          <div className="px-4 md:px-5">
            <OfferPreviewMain offer={offer} />
          </div>
        </div>
      </Link>
    </div>
  );
}
