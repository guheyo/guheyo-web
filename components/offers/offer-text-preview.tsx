'use client';

import Link from 'next/link';
import { parseOfferDetailLink } from '@/lib/offer/parse-offer-detail-link';
import { OfferPreviewResponse } from '@/generated/graphql';
import OfferCredditBar from './offer-credit-bar';
import OfferPreviewMain from './offer-preview-main';

interface Props {
  offer: OfferPreviewResponse;
  displayGroup: boolean;
}

export default function OfferTextPreview({ offer, displayGroup }: Props) {
  return (
    <div className="relative overflow-hidden bg-dark-400 py-4 rounded-lg">
      <Link
        href={parseOfferDetailLink({
          slug: offer.post.slug!,
        })}
        className="flex flex-col gap-1"
      >
        <div className="px-4">
          <OfferCredditBar offer={offer} displayGroup={displayGroup} />
        </div>
        <div className="px-4">
          <OfferPreviewMain offer={offer} />
        </div>
      </Link>
    </div>
  );
}
