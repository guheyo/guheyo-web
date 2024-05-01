'use client';

import Link from 'next/link';
import { parseOfferDetailLink } from '@/lib/offer/parse-offer-detail-link';
import { OfferPreviewResponse } from '@/generated/graphql';
import OfferPreviewFooter from './offer-preview-footer';
import OfferPreviewHeader from './offer-preview-header';

interface Props {
  offer: OfferPreviewResponse;
}

export default function OfferTextPreview({ offer }: Props) {
  return (
    <div className="relative overflow-hidden bg-dark-400 px-4 md:px-5 rounded-lg">
      <Link
        href={parseOfferDetailLink({
          slug: offer.post.slug!,
        })}
        className="w-full text-start"
      >
        <div className="flex flex-col gap-1 pt-4 pb-4">
          <OfferPreviewHeader offer={offer} />
          <OfferPreviewFooter offer={offer} />
        </div>
      </Link>
    </div>
  );
}
