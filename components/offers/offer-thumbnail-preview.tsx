'use client';

import Link from 'next/link';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { OfferPreviewResponse } from '@/generated/graphql';
import { parseOfferDetailLink } from '@/lib/offer/parse-offer-detail-link';
import Thumbnail from '../base/thumbnail';
import OfferPreviewHeader from './offer-preview-header';
import OfferPreviewFooter from './offer-preview-footer';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferThumbnailPreview({ offer }: Props) {
  return (
    <div className="relative overflow-hidden line-break bg-dark-400 py-3 pl-3 md:p-3 rounded-lg">
      <Link
        href={parseOfferDetailLink({
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
        <div className="w-[61.5%] md:w-full px-4 md:px-2 pt-2 pb-1">
          <OfferPreviewHeader offer={offer} />
          <OfferPreviewFooter offer={offer} />
        </div>
      </Link>
    </div>
  );
}
