'use client';

import Link from 'next/link';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { OfferPreviewResponse } from '@/generated/graphql';
import { parseOfferDetailLink } from '@/lib/offer/parse-offer-detail-link';
import Thumbnail from '../base/thumbnail';
import OfferCredditBar from './offer-credit-bar';
import OfferPreviewMain from './offer-preview-main';
import OfferPreviewFooter from './offer-preview-footer';

interface Props {
  offer: OfferPreviewResponse;
  displayGroup: boolean;
}

export default function OfferListViewPreview({ offer, displayGroup }: Props) {
  return (
    <div className="relative overflow-hidden bg-dark-400 py-3 rounded-lg">
      <Link
        href={parseOfferDetailLink({
          slug: offer.post.slug!,
        })}
        className="flex flex-col gap-1"
      >
        <div className="px-4">
          <OfferCredditBar offer={offer} displayGroup={displayGroup} />
        </div>
        <div className="flex flex-row justify-between px-4">
          <div className="flex flex-col gap-1">
            <OfferPreviewMain offer={offer} />
            <OfferPreviewFooter offer={offer} />
          </div>
          {offer.post.thumbnail && (
            <div className="flex relative">
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
        </div>
      </Link>
    </div>
  );
}
