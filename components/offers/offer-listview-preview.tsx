'use client';

import Link from 'next/link';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { OfferPreviewResponse } from '@/generated/graphql';
import { parseOfferDetailLink } from '@/lib/offer/parse-offer-detail-link';
import { BusinessFunction } from '@/lib/offer/offer.types';
import Thumbnail from '../base/thumbnail';
import OfferPreviewHeader from './offer-preview-header';
import OfferPreviewFooter from './offer-preview-footer';
import BusinessFunctionLabel from './business-function-label';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferListViewPreview({ offer }: Props) {
  return (
    <div className="relative overflow-hidden bg-dark-400 py-3 rounded-lg">
      <Link
        href={parseOfferDetailLink({
          slug: offer.post.slug!,
        })}
        className="flex flex-row w-full text-start"
      >
        <div className="w-[75%] md:w-[80%] px-4">
          <div className="flex flex-col gap-1">
            <BusinessFunctionLabel
              businessFunction={offer.businessFunction as BusinessFunction}
            />
            <OfferPreviewHeader offer={offer} />
            <OfferPreviewFooter offer={offer} />
          </div>
        </div>
        {offer.post.thumbnail && (
          <div className="flex relative w-[25%] md:w-[20%] mr-4 md:mr-0">
            <Thumbnail
              url={offer.post.thumbnail}
              name={offer.post.title}
              thumbnailSize="small"
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
      </Link>
    </div>
  );
}
